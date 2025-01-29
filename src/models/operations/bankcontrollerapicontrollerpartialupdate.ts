import type { Result as SafeParseResult } from "../../types/fp.js";
import type { SDKValidationError } from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";

export type BankControllerApiControllerPartialupdateRequest = {
	bankPartialUpdateBodyDTO: components.BankPartialUpdateBodyDTO;
	/**
	 * Bank identifier
	 */
	id: string;
};

/** @internal */
export const BankControllerApiControllerPartialupdateRequest$inboundSchema: z.ZodType<BankControllerApiControllerPartialupdateRequest, z.ZodTypeDef, unknown> = z
	.object({
		BankPartialUpdateBodyDTO: components.BankPartialUpdateBodyDTO$inboundSchema,
		id: z.string(),
	})
	.transform((v) => {
		return remap$(v, {
			BankPartialUpdateBodyDTO: "bankPartialUpdateBodyDTO",
		});
	});

/** @internal */
export type BankControllerApiControllerPartialupdateRequest$Outbound = {
	BankPartialUpdateBodyDTO: components.BankPartialUpdateBodyDTO$Outbound;
	id: string;
};

/** @internal */
export const BankControllerApiControllerPartialupdateRequest$outboundSchema: z.ZodType<BankControllerApiControllerPartialupdateRequest$Outbound, z.ZodTypeDef, BankControllerApiControllerPartialupdateRequest> = z
	.object({
		bankPartialUpdateBodyDTO: components.BankPartialUpdateBodyDTO$outboundSchema,
		id: z.string(),
	})
	.transform((v) => {
		return remap$(v, {
			bankPartialUpdateBodyDTO: "BankPartialUpdateBodyDTO",
		});
	});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankControllerApiControllerPartialupdateRequest$ {
	/** @deprecated use `BankControllerApiControllerPartialupdateRequest$inboundSchema` instead. */
	export const inboundSchema = BankControllerApiControllerPartialupdateRequest$inboundSchema;
	/** @deprecated use `BankControllerApiControllerPartialupdateRequest$outboundSchema` instead. */
	export const outboundSchema = BankControllerApiControllerPartialupdateRequest$outboundSchema;
	/** @deprecated use `BankControllerApiControllerPartialupdateRequest$Outbound` instead. */
	export type Outbound = BankControllerApiControllerPartialupdateRequest$Outbound;
}

export function bankControllerApiControllerPartialupdateRequestFromJSON(jsonString: string): SafeParseResult<BankControllerApiControllerPartialupdateRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankControllerApiControllerPartialupdateRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankControllerApiControllerPartialupdateRequest' from JSON`);
}

export function bankControllerApiControllerPartialupdateRequestToJSON(bankControllerApiControllerPartialupdateRequest: BankControllerApiControllerPartialupdateRequest): string {
	return JSON.stringify(BankControllerApiControllerPartialupdateRequest$outboundSchema.parse(bankControllerApiControllerPartialupdateRequest));
}
