import { bytesToBase64 } from "./base64.js";
import { isPlainObject } from "./is-plain-object.js";

type FormEncoder = (
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
) => string | undefined;

export class EncodingError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "EncodingError";
	}
}

export function encodeLabel(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
): string | undefined {
	let out = "";

	const pairs: Array<[string, unknown]> = options?.explode ? explode(key, value) : [[key, value]];

	if (pairs.every(([_, v]) => v == undefined)) {
		return;
	}

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};
	const encodeValue = (v: unknown) => encodeString(serializeValue(v));

	for (const [pk, pv] of pairs) {
		let encValue: null | string | undefined = "";

		if (pv == undefined) {
			continue;
		} else if (Array.isArray(pv)) {
			encValue = mapDefined(pv, (v) => encodeValue(v))?.join(".");
		} else if (isPlainObject(pv)) {
			const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
				return `.${encodeString(k)}.${encodeValue(v)}`;
			});
			encValue = mapped?.join("").slice(1);
		} else {
			const k = options?.explode && isPlainObject(value) ? `${encodeString(pk)}=` : "";
			encValue = `${k}${encodeValue(pv)}`;
		}

		out += encValue == undefined ? "" : `.${encValue}`;
	}

	return out;
}

export function encodeMatrix(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
): string | undefined {
	let out = "";

	const pairs: Array<[string, unknown]> = options?.explode ? explode(key, value) : [[key, value]];

	if (pairs.every(([_, v]) => v == undefined)) {
		return;
	}

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};
	const encodeValue = (v: unknown) => encodeString(serializeValue(v));

	for (const [pk, pv] of pairs) {
		let temporary = "";
		let encValue: null | string | undefined = null;

		if (pv == undefined) {
			continue;
		} else if (Array.isArray(pv)) {
			encValue = mapDefined(pv, (v) => encodeValue(v))?.join(",");
		} else if (isPlainObject(pv)) {
			const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
				return `,${encodeString(k)},${encodeValue(v)}`;
			});
			encValue = mapped?.join("").slice(1);
		} else {
			encValue = encodeValue(pv);
		}

		if (encValue == undefined) {
			continue;
		}

		const keyPrefix = encodeString(pk);
		temporary = `${keyPrefix}=${encValue}`;

		// trim trailing '=' if value was empty
		if (temporary === `${keyPrefix}=`) {
			temporary = temporary.slice(0, -1);
		}

		// If we end up with the nothing then skip forward
		if (!temporary) {
			continue;
		}

		out += `;${temporary}`;
	}

	return out;
}

function formEncoder(separator: string): FormEncoder {
	return (key: string, value: unknown, options?: { charEncoding?: "none" | "percent"; explode?: boolean }) => {
		let out = "";

		const pairs: Array<[string, unknown]> = options?.explode ? explode(key, value) : [[key, value]];

		if (pairs.every(([_, v]) => v == undefined)) {
			return;
		}

		const encodeString = (v: string) => {
			return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
		};

		const encodeValue = (v: unknown) => encodeString(serializeValue(v));

		const encodedSeparator = encodeString(separator);

		for (const [pk, pv] of pairs) {
			let temporary = "";
			let encValue: null | string | undefined = null;

			if (pv == undefined) {
				continue;
			} else if (Array.isArray(pv)) {
				encValue = mapDefined(pv, (v) => encodeValue(v))?.join(encodedSeparator);
			} else if (isPlainObject(pv)) {
				encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
					return `${encodeString(k)}${encodedSeparator}${encodeValue(v)}`;
				})?.join(encodedSeparator);
			} else {
				encValue = encodeValue(pv);
			}

			if (encValue == undefined) {
				continue;
			}

			temporary = `${encodeString(pk)}=${encValue}`;

			// If we end up with the nothing then skip forward
			if (!temporary || temporary === "=") {
				continue;
			}

			out += `&${temporary}`;
		}

		return out.slice(1);
	};
}

export const encodeForm = formEncoder(",");
export const encodeSpaceDelimited = formEncoder(" ");
export const encodePipeDelimited = formEncoder("|");

export function encodeBodyForm(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
): string {
	let out = "";

	const pairs: Array<[string, unknown]> = options?.explode ? explode(key, value) : [[key, value]];

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};

	const encodeValue = (v: unknown) => encodeString(serializeValue(v));

	for (const [pk, pv] of pairs) {
		let temporary = "";
		let encValue = "";

		if (pv == undefined) {
			continue;
		} else if (Array.isArray(pv)) {
			encValue = JSON.stringify(pv, jsonReplacer);
		} else if (isPlainObject(pv)) {
			encValue = JSON.stringify(pv, jsonReplacer);
		} else {
			encValue = encodeValue(pv);
		}

		temporary = `${encodeString(pk)}=${encValue}`;

		// If we end up with the nothing then skip forward
		if (!temporary || temporary === "=") {
			continue;
		}

		out += `&${temporary}`;
	}

	return out.slice(1);
}

export function encodeDeepObject(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
	},
): string | undefined {
	if (value == undefined) {
		return;
	}

	if (!isPlainObject(value)) {
		throw new EncodingError(`Value of parameter '${key}' which uses deepObject encoding must be an object or null`);
	}

	return encodeDeepObjectObject(key, value, options);
}

