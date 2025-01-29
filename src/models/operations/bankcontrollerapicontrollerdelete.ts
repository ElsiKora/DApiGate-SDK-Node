import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankControllerApiControllerDeleteRequest = {
	/**
	 * Bank identifier
	 */
	id: string;
};

/** @internal */
export const BankControllerApiControllerDeleteRequest$inboundSchema: z.ZodType<BankControllerApiControllerDeleteRequest, z.ZodTypeDef, unknown> = z.object({
	id: z.string(),
});

/** @internal */
export type BankControllerApiControllerDeleteRequest$Outbound = {
	id: string;
};

/** @internal */
export const BankControllerApiControllerDeleteRequest$outboundSchema: z.ZodType<BankControllerApiControllerDeleteRequest$Outbound, z.ZodTypeDef, BankControllerApiControllerDeleteRequest> = z.object({
	id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankControllerApiControllerDeleteRequest$ {
	/** @deprecated use `BankControllerApiControllerDeleteRequest$inboundSchema` instead. */
	export const inboundSchema = BankControllerApiControllerDeleteRequest$inboundSchema;
	/** @deprecated use `BankControllerApiControllerDeleteRequest$outboundSchema` instead. */
	export const outboundSchema = BankControllerApiControllerDeleteRequest$outboundSchema;
	/** @deprecated use `BankControllerApiControllerDeleteRequest$Outbound` instead. */
	export type Outbound = BankControllerApiControllerDeleteRequest$Outbound;
}

export function bankControllerApiControllerDeleteRequestFromJSON(jsonString: string): SafeParseResult<BankControllerApiControllerDeleteRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankControllerApiControllerDeleteRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankControllerApiControllerDeleteRequest' from JSON`);
}

export function bankControllerApiControllerDeleteRequestToJSON(bankControllerApiControllerDeleteRequest: BankControllerApiControllerDeleteRequest): string {
	return JSON.stringify(BankControllerApiControllerDeleteRequest$outboundSchema.parse(bankControllerApiControllerDeleteRequest));
}
