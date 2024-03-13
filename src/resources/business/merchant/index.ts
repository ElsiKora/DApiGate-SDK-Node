import { Deposit } from "./deposit";
import { Transfer } from "./transfer";
import { Ways } from "./ways";
import { TConfigBusiness } from "../../../shared/config";
import { EAuthenticationMerchantAlgorithm } from "../../../shared/signHeaders";
import { Wallet } from "./wallet";
import { Base } from "resources/base";
import {
  IPaginationList,
  Merchant as MerchantTypes,
} from "@elsikora/ecorpay-types";
import { EMerchantUrls } from "./urls";
export class Merchant extends Base {
  ways: Ways;
  deposit: Deposit;
  transfer: Transfer;
  wallet: Wallet;

  #prepareConfig(config: TConfigBusiness) {
    if (typeof config.hashingAlgorithm === "undefined")
      config.hashingAlgorithm = EAuthenticationMerchantAlgorithm.SHA_512;

    return config;
  }

  /**
   * Creates a new merchant entity with the specified details.
   * @param {MerchantTypes.Owner.TCreate} data - The data object containing all necessary information to create a new merchant.
   * @param {string} data.name - The name of the new merchant.
   * @param {string} data.host - The host URL for the new merchant.
   * @returns {Promise<MerchantTypes.Owner.TResponseCreate>} A promise that resolves to the response object after creating a merchant.
   */

  async create(
    data: MerchantTypes.Owner.TCreate
  ): Promise<MerchantTypes.Owner.TResponseCreate> {
    return this.request<MerchantTypes.Owner.TResponseCreate>(
      EMerchantUrls.MERCHANT_CREATE,
      {
        data,
        headers: { ...this.getConfigToSign() },
        method: "POST",
      }
    );
  }

  /**
   * Retrieves a paginated list of merchant.
   *
   * @param {IPaginationList} paginationParams - The pagination parameters.
   * @param {number} paginationParams.limit - The number of items per page.
   * @param {number} paginationParams.page - The current page number.
   * @returns {Promise<MerchantTypes.Owner.TResponsePagination>} A promise that resolves to the paginated list of merchant ways, including items and pagination details.
   */
  async getMerchantList({
    limit,
    page,
  }: IPaginationList): Promise<MerchantTypes.Owner.TResponsePagination> {
    return this.request<MerchantTypes.Owner.TResponsePagination>(
      EMerchantUrls.MERCHANT_LIST,
      {
        params: { limit, page },
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  }

  /**
   * Retrieves detailed information about a specific merchant based on the merchant's unique identifier.
   * @param {MerchantTypes.Owner.TFindByTd} identification - The identification object for the merchant.
   * @param {string} identification.id - The unique identifier of the merchant to retrieve.
   * @returns {Promise<MerchantTypes.Owner.TResponse>} A promise that resolves to the merchant's detailed information.
   */
  async getMerchant({
    id,
  }: MerchantTypes.Owner.TFindByTd): Promise<MerchantTypes.Owner.TResponse> {
    return this.request<MerchantTypes.Owner.TResponse>(
      EMerchantUrls.MERCHANT.replace(":id", id),
      {
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  }

  /**
   * Updates the name of an existing merchant.
   * @param {MerchantTypes.Owner.TUpdate} updateData - The data object containing the updated information for the merchant.
   * @param {string} updateData.id - The unique identifier of the merchant to update.
   * @param {string} updateData.name - The new name to be updated for the merchant.
   * @returns {Promise<MerchantTypes.Owner.TResponse>} A promise that resolves to the response object with the updated merchant information.
   */
  async updateMerchant({
    id,
    name,
  }: MerchantTypes.Owner.TUpdate): Promise<MerchantTypes.Owner.TResponse> {
    return this.request<MerchantTypes.Owner.TResponse>(
      EMerchantUrls.MERCHANT_UPDATE.replace(":id", id),
      {
        headers: { ...this.getConfigToSign() },
        method: "PATCH",
        data: { name },
      }
    );
  };

  async getVerifyType(): Promise<MerchantTypes.Verify.TResponsePagination> {
    return this.request<MerchantTypes.Verify.TResponsePagination>(
      EMerchantUrls.MERCHANT_VERIFY,
      {
        headers: { ...this.getConfigToSign() },
        method: "GET",
      }
    );
  };

  async verify({ type }: MerchantTypes.Verify.TPatch): Promise<MerchantTypes.Owner.TResponse> {
    return this.request<MerchantTypes.Owner.TResponse>(
      EMerchantUrls.MERCHANT_VERIFY,
      {
        headers: { ...this.getConfigToSign() },
        method: "PATCH",
        data: { type }
      }
    );
  };

  constructor(config: TConfigBusiness | undefined) {
    super();
    config =
      typeof config !== "undefined" ? this.#prepareConfig(config) : undefined;
    this.ways = new Ways(config);
    this.deposit = new Deposit(config);
    this.transfer = new Transfer(config);
    this.wallet = new Wallet(config);
  }
}
