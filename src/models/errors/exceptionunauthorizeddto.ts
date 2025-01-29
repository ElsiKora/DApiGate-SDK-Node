import * as z from "zod";

export type ExceptionUnauthorizedDTOData = {
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

export class ExceptionUnauthorizedDTO extends Error {
	/**
	 * Correlation identifier
	 */
	correlationID?: string | undefined;

	/** The original data that was passed to this error instance. */
	data$: ExceptionUnauthorizedDTOData;

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

	constructor(error: ExceptionUnauthorizedDTOData) {
		const message = "message" in error && typeof error.message === "string" ? error.message : `API error occurred: ${JSON.stringify(error)}`;
		super(message);
		this.data$ = error;

		if (error.correlationID != undefined) this.correlationID = error.correlationID;

		if (error.error != undefined) this.error = error.error;

		if (error.statusCode != undefined) this.statusCode = error.statusCode;

		if (error.timestamp != undefined) this.timestamp = error.timestamp;

		this.name = "ExceptionUnauthorizedDTO";
	}
}

/** @internal */
export const ExceptionUnauthorizedDTO$inboundSchema: z.ZodType<ExceptionUnauthorizedDTO, z.ZodTypeDef, unknown> = z
	.object({
		correlationID: z.string().optional(),
		error: z.string().optional(),
		message: z.string().optional(),
		statusCode: z.number().optional(),
		timestamp: z.number().int().optional(),
	})
	.transform((v) => {
		return new ExceptionUnauthorizedDTO(v);
	});

/** @internal */
export type ExceptionUnauthorizedDTO$Outbound = {
	correlationID?: string | undefined;
	error?: string | undefined;
	message?: string | undefined;
	statusCode?: number | undefined;
	timestamp?: number | undefined;
};

/** @internal */
export const ExceptionUnauthorizedDTO$outboundSchema: z.ZodType<ExceptionUnauthorizedDTO$Outbound, z.ZodTypeDef, ExceptionUnauthorizedDTO> = z
	.instanceof(ExceptionUnauthorizedDTO)
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
export namespace ExceptionUnauthorizedDTO$ {
	/** @deprecated use `ExceptionUnauthorizedDTO$inboundSchema` instead. */
	export const inboundSchema = ExceptionUnauthorizedDTO$inboundSchema;
	/** @deprecated use `ExceptionUnauthorizedDTO$outboundSchema` instead. */
	export const outboundSchema = ExceptionUnauthorizedDTO$outboundSchema;
	/** @deprecated use `ExceptionUnauthorizedDTO$Outbound` instead. */
	export type Outbound = ExceptionUnauthorizedDTO$Outbound;
}
