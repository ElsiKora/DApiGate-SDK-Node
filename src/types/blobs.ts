import * as z from "zod";

export const blobLikeSchema: z.ZodType<Blob, z.ZodTypeDef, Blob> = z.custom<Blob>(isBlobLike, {
	fatal: true,
	message: "expected a Blob, File or Blob-like object",
});

export function isBlobLike(value: unknown): value is Blob {
	if (value instanceof Blob) {
		return true;
	}

	if (typeof value !== "object" || value == undefined || !(Symbol.toStringTag in value)) {
		return false;
	}

	const name = value[Symbol.toStringTag];

	if (typeof name !== "string") {
		return false;
	}

	if (name !== "Blob" && name !== "File") {
		return false;
	}

	return "stream" in value && typeof value.stream === "function";
}
