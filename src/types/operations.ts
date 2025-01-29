import type { Result } from "./fp.js";

export type PageIterator<V, PageState = unknown> = {
	[Symbol.asyncIterator]: () => AsyncIterableIterator<V>;
	"~next"?: PageState | undefined;
	next: Paginator<V>;
} & V;

export type Paginator<V> = () => null | Promise<{ next: Paginator<V> } & V>;

export function createPageIterator<V>(
	page: { next: Paginator<V> } & V,
	halt: (v: V) => boolean,
): {
	[Symbol.asyncIterator]: () => AsyncIterableIterator<V>;
} {
	return {
		[Symbol.asyncIterator]: async function* paginator() {
			yield page;

			if (halt(page)) {
				return;
			}

			let p: null | typeof page = page;

			for (p = await p.next(); p != undefined; p = await p.next()) {
				yield p;

				if (halt(p)) {
					return;
				}
			}
		},
	};
}

/**
 * This utility create a special iterator that yields a single value and
 * terminates. It is useful in paginated SDK functions that have early return
 * paths when things go wrong.
 */
export function haltIterator<V extends object>(v: V): PageIterator<V, undefined> {
	return {
		...v,
		next: () => null,
		[Symbol.asyncIterator]: async function* paginator() {
			yield v;
		},
	};
}

/**
 * Converts an async iterator of `Result<V, E>` into an async iterator of `V`.
 * When error results occur, the underlying error value is thrown.
 */
export async function unwrapResultIterator<V, PageState>(iteratorPromise: Promise<PageIterator<Result<V>, PageState>>): Promise<PageIterator<V, PageState>> {
	const resultIter = await iteratorPromise;

	if (!resultIter.ok) {
		throw resultIter.error;
	}

	return {
		...resultIter.value,
		"~next": resultIter["~next"],
		next: unwrapPaginator(resultIter.next),
		[Symbol.asyncIterator]: async function* paginator() {
			for await (const page of resultIter) {
				if (!page.ok) {
					throw page.error;
				}
				yield page.value;
			}
		},
	};
}

function unwrapPaginator<V>(paginator: Paginator<Result<V>>): Paginator<V> {
	return () => {
		const nextResult = paginator();

		if (nextResult == undefined) {
			return null;
		}

		return nextResult.then((res) => {
			if (!res.ok) {
				throw res.error;
			}

			const out = {
				...res.value,
				next: unwrapPaginator(res.next),
			};

			return out;
		});
	};
}

export const URL_OVERRIDE = Symbol("URL_OVERRIDE");
