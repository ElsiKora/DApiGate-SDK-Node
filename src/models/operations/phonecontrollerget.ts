import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type PhoneControllerGetRequest = {
	/**
	 * Phone
	 */
	phone: number;
};

/** @internal */
export const PhoneControllerGetRequest$inboundSchema: z.ZodType<PhoneControllerGetRequest, z.ZodTypeDef, unknown> = z.object({
	phone: z.number().int(),
});

/** @internal */
export type PhoneControllerGetRequest$Outbound = {
	phone: number;
};

/** @internal */
export const PhoneControllerGetRequest$outboundSchema: z.ZodType<PhoneControllerGetRequest$Outbound, z.ZodTypeDef, PhoneControllerGetRequest> = z.object({
	phone: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneControllerGetRequest$ {
	/** @deprecated use `PhoneControllerGetRequest$inboundSchema` instead. */
	export const inboundSchema = PhoneControllerGetRequest$inboundSchema;
	/** @deprecated use `PhoneControllerGetRequest$outboundSchema` instead. */
	export const outboundSchema = PhoneControllerGetRequest$outboundSchema;
	/** @deprecated use `PhoneControllerGetRequest$Outbound` instead. */
	export type Outbound = PhoneControllerGetRequest$Outbound;
}

export function phoneControllerGetRequestFromJSON(jsonString: string): SafeParseResult<PhoneControllerGetRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => PhoneControllerGetRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'PhoneControllerGetRequest' from JSON`);
}

export function phoneControllerGetRequestToJSON(phoneControllerGetRequest: PhoneControllerGetRequest): string {
	return JSON.stringify(PhoneControllerGetRequest$outboundSchema.parse(phoneControllerGetRequest));
}
