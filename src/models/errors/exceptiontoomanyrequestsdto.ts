import * as z from "zod";

export type ExceptionTooManyRequestsDTOData = {
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

export class ExceptionTooManyRequestsDTO extends Error {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;

	/** The original data that was passed to this error instance. */
	data$: ExceptionTooManyRequestsDTOData;

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

	constructor(error: ExceptionTooManyRequestsDTOData) {
		const message = "message" in error && typeof error.message === "string" ? error.message : `API error occurred: ${JSON.stringify(error)}`;
		super(message);
		this.data$ = error;

		if (error.correlationID != undefined) this.correlationID = error.correlationID;

		if (error.error != undefined) this.error = error.error;

		if (error.statusCode != undefined) this.statusCode = error.statusCode;

		if (error.timestamp != undefined) this.timestamp = error.timestamp;

		this.name = "ExceptionTooManyRequestsDTO";
	}
}

/** @internal */
export const ExceptionTooManyRequestsDTO$inboundSchema: z.ZodType<ExceptionTooManyRequestsDTO, z.ZodTypeDef, unknown> = z
	.object({
		correlationID: z.string().optional(),
		error: z.string().optional(),
		message: z.string().optional(),
		statusCode: z.number().optional(),
		timestamp: z.number().int().optional(),
	})
	.transform((v) => {
		return new ExceptionTooManyRequestsDTO(v);
	});

/** @internal */
export type ExceptionTooManyRequestsDTO$Outbound = {
	correlationID?: string | undefined;
	error?: string | undefined;
	message?: string | undefined;
	statusCode?: number | undefined;
	timestamp?: number | undefined;
};

/** @internal */
export const ExceptionTooManyRequestsDTO$outboundSchema: z.ZodType<ExceptionTooManyRequestsDTO$Outbound, z.ZodTypeDef, ExceptionTooManyRequestsDTO> = z
	.instanceof(ExceptionTooManyRequestsDTO)
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
export namespace ExceptionTooManyRequestsDTO$ {
	/** @deprecated use `ExceptionTooManyRequestsDTO$inboundSchema` instead. */
	export const inboundSchema = ExceptionTooManyRequestsDTO$inboundSchema;
	/** @deprecated use `ExceptionTooManyRequestsDTO$outboundSchema` instead. */
	export const outboundSchema = ExceptionTooManyRequestsDTO$outboundSchema;
	/** @deprecated use `ExceptionTooManyRequestsDTO$Outbound` instead. */
	export type Outbound = ExceptionTooManyRequestsDTO$Outbound;
}
