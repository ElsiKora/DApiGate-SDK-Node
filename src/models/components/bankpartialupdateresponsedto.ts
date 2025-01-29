import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankPartialUpdateResponseDTO = {
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
export const BankPartialUpdateResponseDTO$inboundSchema: z.ZodType<BankPartialUpdateResponseDTO, z.ZodTypeDef, unknown> = z.object({
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
export type BankPartialUpdateResponseDTO$Outbound = {
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
export const BankPartialUpdateResponseDTO$outboundSchema: z.ZodType<BankPartialUpdateResponseDTO$Outbound, z.ZodTypeDef, BankPartialUpdateResponseDTO> = z.object({
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
export namespace BankPartialUpdateResponseDTO$ {
	/** @deprecated use `BankPartialUpdateResponseDTO$inboundSchema` instead. */
	export const inboundSchema = BankPartialUpdateResponseDTO$inboundSchema;
	/** @deprecated use `BankPartialUpdateResponseDTO$outboundSchema` instead. */
	export const outboundSchema = BankPartialUpdateResponseDTO$outboundSchema;
	/** @deprecated use `BankPartialUpdateResponseDTO$Outbound` instead. */
	export type Outbound = BankPartialUpdateResponseDTO$Outbound;
}

export function bankPartialUpdateResponseDTOFromJSON(jsonString: string): SafeParseResult<BankPartialUpdateResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankPartialUpdateResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankPartialUpdateResponseDTO' from JSON`);
}

export function bankPartialUpdateResponseDTOToJSON(bankPartialUpdateResponseDTO: BankPartialUpdateResponseDTO): string {
	return JSON.stringify(BankPartialUpdateResponseDTO$outboundSchema.parse(bankPartialUpdateResponseDTO));
}
