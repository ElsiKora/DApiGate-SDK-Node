import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankUpdateBodyDTO = {
	/**
	 * Bank base64 encoded dark theme icon
	 */
	iconDark: string;
	/**
	 * Bank base64 encoded light theme icon
	 */
	iconLight: string;
	/**
	 * Bank base64 encoded dark theme logotype
	 */
	logoDark: string;
	/**
	 * Bank base64 encoded light theme logotype
	 */
	logoLight: string;
	/**
	 * Bank name
	 */
	name: string;
};

/** @internal */
export const BankUpdateBodyDTO$inboundSchema: z.ZodType<BankUpdateBodyDTO, z.ZodTypeDef, unknown> = z.object({
	iconDark: z.string(),
	iconLight: z.string(),
	logoDark: z.string(),
	logoLight: z.string(),
	name: z.string(),
});

/** @internal */
export type BankUpdateBodyDTO$Outbound = {
	iconDark: string;
	iconLight: string;
	logoDark: string;
	logoLight: string;
	name: string;
};

/** @internal */
export const BankUpdateBodyDTO$outboundSchema: z.ZodType<BankUpdateBodyDTO$Outbound, z.ZodTypeDef, BankUpdateBodyDTO> = z.object({
	iconDark: z.string(),
	iconLight: z.string(),
	logoDark: z.string(),
	logoLight: z.string(),
	name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankUpdateBodyDTO$ {
	/** @deprecated use `BankUpdateBodyDTO$inboundSchema` instead. */
	export const inboundSchema = BankUpdateBodyDTO$inboundSchema;
	/** @deprecated use `BankUpdateBodyDTO$outboundSchema` instead. */
	export const outboundSchema = BankUpdateBodyDTO$outboundSchema;
	/** @deprecated use `BankUpdateBodyDTO$Outbound` instead. */
	export type Outbound = BankUpdateBodyDTO$Outbound;
}

export function bankUpdateBodyDTOFromJSON(jsonString: string): SafeParseResult<BankUpdateBodyDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankUpdateBodyDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankUpdateBodyDTO' from JSON`);
}

export function bankUpdateBodyDTOToJSON(bankUpdateBodyDTO: BankUpdateBodyDTO): string {
	return JSON.stringify(BankUpdateBodyDTO$outboundSchema.parse(bankUpdateBodyDTO));
}
