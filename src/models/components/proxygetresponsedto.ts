import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type ProxyGetResponseDTO = {
	/**
	 * Proxy code
	 */
	country?: string | undefined;
	/**
	 * Proxy IP
	 */
	ip?: string | undefined;
	/**
	 * Proxy password
	 */
	password?: string | undefined;
	/**
	 * Proxy port
	 */
	port?: number | undefined;
	/**
	 * Proxy login
	 */
	username?: string | undefined;
};

/** @internal */
export const ProxyGetResponseDTO$inboundSchema: z.ZodType<ProxyGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	country: z.string().optional(),
	ip: z.string().optional(),
	password: z.string().optional(),
	port: z.number().int().optional(),
	username: z.string().optional(),
});

/** @internal */
export type ProxyGetResponseDTO$Outbound = {
	country?: string | undefined;
	ip?: string | undefined;
	password?: string | undefined;
	port?: number | undefined;
	username?: string | undefined;
};

/** @internal */
export const ProxyGetResponseDTO$outboundSchema: z.ZodType<ProxyGetResponseDTO$Outbound, z.ZodTypeDef, ProxyGetResponseDTO> = z.object({
	country: z.string().optional(),
	ip: z.string().optional(),
	password: z.string().optional(),
	port: z.number().int().optional(),
	username: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProxyGetResponseDTO$ {
	/** @deprecated use `ProxyGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = ProxyGetResponseDTO$inboundSchema;
	/** @deprecated use `ProxyGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = ProxyGetResponseDTO$outboundSchema;
	/** @deprecated use `ProxyGetResponseDTO$Outbound` instead. */
	export type Outbound = ProxyGetResponseDTO$Outbound;
}

export function proxyGetResponseDTOFromJSON(jsonString: string): SafeParseResult<ProxyGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => ProxyGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ProxyGetResponseDTO' from JSON`);
}

export function proxyGetResponseDTOToJSON(proxyGetResponseDTO: ProxyGetResponseDTO): string {
	return JSON.stringify(ProxyGetResponseDTO$outboundSchema.parse(proxyGetResponseDTO));
}
