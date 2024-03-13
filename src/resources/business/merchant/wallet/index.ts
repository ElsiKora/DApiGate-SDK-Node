import { Base } from "../../../base";
import { Merchant } from "@elsikora/ecorpay-types";
import { EWalletUrls } from "./urls";
export class Wallet extends Base {
  /**
   * Connect wallet to merchant.
   * @async
   * @param {Merchant.Wallet.TCreate} options - The wallet creation options.
   * @param {string} options.way - The method or 'way' used for creating a wallet.
   * @param {string} options.customerID - The unique identifier for the customer.
   * @returns {Promise<Merchant.Wallet.TResponse>} A promise that resolves to the wallet creation response.
   */
  async create({
    way,
    customerID
  }: Merchant.Wallet.TCreate): Promise<Merchant.Wallet.TResponse> {
    return this.request<Merchant.Wallet.TResponse>(EWalletUrls.WALLET, {
      data: { way, customerID, },
      headers: { ...this.getConfigToSign() },
      method: "POST",
    });
  }
}
