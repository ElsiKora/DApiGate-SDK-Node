import type {ClosedEnum} from "../../types/enums.js";
import type {Result as SafeParseResult} from "../../types/fp.js";
import type {SDKValidationError} from "../errors/sdkvalidationerror.js";

import * as z from "zod";

import {remap as remap$} from "../../lib/primitives.js";
import {safeParse} from "../../lib/schemas.js";

/**
 * Bank order by field
 */
export const OrderBy = {
	CreatedAt: "createdAt",
	Name: "name",
	UpdatedAt: "updatedAt",
} as const;
/**
 * Bank order by field
 */
export type OrderBy = ClosedEnum<typeof OrderBy>;

/**
 * Bank order direction
 */
export const OrderDirection = {
	Asc: "asc",
	Desc: "desc",
} as const;
/**
 * Bank order direction
 */
export type OrderDirection = ClosedEnum<typeof OrderDirection>;

/**
 * Bank
 */
export const CreatedAtOperator = {
	Between: "between",
	Eq: "eq",
	Gt: "gt",
	Gte: "gte",
	Isnull: "isnull",
	Lt: "lt",
	Lte: "lte",
	Ne: "ne",
	Notnull: "notnull",
} as const;
/**
 * Bank
 */
export type CreatedAtOperator = ClosedEnum<typeof CreatedAtOperator>;

/**
 * Bank name
 */
export const NameOperator = {
	Cont: "cont",
	Contl: "contl",
	Ends: "ends",
	Endsl: "endsl",
	Eq: "eq",
	Eql: "eql",
	In: "in",
	Inl: "inl",
	Isnull: "isnull",
	Ne: "ne",
	Nel: "nel",
	Notin: "notin",
	Notinl: "notinl",
	Notnull: "notnull",
	Starts: "starts",
	Startsl: "startsl",
} as const;
/**
 * Bank name
 */
export type NameOperator = ClosedEnum<typeof NameOperator>;

/**
 * Bank
 */
export const UpdatedAtOperator = {
	Between: "between",
	Eq: "eq",
	Gt: "gt",
	Gte: "gte",
	Isnull: "isnull",
	Lt: "lt",
	Lte: "lte",
	Ne: "ne",
	Notnull: "notnull",
} as const;
export type BankControllerApiControllerGetlistRequest = {
	/**
	 * Bank
	 */
	createdAtOperator?: CreatedAtOperator | undefined;
	/**
	 * Bank createdAt to
	 */
	createdAtValue?: Date | undefined;
	/**
	 * Bank createdAt to
	 */
	createdAtValues?: Array<any> | undefined;
	/**
	 * Bank Items per page
	 */
	limit: number;
	/**
	 * Bank name
	 */
	nameOperator?: NameOperator | undefined;
	/**
	 * Bank name
	 */
	nameValue?: string | undefined;
	/**
	 * Bank name
	 */
	nameValues?: Array<any> | undefined;
	/**
	 * Bank order by field
	 */
	orderBy?: OrderBy | undefined;
	/**
	 * Bank order direction
	 */
	orderDirection?: OrderDirection | undefined;
	/**
	 * Bank Page to return
	 */
	page: number;
	/**
	 * Bank
	 */
	updatedAtOperator?: undefined | UpdatedAtOperator;
	/**
	 * Bank updatedAt to
	 */
	updatedAtValue?: Date | undefined;
	/**
	 * Bank updatedAt to
	 */
	updatedAtValues?: Array<any> | undefined;
};

/**
 * Bank
 */
export type UpdatedAtOperator = ClosedEnum<typeof UpdatedAtOperator>;

/** @internal */
export const OrderBy$inboundSchema: z.ZodNativeEnum<typeof OrderBy> = z.nativeEnum(OrderBy);

