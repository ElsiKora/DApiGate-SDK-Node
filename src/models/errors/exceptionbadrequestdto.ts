import * as z from "zod";

export type ExceptionBadRequestDTOData = {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;
	/**
	 * Error name
	 */
	error?: string | undefined;
	/**
	 * Error message
	 */
	message?: string | undefined;
	/**
	 * Error status code
	 */
	statusCode?: number | undefined;
	/**
	 * Error timestamp
	 */
	timestamp?: number | undefined;
};

export class ExceptionBadRequestDTO extends Error {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;

	/** The original data that was passed to this error instance. */
	data$: ExceptionBadRequestDTOData;

	/**
	 * Error name
	 */
	error?: string | undefined;

	/**
	 * Error status code
	 */
	statusCode?: number | undefined;

	/**
	 * Error timestamp
	 */
	timestamp?: number | undefined;

	constructor(error: ExceptionBadRequestDTOData) {
		const message = "message" in error && typeof error.message === "string" ? error.message : `API error occurred: ${JSON.stringify(error)}`;
		super(message);
		this.data$ = error;

		if (error.correlationID != undefined) this.correlationID = error.correlationID;

		if (error.error != undefined) this.error = error.error;

		if (error.statusCode != undefined) this.statusCode = error.statusCode;

		if (error.timestamp != undefined) this.timestamp = error.timestamp;

		this.name = "ExceptionBadRequestDTO";
	}
}

/** @internal */
export const ExceptionBadRequestDTO$inboundSchema: z.ZodType<ExceptionBadRequestDTO, z.ZodTypeDef, unknown> = z
	.object({
		correlationID: z.string().optional(),
		error: z.string().optional(),
		message: z.string().optional(),
		statusCode: z.number().optional(),
		timestamp: z.number().int().optional(),
	})
	.transform((v) => {
		return new ExceptionBadRequestDTO(v);
	});

/** @internal */
export type ExceptionBadRequestDTO$Outbound = {
	correlationID?: string | undefined;
	error?: string | undefined;
	message?: string | undefined;
	statusCode?: number | undefined;
	timestamp?: number | undefined;
};

/** @internal */
export const ExceptionBadRequestDTO$outboundSchema: z.ZodType<ExceptionBadRequestDTO$Outbound, z.ZodTypeDef, ExceptionBadRequestDTO> = z
	.instanceof(ExceptionBadRequestDTO)
	.transform((v) => v.data$)
	.pipe(
		z.object({
			correlationID: z.string().optional(),
			error: z.string().optional(),
			message: z.string().optional(),
			statusCode: z.number().optional(),
			timestamp: z.number().int().optional(),
		}),
	);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExceptionBadRequestDTO$ {
	/** @deprecated use `ExceptionBadRequestDTO$inboundSchema` instead. */
	export const inboundSchema = ExceptionBadRequestDTO$inboundSchema;
	/** @deprecated use `ExceptionBadRequestDTO$outboundSchema` instead. */
	export const outboundSchema = ExceptionBadRequestDTO$outboundSchema;
	/** @deprecated use `ExceptionBadRequestDTO$Outbound` instead. */
	export type Outbound = ExceptionBadRequestDTO$Outbound;
}
