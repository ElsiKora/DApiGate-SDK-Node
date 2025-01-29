import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";

export type EmailControllerGetRequest = {
	/**
	 * Email address
	 */
	email: string;
};

/** @internal */
export const EmailControllerGetRequest$inboundSchema: z.ZodType<EmailControllerGetRequest, z.ZodTypeDef, unknown> = z.object({
	email: z.string(),
});

/** @internal */
export type EmailControllerGetRequest$Outbound = {
	email: string;
};

/** @internal */
export const EmailControllerGetRequest$outboundSchema: z.ZodType<EmailControllerGetRequest$Outbound, z.ZodTypeDef, EmailControllerGetRequest> = z.object({
	email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailControllerGetRequest$ {
	/** @deprecated use `EmailControllerGetRequest$inboundSchema` instead. */
	export const inboundSchema = EmailControllerGetRequest$inboundSchema;
	/** @deprecated use `EmailControllerGetRequest$outboundSchema` instead. */
	export const outboundSchema = EmailControllerGetRequest$outboundSchema;
	/** @deprecated use `EmailControllerGetRequest$Outbound` instead. */
	export type Outbound = EmailControllerGetRequest$Outbound;
}

export function emailControllerGetRequestFromJSON(jsonString: string): SafeParseResult<EmailControllerGetRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => EmailControllerGetRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'EmailControllerGetRequest' from JSON`);
}

export function emailControllerGetRequestToJSON(emailControllerGetRequest: EmailControllerGetRequest): string {
	return JSON.stringify(EmailControllerGetRequest$outboundSchema.parse(emailControllerGetRequest));
}
