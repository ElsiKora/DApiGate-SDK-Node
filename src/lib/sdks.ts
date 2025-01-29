import type { HookContext } from "../hooks/types.js";
import type { Result } from "../types/fp.js";
import { ERR, OK } from "../types/fp.js";

import type { SDKOptions } from "./config.js";
import { SDK_METADATA, serverURLFromOptions } from "./config.js";
import type { Logger } from "./logger.js";
import type { RetryConfig } from "./retries.js";
import { retry } from "./retries.js";
import type { SecurityState } from "./security.js";

import { SDKHooks } from "../hooks/hooks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";

import { stringToBase64 } from "./base64.js";
import { encodeForm } from "./encodings.js";
import { env as environment } from "./env.js";
import { HTTPClient, isAbortError, isConnectionError, isTimeoutError, matchContentType, matchStatusCode } from "./http.js";

export type RequestOptions = {
	/**
	 * Sets various request options on the `fetch` call made by an SDK method.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options|Request}
	 */
	fetchOptions?: Omit<RequestInit, "body" | "method">;
	/**
	 * Set or override a retry policy on HTTP calls.
	 */
	retries?: RetryConfig;
	/**
	 * Specifies the status codes which should be retried using the given retry policy.
	 */
	retryCodes?: Array<string>;
	/**
	 * Overrides the base server URL that will be used by an operation.
	 */
	serverURL?: string | URL;
	/**
	 * Sets a timeout, in milliseconds, on HTTP requests made by an SDK method. If
	 * `fetchOptions.signal` is set then it will take precedence over this option.
	 */
	timeoutMs?: number;
};

type RequestConfig = {
	baseURL?: string | undefined | URL;
	body?: RequestInit["body"];
	headers?: HeadersInit;
	method: string;
	path: string;
	query?: string;
	security?: null | SecurityState;
	timeoutMs?: number;
	uaHeader?: string;
};

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;

const webWorkerLike = typeof gt === "object" && gt != undefined && "importScripts" in gt && typeof gt.importScripts === "function";

const isBrowserLike = webWorkerLike || (typeof navigator !== "undefined" && "serviceWorker" in navigator) || (typeof globalThis === "object" && globalThis.document !== undefined);

export class ClientSDK {
	public readonly _options: { hooks?: SDKHooks } & SDKOptions;

	protected readonly _baseURL: null | URL;

	readonly #hooks: SDKHooks;

	readonly #httpClient: HTTPClient;

	readonly #logger?: Logger | undefined;

	constructor(options: SDKOptions = {}) {
		const opt = options as unknown;

		this.#hooks = typeof opt === "object" && opt != undefined && "hooks" in opt && opt.hooks instanceof SDKHooks ? opt.hooks : new SDKHooks();
		this._options = { ...options, hooks: this.#hooks };

		const url = serverURLFromOptions(options);

		if (url) {
			url.pathname = url.pathname.replace(/\/+$/, "") + "/";
		}

		const { baseURL, client } = this.#hooks.sdkInit({
			baseURL: url,
			client: options.httpClient || new HTTPClient(),
		});
		this._baseURL = baseURL;
		this.#httpClient = client;
		this.#logger = options.debugLogger;

