import * as z from "zod";

export class SDKValidationError extends Error {
	/**
	 * The raw message that failed validation.
	 */
	public readonly rawMessage: unknown;

	/**
	 * The raw value that failed validation.
	 */
	public readonly rawValue: unknown;

	constructor(message: string, cause: unknown, rawValue: unknown) {
		super(`${message}: ${cause}`);
		this.name = "SDKValidationError";
		this.cause = cause;
		this.rawValue = rawValue;
		this.rawMessage = message;
	}

	/**
	 * Return a pretty-formatted error message if the underlying validation error
	 * is a ZodError or some other recognized error type, otherwise return the
	 * default error message.
	 */
	public pretty(): string {
		return this.cause instanceof z.ZodError ? `${this.rawMessage}\n${formatZodError(this.cause)}` : this.toString();
	}
}

export function formatZodError(error: z.ZodError, level = 0): string {
	let pre = "  ".repeat(level);
	pre = level > 0 ? `│${pre}` : pre;
	pre += " ".repeat(level);

	let message = "";
	const append = (string_: string) => (message += `\n${pre}${string_}`);

	const length = error.issues.length;
	const headline = length === 1 ? `${length} issue found` : `${length} issues found`;

	if (length) {
		append(`┌ ${headline}:`);
	}

	for (const issue of error.issues) {
		let path = issue.path.join(".");
		path = path ? `<root>.${path}` : "<root>";
		append(`│ • [${path}]: ${issue.message} (${issue.code})`);

		switch (issue.code) {
			case "invalid_enum_value": {
				append(`│     Allowed: ${issue.options.join(", ")}`);
				append(`│         Got: ${issue.received}`);

				break;
			}

			case "invalid_literal":

			case "invalid_type": {
				append(`│     Want: ${issue.expected}`);
				append(`│      Got: ${issue.received}`);

				break;
			}

			case "invalid_union_discriminator": {
				append(`│     Allowed: ${issue.options.join(", ")}`);

				break;
			}

			case "unrecognized_keys": {
				append(`│     Keys: ${issue.keys.join(", ")}`);

				break;
			}

			case "invalid_union": {
				const length = issue.unionErrors.length;
				append(`│   ✖︎ Attemped to deserialize into one of ${length} union members:`);

				for (const [index, error_] of issue.unionErrors.entries()) {
					append(`│   ✖︎ Member ${index + 1} of ${length}`);
					append(formatZodError(error_, level + 1));
				}
			}
		}
	}

	if (error.issues.length > 0) {
		append(`└─*`);
	}

	return message.slice(1);
}
