import type { RequestOptions } from "../lib/sdks.js";
import { ClientSDK } from "../lib/sdks.js";
import type * as components from "../models/components/index.js";
import type * as operations from "../models/operations/index.js";

import { bankBankControllerApiControllerDelete } from "../funcs/bankBankControllerApiControllerDelete.js";
import { bankBankControllerApiControllerGet } from "../funcs/bankBankControllerApiControllerGet.js";
import { bankBankControllerApiControllerGetlist } from "../funcs/bankBankControllerApiControllerGetlist.js";
import { bankBankControllerApiControllerPartialupdate } from "../funcs/bankBankControllerApiControllerPartialupdate.js";
import { bankBankControllerApiControllerUpdate } from "../funcs/bankBankControllerApiControllerUpdate.js";
import { unwrapAsync } from "../types/fp.js";

export class Bank extends ClientSDK {
	/**
	 * Deleting `Bank`
	 *
	 * @remarks
	 * This method is used for deleting `Bank`
	 */
	async bankControllerApiControllerDelete(request: operations.BankControllerApiControllerDeleteRequest, options?: RequestOptions): Promise<void> {
		return unwrapAsync(bankBankControllerApiControllerDelete(this, request, options));
	}

	/**
	 * Fetching `Bank`
	 *
	 * @remarks
	 * This method is used for fetching `Bank`
	 */
	async bankControllerApiControllerGet(request: operations.BankControllerApiControllerGetRequest, options?: RequestOptions): Promise<components.BankGetResponseDTO> {
		return unwrapAsync(bankBankControllerApiControllerGet(this, request, options));
	}

	/**
	 * Fetching list of `Banks`
	 *
	 * @remarks
	 * This method is used for fetching list of `Banks`
	 */
	async bankControllerApiControllerGetlist(request: operations.BankControllerApiControllerGetlistRequest, options?: RequestOptions): Promise<components.ApiListGetResponse> {
		return unwrapAsync(bankBankControllerApiControllerGetlist(this, request, options));
	}

	/**
	 * Updating `Bank`
	 *
	 * @remarks
	 * This method is used for updating `Bank`
	 */
	async bankControllerApiControllerPartialupdate(request: operations.BankControllerApiControllerPartialupdateRequest, options?: RequestOptions): Promise<components.BankPartialUpdateResponseDTO> {
		return unwrapAsync(bankBankControllerApiControllerPartialupdate(this, request, options));
	}

	/**
	 * Updating `Bank`
	 *
	 * @remarks
	 * This method is used for updating `Bank`
	 */
	async bankControllerApiControllerUpdate(request: operations.BankControllerApiControllerUpdateRequest, options?: RequestOptions): Promise<components.BankUpdateResponseDTO> {
		return unwrapAsync(bankBankControllerApiControllerUpdate(this, request, options));
	}
}
