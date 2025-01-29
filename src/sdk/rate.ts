import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { rateRateControllerGetSimpleList } from "../funcs/rateRateControllerGetSimpleList.js";
import { unwrapAsync } from "../types/fp.js";

export class Rate extends ClientSDK {
	/**
	 * Fetching simple list of `Rates`
	 *
	 * @remarks
	 * This method is used for fetching simple list of `Rates`
	 */
	async rateControllerGetSimpleList(request: operations.RateControllerGetSimpleListRequest, options?: RequestOptions): Promise<components.RateGetSimpleListResponseDTO> {
		return unwrapAsync(rateRateControllerGetSimpleList(this, request, options));
	}
}
