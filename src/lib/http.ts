export type Awaitable<T> = Promise<T> | T;

export type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

const DEFAULT_FETCHER: Fetcher = (input, init) => {
	// If input is a Request and init is undefined, Bun will discard the method,
	// headers, body and other options that were set on the request object.
	// Node.js and browers would ignore an undefined init value. This check is
	// therefore needed for interop with Bun.
	return init == undefined ? fetch(input) : fetch(input, init);
};

export type BeforeRequestHook = (request: Request) => Awaitable<Request | void>;

export interface HTTPClientOptions {
	fetcher?: Fetcher;
}

export type RequestErrorHook = (error: unknown, request: Request) => Awaitable<void>;
export type RequestInput = {
	/**
	 * Options used to create a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request).
	 */
	options?: RequestInit | undefined;
	/**
	 * The URL the request will use.
	 */
	url: URL;
};
export type ResponseHook = (res: Response, request: Request) => Awaitable<void>;

export type StatusCodePredicate = Array<number | string> | number | string;

export class HTTPClient {
	private readonly fetcher: Fetcher;

	private requestErrorHooks: Array<RequestErrorHook> = [];

	private requestHooks: Array<BeforeRequestHook> = [];

	private responseHooks: Array<ResponseHook> = [];

	constructor(private readonly options: HTTPClientOptions = {}) {
		this.fetcher = options.fetcher || DEFAULT_FETCHER;
	}

	/**
	 * Registers a hook that is called before a request is made. The hook function
	 * can mutate the request or return a new request. This may be useful to add
	 * additional information to request such as request IDs and tracing headers.
	 */
	addHook(hook: "beforeRequest", function_: BeforeRequestHook): this;

	/**
	 * Registers a hook that is called when a request cannot be made due to a
	 * network error.
	 */
	addHook(hook: "requestError", function_: RequestErrorHook): this;
	/**
	 * Registers a hook that is called when a response has been received from the
	 * server.
	 */
	addHook(hook: "response", function_: ResponseHook): this;
	addHook(...arguments_: [hook: "beforeRequest", fn: BeforeRequestHook] | [hook: "requestError", fn: RequestErrorHook] | [hook: "response", fn: ResponseHook]) {
		switch (arguments_[0]) {
			case "beforeRequest": {
				this.requestHooks.push(arguments_[1]);

				break;
			}

			case "requestError": {
				this.requestErrorHooks.push(arguments_[1]);

				break;
			}

			case "response": {
				this.responseHooks.push(arguments_[1]);

				break;
			}

			default: {
				throw new Error(`Invalid hook type: ${arguments_[0]}`);
			}
		}

		return this;
	}

	clone(): HTTPClient {
		const child = new HTTPClient(this.options);
		child.requestHooks = [...this.requestHooks];
		child.requestErrorHooks = [...this.requestErrorHooks];
		child.responseHooks = [...this.responseHooks];

		return child;
	}

	/** Removes a hook that was previously registered with `addHook`. */
	removeHook(hook: "beforeRequest", function_: BeforeRequestHook): this;
	/** Removes a hook that was previously registered with `addHook`. */
	removeHook(hook: "requestError", function_: RequestErrorHook): this;
	/** Removes a hook that was previously registered with `addHook`. */
	removeHook(hook: "response", function_: ResponseHook): this;
	removeHook(...arguments_: [hook: "beforeRequest", fn: BeforeRequestHook] | [hook: "requestError", fn: RequestErrorHook] | [hook: "response", fn: ResponseHook]): this {
		let target: Array<unknown>;

		switch (arguments_[0]) {
			case "beforeRequest": {
				target = this.requestHooks;

				break;
			}

			case "requestError": {
				target = this.requestErrorHooks;

				break;
			}

			case "response": {
				target = this.responseHooks;

				break;
			}

			default: {
				throw new Error(`Invalid hook type: ${arguments_[0]}`);
			}
		}

		const index = target.indexOf(arguments_[1]);

		if (index !== -1) {
			target.splice(index, 1);
		}

		return this;
	}

	async request(request: Request): Promise<Response> {
		let request_ = request;

		for (const hook of this.requestHooks) {
			const nextRequest = await hook(request_);

			if (nextRequest) {
				request_ = nextRequest;
			}
		}

		try {
			const res = await this.fetcher(request_);

			for (const hook of this.responseHooks) {
				await hook(res, request_);
			}

			return res;
		} catch (error) {
			for (const hook of this.requestErrorHooks) {
				await hook(error, request_);
			}

			throw error;
		}
	}
}

