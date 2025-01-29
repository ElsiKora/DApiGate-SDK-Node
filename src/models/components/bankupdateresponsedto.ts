import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankUpdateResponseDTO = {
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
export const BankUpdateResponseDTO$inboundSchema: z.ZodType<BankUpdateResponseDTO, z.ZodTypeDef, unknown> = z.object({
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
export type BankUpdateResponseDTO$Outbound = {
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
export const BankUpdateResponseDTO$outboundSchema: z.ZodType<BankUpdateResponseDTO$Outbound, z.ZodTypeDef, BankUpdateResponseDTO> = z.object({
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
export namespace BankUpdateResponseDTO$ {
	/** @deprecated use `BankUpdateResponseDTO$inboundSchema` instead. */
	export const inboundSchema = BankUpdateResponseDTO$inboundSchema;
	/** @deprecated use `BankUpdateResponseDTO$outboundSchema` instead. */
	export const outboundSchema = BankUpdateResponseDTO$outboundSchema;
	/** @deprecated use `BankUpdateResponseDTO$Outbound` instead. */
	export type Outbound = BankUpdateResponseDTO$Outbound;
}

export function bankUpdateResponseDTOFromJSON(jsonString: string): SafeParseResult<BankUpdateResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankUpdateResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankUpdateResponseDTO' from JSON`);
}

export function bankUpdateResponseDTOToJSON(bankUpdateResponseDTO: BankUpdateResponseDTO): string {
	return JSON.stringify(BankUpdateResponseDTO$outboundSchema.parse(bankUpdateResponseDTO));
}
