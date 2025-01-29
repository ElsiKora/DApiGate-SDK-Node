import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankGetListResponseDTO = {
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
export const BankGetListResponseDTO$inboundSchema: z.ZodType<BankGetListResponseDTO, z.ZodTypeDef, unknown> = z.object({
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
export type BankGetListResponseDTO$Outbound = {
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
export const BankGetListResponseDTO$outboundSchema: z.ZodType<BankGetListResponseDTO$Outbound, z.ZodTypeDef, BankGetListResponseDTO> = z.object({
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
export namespace BankGetListResponseDTO$ {
	/** @deprecated use `BankGetListResponseDTO$inboundSchema` instead. */
	export const inboundSchema = BankGetListResponseDTO$inboundSchema;
	/** @deprecated use `BankGetListResponseDTO$outboundSchema` instead. */
	export const outboundSchema = BankGetListResponseDTO$outboundSchema;
	/** @deprecated use `BankGetListResponseDTO$Outbound` instead. */
	export type Outbound = BankGetListResponseDTO$Outbound;
}

export function bankGetListResponseDTOFromJSON(jsonString: string): SafeParseResult<BankGetListResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankGetListResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankGetListResponseDTO' from JSON`);
}

export function bankGetListResponseDTOToJSON(bankGetListResponseDTO: BankGetListResponseDTO): string {
	return JSON.stringify(BankGetListResponseDTO$outboundSchema.parse(bankGetListResponseDTO));
}
