import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";

export type BankControllerApiControllerUpdateRequest = {
	bankUpdateBodyDTO: components.BankUpdateBodyDTO;
	/**
	 * Bank identifier
	 */
	id: string;
};

/** @internal */
export const BankControllerApiControllerUpdateRequest$inboundSchema: z.ZodType<BankControllerApiControllerUpdateRequest, z.ZodTypeDef, unknown> = z
	.object({
		BankUpdateBodyDTO: components.BankUpdateBodyDTO$inboundSchema,
		id: z.string(),
	})
	.transform((v) => {
		return remap$(v, {
			BankUpdateBodyDTO: "bankUpdateBodyDTO",
		});
	});

/** @internal */
export type BankControllerApiControllerUpdateRequest$Outbound = {
	BankUpdateBodyDTO: components.BankUpdateBodyDTO$Outbound;
	id: string;
};

/** @internal */
export const BankControllerApiControllerUpdateRequest$outboundSchema: z.ZodType<BankControllerApiControllerUpdateRequest$Outbound, z.ZodTypeDef, BankControllerApiControllerUpdateRequest> = z
	.object({
		bankUpdateBodyDTO: components.BankUpdateBodyDTO$outboundSchema,
		id: z.string(),
	})
	.transform((v) => {
		return remap$(v, {
			bankUpdateBodyDTO: "BankUpdateBodyDTO",
		});
	});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankControllerApiControllerUpdateRequest$ {
	/** @deprecated use `BankControllerApiControllerUpdateRequest$inboundSchema` instead. */
	export const inboundSchema = BankControllerApiControllerUpdateRequest$inboundSchema;
	/** @deprecated use `BankControllerApiControllerUpdateRequest$outboundSchema` instead. */
	export const outboundSchema = BankControllerApiControllerUpdateRequest$outboundSchema;
	/** @deprecated use `BankControllerApiControllerUpdateRequest$Outbound` instead. */
	export type Outbound = BankControllerApiControllerUpdateRequest$Outbound;
}

export function bankControllerApiControllerUpdateRequestFromJSON(jsonString: string): SafeParseResult<BankControllerApiControllerUpdateRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankControllerApiControllerUpdateRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankControllerApiControllerUpdateRequest' from JSON`);
}

export function bankControllerApiControllerUpdateRequestToJSON(bankControllerApiControllerUpdateRequest: BankControllerApiControllerUpdateRequest): string {
	return JSON.stringify(BankControllerApiControllerUpdateRequest$outboundSchema.parse(bankControllerApiControllerUpdateRequest));
}
