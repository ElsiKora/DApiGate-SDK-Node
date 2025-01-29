export function isReadableStream<T = Uint8Array>(value: unknown): value is ReadableStream<T> {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	// Check for the presence of methods specific to ReadableStream
	const stream = value as ReadableStream<Uint8Array>;

	// ReadableStream has methods like getReader, cancel, and tee
	return typeof stream.getReader === "function" && typeof stream.cancel === "function" && typeof stream.tee === "function";
}
