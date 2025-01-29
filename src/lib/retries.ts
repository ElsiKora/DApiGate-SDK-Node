import { isConnectionError, isTimeoutError } from "./http.js";

export type BackoffStrategy = {
	exponent: number;
	initialInterval: number;
	maxElapsedTime: number;
	maxInterval: number;
};

const defaultBackoff: BackoffStrategy = {
	exponent: 1.5,
	initialInterval: 500,
	maxElapsedTime: 3_600_000,
	maxInterval: 60_000,
};

export type RetryConfig =
	| {
			backoff?: BackoffStrategy;
			retryConnectionErrors?: boolean;
			strategy: "backoff";
	  }
	| { strategy: "none" };

/**
 * PermanentError is an error that is not recoverable. Throwing this error will
 * cause a retry loop to terminate.
 */
export class PermanentError extends Error {
	/** The underlying cause of the error. */
	override readonly cause: unknown;

	constructor(message: string, options?: { cause?: unknown }) {
		let message_ = message;

		if (options?.cause) {
			message_ += `: ${options.cause}`;
		}

		super(message_, options);
		this.name = "PermanentError";

		// In older runtimes, the cause field would not have been assigned through
		// the super() call.
		if (this.cause === undefined) {
			this.cause = options?.cause;
		}

		Object.setPrototypeOf(this, PermanentError.prototype);
	}
}

/**
 * TemporaryError is an error is used to signal that an HTTP request can be
 * retried as part of a retry loop. If retry attempts are exhausted and this
 * error is thrown, the response will be returned to the caller.
 */
export class TemporaryError extends Error {
	response: Response;

	constructor(message: string, response: Response) {
		super(message);
		this.response = response;
		this.name = "TemporaryError";

		Object.setPrototypeOf(this, TemporaryError.prototype);
	}
}

export async function retry(
	fetchFunction: () => Promise<Response>,
	options: {
		config: RetryConfig;
		statusCodes: Array<string>;
	},
): Promise<Response> {
	switch (options.config.strategy) {
		case "backoff": {
			return retryBackoff(
				wrapFetcher(fetchFunction, {
					retryConnectionErrors: !!options.config.retryConnectionErrors,
					statusCodes: options.statusCodes,
				}),
				options.config.backoff ?? defaultBackoff,
			);
		}

		default: {
			return await fetchFunction();
		}
	}
}

function wrapFetcher(
	function_: () => Promise<Response>,
	options: {
		retryConnectionErrors: boolean;
		statusCodes: Array<string>;
	},
): () => Promise<Response> {
	return async () => {
		try {
			const res = await function_();

			if (isRetryableResponse(res, options.statusCodes)) {
				throw new TemporaryError("Response failed with retryable status code", res);
			}

			return res;
		} catch (error: unknown) {
			if (error instanceof TemporaryError) {
				throw error;
			}

			if (options.retryConnectionErrors && (isTimeoutError(error) || isConnectionError(error))) {
				throw error;
			}

			throw new PermanentError("Permanent error", { cause: error });
		}
	};
}

const codeRangeRE = new RegExp(String.raw`^\dxx$`, "i");

async function delay(delay: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, delay));
}

function isRetryableResponse(res: Response, statusCodes: Array<string>): boolean {
	const actual = `${res.status}`;

	return statusCodes.some((code) => {
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

async function retryBackoff(function_: () => Promise<Response>, strategy: BackoffStrategy): Promise<Response> {
	const { exponent, initialInterval, maxElapsedTime, maxInterval } = strategy;

	const start = Date.now();
	let x = 0;

	while (true) {
		try {
			const res = await function_();

			return res;
		} catch (error: unknown) {
			if (error instanceof PermanentError) {
				throw error.cause;
			}
			const elapsed = Date.now() - start;

			if (elapsed > maxElapsedTime) {
				if (error instanceof TemporaryError) {
					return error.response;
				}

				throw error;
			}

			let retryInterval = 0;

			if (error instanceof TemporaryError) {
				retryInterval = retryIntervalFromResponse(error.response);
			}

			if (retryInterval <= 0) {
				retryInterval = initialInterval * Math.pow(x, exponent) + Math.random() * 1000;
			}

			const d = Math.min(retryInterval, maxInterval);

			await delay(d);
			x++;
		}
	}
}

function retryIntervalFromResponse(res: Response): number {
	const retryValue = res.headers.get("retry-after") || "";

	if (!retryValue) {
		return 0;
	}

	const parsedNumber = Number(retryValue);

	if (Number.isInteger(parsedNumber)) {
		return parsedNumber * 1000;
	}

	const parsedDate = Date.parse(retryValue);

	if (Number.isInteger(parsedDate)) {
		const deltaMS = parsedDate - Date.now();

		return deltaMS > 0 ? Math.ceil(deltaMS) : 0;
	}

	return 0;
}
