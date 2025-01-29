import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type BankAliasControllerSearchRequest = {
	/**
	 * BankAlias name
	 */
	name: string;
};

/** @internal */
export const BankAliasControllerSearchRequest$inboundSchema: z.ZodType<BankAliasControllerSearchRequest, z.ZodTypeDef, unknown> = z.object({
	name: z.string(),
});

/** @internal */
export type BankAliasControllerSearchRequest$Outbound = {
	name: string;
};

/** @internal */
export const BankAliasControllerSearchRequest$outboundSchema: z.ZodType<BankAliasControllerSearchRequest$Outbound, z.ZodTypeDef, BankAliasControllerSearchRequest> = z.object({
	name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAliasControllerSearchRequest$ {
	/** @deprecated use `BankAliasControllerSearchRequest$inboundSchema` instead. */
	export const inboundSchema = BankAliasControllerSearchRequest$inboundSchema;
	/** @deprecated use `BankAliasControllerSearchRequest$outboundSchema` instead. */
	export const outboundSchema = BankAliasControllerSearchRequest$outboundSchema;
	/** @deprecated use `BankAliasControllerSearchRequest$Outbound` instead. */
	export type Outbound = BankAliasControllerSearchRequest$Outbound;
}

export function bankAliasControllerSearchRequestFromJSON(jsonString: string): SafeParseResult<BankAliasControllerSearchRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankAliasControllerSearchRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankAliasControllerSearchRequest' from JSON`);
}

export function bankAliasControllerSearchRequestToJSON(bankAliasControllerSearchRequest: BankAliasControllerSearchRequest): string {
	return JSON.stringify(BankAliasControllerSearchRequest$outboundSchema.parse(bankAliasControllerSearchRequest));
}
