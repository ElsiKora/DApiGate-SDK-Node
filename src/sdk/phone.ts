import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { phonePhoneControllerGet } from "../funcs/phonePhoneControllerGet.js";
import { unwrapAsync } from "../types/fp.js";

export class Phone extends ClientSDK {
	/**
	 * Fetching `Phone`
	 *
	 * @remarks
	 * This method is used for fetching `Phone`
	 */
	async phoneControllerGet(request: operations.PhoneControllerGetRequest, options?: RequestOptions): Promise<components.PhoneGetResponseDTO> {
		return unwrapAsync(phonePhoneControllerGet(this, request, options));
	}
}
