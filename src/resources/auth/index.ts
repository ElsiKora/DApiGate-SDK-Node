import { User as AuthType } from '@elsikora/ecorpay-types'
import { EUserUrls } from './urls';
import { Base } from '../base';

export class Authorization extends Base {
  /**
   * Authenticates a user based on their wallet number. This method may be used to log in an existing user.
   * @param {ICreate} params - Parameters for user authentication containing the wallet number.
   * @returns {Promise<IResponseCreate>} A promise resolving to the authentication response including tokens and expiry information.
   */
  async authentication({ wallet }: AuthType.Auth.TCreate): Promise<AuthType.Auth.TResponsePatch> {
    return this.request<AuthType.Auth.TResponsePatch>(EUserUrls.USER_AUTH, { data: {wallet}, method: 'PATCH' })
  }

  /**
   * Confirms a user's action, typically the validation of an SMS code during two-factor authentication.
   * @param {IPatch} params - Parameters for the confirmation process including the code received by SMS and the confirmation ID.
   * @returns {Promise<IResponseCreate>} A promise resolving to the confirmation response including tokens and expiry information.
   */
  async confirmation({ code, confirmationId }: AuthType.Auth.TPatch): Promise<AuthType.Auth.TResponseCreate> {
    return this.request<AuthType.Auth.TResponseCreate>(EUserUrls.USER_CONFIRMATION + confirmationId, { data: {code}, method: 'PATCH' })
  }

  /**
   * Registers a new user with their wallet number. This method is used to create a new user account.
   * @param {ICreate} params - Parameters for user registration containing the wallet number.
   * @returns {Promise<IResponseCreate>} A promise resolving to the registration response including tokens and expiry information.
   */
  
  async registration({ wallet }: AuthType.Auth.TCreate): Promise<AuthType.Auth.TResponsePatch> {
    return this.request<AuthType.Auth.TResponsePatch>(EUserUrls.USER_AUTH, { data: {wallet}, method: 'POST' })
  }
}
