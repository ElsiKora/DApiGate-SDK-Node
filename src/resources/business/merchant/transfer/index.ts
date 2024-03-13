import { Base } from "../../../base";
import { Merchant } from "@elsikora/ecorpay-types";
import { ETransferUrls } from "./urls";
export class Transfer extends Base {
  /**
   * Initiates a new transfer.
   * @param {Merchant.Transfer.TCreate} transferData - The data for the transfer to be created.
   * @param {string} transferData.way - The identifier of the way to be used for the transfer.
   * @param {number} transferData.amount - The monetary amount to be transferred.
   * @param {string} transferData.internalID - An internal identifier for the transaction.
   * @param {string} transferData.customerID - The unique identifier for the customer.
   * @param {string} transferData.purse - The purse information for the transfer.
   * @param {string} transferData.description - A description of the transfer.
   * @param {string} transferData.ip - The IP address from which the transfer request is made.
   * @returns {Promise<Merchant.Transfer.TResponse>} A promise that resolves with the transfer response, containing details of the initiated transfer.
   */
  async create({
    way,
    amount,
    internalID,
    customerID,
    description,
    purse,
    ip,
  }: Merchant.Transfer.TCreate): Promise<Merchant.Transfer.TResponse> {
    return this.request<Merchant.Transfer.TResponse>(ETransferUrls.TRANSFER_CREATE, {
      data: { way, amount, internalID, customerID, description, ip, purse },
      headers: { ...this.getConfigToSign() },
      method: "POST",
    });
  };


   /**
   * Retrieves a paginated list of transfer based on the provided filters.
   * @param {Merchant.Transfer.TPaginationFilters} params - Filters used to retrieve the transfer list.
   * @returns {Promise<Merchant.Transfer.TResponsePagination>} A promise that resolves to a paginated response of transfers.
   */
  async getTransferList(
    params: Merchant.Transfer.TPaginationFilters
  ): Promise<Merchant.Transfer.TResponsePagination> {
    return this.request<Merchant.Transfer.TResponsePagination>(
      ETransferUrls.TRANSFER_LIST,
      {
        params,
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  }

    /**
   * Retrieves details of a specific transfer by its ID.
   * @param {Merchant.Transfer.TFindByTd} findByIdParams - The identifier of the transfer to retrieve.
   * @returns {Promise<Merchant.Transfer.TResponse>} A promise that resolves to the details of the transfer.
   */

  async getTransfer({
    id,
  }: Merchant.Transfer.TFindByTd): Promise<Merchant.Transfer.TResponse> {
    return this.request<Merchant.Transfer.TResponse>(
      ETransferUrls.TRANSFER.replace(":id", id),
      {
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  };
}
