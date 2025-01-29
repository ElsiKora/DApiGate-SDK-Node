import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import type { RateGetResponseDTO, RateGetResponseDTO$Outbound } from "./rategetresponsedto.js";
import { RateGetResponseDTO$inboundSchema, RateGetResponseDTO$outboundSchema } from "./rategetresponsedto.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type RateGetSimpleListResponseDTO = {
	/**
	 * Array of RateGetResponseDTO
	 */
	items?: Array<RateGetResponseDTO> | undefined;
	/**
	 * RateGetResponseDTO Total number of items
	 */
	totalCount?: number | undefined;
};

/** @internal */
export const RateGetSimpleListResponseDTO$inboundSchema: z.ZodType<RateGetSimpleListResponseDTO, z.ZodTypeDef, unknown> = z.object({
	items: z.array(RateGetResponseDTO$inboundSchema).optional(),
	totalCount: z.number().int().optional(),
});

/** @internal */
export type RateGetSimpleListResponseDTO$Outbound = {
	items?: Array<RateGetResponseDTO$Outbound> | undefined;
	totalCount?: number | undefined;
};

/** @internal */
export const RateGetSimpleListResponseDTO$outboundSchema: z.ZodType<RateGetSimpleListResponseDTO$Outbound, z.ZodTypeDef, RateGetSimpleListResponseDTO> = z.object({
	items: z.array(RateGetResponseDTO$outboundSchema).optional(),
	totalCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateGetSimpleListResponseDTO$ {
	/** @deprecated use `RateGetSimpleListResponseDTO$inboundSchema` instead. */
	export const inboundSchema = RateGetSimpleListResponseDTO$inboundSchema;
	/** @deprecated use `RateGetSimpleListResponseDTO$outboundSchema` instead. */
	export const outboundSchema = RateGetSimpleListResponseDTO$outboundSchema;
	/** @deprecated use `RateGetSimpleListResponseDTO$Outbound` instead. */
	export type Outbound = RateGetSimpleListResponseDTO$Outbound;
}

export function rateGetSimpleListResponseDTOFromJSON(jsonString: string): SafeParseResult<RateGetSimpleListResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => RateGetSimpleListResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'RateGetSimpleListResponseDTO' from JSON`);
}

export function rateGetSimpleListResponseDTOToJSON(rateGetSimpleListResponseDTO: RateGetSimpleListResponseDTO): string {
	return JSON.stringify(RateGetSimpleListResponseDTO$outboundSchema.parse(rateGetSimpleListResponseDTO));
}
