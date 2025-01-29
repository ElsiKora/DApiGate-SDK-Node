import type {DapiGateCore} from "../core.js";
import type {RequestOptions} from "../lib/sdks.js";
import type {APIError} from "../models/errors/apierror.js";
import type {
	ConnectionError,
	InvalidRequestError,
	RequestAbortedError,
	RequestTimeoutError,
	UnexpectedClientError
} from "../models/errors/httpclienterrors.js";
import type {SDKValidationError} from "../models/errors/sdkvalidationerror.js";
import type {Result} from "../types/fp.js";

import {encodeSimple} from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import {compactMap} from "../lib/primitives.js";
import {safeParse} from "../lib/schemas.js";
import {pathToFunc as pathToFunction} from "../lib/url.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

/**
 * Fetching `Bank`
 *
 * @remarks
 * This method is used for fetching `Bank`
 */
export async function bankBankControllerApiControllerGet(client: DapiGateCore, request: operations.BankControllerApiControllerGetRequest, options?: RequestOptions): Promise<Result<components.BankGetResponseDTO, APIError | ConnectionError | errors.ExceptionInternalServerErrorDTO | errors.ExceptionNotFoundDTO | errors.ExceptionUnauthorizedDTO | InvalidRequestError | RequestAbortedError | RequestTimeoutError | SDKValidationError | UnexpectedClientError>> {
	const parsed = safeParse(request, (value) => operations.BankControllerApiControllerGetRequest$outboundSchema.parse(value), "Input validation failed");

	if (!parsed.ok) {
		return parsed;
	}
	const payload = parsed.value;
	const body = null;

	const pathParameters = {
		id: encodeSimple("id", payload.id, {
			charEncoding: "percent",
			explode: false,
		}),
	};

	const path = pathToFunction("/v1/bank/{id}")(pathParameters);

	const headers = new Headers(
		compactMap({
			Accept: "application/json",
		}),
	);

	const context = {
		oAuth2Scopes: [],
		operationID: "BankController_apiControllerGet",

		resolvedSecurity: null,

		retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
		retryConfig: options?.retries || client._options.retryConfig || { strategy: "none" },
		securitySource: null,
	};

	const requestRes = client._createRequest(
		context,
		{
			baseURL: options?.serverURL,
			body: body,
			headers: headers,
			method: "GET",
			path: path,
			timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
		},
		options,
	);

	if (!requestRes.ok) {
		return requestRes;
	}
	const request_ = requestRes.value;

	const doResult = await client._do(request_, {
		context,
		errorCodes: ["401", "404", "4XX", "500", "5XX"],
		retryCodes: context.retryCodes,
		retryConfig: context.retryConfig,
	});

	if (!doResult.ok) {
		return doResult;
	}
	const response = doResult.value;

	const responseFields = {
		HttpMeta: { Request: request_, Response: response },
	};

	const [result] = await M.match<components.BankGetResponseDTO, APIError | ConnectionError | errors.ExceptionInternalServerErrorDTO | errors.ExceptionNotFoundDTO | errors.ExceptionUnauthorizedDTO | InvalidRequestError | RequestAbortedError | RequestTimeoutError | SDKValidationError | UnexpectedClientError>(
		M.json(200, components.BankGetResponseDTO$inboundSchema),
		M.jsonErr(401, errors.ExceptionUnauthorizedDTO$inboundSchema),
		M.jsonErr(404, errors.ExceptionNotFoundDTO$inboundSchema),
		M.jsonErr(500, errors.ExceptionInternalServerErrorDTO$inboundSchema),
		M.fail("4XX"),
		M.fail("5XX"),
	)(response, { extraFields: responseFields });

	if (!result.ok) {
		return result;
	}

	return result;
}
