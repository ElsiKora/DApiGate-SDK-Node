import { IPaginationList, User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { EWayUrls } from './urls';

/**
 * The `Way` class manages the operations related to payment ways or methods.
 * It extends from the `Base` class, inheriting basic HTTP request methods.
 */
export class Way extends Base {
  
  /**
   * Retrieves a paginated list of payment ways.
   * @param {IPaginationList} paginationOptions - The pagination options.
   * @param {number} paginationOptions.limit - The number of records per page.
   * @param {number} paginationOptions.page - The page number to retrieve.
   * @returns {Promise<User.Way.TResponsePagination>} A promise resolving to a paginated response of payment ways.
   */
  async getWayList({ limit, page }: IPaginationList): Promise<User.Way.TResponsePagination> {
    return this.request<User.Way.TResponsePagination>(EWayUrls.WAY_LIST, {
      params: { limit, page },
      method: 'GET'
    });
  }

  /**
   * Retrieves detailed information about a specific payment way by its identifier.
   * @param {User.Way.TFindById} findParams - The identifier for the payment way.
   * @param {string} findParams.way - The unique identifier of the payment way.
   * @returns {Promise<User.Way.TResponse>} A promise resolving to the details of the specified payment way.
   */
  async getWay({ way }: User.Way.TFindById): Promise<User.Way.TResponse> {
    return this.request<User.Way.TResponse>(EWayUrls.WAY.replace(':id', way), {
      method: 'GET'
    });
  }
}

/**
 * Interface representing the fee structure for a merchant.
 * @typedef {Object} IMerchantFee
 * @property {Object} value - The fee values for deposit and transfer.
 * @property {number} value.deposit - The deposit fee value.
 * @property {number} value.transfer - The transfer fee value.
 * @property {number} depositRatio - The ratio for calculating deposit fees.
 * @property {boolean} transferType - Indicates the type of transfer fee.
 */

/**
 * Represents the type of purse associated with a payment way.
 * @typedef {('wallet'|'card')} TPurseType
 */

/**
 * Represents the type of currency associated with a payment way.
 * @typedef {('crypto'|'fiat')} TCurrencyType
 */

/**
 * Interface representing the identifier to find a payment way.
 * @typedef {Object} IFindById
 * @property {string} way - The unique identifier for the payment way.
 */

/**
 * Interface representing the structure of a payment way type.
 * @typedef {Object} IWayType
 * @property {string} id - The unique identifier of the way type.
 * @property {string} name - The name of the way type.
 * @property {string} pursePattern - The pattern for validating the purse.
 * @property {TPurseType} purseType - The type of purse associated with the way.
 * @property {string} mask - The mask for displaying the way.
 * @property {Date} [createdAt] - The creation date of the way type.
 * @property {Date} [updatedAt] - The last update date of the way type.
 */

/**
 * Interface representing the structure of a way currency.
 * @typedef {Object} IWayCurrency
 * @property {string} id - The unique identifier of the currency.
 * @property {string} code - The code of the currency.
 * @property {TCurrencyType} type - The type of the currency (crypto or fiat).
 * @property {number} precision - The precision of the currency.
 * @property {Date} [createdAt] - The creation date of the currency.
 * @property {Date} [updatedAt] - The last update date of the currency.
 */

/**
 * Interface representing the response with details of a payment way.
 * @typedef {Object} IResponse
 * @property {string} id - The unique identifier of the payment way.
 * @property {IWayType} type - The type structure of the payment way.
 * @property {boolean} deposit - Indicates if deposit is enabled for this way.
 * @property {IWayCurrency} currency - The currency structure associated with the way.
 * @property {boolean} transfer - Indicates if transfer is enabled for this way.
 * @property {IMerchantFee} fee - The fee structure for the payment way.
 * @property {boolean} enabled - Indicates if the payment way is currently enabled.
 */