/** @internal */
export const OrderBy$outboundSchema: z.ZodNativeEnum<typeof OrderBy> = OrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderBy$ {
	/** @deprecated use `OrderBy$inboundSchema` instead. */
	export const inboundSchema = OrderBy$inboundSchema;
	/** @deprecated use `OrderBy$outboundSchema` instead. */
	export const outboundSchema = OrderBy$outboundSchema;
}

/** @internal */
export const OrderDirection$inboundSchema: z.ZodNativeEnum<typeof OrderDirection> = z.nativeEnum(OrderDirection);

/** @internal */
export const OrderDirection$outboundSchema: z.ZodNativeEnum<typeof OrderDirection> = OrderDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderDirection$ {
	/** @deprecated use `OrderDirection$inboundSchema` instead. */
	export const inboundSchema = OrderDirection$inboundSchema;
	/** @deprecated use `OrderDirection$outboundSchema` instead. */
	export const outboundSchema = OrderDirection$outboundSchema;
}

/** @internal */
export const CreatedAtOperator$inboundSchema: z.ZodNativeEnum<typeof CreatedAtOperator> = z.nativeEnum(CreatedAtOperator);

/** @internal */
export const CreatedAtOperator$outboundSchema: z.ZodNativeEnum<typeof CreatedAtOperator> = CreatedAtOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatedAtOperator$ {
	/** @deprecated use `CreatedAtOperator$inboundSchema` instead. */
	export const inboundSchema = CreatedAtOperator$inboundSchema;
	/** @deprecated use `CreatedAtOperator$outboundSchema` instead. */
	export const outboundSchema = CreatedAtOperator$outboundSchema;
}

/** @internal */
export const NameOperator$inboundSchema: z.ZodNativeEnum<typeof NameOperator> = z.nativeEnum(NameOperator);

/** @internal */
export const NameOperator$outboundSchema: z.ZodNativeEnum<typeof NameOperator> = NameOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NameOperator$ {
	/** @deprecated use `NameOperator$inboundSchema` instead. */
	export const inboundSchema = NameOperator$inboundSchema;
	/** @deprecated use `NameOperator$outboundSchema` instead. */
	export const outboundSchema = NameOperator$outboundSchema;
}

/** @internal */
export const UpdatedAtOperator$inboundSchema: z.ZodNativeEnum<typeof UpdatedAtOperator> = z.nativeEnum(UpdatedAtOperator);

/** @internal */
export const UpdatedAtOperator$outboundSchema: z.ZodNativeEnum<typeof UpdatedAtOperator> = UpdatedAtOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedAtOperator$ {
	/** @deprecated use `UpdatedAtOperator$inboundSchema` instead. */
	export const inboundSchema = UpdatedAtOperator$inboundSchema;
	/** @deprecated use `UpdatedAtOperator$outboundSchema` instead. */
	export const outboundSchema = UpdatedAtOperator$outboundSchema;
}

/** @internal */
export const BankControllerApiControllerGetlistRequest$inboundSchema: z.ZodType<BankControllerApiControllerGetlistRequest, z.ZodTypeDef, unknown> = z
	.object({
		"createdAt[operator]": CreatedAtOperator$inboundSchema.optional(),
		"createdAt[value]": z
			.string()
			.datetime({ offset: true })
			.transform((v) => new Date(v))
			.optional(),
		"createdAt[values]": z.array(z.any()).optional(),
		limit: z.number().int(),
		"name[operator]": NameOperator$inboundSchema.optional(),
		"name[value]": z.string().optional(),
		"name[values]": z.array(z.any()).optional(),
		orderBy: OrderBy$inboundSchema.optional(),
		orderDirection: OrderDirection$inboundSchema.optional(),
		page: z.number().int(),
		"updatedAt[operator]": UpdatedAtOperator$inboundSchema.optional(),
		"updatedAt[value]": z
			.string()
			.datetime({ offset: true })
			.transform((v) => new Date(v))
			.optional(),
		"updatedAt[values]": z.array(z.any()).optional(),
	})
	.transform((v) => {
		return remap$(v, {
			"createdAt[operator]": "createdAtOperator",
			"createdAt[value]": "createdAtValue",
			"createdAt[values]": "createdAtValues",
			"name[operator]": "nameOperator",
			"name[value]": "nameValue",
			"name[values]": "nameValues",
			"updatedAt[operator]": "updatedAtOperator",
			"updatedAt[value]": "updatedAtValue",
			"updatedAt[values]": "updatedAtValues",
		});
	});

