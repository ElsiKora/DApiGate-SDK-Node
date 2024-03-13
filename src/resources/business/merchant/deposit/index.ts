import { Base } from "../../../base";
import {
  IPaginationList,
  Merchant,
  TPaginationResponse,
} from "@elsikora/ecorpay-types";
import { EDepositUrls } from "./urls";
export class Deposit extends Base {
  /**
   * Creates a new deposit.
   * @param {Merchant.Deposit.TCreate} depositData - The data for the deposit to create.
   * @param {string} depositData.way - The identifier of the way to be used for the deposit.
   * @param {number} depositData.amount - The amount of money to deposit.
   * @param {string} depositData.internalID - The internal ID for the transaction.
   * @param {string} depositData.customerID - The customer's unique identifier.
   * @param {string} depositData.description - A description for the deposit.
   * @param {string} depositData.ip - The IP address from which the deposit is made.
   * @returns {Promise<Merchant.Deposit.TResponse>} A promise that resolves to the response of the deposit creation, including details of the deposit.
   */
  async create({
    way,
    amount,
    internalID,
    customerID,
    description,
    ip,
  }: Merchant.Deposit.TCreate): Promise<Merchant.Deposit.TResponseCreate> {
    return this.request<Merchant.Deposit.TResponseCreate>(
      EDepositUrls.DEPOSIT_CREATE,
      {
        data: { way, amount, internalID, customerID, description, ip },
        headers: { ...this.getConfigToSign() },
        method: "POST",
      }
    );
  }

   /**
   * Retrieves a paginated list of deposits based on the provided filters.
   * @param {Merchant.Deposit.TPaginationFilters} params - Filters used to retrieve the deposit list.
   * @returns {Promise<Merchant.Deposit.TResponsePagination>} A promise that resolves to a paginated response of deposits.
   */
  async getDepositList(
    params: Merchant.Deposit.TPaginationFilters
  ): Promise<Merchant.Deposit.TResponsePagination> {
    return this.request<Merchant.Deposit.TResponsePagination>(
      EDepositUrls.DEPOSIT_LIST,
      {
        params,
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  }

  /**
   * Retrieves details of a specific deposit by its ID.
   * @param {Merchant.Deposit.TFindByTd} findByIdParams - The identifier of the deposit to retrieve.
   * @returns {Promise<Merchant.Deposit.TResponse>} A promise that resolves to the details of the deposit.
   */
  async getDeposit({
    id,
  }: Merchant.Deposit.TFindByTd): Promise<Merchant.Deposit.TResponse> {
    return this.request<Merchant.Deposit.TResponse>(
      EDepositUrls.DEPOSIT.replace(":id", id),
      {
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  };
}
