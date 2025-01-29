import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { bankAliasBankAliasControllerSearch } from "../funcs/bankAliasBankAliasControllerSearch.js";
import { unwrapAsync } from "../types/fp.js";

export class BankAlias extends ClientSDK {
	/**
	 * Searching for `BankAlias`
	 */
	async bankAliasControllerSearch(request: operations.BankAliasControllerSearchRequest, options?: RequestOptions): Promise<components.BankAliasGetResponseDTO> {
		return unwrapAsync(bankAliasBankAliasControllerSearch(this, request, options));
	}
}
