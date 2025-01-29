import type {Result as SafeParseResult} from "../../types/fp.js";
import type {SDKValidationError} from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import {safeParse} from "../../lib/schemas.js";

/**
 * BankAlias bank
 */
export type Bank = {
	/**
	 * Bank identifier
	 */
	id?: string | undefined;
};

export type BankAliasGetResponseDTO = {
	/**
	 * BankAlias bank
	 */
	bank?: Bank | undefined;
};

/** @internal */
export const Bank$inboundSchema: z.ZodType<Bank, z.ZodTypeDef, unknown> = z.object({
	id: z.string().optional(),
});

/** @internal */
export type Bank$Outbound = {
	id?: string | undefined;
};

/** @internal */
export const Bank$outboundSchema: z.ZodType<Bank$Outbound, z.ZodTypeDef, Bank> = z.object({
	id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Bank$ {
	/** @deprecated use `Bank$inboundSchema` instead. */
	export const inboundSchema = Bank$inboundSchema;
	/** @deprecated use `Bank$outboundSchema` instead. */
	export const outboundSchema = Bank$outboundSchema;
	/** @deprecated use `Bank$Outbound` instead. */
	export type Outbound = Bank$Outbound;
}

export function bankFromJSON(jsonString: string): SafeParseResult<Bank, SDKValidationError> {
	return safeParse(jsonString, (x) => Bank$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'Bank' from JSON`);
}

export function bankToJSON(bank: Bank): string {
	return JSON.stringify(Bank$outboundSchema.parse(bank));
}

/** @internal */
export const BankAliasGetResponseDTO$inboundSchema: z.ZodType<BankAliasGetResponseDTO, z.ZodTypeDef, unknown> = z.object({
	bank: z.lazy(() => Bank$inboundSchema).optional(),
});

/** @internal */
export type BankAliasGetResponseDTO$Outbound = {
	bank?: Bank$Outbound | undefined;
};

/** @internal */
export const BankAliasGetResponseDTO$outboundSchema: z.ZodType<BankAliasGetResponseDTO$Outbound, z.ZodTypeDef, BankAliasGetResponseDTO> = z.object({
	bank: z.lazy(() => Bank$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAliasGetResponseDTO$ {
	/** @deprecated use `BankAliasGetResponseDTO$inboundSchema` instead. */
	export const inboundSchema = BankAliasGetResponseDTO$inboundSchema;
	/** @deprecated use `BankAliasGetResponseDTO$outboundSchema` instead. */
	export const outboundSchema = BankAliasGetResponseDTO$outboundSchema;
	/** @deprecated use `BankAliasGetResponseDTO$Outbound` instead. */
	export type Outbound = BankAliasGetResponseDTO$Outbound;
}

export function bankAliasGetResponseDTOFromJSON(jsonString: string): SafeParseResult<BankAliasGetResponseDTO, SDKValidationError> {
	return safeParse(jsonString, (x) => BankAliasGetResponseDTO$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankAliasGetResponseDTO' from JSON`);
}

export function bankAliasGetResponseDTOToJSON(bankAliasGetResponseDTO: BankAliasGetResponseDTO): string {
	return JSON.stringify(BankAliasGetResponseDTO$outboundSchema.parse(bankAliasGetResponseDTO));
}
