import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type PhoneGetResponseDTO = {
	/**
	 * Phone carrier
	 */
	carrier?: null | string | undefined;
	/**
	 * Proxy code
	 */
	country?: null | string | undefined;
	/**
	 * Phone valid status
	 */
	isValid?: boolean | undefined;
	/**
	 * Phone
	 */
	phone?: number | undefined;
};

/** @internal */
export const PhoneGetResponseDTO$inboundSchema: z.ZodType<PhoneGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	carrier: z.nullable(z.string()).optional(),
	country: z.nullable(z.string()).optional(),
	isValid: z.boolean().optional(),
	phone: z.number().int().optional(),
});

/** @internal */
export type PhoneGetResponseDTO$Outbound = {
	carrier?: null | string | undefined;
	country?: null | string | undefined;
	isValid?: boolean | undefined;
	phone?: number | undefined;
};

/** @internal */
export const PhoneGetResponseDTO$outboundSchema: z.ZodType<PhoneGetResponseDTO$Outbound, z.ZodTypeDef, PhoneGetResponseDTO> = z.object({
	carrier: z.nullable(z.string()).optional(),
	country: z.nullable(z.string()).optional(),
	isValid: z.boolean().optional(),
	phone: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneGetResponseDTO$ {
	/** @deprecated use `PhoneGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = PhoneGetResponseDTO$inboundSchema;
	/** @deprecated use `PhoneGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = PhoneGetResponseDTO$outboundSchema;
	/** @deprecated use `PhoneGetResponseDTO$Outbound` instead. */
	export type Outbound = PhoneGetResponseDTO$Outbound;
}

export function phoneGetResponseDTOFromJSON(jsonString: string): SafeParseResult<PhoneGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => PhoneGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'PhoneGetResponseDTO' from JSON`);
}

export function phoneGetResponseDTOToJSON(phoneGetResponseDTO: PhoneGetResponseDTO): string {
	return JSON.stringify(PhoneGetResponseDTO$outboundSchema.parse(phoneGetResponseDTO));
}
