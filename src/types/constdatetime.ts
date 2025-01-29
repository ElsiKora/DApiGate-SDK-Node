import * as z from "zod";

export function constDateTime(value: string): z.ZodType<string, z.ZodTypeDef, unknown> {
	return z.custom<string>((v) => {
		return typeof v === "string" && new Date(v).getTime() === new Date(value).getTime();
	}, `Value must be equivelant to ${value}`);
}
