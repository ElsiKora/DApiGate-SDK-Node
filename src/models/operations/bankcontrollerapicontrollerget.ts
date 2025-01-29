import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankControllerApiControllerGetRequest = {
	/**
	 * Bank identifier
	 */
	id: string;
};

/** @internal */
export const BankControllerApiControllerGetRequest$inboundSchema: z.ZodType<BankControllerApiControllerGetRequest, z.ZodTypeDef, unknown> = z.object({
	id: z.string(),
});

/** @internal */
export type BankControllerApiControllerGetRequest$Outbound = {
	id: string;
};

/** @internal */
export const BankControllerApiControllerGetRequest$outboundSchema: z.ZodType<BankControllerApiControllerGetRequest$Outbound, z.ZodTypeDef, BankControllerApiControllerGetRequest> = z.object({
	id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankControllerApiControllerGetRequest$ {
	/** @deprecated use `BankControllerApiControllerGetRequest$inboundSchema` instead. */
	export const inboundSchema = BankControllerApiControllerGetRequest$inboundSchema;
	/** @deprecated use `BankControllerApiControllerGetRequest$outboundSchema` instead. */
	export const outboundSchema = BankControllerApiControllerGetRequest$outboundSchema;
	/** @deprecated use `BankControllerApiControllerGetRequest$Outbound` instead. */
	export type Outbound = BankControllerApiControllerGetRequest$Outbound;
}

export function bankControllerApiControllerGetRequestFromJSON(jsonString: string): SafeParseResult<BankControllerApiControllerGetRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankControllerApiControllerGetRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankControllerApiControllerGetRequest' from JSON`);
}

export function bankControllerApiControllerGetRequestToJSON(bankControllerApiControllerGetRequest: BankControllerApiControllerGetRequest): string {
	return JSON.stringify(BankControllerApiControllerGetRequest$outboundSchema.parse(bankControllerApiControllerGetRequest));
}
