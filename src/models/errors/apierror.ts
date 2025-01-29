export class APIError extends Error {
	public readonly contentType: string;

	public readonly statusCode: number;

	constructor(
		message: string,
		public readonly rawResponse: Response,
		public readonly body: string = "",
	) {
		const statusCode = rawResponse.status;
		const contentType = rawResponse.headers.get("content-type") || "";
		const bodyString = body.length > 0 ? `\n${body}` : "";

		super(`${message}: Status ${statusCode} Content-Type ${contentType} Body ${bodyString}`);

		this.statusCode = statusCode;
		this.contentType = contentType;

		this.name = "APIError";
	}
}
