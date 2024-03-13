import { Base } from '../../base';
import { User } from '@elsikora/ecorpay-types';
import { EDepositUrls } from './urls';/**
* The `Deposit` class handles operations related to deposit transactions.
* It extends from the `Base` class, inheriting basic methods for HTTP requests.
*/
export class Deposit extends Base {
 
 /**
  * Creates a new deposit transaction.
  * @param {User.Deposit.TCreate} createParams - The parameters for creating a deposit.
  * @param {string} createParams.way - The method or 'way' through which the deposit is made.
  * @param {number} createParams.amount - The amount of the deposit.
  * @returns {Promise<User.Deposit.TResponseCreate>} A promise resolving to the newly created deposit transaction.
  */
 async create({ way, amount }: User.Deposit.TCreate): Promise<User.Deposit.TResponseCreate> {
   return this.request<User.Deposit.TResponseCreate>(EDepositUrls.CREATE_DEPOSIT, {
     data: { way, amount },
     method: 'POST'
   });
 }

 /**
  * Retrieves a list of deposit transactions with optional filters for pagination.
  * @param {User.Deposit.TPaginationFilters} data - The pagination and filtering options.
  * @returns {Promise<User.Deposit.TResponsePagination>} A promise resolving to a paginated list of deposit transactions.
  */
 async getDepositList(data: User.Deposit.TPaginationFilters): Promise<User.Deposit.TResponsePagination> {
   return this.request<User.Deposit.TResponsePagination>(EDepositUrls.DEPOSIT_LIST, {
     data,
     method: 'GET'
   });
 }

 /**
  * Retrieves a specific deposit transaction by its way identifier.
  * @param {User.Deposit.TFindById} findParams - The identifier for finding a deposit.
  * @param {string} findParams.way - The unique identifier of the deposit way.
  * @returns {Promise<User.Deposit.TResponse>} A promise resolving to the details of the specified deposit transaction.
  */
 async getDeposit({ way }: User.Deposit.TFindById): Promise<User.Deposit.TResponse> {
   return this.request<User.Deposit.TResponse>(EDepositUrls.DEPOSIT.replace(':id', way), {
     method: 'GET'
   });
 }
}

/**
* Interface representing the parameters required to create a deposit.
* @typedef {Object} ICreate
* @property {string} way - The method or 'way' for the deposit.
* @property {number} amount - The amount for the deposit.
*/

/**
* Interface representing the identifier to find a deposit.
* @typedef {Object} IFindById
* @property {string} way - The unique identifier of the deposit 'way'.
*/

/**
* Interface representing the response after creating a deposit.
* @typedef {Object} IResponseCreate
* @property {string} id - The unique identifier of the deposit transaction.
* @property {EDepositStatus} status - The current status of the deposit.
* @property {Date} createdAt - The creation timestamp of the deposit.
* @property {Date} updatedAt - The last update timestamp of the deposit.
*/

/**
* Interface representing the details of a deposit transaction.
* @typedef {Object} IResponse
* @property {string} id - The unique identifier of the deposit.
* @property {number} amount - The amount of the deposit.
* @property {WayType} way - The method or 'way' of the deposit.
* @property {string} description - A description of the deposit.
* @property {EDepositStatus} status - The status of the deposit.
* @property {EDepositType} type - The type of the deposit.
* @property {boolean} internal - Indicates if the deposit is internal.
* @property {Object} fee - The fee information for the deposit.
* @property {number} fee.internal - The internal fee amount.
* @property {number} fee.depositRatio - The deposit ratio fee amount.
* @property {string} internalSender - The internal sender identifier.
* @property {Date} expiresIn - The expiration date of the deposit.
* @property {Date} createdAt - The creation timestamp of the deposit.
* @property {Date} updatedAt - The last update timestamp of the deposit.
*/

/**
* Interface extending the base pagination list with additional filter options for deposits.
* @typedef {IPaginationList} IPaginationFilters
* @property {string} [description] - Optional filter by description.
* @property {string} [way] - Optional filter by deposit way.
* @property {string} [currency] - Optional filter by currency.
* @property {Array<EDepositStatus>} status - Filter by deposit statuses.
* @property {number} amountFrom - Filter for the minimum amount.
* @property {number} amountTo - Filter for the maximum amount.
* @property {string} dateFrom - Filter for the starting date.
* @property {string} dateTo - Filter for the ending date.
*/