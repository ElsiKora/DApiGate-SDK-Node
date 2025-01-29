export type ExactPartial<T> = {
	[P in keyof T]?: T[P] | undefined;
};

export type Remap<Inp, Mapping extends { [k in keyof Inp]?: null | string }> = {
	[k in keyof Inp as Mapping[k] extends string /* if we have a string mapping for this key then use it */ ? Mapping[k] : Mapping[k] extends null /* if the mapping is to `null` then drop the key */ ? never : k /* otherwise keep the key as-is */]: Inp[k];
};

class InvariantError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "InvariantError";
	}
}

export function abortSignalAny(signals: Array<AbortSignal>): AbortSignal {
	const controller = new AbortController();
	const result = controller.signal;

	if (signals.length === 0) {
		return controller.signal;
	}

	if (signals.length === 1) {
		return signals[0] || controller.signal;
	}

	for (const signal of signals) {
		if (signal.aborted) {
			return signal;
		}
	}

	function abort(this: AbortSignal) {
		controller.abort(this.reason);
		clean();
	}

	const signalReferences: Array<WeakRef<AbortSignal>> = [];

	function clean() {
		for (const signalReference of signalReferences) {
			const signal = signalReference.deref();

			if (signal) {
				signal.removeEventListener("abort", abort);
			}
		}
	}

	for (const signal of signals) {
		signalReferences.push(new WeakRef(signal));
		signal.addEventListener("abort", abort);
	}

	return result;
}

export function combineSignals(...signals: Array<AbortSignal | null | undefined>): AbortSignal | null {
	const filtered: Array<AbortSignal> = [];

	for (const signal of signals) {
		if (signal) {
			filtered.push(signal);
		}
	}

	switch (filtered.length) {
		case 0:

		case 1: {
			return filtered[0] || null;
		}

		default: {
			if ("any" in AbortSignal && typeof AbortSignal.any === "function") {
				return AbortSignal.any(filtered);
			}

			return abortSignalAny(filtered);
		}
	}
}

export function compactMap<T>(values: Record<string, T | undefined>): Record<string, T> {
	const out: Record<string, T> = {};

	for (const [k, v] of Object.entries(values)) {
		if (v !== undefined) {
			out[k] = v;
		}
	}

	return out;
}

export function invariant(condition: unknown, message: string): asserts condition {
	if (!condition) {
		throw new InvariantError(message);
	}
}

/**
 * Converts or omits an object's keys according to a mapping.
 *
 * @param inp An object whose keys will be remapped
 * @param mappings A mapping of original keys to new keys. If a key is not present in the mapping, it will be left as is. If a key is mapped to `null`, it will be removed in the resulting object.
 * @returns A new object with keys remapped or omitted according to the mappings
 */
export function remap<Inp extends Record<string, unknown>, const Mapping extends { [k in keyof Inp]?: null | string }>(inp: Inp, mappings: Mapping): Remap<Inp, Mapping> {
	let out: any = {};

	if (Object.keys(mappings).length === 0) {
		out = inp;

		return out;
	}

	for (const [k, v] of Object.entries(inp)) {
		const index = mappings[k];

		if (index === null) {
			continue;
		}
		out[index ?? k] = v;
	}

	return out;
}
