import type { output, ZodEffects, ZodObject, ZodRawShape, ZodTypeAny } from "zod";
import { ZodError } from "zod";

import type { Result } from "../types/fp.js";
import { ERR, OK } from "../types/fp.js";

import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";

export function collectExtraKeys<Shape extends ZodRawShape, Catchall extends ZodTypeAny, K extends string>(object: ZodObject<Shape, "strip", Catchall>, extrasKey: K, optional: boolean): ZodEffects<typeof object, output<ZodObject<Shape, "strict">> & Record<K, Record<string, output<Catchall>>>> {
	return object.transform((value) => {
		const extras: Record<string, output<Catchall>> = {};
		const { shape } = object;

		for (const [key] of Object.entries(value)) {
			if (key in shape) {
				continue;
			}

			const v = value[key];

			if (v === undefined) {
				continue;
			}

			extras[key] = v;
			delete value[key];
		}

		if (optional && Object.keys(extras).length === 0) {
			return value;
		}

		return { ...value, [extrasKey]: extras };
	});
}

/**
 * Utility function that executes some code which may throw a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export function parse<Inp, Out>(rawValue: Inp, function_: (value: Inp) => Out, errorMessage: string): Out {
	try {
		return function_(rawValue);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new SDKValidationError(errorMessage, error, rawValue);
		}

		throw error;
	}
}

/**
 * Utility function that executes some code which may result in a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export function safeParse<Inp, Out>(rawValue: Inp, function_: (value: Inp) => Out, errorMessage: string): Result<Out, SDKValidationError> {
	try {
		return OK(function_(rawValue));
	} catch (error) {
		return ERR(new SDKValidationError(errorMessage, error, rawValue));
	}
}
