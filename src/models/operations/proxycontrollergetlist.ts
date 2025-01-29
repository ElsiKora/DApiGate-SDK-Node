import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type ProxyControllerGetListRequest = {
	/**
	 * Proxy code
	 */
	country?: string | undefined;
	/**
	 * ProxyGetResponseDTO Items per page
	 */
	limit: number;
	/**
	 * ProxyGetResponseDTO Page to return
	 */
	page: number;
};

/** @internal */
export const ProxyControllerGetListRequest$inboundSchema: z.ZodType<ProxyControllerGetListRequest, z.ZodTypeDef, unknown> = z.object({
	country: z.string().optional(),
	limit: z.number().int(),
	page: z.number().int(),
});

/** @internal */
export type ProxyControllerGetListRequest$Outbound = {
	country?: string | undefined;
	limit: number;
	page: number;
};

/** @internal */
export const ProxyControllerGetListRequest$outboundSchema: z.ZodType<ProxyControllerGetListRequest$Outbound, z.ZodTypeDef, ProxyControllerGetListRequest> = z.object({
	country: z.string().optional(),
	limit: z.number().int(),
	page: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProxyControllerGetListRequest$ {
	/** @deprecated use `ProxyControllerGetListRequest$inboundSchema` instead. */
	export const inboundSchema = ProxyControllerGetListRequest$inboundSchema;
	/** @deprecated use `ProxyControllerGetListRequest$outboundSchema` instead. */
	export const outboundSchema = ProxyControllerGetListRequest$outboundSchema;
	/** @deprecated use `ProxyControllerGetListRequest$Outbound` instead. */
	export type Outbound = ProxyControllerGetListRequest$Outbound;
}

export function proxyControllerGetListRequestFromJSON(jsonString: string): SafeParseResult<ProxyControllerGetListRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => ProxyControllerGetListRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ProxyControllerGetListRequest' from JSON`);
}

export function proxyControllerGetListRequestToJSON(proxyControllerGetListRequest: ProxyControllerGetListRequest): string {
	return JSON.stringify(ProxyControllerGetListRequest$outboundSchema.parse(proxyControllerGetListRequest));
}
