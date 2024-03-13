import { Base } from "../../../base";
import { Merchant } from "@elsikora/ecorpay-types";
import { EStatUrls } from "./urls";

/**
 * Handles all statistical data retrieval for the Ecorpay Merchant service.
 * Provides methods to retrieve statistics of deposits and transfers.
 */

export class Stat extends Base {

   /**
   * Retrieves statistical data for deposits based on the provided filters.
   * @param {Merchant.Stat.TFilter} params - The filters to apply on the statistical data retrieval.
   * @returns {Promise<Merchant.Stat.TResponse>} A promise that resolves to the statistical data of deposits.
   */
  async getStatDeposit(params : Merchant.Stat.TFilter): Promise<Merchant.Stat.TResponse> {
    return this.request<Merchant.Stat.TResponse>(EStatUrls.STAT_DEPOSIT, {
      headers: { ...this.getConfigToSign() },
      method: "GET",
      params
    });
  };

  /**
   * Retrieves statistical data for transfers based on the provided filters.
   * @param {Merchant.Stat.TFilter} params - The filters to apply on the statistical data retrieval.
   * @returns {Promise<Merchant.Stat.TResponse>} A promise that resolves to the statistical data of transfers.
   */
  async getStatTransfer(params : Merchant.Stat.TFilter): Promise<Merchant.Stat.TResponse> {
    return this.request<Merchant.Stat.TResponse>(EStatUrls.STAT_TRANSFER, {
      headers: { ...this.getConfigToSign() },
      method: "GET",
      params
    });
  };
}