// A semicolon surrounded by optional whitespace characters is used to separate
// segments in a media type string.
const mediaParameterSeparator = /\s*;\s*/g;

export function matchContentType(response: Response, pattern: string): boolean {
	// `*` is a special case which means anything is acceptable.
	if (pattern === "*") {
		return true;
	}

	let contentType = response.headers.get("content-type")?.trim() || "application/octet-stream";
	contentType = contentType.toLowerCase();

	const wantParts = pattern.toLowerCase().trim().split(mediaParameterSeparator);
	const [wantType = "", ...wantParameters] = wantParts;

	if (wantType.split("/").length !== 2) {
		return false;
	}

	const gotParts = contentType.split(mediaParameterSeparator);
	const [gotType = "", ...gotParameters] = gotParts;

	const [type = "", subtype = ""] = gotType.split("/");

	if (!type || !subtype) {
		return false;
	}

	if (wantType !== "*/*" && gotType !== wantType && `${type}/*` !== wantType && `*/${subtype}` !== wantType) {
		return false;
	}

	if (gotParameters.length < wantParameters.length) {
		return false;
	}

	const parameters = new Set(gotParameters);

	for (const wantParameter of wantParameters) {
		if (!parameters.has(wantParameter)) {
			return false;
		}
	}

	return true;
}

const codeRangeRE = new RegExp(String.raw`^\dxx$`, "i");

/**
 * Uses various heurisitics to determine if an error is a abort error.
 */
export function isAbortError(error: unknown): boolean {
	if (typeof error !== "object" || error == undefined) {
		return false;
	}

	// Fetch in browser, Node.js, Bun, Deno
	const isNative = "name" in error && error.name === "AbortError";
	const isLegacyNative = "code" in error && error.code === 20;

	// Node.js HTTP client and Axios
	const isGenericError = "code" in error && typeof error.code === "string" && error.code.toLowerCase() === "econnaborted";

	return isNative || isLegacyNative || isGenericError;
}

/**
 * Uses various heurisitics to determine if an error is a connection error.
 */
export function isConnectionError(error: unknown): boolean {
	if (typeof error !== "object" || error == undefined) {
		return false;
	}

	// Covers fetch in Deno as well
	const isBrowserError = error instanceof TypeError && error.message.toLowerCase().startsWith("failed to fetch");

	const isNodeError = error instanceof TypeError && error.message.toLowerCase().startsWith("fetch failed");

	const isBunError = "name" in error && error.name === "ConnectionError";

	const isGenericError = "code" in error && typeof error.code === "string" && error.code.toLowerCase() === "econnreset";

	return isBrowserError || isNodeError || isGenericError || isBunError;
}

/**
 * Uses various heurisitics to determine if an error is a timeout error.
 */
export function isTimeoutError(error: unknown): boolean {
	if (typeof error !== "object" || error == undefined) {
		return false;
	}

	// Fetch in browser, Node.js, Bun, Deno
	const isNative = "name" in error && error.name === "TimeoutError";
	const isLegacyNative = "code" in error && error.code === 23;

	// Node.js HTTP client and Axios
	const isGenericError = "code" in error && typeof error.code === "string" && error.code.toLowerCase() === "econnaborted";

	return isNative || isLegacyNative || isGenericError;
}

export function matchResponse(response: Response, code: StatusCodePredicate, contentTypePattern: string): boolean {
	return matchStatusCode(response, code) && matchContentType(response, contentTypePattern);
}

export function matchStatusCode(response: Response, codes: StatusCodePredicate): boolean {
	const actual = `${response.status}`;
	const expectedCodes = Array.isArray(codes) ? codes : [codes];

	if (expectedCodes.length === 0) {
		return false;
	}

	return expectedCodes.some((ec) => {
		const code = `${ec}`;

		if (code === "default") {
			return true;
		}

		if (!codeRangeRE.test(code)) {
			return code === actual;
		}

		const expectFamily = code.charAt(0);

		if (!expectFamily) {
			throw new Error("Invalid status code range");
		}

		const actualFamily = actual.charAt(0);

		if (!actualFamily) {
			throw new Error(`Invalid response status code: ${actual}`);
		}

		return actualFamily === expectFamily;
	});
}