/** @internal */
export type BankControllerApiControllerGetlistRequest$Outbound = {
	"createdAt[operator]"?: string | undefined;
	"createdAt[value]"?: string | undefined;
	"createdAt[values]"?: Array<any> | undefined;
	limit: number;
	"name[operator]"?: string | undefined;
	"name[value]"?: string | undefined;
	"name[values]"?: Array<any> | undefined;
	orderBy?: string | undefined;
	orderDirection?: string | undefined;
	page: number;
	"updatedAt[operator]"?: string | undefined;
	"updatedAt[value]"?: string | undefined;
	"updatedAt[values]"?: Array<any> | undefined;
};

/** @internal */
export const BankControllerApiControllerGetlistRequest$outboundSchema: z.ZodType<BankControllerApiControllerGetlistRequest$Outbound, z.ZodTypeDef, BankControllerApiControllerGetlistRequest> = z
	.object({
		createdAtOperator: CreatedAtOperator$outboundSchema.optional(),
		createdAtValue: z
			.date()
			.transform((v) => v.toISOString())
			.optional(),
		createdAtValues: z.array(z.any()).optional(),
		limit: z.number().int(),
		nameOperator: NameOperator$outboundSchema.optional(),
		nameValue: z.string().optional(),
		nameValues: z.array(z.any()).optional(),
		orderBy: OrderBy$outboundSchema.optional(),
		orderDirection: OrderDirection$outboundSchema.optional(),
		page: z.number().int(),
		updatedAtOperator: UpdatedAtOperator$outboundSchema.optional(),
		updatedAtValue: z
			.date()
			.transform((v) => v.toISOString())
			.optional(),
		updatedAtValues: z.array(z.any()).optional(),
	})
	.transform((v) => {
		return remap$(v, {
			createdAtOperator: "createdAt[operator]",
			createdAtValue: "createdAt[value]",
			createdAtValues: "createdAt[values]",
			nameOperator: "name[operator]",
			nameValue: "name[value]",
			nameValues: "name[values]",
			updatedAtOperator: "updatedAt[operator]",
			updatedAtValue: "updatedAt[value]",
			updatedAtValues: "updatedAt[values]",
		});
	});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankControllerApiControllerGetlistRequest$ {
	/** @deprecated use `BankControllerApiControllerGetlistRequest$inboundSchema` instead. */
	export const inboundSchema = BankControllerApiControllerGetlistRequest$inboundSchema;
	/** @deprecated use `BankControllerApiControllerGetlistRequest$outboundSchema` instead. */
	export const outboundSchema = BankControllerApiControllerGetlistRequest$outboundSchema;
	/** @deprecated use `BankControllerApiControllerGetlistRequest$Outbound` instead. */
	export type Outbound = BankControllerApiControllerGetlistRequest$Outbound;
}

export function bankControllerApiControllerGetlistRequestFromJSON(jsonString: string): SafeParseResult<BankControllerApiControllerGetlistRequest, SDKValidationError> {
	return safeParse(jsonString, (x) => BankControllerApiControllerGetlistRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BankControllerApiControllerGetlistRequest' from JSON`);
}

export function bankControllerApiControllerGetlistRequestToJSON(bankControllerApiControllerGetlistRequest: BankControllerApiControllerGetlistRequest): string {
	return JSON.stringify(BankControllerApiControllerGetlistRequest$outboundSchema.parse(bankControllerApiControllerGetlistRequest));
}
