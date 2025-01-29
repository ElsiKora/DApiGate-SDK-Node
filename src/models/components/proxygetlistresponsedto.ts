import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import type { ProxyGetResponseDTO, ProxyGetResponseDTO$Outbound } from "./proxygetresponsedto.js";
import { ProxyGetResponseDTO$inboundSchema, ProxyGetResponseDTO$outboundSchema } from "./proxygetresponsedto.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type ProxyGetListResponseDTO = {
	/**
	 * ProxyGetResponseDTO Total number of items on page
	 */
	count?: number | undefined;
	/**
	 * ProxyGetResponseDTO Current page number
	 */
	currentPage?: number | undefined;
	/**
	 * Array of ProxyGetResponseDTO
	 */
	items?: Array<ProxyGetResponseDTO> | undefined;
	/**
	 * ProxyGetResponseDTO Total number of items
	 */
	totalCount?: number | undefined;
	/**
	 * ProxyGetResponseDTO Total number of pages
	 */
	totalPages?: number | undefined;
};

/** @internal */
export const ProxyGetListResponseDTO$inboundSchema: z.ZodType<ProxyGetListResponseDTO, z.ZodTypeDef, unknown> = z.object({
	count: z.number().int().optional(),
	currentPage: z.number().int().optional(),
	items: z.array(ProxyGetResponseDTO$inboundSchema).optional(),
	totalCount: z.number().int().optional(),
	totalPages: z.number().int().optional(),
});

/** @internal */
export type ProxyGetListResponseDTO$Outbound = {
	count?: number | undefined;
	currentPage?: number | undefined;
	items?: Array<ProxyGetResponseDTO$Outbound> | undefined;
	totalCount?: number | undefined;
	totalPages?: number | undefined;
};

/** @internal */
export const ProxyGetListResponseDTO$outboundSchema: z.ZodType<ProxyGetListResponseDTO$Outbound, z.ZodTypeDef, ProxyGetListResponseDTO> = z.object({
	count: z.number().int().optional(),
	currentPage: z.number().int().optional(),
	items: z.array(ProxyGetResponseDTO$outboundSchema).optional(),
	totalCount: z.number().int().optional(),
	totalPages: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProxyGetListResponseDTO$ {
	/** @deprecated use `ProxyGetListResponseDTO$inboundSchema` instead. */
	export const inboundSchema = ProxyGetListResponseDTO$inboundSchema;
	/** @deprecated use `ProxyGetListResponseDTO$outboundSchema` instead. */
	export const outboundSchema = ProxyGetListResponseDTO$outboundSchema;
	/** @deprecated use `ProxyGetListResponseDTO$Outbound` instead. */
	export type Outbound = ProxyGetListResponseDTO$Outbound;
}

export function proxyGetListResponseDTOFromJSON(jsonString: string): SafeParseResult<ProxyGetListResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => ProxyGetListResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ProxyGetListResponseDTO' from JSON`);
}

export function proxyGetListResponseDTOToJSON(proxyGetListResponseDTO: ProxyGetListResponseDTO): string {
	return JSON.stringify(ProxyGetListResponseDTO$outboundSchema.parse(proxyGetListResponseDTO));
}
