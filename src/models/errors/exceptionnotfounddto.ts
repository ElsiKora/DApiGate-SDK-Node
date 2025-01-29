import * as z from "zod";

export type ExceptionNotFoundDTOData = {
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

export class ExceptionNotFoundDTO extends Error {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;

	/** The original data that was passed to this error instance. */
	data$: ExceptionNotFoundDTOData;

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

	constructor(error: ExceptionNotFoundDTOData) {
		const message = "message" in error && typeof error.message === "string" ? error.message : `API error occurred: ${JSON.stringify(error)}`;
		super(message);
		this.data$ = error;

		if (error.correlationID != undefined) this.correlationID = error.correlationID;

		if (error.error != undefined) this.error = error.error;

		if (error.statusCode != undefined) this.statusCode = error.statusCode;

		if (error.timestamp != undefined) this.timestamp = error.timestamp;

		this.name = "ExceptionNotFoundDTO";
	}
}

/** @internal */
export const ExceptionNotFoundDTO$inboundSchema: z.ZodType<ExceptionNotFoundDTO, z.ZodTypeDef, unknown> = z
	.object({
		correlationID: z.string().optional(),
		error: z.string().optional(),
		message: z.string().optional(),
		statusCode: z.number().optional(),
		timestamp: z.number().int().optional(),
	})
	.transform((v) => {
		return new ExceptionNotFoundDTO(v);
	});

/** @internal */
export type ExceptionNotFoundDTO$Outbound = {
	correlationID?: string | undefined;
	error?: string | undefined;
	message?: string | undefined;
	statusCode?: number | undefined;
	timestamp?: number | undefined;
};

/** @internal */
export const ExceptionNotFoundDTO$outboundSchema: z.ZodType<ExceptionNotFoundDTO$Outbound, z.ZodTypeDef, ExceptionNotFoundDTO> = z
	.instanceof(ExceptionNotFoundDTO)
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
export namespace ExceptionNotFoundDTO$ {
	/** @deprecated use `ExceptionNotFoundDTO$inboundSchema` instead. */
	export const inboundSchema = ExceptionNotFoundDTO$inboundSchema;
	/** @deprecated use `ExceptionNotFoundDTO$outboundSchema` instead. */
	export const outboundSchema = ExceptionNotFoundDTO$outboundSchema;
	/** @deprecated use `ExceptionNotFoundDTO$Outbound` instead. */
	export type Outbound = ExceptionNotFoundDTO$Outbound;
}
