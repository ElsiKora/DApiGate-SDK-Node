import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import type { BankGetListResponseDTO, BankGetListResponseDTO$Outbound } from "./bankgetlistresponsedto.js";
import { BankGetListResponseDTO$inboundSchema, BankGetListResponseDTO$outboundSchema } from "./bankgetlistresponsedto.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type ApiListGetResponse = {
	/**
	 * Bank Total number of items on page
	 */
	count?: number | undefined;
	/**
	 * Bank Current page number
	 */
	currentPage?: number | undefined;
	/**
	 * Array of Bank
	 */
	items?: Array<BankGetListResponseDTO> | undefined;
	/**
	 * Bank Total number of items
	 */
	totalCount?: number | undefined;
	/**
	 * Bank Total number of pages
	 */
	totalPages?: number | undefined;
};

/** @internal */
export const ApiListGetResponse$inboundSchema: z.ZodType<ApiListGetResponse, z.ZodTypeDef, unknown> = z.object({
	count: z.number().int().optional(),
	currentPage: z.number().int().optional(),
	items: z.array(BankGetListResponseDTO$inboundSchema).optional(),
	totalCount: z.number().int().optional(),
	totalPages: z.number().int().optional(),
});

/** @internal */
export type ApiListGetResponse$Outbound = {
	count?: number | undefined;
	currentPage?: number | undefined;
	items?: Array<BankGetListResponseDTO$Outbound> | undefined;
	totalCount?: number | undefined;
	totalPages?: number | undefined;
};

/** @internal */
export const ApiListGetResponse$outboundSchema: z.ZodType<ApiListGetResponse$Outbound, z.ZodTypeDef, ApiListGetResponse> = z.object({
	count: z.number().int().optional(),
	currentPage: z.number().int().optional(),
	items: z.array(BankGetListResponseDTO$outboundSchema).optional(),
	totalCount: z.number().int().optional(),
	totalPages: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiListGetResponse$ {
	/** @deprecated use `ApiListGetResponse$inboundSchema` instead. */
	export const inboundSchema = ApiListGetResponse$inboundSchema;
	/** @deprecated use `ApiListGetResponse$outboundSchema` instead. */
	export const outboundSchema = ApiListGetResponse$outboundSchema;
	/** @deprecated use `ApiListGetResponse$Outbound` instead. */
	export type Outbound = ApiListGetResponse$Outbound;
}

export function apiListGetResponseFromJSON(jsonString: string): SafeParseResult<ApiListGetResponse, SDKValidationError> {
	return safeParse(jsonString, (x) => ApiListGetResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ApiListGetResponse' from JSON`);
}

export function apiListGetResponseToJSON(apiListGetResponse: ApiListGetResponse): string {
	return JSON.stringify(ApiListGetResponse$outboundSchema.parse(apiListGetResponse));
}
