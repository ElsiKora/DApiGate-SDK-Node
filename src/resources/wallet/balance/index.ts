import { Base } from '../../base';
import { IPaginationList, User } from '@elsikora/ecorpay-types';
import { EBalanceUrls } from './urls';
/**
 * The `Balance` class handles operations related to the user's balance.
 * It extends from the `Base` class, inheriting basic HTTP request methods.
 */
export class Balance extends Base {

  /**
   * Retrieves a paginated list of user balances.
   * @param {IPaginationList} paginationParams - The pagination parameters.
   * @param {number} paginationParams.limit - The number of records to return per page.
   * @param {number} paginationParams.page - The current page number.
   * @returns {Promise<User.Balance.TResponsePagination>} A promise resolving to a paginated response of user balances.
   */
  async getBalanceList({ limit, page }: IPaginationList): Promise<User.Balance.TResponsePagination> {
    return this.request<User.Balance.TResponsePagination>(EBalanceUrls.USER_BALANCE_LIST, {
      params: { limit, page },
      method: 'GET'
    });
  }

  /**
   * Retrieves the balance details for a specific user by their ID.
   * @param {User.Balance.TFindByTd} findParams - The user identification parameters.
   * @param {string} findParams.id - The unique identifier of the user to fetch the balance for.
   * @returns {Promise<User.Balance.TResponsePagination>} A promise resolving to the balance details of the specified user.
   */
  async getBalance({ id }: User.Balance.TFindByTd): Promise<User.Balance.TResponsePagination> {
    return this.request<User.Balance.TResponsePagination>(EBalanceUrls.USER_BALANCE.replace(':id', id), {
      method: 'GET'
    });
  }
}
