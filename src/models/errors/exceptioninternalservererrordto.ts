import * as z from "zod";

export type ExceptionInternalServerErrorDTOData = {
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

export class ExceptionInternalServerErrorDTO extends Error {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;

	/** The original data that was passed to this error instance. */
	data$: ExceptionInternalServerErrorDTOData;

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

	constructor(error: ExceptionInternalServerErrorDTOData) {
		const message = "message" in error && typeof error.message === "string" ? error.message : `API error occurred: ${JSON.stringify(error)}`;
		super(message);
		this.data$ = error;

		if (error.correlationID != undefined) this.correlationID = error.correlationID;

		if (error.error != undefined) this.error = error.error;

		if (error.statusCode != undefined) this.statusCode = error.statusCode;

		if (error.timestamp != undefined) this.timestamp = error.timestamp;

		this.name = "ExceptionInternalServerErrorDTO";
	}
}

/** @internal */
export const ExceptionInternalServerErrorDTO$inboundSchema: z.ZodType<ExceptionInternalServerErrorDTO, z.ZodTypeDef, unknown> = z
	.object({
		correlationID: z.string().optional(),
		error: z.string().optional(),
		message: z.string().optional(),
		statusCode: z.number().optional(),
		timestamp: z.number().int().optional(),
	})
	.transform((v) => {
		return new ExceptionInternalServerErrorDTO(v);
	});

/** @internal */
export type ExceptionInternalServerErrorDTO$Outbound = {
	correlationID?: string | undefined;
	error?: string | undefined;
	message?: string | undefined;
	statusCode?: number | undefined;
	timestamp?: number | undefined;
};

/** @internal */
export const ExceptionInternalServerErrorDTO$outboundSchema: z.ZodType<ExceptionInternalServerErrorDTO$Outbound, z.ZodTypeDef, ExceptionInternalServerErrorDTO> = z
	.instanceof(ExceptionInternalServerErrorDTO)
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
export namespace ExceptionInternalServerErrorDTO$ {
	/** @deprecated use `ExceptionInternalServerErrorDTO$inboundSchema` instead. */
	export const inboundSchema = ExceptionInternalServerErrorDTO$inboundSchema;
	/** @deprecated use `ExceptionInternalServerErrorDTO$outboundSchema` instead. */
	export const outboundSchema = ExceptionInternalServerErrorDTO$outboundSchema;
	/** @deprecated use `ExceptionInternalServerErrorDTO$Outbound` instead. */
	export type Outbound = ExceptionInternalServerErrorDTO$Outbound;
}