export function encodeDeepObjectObject(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
	},
): string | undefined {
	if (value == undefined) {
		return;
	}

	let out = "";

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};

	if (!isPlainObject(value)) {
		throw new EncodingError(`Expected parameter '${key}' to be an object.`);
	}

	for (const [ck, cv] of Object.entries(value)) {
		if (cv == undefined) {
			continue;
		}

		const pk = `${key}[${ck}]`;

		if (isPlainObject(cv)) {
			const objectOut = encodeDeepObjectObject(pk, cv, options);

			out += objectOut == undefined ? "" : `&${objectOut}`;

			continue;
		}

		const pairs: Array<unknown> = Array.isArray(cv) ? cv : [cv];

		const encoded = mapDefined(pairs, (v) => {
			return `${encodeString(pk)}=${encodeString(serializeValue(v))}`;
		})?.join("&");

		out += encoded == undefined ? "" : `&${encoded}`;
	}

	return out.slice(1);
}

export function encodeJSON(
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
): string | undefined {
	if (value === undefined) {
		return;
	}

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};

	const encValue = encodeString(JSON.stringify(value, jsonReplacer));

	return options?.explode ? encValue : `${encodeString(key)}=${encValue}`;
}

export const encodeSimple = (
	key: string,
	value: unknown,
	options?: {
		charEncoding?: "none" | "percent";
		explode?: boolean;
	},
): string | undefined => {
	let out = "";

	const pairs: Array<[string, unknown]> = options?.explode ? explode(key, value) : [[key, value]];

	if (pairs.every(([_, v]) => v == undefined)) {
		return;
	}

	const encodeString = (v: string) => {
		return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
	};
	const encodeValue = (v: unknown) => encodeString(serializeValue(v));

	for (const [pk, pv] of pairs) {
		let temporary: null | string | undefined = "";

		if (pv == undefined) {
			continue;
		} else if (Array.isArray(pv)) {
			temporary = mapDefined(pv, (v) => encodeValue(v))?.join(",");
		} else if (isPlainObject(pv)) {
			const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
				return `,${encodeString(k)},${encodeValue(v)}`;
			});
			temporary = mapped?.join("").slice(1);
		} else {
			const k = options?.explode && isPlainObject(value) ? `${pk}=` : "";
			temporary = `${k}${encodeValue(pv)}`;
		}

		out += temporary ? `,${temporary}` : "";
	}

	return out.slice(1);
};

type BulkQueryEncoder = (values: Record<string, unknown>, options?: QueryEncoderOptions) => string;

type QueryEncoder = (key: string, value: unknown, options?: QueryEncoderOptions) => string | undefined;

type QueryEncoderOptions = {
	charEncoding?: "none" | "percent";
	explode?: boolean;
};

export function queryEncoder(f: QueryEncoder): BulkQueryEncoder {
	const bulkEncode = function (values: Record<string, unknown>, options?: QueryEncoderOptions): string {
		const options_: QueryEncoderOptions = {
			...options,
			charEncoding: options?.charEncoding ?? "percent",
			explode: options?.explode ?? true,
		};

		const encoded = Object.entries(values).map(([key, value]) => {
			return f(key, value, options_);
		});

		return queryJoin(...encoded);
	};

	return bulkEncode;
}

export function queryJoin(...arguments_: Array<string | undefined>): string {
	return arguments_.filter(Boolean).join("&");
}

function explode(key: string, value: unknown): Array<[string, unknown]> {
	if (Array.isArray(value)) {
		return value.map((v) => [key, v]);
	} else if (isPlainObject(value)) {
		const o = value ?? {};

		return Object.entries(o).map(([k, v]) => [k, v]);
	} else {
		return [[key, value]];
	}
}

function jsonReplacer(_: string, value: unknown): unknown {
	return value instanceof Uint8Array ? bytesToBase64(value) : value;
}

function mapDefined<T, R>(inp: Array<T>, mapper: (v: T) => R): Array<R> | null {
	const res = inp.reduce<Array<R>>((accumulator, v) => {
		if (v == undefined) {
			return accumulator;
		}

		const m = mapper(v);

		if (m == undefined) {
			return accumulator;
		}

		accumulator.push(m);

		return accumulator;
	}, []);

	return res.length > 0 ? res : null;
}

function mapDefinedEntries<K, V, R>(inp: Iterable<[K, V]>, mapper: (v: [K, V]) => R): Array<R> | null {
	const accumulator: Array<R> = [];

	for (const [k, v] of inp) {
		if (v == undefined) {
			continue;
		}

		const m = mapper([k, v]);

		if (m == undefined) {
			continue;
		}

		accumulator.push(m);
	}

	return accumulator.length > 0 ? accumulator : null;
}

function serializeValue(value: unknown): string {
	if (value == undefined) {
		return "";
	} else if (value instanceof Date) {
		return value.toISOString();
	} else if (value instanceof Uint8Array) {
		return bytesToBase64(value);
	} else if (typeof value === "object") {
		return JSON.stringify(value, jsonReplacer);
	}

	return `${value}`;
}

export const encodeJSONQuery = queryEncoder(encodeJSON);
export const encodeFormQuery = queryEncoder(encodeForm);
export const encodeSpaceDelimitedQuery = queryEncoder(encodeSpaceDelimited);
export const encodePipeDelimitedQuery = queryEncoder(encodePipeDelimited);
export const encodeDeepObjectQuery = queryEncoder(encodeDeepObject);

export function appendForm(fd: FormData, key: string, value: unknown, fileName?: string): void {
	if (value == undefined) {
		return;
	} else if (value instanceof Blob && fileName) {
		fd.append(key, value, fileName);
	} else if (value instanceof Blob) {
		fd.append(key, value);
	} else {
		fd.append(key, String(value));
	}
}
