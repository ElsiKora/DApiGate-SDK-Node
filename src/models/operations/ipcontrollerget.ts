import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type IpControllerGetRequest = {
	/**
	 * IP address
	 */
	ip: string;
};

/** @internal */
export const IpControllerGetRequest$inboundSchema: z.ZodType<IpControllerGetRequest, z.ZodTypeDef, unknown> = z.object({
	ip: z.string(),
});

/** @internal */
export type IpControllerGetRequest$Outbound = {
	ip: string;
};

/** @internal */
export const IpControllerGetRequest$outboundSchema: z.ZodType<IpControllerGetRequest$Outbound, z.ZodTypeDef, IpControllerGetRequest> = z.object({
	ip: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpControllerGetRequest$ {
	/** @deprecated use `IpControllerGetRequest$inboundSchema` instead. */
	export const inboundSchema = IpControllerGetRequest$inboundSchema;
	/** @deprecated use `IpControllerGetRequest$outboundSchema` instead. */
	export const outboundSchema = IpControllerGetRequest$outboundSchema;
	/** @deprecated use `IpControllerGetRequest$Outbound` instead. */
	export type Outbound = IpControllerGetRequest$Outbound;
}

export function ipControllerGetRequestFromJSON(jsonString: string): SafeParseResult<IpControllerGetRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => IpControllerGetRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'IpControllerGetRequest' from JSON`);
}

export function ipControllerGetRequestToJSON(ipControllerGetRequest: IpControllerGetRequest): string {
	return JSON.stringify(IpControllerGetRequest$outboundSchema.parse(ipControllerGetRequest));
}
