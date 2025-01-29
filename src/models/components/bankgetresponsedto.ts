import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankGetResponseDTO = {
	/**
	 * Bank creation date
	 */
	createdAt?: Date | undefined;
	/**
	 * Bank base64 encoded dark theme icon
	 */
	iconDark?: string | undefined;
	/**
	 * Bank base64 encoded light theme icon
	 */
	iconLight?: string | undefined;
	/**
	 * Bank identifier
	 */
	id?: string | undefined;
	/**
	 * Bank base64 encoded dark theme logotype
	 */
	logoDark?: string | undefined;
	/**
	 * Bank base64 encoded light theme logotype
	 */
	logoLight?: string | undefined;
	/**
	 * Bank name
	 */
	name?: string | undefined;
	/**
	 * Bank last update date
	 */
	updatedAt?: Date | undefined;
};

/** @internal */
export const BankGetResponseDTO$inboundSchema: z.ZodType<BankGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	createdAt: z
		.string()
		.datetime({ offset: true })
		.transform((v) => new Date(v))
		.optional(),
	iconDark: z.string().optional(),
	iconLight: z.string().optional(),
	id: z.string().optional(),
	logoDark: z.string().optional(),
	logoLight: z.string().optional(),
	name: z.string().optional(),
	updatedAt: z
		.string()
		.datetime({ offset: true })
		.transform((v) => new Date(v))
		.optional(),
});

/** @internal */
export type BankGetResponseDTO$Outbound = {
	createdAt?: string | undefined;
	iconDark?: string | undefined;
	iconLight?: string | undefined;
	id?: string | undefined;
	logoDark?: string | undefined;
	logoLight?: string | undefined;
	name?: string | undefined;
	updatedAt?: string | undefined;
};

/** @internal */
export const BankGetResponseDTO$outboundSchema: z.ZodType<BankGetResponseDTO$Outbound, z.ZodTypeDef, BankGetResponseDTO> = z.object({
	createdAt: z
		.date()
		.transform((v) => v.toISOString())
		.optional(),
	iconDark: z.string().optional(),
	iconLight: z.string().optional(),
	id: z.string().optional(),
	logoDark: z.string().optional(),
	logoLight: z.string().optional(),
	name: z.string().optional(),
	updatedAt: z
		.date()
		.transform((v) => v.toISOString())
		.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankGetResponseDTO$ {
	/** @deprecated use `BankGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = BankGetResponseDTO$inboundSchema;
	/** @deprecated use `BankGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = BankGetResponseDTO$outboundSchema;
	/** @deprecated use `BankGetResponseDTO$Outbound` instead. */
	export type Outbound = BankGetResponseDTO$Outbound;
}

export function bankGetResponseDTOFromJSON(jsonString: string): SafeParseResult<BankGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankGetResponseDTO' from JSON`);
}

export function bankGetResponseDTOToJSON(bankGetResponseDTO: BankGetResponseDTO): string {
	return JSON.stringify(BankGetResponseDTO$outboundSchema.parse(bankGetResponseDTO));
}
