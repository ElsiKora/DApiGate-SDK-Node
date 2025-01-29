import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type IpGetResponseDTO = {
	/**
	 * IP country code
	 */
	country?: null | string | undefined;
	/**
	 * IP currency
	 */
	currency?: null | string | undefined;
	/**
	 * IP address
	 */
	ip?: string | undefined;
};

/** @internal */
export const IpGetResponseDTO$inboundSchema: z.ZodType<IpGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	country: z.nullable(z.string()).optional(),
	currency: z.nullable(z.string()).optional(),
	ip: z.string().optional(),
});

/** @internal */
export type IpGetResponseDTO$Outbound = {
	country?: null | string | undefined;
	currency?: null | string | undefined;
	ip?: string | undefined;
};

/** @internal */
export const IpGetResponseDTO$outboundSchema: z.ZodType<IpGetResponseDTO$Outbound, z.ZodTypeDef, IpGetResponseDTO> = z.object({
	country: z.nullable(z.string()).optional(),
	currency: z.nullable(z.string()).optional(),
	ip: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpGetResponseDTO$ {
	/** @deprecated use `IpGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = IpGetResponseDTO$inboundSchema;
	/** @deprecated use `IpGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = IpGetResponseDTO$outboundSchema;
	/** @deprecated use `IpGetResponseDTO$Outbound` instead. */
	export type Outbound = IpGetResponseDTO$Outbound;
}

export function ipGetResponseDTOFromJSON(jsonString: string): SafeParseResult<IpGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => IpGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'IpGetResponseDTO' from JSON`);
}

export function ipGetResponseDTOToJSON(ipGetResponseDTO: IpGetResponseDTO): string {
	return JSON.stringify(IpGetResponseDTO$outboundSchema.parse(ipGetResponseDTO));
}
