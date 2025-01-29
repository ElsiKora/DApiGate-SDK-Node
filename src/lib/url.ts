const hasOwn = Object.prototype.hasOwnProperty;

export type Params = Partial<Record<string, number | string>>;

export function pathToFunc(
	pathPattern: string,
	options?: {
		charEncoding?: "none" | "percent";
	},
): (parameters?: Params) => string {
	const parameterRE = /\{(\w+)\}/g;

	return function buildURLPath(parameters: Record<string, unknown> = {}): string {
		return pathPattern.replaceAll(parameterRE, function (_, placeholder) {
			if (!hasOwn.call(parameters, placeholder)) {
				throw new Error(`Parameter '${placeholder}' is required`);
			}

			const value = parameters[placeholder];

			if (typeof value !== "string" && typeof value !== "number") {
				throw new TypeError(`Parameter '${placeholder}' must be a string or number`);
			}

			return options?.charEncoding === "percent" ? encodeURIComponent(`${value}`) : `${value}`;
		});
	};
}
