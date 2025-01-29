import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { ipIPControllerGet } from "../funcs/ipIPControllerGet.js";
import { unwrapAsync } from "../types/fp.js";

export class Ip extends ClientSDK {
	/**
	 * Fetching `IP`
	 *
	 * @remarks
	 * This method is used for fetching `IP`
	 */
	async ipControllerGet(request: operations.IpControllerGetRequest, options?: RequestOptions): Promise<components.IpGetResponseDTO> {
		return unwrapAsync(ipIPControllerGet(this, request, options));
	}
}
