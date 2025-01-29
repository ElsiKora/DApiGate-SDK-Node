import type { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import type { Result } from "../types/fp.js";

import type { StatusCodePredicate } from "./http.js";
import { matchResponse, matchStatusCode } from "./http.js";

import { APIError } from "../models/errors/apierror.js";
import { isPlainObject } from "./is-plain-object.js";
import { safeParse } from "./schemas.js";

export type Encoding = "bytes" | "fail" | "json" | "nil" | "sse" | "stream" | "text";

const DEFAULT_CONTENT_TYPES: Record<Encoding, string> = {
	bytes: "application/octet-stream",
	fail: "*",
	json: "application/json",
	nil: "*",
	sse: "text/event-stream",
	stream: "application/octet-stream",
	text: "text/plain",
};

export type ErrorMatcher<E> = {
	codes: StatusCodePredicate;
	enc: Encoding;
	err: true;
	schema: Schema<E>;
} & MatchOptions;

export type FailMatcher = {
	codes: StatusCodePredicate;
	enc: "fail";
};

export type MatchedError<Matchers> = Matchers extends Array<Matcher<any, infer E>> ? E : never;

export type MatchedValue<Matchers> = Matchers extends Array<Matcher<infer T, any>> ? T : never;

export type Matcher<T, E> = ErrorMatcher<E> | FailMatcher | ValueMatcher<T>;

export type MatchFunc<T, E> = (
	response: Response,
	options?: {
		extraFields?: Record<string, unknown>;
		resultKey?: string;
	},
) => Promise<[result: Result<T, E>, raw: unknown]>;

export type ValueMatcher<V> = {
	codes: StatusCodePredicate;
	enc: Encoding;
	schema: Schema<V>;
} & MatchOptions;
type MatchOptions = {
	ctype?: string;
	hdrs?: boolean;
	key?: string;
	sseSentinel?: string;
};

type Schema<T> = { parse(raw: unknown): T };

export function bytes<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "bytes", schema };
}

export function bytesErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "bytes", err: true, schema };
}

export function fail(codes: StatusCodePredicate): FailMatcher {
	return { codes, enc: "fail" };
}

export function json<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "json", schema };
}

export function jsonErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "json", err: true, schema };
}

export function match<T, E>(...matchers: Array<Matcher<T, E>>): MatchFunc<T, APIError | E | SDKValidationError> {
	return async function matchFunction(
		response: Response,
		options?: {
			extraFields?: Record<string, unknown>;
			resultKey?: string;
		},
	): Promise<[result: Result<T, APIError | E | SDKValidationError>, raw: unknown]> {
		let raw: unknown;
		let matcher: Matcher<T, E> | undefined;

		for (const match of matchers) {
			const { codes } = match;

			const ctpattern = "ctype" in match ? match.ctype : DEFAULT_CONTENT_TYPES[match.enc];

			if (ctpattern && matchResponse(response, codes, ctpattern)) {
				matcher = match;

				break;
			} else if (!ctpattern && matchStatusCode(response, codes)) {
				matcher = match;

				break;
			}
		}

		if (!matcher) {
			const responseBody = await response.text();

			return [
				{
					error: new APIError("Unexpected API response status or content-type", response, responseBody),
					ok: false,
				},
				responseBody,
			];
		}

		const encoding = matcher.enc;

		switch (encoding) {
			case "bytes": {
				raw = new Uint8Array(await response.arrayBuffer());

				break;
			}

			case "fail": {
				raw = await response.text();

				break;
			}

			case "json": {
				raw = await response.json();

				break;
			}

			case "nil": {
				raw = await discardResponseBody(response);

				break;
			}

			case "sse": {
				raw = response.body;

				break;
			}

			case "stream": {
				raw = response.body;

				break;
			}

			case "text": {
				raw = await response.text();

				break;
			}

			default: {
				encoding satisfies never;

				throw new Error(`Unsupported response type: ${encoding}`);
			}
		}

		if (matcher.enc === "fail") {
			return [
				{
					error: new APIError("API error occurred", response, typeof raw === "string" ? raw : ""),
					ok: false,
				},
				raw,
			];
		}

		const resultKey = matcher.key || options?.resultKey;
		let data: unknown;

		if ("err" in matcher) {
			data = {
				...options?.extraFields,
				...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
				...(isPlainObject(raw) ? raw : null),
			};
		} else if (resultKey) {
			data = {
				...options?.extraFields,
				...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
				[resultKey]: raw,
			};
		} else if (matcher.hdrs) {
			data = {
				...options?.extraFields,
				...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
				...(isPlainObject(raw) ? raw : null),
			};
		} else {
			data = raw;
		}

		if ("err" in matcher) {
			const result = safeParse(data, (v: unknown) => matcher.schema.parse(v), "Response validation failed");

			return [result.ok ? { error: result.value, ok: false } : result, raw];
		} else {
			return [safeParse(data, (v: unknown) => matcher.schema.parse(v), "Response validation failed"), raw];
		}
	};
}

export function nil<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "nil", schema };
}

export function nilErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "nil", err: true, schema };
}

export function sse<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "sse", schema };
}

export function sseErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "sse", err: true, schema };
}

export function stream<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "stream", schema };
}

export function streamErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "stream", err: true, schema };
}

export function text<T>(codes: StatusCodePredicate, schema: Schema<T>, options?: MatchOptions): ValueMatcher<T> {
	return { ...options, codes, enc: "text", schema };
}

export function textErr<E>(codes: StatusCodePredicate, schema: Schema<E>, options?: MatchOptions): ErrorMatcher<E> {
	return { ...options, codes, enc: "text", err: true, schema };
}

const headerValueRE = /, */;

/**
 * Discards the response body to free up resources.
 *
 * To learn why this is need, see the undici docs:
 * https://undici.nodejs.org/#/?id=garbage-collection
 */
export async function discardResponseBody(res: Response) {
	const reader = res.body?.getReader();

	if (reader == undefined) {
		return;
	}

	try {
		let done = false;

		while (!done) {
			const res = await reader.read();
			done = res.done;
		}
	} finally {
		reader.releaseLock();
	}
}

/**
 * Iterates over a Headers object and returns an object with all the header
 * entries. Values are represented as an array to account for repeated headers.
 */
export function unpackHeaders(headers: Headers): Record<string, Array<string>> {
	const out: Record<string, Array<string>> = {};

	for (const [k, v] of headers.entries()) {
		out[k] = v.split(headerValueRE);
	}

	return out;
}
