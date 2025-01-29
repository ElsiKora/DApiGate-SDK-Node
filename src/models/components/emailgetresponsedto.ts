import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type EmailGetResponseDTO = {
	/**
	 * Email address
	 */
	email?: string | undefined;
	/**
	 * Email valid status
	 */
	isValid?: boolean | undefined;
};

/** @internal */
export const EmailGetResponseDTO$inboundSchema: z.ZodType<EmailGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	email: z.string().optional(),
	isValid: z.boolean().optional(),
});

/** @internal */
export type EmailGetResponseDTO$Outbound = {
	email?: string | undefined;
	isValid?: boolean | undefined;
};

/** @internal */
export const EmailGetResponseDTO$outboundSchema: z.ZodType<EmailGetResponseDTO$Outbound, z.ZodTypeDef, EmailGetResponseDTO> = z.object({
	email: z.string().optional(),
	isValid: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailGetResponseDTO$ {
	/** @deprecated use `EmailGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = EmailGetResponseDTO$inboundSchema;
	/** @deprecated use `EmailGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = EmailGetResponseDTO$outboundSchema;
	/** @deprecated use `EmailGetResponseDTO$Outbound` instead. */
	export type Outbound = EmailGetResponseDTO$Outbound;
}

export function emailGetResponseDTOFromJSON(jsonString: string): SafeParseResult<EmailGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => EmailGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'EmailGetResponseDTO' from JSON`);
}

export function emailGetResponseDTOToJSON(emailGetResponseDTO: EmailGetResponseDTO): string {
	return JSON.stringify(EmailGetResponseDTO$outboundSchema.parse(emailGetResponseDTO));
}
