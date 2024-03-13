import { User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { ETransferUrls } from './urls';

/**
 * The `Transfer` class handles operations related to financial transfers.
 * It extends from the `Base` class, inheriting methods for making HTTP requests.
 */
export class Transfer extends Base {
  
  /**
   * Creates a new financial transfer.
   * @param {User.Transfer.TCreate} data - The data required to create a transfer.
   * @returns {Promise<User.Transfer.TResponseCreate>} A promise resolving to the response after creating a transfer.
   */
  async create(data: User.Transfer.TCreate): Promise<User.Transfer.TResponseCreate> {
    return this.request<User.Transfer.TResponseCreate>(ETransferUrls.CREATE_TRANSFER, {
      data,
      method: 'POST'
    });
  }

  /**
   * Retrieves a list of transfers with optional filters for pagination.
   * @param {User.Transfer.TPaginationFilters} data - The pagination and filtering options.
   * @returns {Promise<User.Transfer.TResponsePagination>} A promise resolving to a paginated list of transfers.
   */
  async getTransferList(data: User.Transfer.TPaginationFilters): Promise<User.Transfer.TResponsePagination> {
    return this.request<User.Transfer.TResponsePagination>(ETransferUrls.TRANSFER_LIST, {
      data,
      method: 'GET'
    });
  }

  /**
   * Retrieves a specific transfer by its identifier.
   * @param {User.Transfer.TFindById} findParams - The identifier to find a transfer.
   * @returns {Promise<User.Transfer.TResponse>} A promise resolving to the details of the specified transfer.
   */
  async getDeposit({ way }: User.Transfer.TFindById): Promise<User.Transfer.TResponse> {
    return this.request<User.Transfer.TResponse>(ETransferUrls.TRANSFER.replace(':id', way), {
      method: 'GET'
    });
  }
}

/**
 * Interface representing the parameters required to create a transfer.
 * @typedef {Object} ICreate
 * @property {string} way - The method or 'way' for the transfer.
 * @property {string} purse - The purse or account identifier for the transfer.
 * @property {number} amount - The monetary amount for the transfer.
 * @property {string} [description] - Optional description for the transfer.
 */

/**
 * Interface representing the identifier to find a transfer.
 * @typedef {Object} IFindById
 * @property {string} way - The unique identifier of the transfer 'way'.
 */

/**
 * Interface representing the response after creating a transfer.
 * @typedef {Object} IResponseCreate
 * @property {string} id - The unique identifier of the transfer.
 * @property {ETransferStatus} status - The current status of the transfer.
 * @property {Date} createdAt - The timestamp when the transfer was created.
 * @property {Date} updatedAt - The timestamp when the transfer was last updated.
 */

/**
 * Interface representing the details of a transfer transaction.
 * @typedef {Object} IResponse
 * @property {string} id - The unique identifier of the transfer.
 * @property {number} amount - The amount of the transfer.
 * @property {WayType} way - The method or 'way' used for the transfer.
 * @property {string} description - A description of the transfer.
 * @property {ETransferStatus} status - The status of the transfer.
 * @property {string} purse - The purse or account involved in the transfer.
 * @property {ETransferType} type - The type of the transfer (internal or external).
 * @property {boolean} internal - Indicates if the transfer is internal.
 * @property {Object} fee - The fee details for the transfer.
 * @property {number} fee.internal - The internal fee amount.
 * @property {boolean} fee.transferType - Indicates the type of transfer fee.
 * @property {string} internalSender - The identifier of the internal sender.
 * @property {Date} expiresIn - The expiration date of the transfer.
 * @property {Date} createdAt - The timestamp when the transfer was created.
 * @property {Date} updatedAt - The timestamp when the transfer was last updated.
 */

/**
 * Interface extending the base pagination list with additional filter options for transfers.
 * @typedef {IPaginationList} IPaginationFilters
 * @property {string} [description] - Optional filter by description.
 * @property {string} [way] - Optional filter by transfer way.
 * @property {string} [currency] - Optional filter by currency.
 * @property {Array<ETransferStatus>} status - Filter by transfer statuses.
 * @property {number} amountFrom - Filter for the minimum transfer amount.
 * @property {number} amountTo - Filter for the maximum transfer amount.
 * @property {string} dateFrom - Filter for the starting date of the transfers.
 * @property {string} dateTo - Filter for the ending date of the transfers.
 */