		if (!this.#logger && environment().DAPIGATE_DEBUG) {
			this.#logger = console;
		}
	}

	public _createRequest(context: HookContext, config: RequestConfig, options?: RequestOptions): Result<Request, InvalidRequestError | UnexpectedClientError> {
		const { headers: opHeaders, method, path, query, security } = config;

		const base = config.baseURL ?? this._baseURL;

		if (!base) {
			return ERR(new InvalidRequestError("No base URL provided for operation"));
		}
		const requestURL = new URL(base);
		const inputURL = new URL(path, requestURL);

		if (path) {
			requestURL.pathname += requestURL.pathname.endsWith("/") ? "" : "/";
			requestURL.pathname += inputURL.pathname.replace(/^\/+/, "");
		}

		let finalQuery = query || "";

		const secQuery: Array<string> = [];

		for (const [k, v] of Object.entries(security?.queryParams || {})) {
			const q = encodeForm(k, v, { charEncoding: "percent" });

			if (q !== undefined) {
				secQuery.push(q);
			}
		}

		if (secQuery.length > 0) {
			finalQuery += `&${secQuery.join("&")}`;
		}

		if (finalQuery) {
			const q = finalQuery.startsWith("&") ? finalQuery.slice(1) : finalQuery;
			requestURL.search = `?${q}`;
		}

		const headers = new Headers(opHeaders);

		const username = security?.basic.username;
		const password = security?.basic.password;

		if (username != undefined || password != undefined) {
			const encoded = stringToBase64([username || "", password || ""].join(":"));
			headers.set("Authorization", `Basic ${encoded}`);
		}

		const securityHeaders = new Headers(security?.headers || {});

		for (const [k, v] of securityHeaders) {
			headers.set(k, v);
		}

		let cookie = headers.get("cookie") || "";

		for (const [k, v] of Object.entries(security?.cookies || {})) {
			cookie += `; ${k}=${v}`;
		}
		cookie = cookie.startsWith("; ") ? cookie.slice(2) : cookie;
		headers.set("cookie", cookie);

		const userHeaders = new Headers(options?.fetchOptions?.headers);

		for (const [k, v] of userHeaders) {
			headers.set(k, v);
		}

		// Only set user agent header in non-browser-like environments since CORS
		// policy disallows setting it in browsers e.g. Chrome throws an error.
		if (!isBrowserLike) {
			headers.set(config.uaHeader ?? "user-agent", SDK_METADATA.userAgent);
		}

		let fetchOptions = options?.fetchOptions;

		if (!fetchOptions?.signal && config.timeoutMs && config.timeoutMs > 0) {
			const timeoutSignal = AbortSignal.timeout(config.timeoutMs);

			if (fetchOptions) {
				fetchOptions.signal = timeoutSignal;
			} else {
				fetchOptions = { signal: timeoutSignal };
			}
		}

		if (config.body instanceof ReadableStream) {
			if (fetchOptions) {
				// @ts-expect-error see https://github.com/node-fetch/node-fetch/issues/1769
				fetchOptions.duplex = "half";
			} else {
				fetchOptions = {
					// @ts-expect-error see https://github.com/node-fetch/node-fetch/issues/1769
					duplex: "half",
				};
			}
		}

		let input;

		try {
			input = this.#hooks.beforeCreateRequest(context, {
				options: {
					...fetchOptions,
					body: config.body ?? null,
					headers,
					method,
				},
				url: requestURL,
			});
		} catch (error: unknown) {
			return ERR(
				new UnexpectedClientError("Create request hook failed to execute", {
					cause: error,
				}),
			);
		}

		return OK(new Request(input.url, input.options));
	}

	public async _do(
		request: Request,
		options: {
			context: HookContext;
			errorCodes: Array<number | string> | number | string;
			retryCodes: Array<string>;
			retryConfig: RetryConfig;
		},
	): Promise<Result<Response, ConnectionError | RequestAbortedError | RequestTimeoutError | UnexpectedClientError>> {
		const { context, errorCodes } = options;

		return retry(
			async () => {
				const request_ = await this.#hooks.beforeRequest(context, request.clone());
				await logRequest(this.#logger, request_).catch((error) => this.#logger?.log("Failed to log request:", error));

				let response = await this.#httpClient.request(request_);

				try {
					if (matchStatusCode(response, errorCodes)) {
						const result = await this.#hooks.afterError(context, response, null);

						if (result.error) {
							throw result.error;
						}
						response = result.response || response;
					} else {
						response = await this.#hooks.afterSuccess(context, response);
					}
				} finally {
					await logResponse(this.#logger, response, request_).catch((error) => this.#logger?.log("Failed to log response:", error));
				}

				return response;
			},
			{ config: options.retryConfig, statusCodes: options.retryCodes },
		).then(
			(r) => OK(r),
			(error) => {
				switch (true) {
					case isAbortError(error): {
						return ERR(
							new RequestAbortedError("Request aborted by client", {
								cause: error,
							}),
						);
					}

					case isTimeoutError(error): {
						return ERR(new RequestTimeoutError("Request timed out", { cause: error }));
					}

					case isConnectionError(error): {
						return ERR(new ConnectionError("Unable to make request", { cause: error }));
					}

					default: {
						return ERR(
							new UnexpectedClientError("Unexpected HTTP client error", {
								cause: error,
							}),
						);
					}
				}
			},
		);
	}
}

const jsonLikeContentTypeRE = /^application\/(?:.{0,100}\+)?json/;

async function logRequest(logger: Logger | undefined, request: Request) {
	if (!logger) {
		return;
	}

	const contentType = request.headers.get("content-type");
	const ct = contentType?.split(";")[0] || "";

	logger.group(`> Request: ${request.method} ${request.url}`);

	logger.group("Headers:");

	for (const [k, v] of request.headers.entries()) {
		logger.log(`${k}: ${v}`);
	}
	logger.groupEnd();

	logger.group("Body:");

	switch (true) {
		case jsonLikeContentTypeRE.test(ct): {
			logger.log(await request.clone().json());

			break;
		}

		case ct.startsWith("text/"): {
			logger.log(await request.clone().text());

			break;
		}

		case ct === "multipart/form-data": {
			const body = await request.clone().formData();

			for (const [k, v] of body) {
				const vlabel = v instanceof Blob ? "<Blob>" : v;
				logger.log(`${k}: ${vlabel}`);
			}

			break;
		}

		default: {
			logger.log(`<${contentType}>`);

			break;
		}
	}
	logger.groupEnd();

	logger.groupEnd();
}

async function logResponse(logger: Logger | undefined, res: Response, request: Request) {
	if (!logger) {
		return;
	}

	const contentType = res.headers.get("content-type");
	const ct = contentType?.split(";")[0] || "";

	logger.group(`< Response: ${request.method} ${request.url}`);
	logger.log("Status Code:", res.status, res.statusText);

	logger.group("Headers:");

	for (const [k, v] of res.headers.entries()) {
		logger.log(`${k}: ${v}`);
	}
	logger.groupEnd();

	logger.group("Body:");

	switch (true) {
		case matchContentType(res, "application/json") || jsonLikeContentTypeRE.test(ct): {
			logger.log(await res.clone().json());

			break;
		}

		case matchContentType(res, "text/event-stream"): {
			logger.log(`<${contentType}>`);

			break;
		}

		case matchContentType(res, "text/*"): {
			logger.log(await res.clone().text());

			break;
		}

		case matchContentType(res, "multipart/form-data"): {
			const body = await res.clone().formData();

			for (const [k, v] of body) {
				const vlabel = v instanceof Blob ? "<Blob>" : v;
				logger.log(`${k}: ${vlabel}`);
			}

			break;
		}

		default: {
			logger.log(`<${contentType}>`);

			break;
		}
	}
	logger.groupEnd();

	logger.groupEnd();
}
