import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { emailEmailControllerGet } from "../funcs/emailEmailControllerGet.js";
import { unwrapAsync } from "../types/fp.js";

export class Email extends ClientSDK {
	/**
	 * Fetching `Email`
	 *
	 * @remarks
	 * This method is used for fetching `Email`
	 */
	async emailControllerGet(request: operations.EmailControllerGetRequest, options?: RequestOptions): Promise<components.EmailGetResponseDTO> {
		return unwrapAsync(emailEmailControllerGet(this, request, options));
	}
}
