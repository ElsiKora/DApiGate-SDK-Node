import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type RateGetResponseDTO = {
	/**
	 * Rate currency
	 */
	currency?: string | undefined;
	/**
	 * Rate value
	 */
	rate?: number | undefined;
};

/** @internal */
export const RateGetResponseDTO$inboundSchema: z.ZodType<RateGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	currency: z.string().optional(),
	rate: z.number().optional(),
});

/** @internal */
export type RateGetResponseDTO$Outbound = {
	currency?: string | undefined;
	rate?: number | undefined;
};

/** @internal */
export const RateGetResponseDTO$outboundSchema: z.ZodType<RateGetResponseDTO$Outbound, z.ZodTypeDef, RateGetResponseDTO> = z.object({
	currency: z.string().optional(),
	rate: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateGetResponseDTO$ {
	/** @deprecated use `RateGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = RateGetResponseDTO$inboundSchema;
	/** @deprecated use `RateGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = RateGetResponseDTO$outboundSchema;
	/** @deprecated use `RateGetResponseDTO$Outbound` instead. */
	export type Outbound = RateGetResponseDTO$Outbound;
}

export function rateGetResponseDTOFromJSON(jsonString: string): SafeParseResult<RateGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => RateGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'RateGetResponseDTO' from JSON`);
}

export function rateGetResponseDTOToJSON(rateGetResponseDTO: RateGetResponseDTO): string {
	return JSON.stringify(RateGetResponseDTO$outboundSchema.parse(rateGetResponseDTO));
}
