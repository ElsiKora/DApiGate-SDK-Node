import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankPartialUpdateBodyDTO = {
	/**
	 * Bank base64 encoded dark theme icon
	 */
	iconDark?: string | undefined;
	/**
	 * Bank base64 encoded light theme icon
	 */
	iconLight?: string | undefined;
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
};

/** @internal */
export const BankPartialUpdateBodyDTO$inboundSchema: z.ZodType<BankPartialUpdateBodyDTO, z.ZodTypeDef, unknown> = z.object({
	iconDark: z.string().optional(),
	iconLight: z.string().optional(),
	logoDark: z.string().optional(),
	logoLight: z.string().optional(),
	name: z.string().optional(),
});

/** @internal */
export type BankPartialUpdateBodyDTO$Outbound = {
	iconDark?: string | undefined;
	iconLight?: string | undefined;
	logoDark?: string | undefined;
	logoLight?: string | undefined;
	name?: string | undefined;
};

/** @internal */
export const BankPartialUpdateBodyDTO$outboundSchema: z.ZodType<BankPartialUpdateBodyDTO$Outbound, z.ZodTypeDef, BankPartialUpdateBodyDTO> = z.object({
	iconDark: z.string().optional(),
	iconLight: z.string().optional(),
	logoDark: z.string().optional(),
	logoLight: z.string().optional(),
	name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankPartialUpdateBodyDTO$ {
	/** @deprecated use `BankPartialUpdateBodyDTO$inboundSchema` instead. */
	export const inboundSchema = BankPartialUpdateBodyDTO$inboundSchema;
	/** @deprecated use `BankPartialUpdateBodyDTO$outboundSchema` instead. */
	export const outboundSchema = BankPartialUpdateBodyDTO$outboundSchema;
	/** @deprecated use `BankPartialUpdateBodyDTO$Outbound` instead. */
	export type Outbound = BankPartialUpdateBodyDTO$Outbound;
}

export function bankPartialUpdateBodyDTOFromJSON(jsonString: string): SafeParseResult<BankPartialUpdateBodyDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankPartialUpdateBodyDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankPartialUpdateBodyDTO' from JSON`);
}

export function bankPartialUpdateBodyDTOToJSON(bankPartialUpdateBodyDTO: BankPartialUpdateBodyDTO): string {
	return JSON.stringify(BankPartialUpdateBodyDTO$outboundSchema.parse(bankPartialUpdateBodyDTO));
}
