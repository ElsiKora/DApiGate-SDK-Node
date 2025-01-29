import * as z from "zod";

import { dlv } from "./dlv.js";

export interface Environment {
	DAPIGATE_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Environment, z.ZodTypeDef, unknown> = z.object({
	DAPIGATE_DEBUG: z.coerce.boolean().optional(),
});

let environmentMemo: Environment | undefined;

/**
 * Reads and validates environment variables.
 */
export function env(): Environment {
	if (environmentMemo) {
		return environmentMemo;
	}

	environmentMemo = envSchema.parse(dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {});

	return environmentMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
	environmentMemo = undefined;
}
