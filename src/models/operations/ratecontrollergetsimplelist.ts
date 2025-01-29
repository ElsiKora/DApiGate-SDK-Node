import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type RateControllerGetSimpleListRequest = {
	/**
	 * Rate code
	 */
	base: string;
};

/** @internal */
export const RateControllerGetSimpleListRequest$inboundSchema: z.ZodType<RateControllerGetSimpleListRequest, z.ZodTypeDef, unknown> = z.object({
	base: z.string(),
});

/** @internal */
export type RateControllerGetSimpleListRequest$Outbound = {
	base: string;
};

/** @internal */
export const RateControllerGetSimpleListRequest$outboundSchema: z.ZodType<RateControllerGetSimpleListRequest$Outbound, z.ZodTypeDef, RateControllerGetSimpleListRequest> = z.object({
	base: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateControllerGetSimpleListRequest$ {
	/** @deprecated use `RateControllerGetSimpleListRequest$inboundSchema` instead. */
	export const inboundSchema = RateControllerGetSimpleListRequest$inboundSchema;
	/** @deprecated use `RateControllerGetSimpleListRequest$outboundSchema` instead. */
	export const outboundSchema = RateControllerGetSimpleListRequest$outboundSchema;
	/** @deprecated use `RateControllerGetSimpleListRequest$Outbound` instead. */
	export type Outbound = RateControllerGetSimpleListRequest$Outbound;
}

export function rateControllerGetSimpleListRequestFromJSON(jsonString: string): SafeParseResult<RateControllerGetSimpleListRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => RateControllerGetSimpleListRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'RateControllerGetSimpleListRequest' from JSON`);
}

export function rateControllerGetSimpleListRequestToJSON(rateControllerGetSimpleListRequest: RateControllerGetSimpleListRequest): string {
	return JSON.stringify(RateControllerGetSimpleListRequest$outboundSchema.parse(rateControllerGetSimpleListRequest));
}
