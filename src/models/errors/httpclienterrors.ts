/**
 * Base class for all HTTP errors.
 */
export class HTTPClientError extends Error {
	/** The underlying cause of the error. */
	override readonly cause: unknown;

	override name = "HTTPClientError";

	constructor(message: string, options?: { cause?: unknown }) {
		let message_ = message;

		if (options?.cause) {
			message_ += `: ${options.cause}`;
		}

		super(message_, options);

		// In older runtimes, the cause field would not have been assigned through
		// the super() call.
		if (this.cause === undefined) {
			this.cause = options?.cause;
		}
	}
}

/**
 * An error that is raised when a HTTP client is unable to make a request to
 * a server.
 */
export class ConnectionError extends HTTPClientError {
	override readonly name = "ConnectionError";
}

/**
 * An error that is raised when any inputs used to create a request are invalid.
 */
export class InvalidRequestError extends HTTPClientError {
	override name = "InvalidRequestError";
}

/**
 * An error that is raised when a HTTP request was aborted by the client error.
 */
export class RequestAbortedError extends HTTPClientError {
	override readonly name = "RequestAbortedError";
}

/**
 * An error that is raised when a HTTP request timed out due to an AbortSignal
 * signal timeout.
 */
export class RequestTimeoutError extends HTTPClientError {
	override readonly name = "RequestTimeoutError";
}

/**
 * An error to capture unrecognised or unexpected errors when making HTTP calls.
 */
export class UnexpectedClientError extends HTTPClientError {
	override name = "UnexpectedClientError";
}
