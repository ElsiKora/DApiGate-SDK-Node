import { Base } from '../../../base';
import { IPaginationList, Merchant, User } from '@elsikora/ecorpay-types';
import { EWaysUrls } from './urls';
/**
 * Ways service class for interacting with merchant way-related endpoints.
 */
export class Ways extends Base {
  /**
   * Retrieves a specific merchant way by ID.
   *
   * @param {Merchant.Ways.TFindByTd} findByID - The object containing the ID of the merchant way.
   * @param {string} findByID.id - The unique identifier for the merchant way.
   * @returns {Promise<Merchant.Ways.TResponseFindById>} A promise that resolves to the detailed information of the merchant way.
   */
  async getMerchantWay({ id }: Merchant.Ways.TFindByTd): Promise<Merchant.Ways.TResponseFindById> {
    return this.request<Merchant.Ways.TResponseFindById>(EWaysUrls.MERCHANT_WAY.replace(':id', id), { headers: {...this.getConfigToSign()} });
  };

  /**
   * Retrieves a paginated list of merchant ways.
   *
   * @param {IPaginationList} paginationParams - The pagination parameters.
   * @param {number} paginationParams.limit - The number of items per page.
   * @param {number} paginationParams.page - The current page number.
   * @returns {Promise<Merchant.Ways.TResponsePagination>} A promise that resolves to the paginated list of merchant ways, including items and pagination details.
   */
  async getMerchantWayList({ limit, page }: IPaginationList): Promise<Merchant.Ways.TResponsePagination> {
    return this.request<Merchant.Ways.TResponsePagination>(EWaysUrls.MERCHANT_WAY_LIST, { params: { limit, page }, headers: {...this.getConfigToSign()} });
  };
}
