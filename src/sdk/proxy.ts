import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { proxyProxyControllerGetList } from "../funcs/proxyProxyControllerGetList.js";
import { unwrapAsync } from "../types/fp.js";

export class Proxy extends ClientSDK {
	/**
	 * Fetching list of `Proxys`
	 *
	 * @remarks
	 * This method is used for fetching list of `Proxys`
	 */
	async proxyControllerGetList(request: operations.ProxyControllerGetListRequest, options?: RequestOptions): Promise<components.ProxyGetListResponseDTO> {
		return unwrapAsync(proxyProxyControllerGetList(this, request, options));
	}
}
