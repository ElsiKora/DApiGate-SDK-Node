import { Base } from '../../base';
import { EUserUrls } from './urls';
import { User as UserType } from '@elsikora/ecorpay-types';

/**
 * The `User` class handles operations related to user details within the system.
 * It extends from the `Base` class, inheriting methods for making HTTP requests.
 */
export class User extends Base {
  
  /**
   * Retrieves the current user's information.
   * @returns {Promise<UserType.Owner.TResponse>} A promise resolving to the user's details.
   */
  async getUser(): Promise<UserType.Owner.TResponse> {
    return this.request<UserType.Owner.TResponse>(EUserUrls.USER_DATA, { method: 'GET' });
  }

  /**
   * Updates the current user's name.
   * @param {UserType.Owner.TPatch} patchData - The data required to update the user's name.
   * @param {string} patchData.name - The new name for the user.
   * @param {string} [patchData.refreshToken] - The refresh token, if necessary for the operation.
   * @returns {Promise<UserType.Owner.TResponse>} A promise resolving to the updated user's details.
   */
  async updateUserName({ name, refreshToken } : UserType.Owner.TPatch): Promise<UserType.Owner.TResponse> {
    return this.request<UserType.Owner.TResponse>(EUserUrls.USER_DATA, {
      method: 'PATCH',
      data: { name, refreshToken }
    });
  }
}

/**
 * Interface representing the data required to update a user's name.
 * @typedef {Object} IPatch
 * @property {string} name - The new name to be set for the user.
 * @property {string} [refreshToken] - Optional refresh token for authorization purposes.
 */

/**
 * Interface representing the response structure with details of a user.
 * @typedef {Object} IResponse
 * @property {string} id - The unique identifier of the user.
 * @property {number} wallet - The wallet number associated with the user.
 * @property {string} name - The name of the user.
 * @property {UserBalance} balance - The user's balance details.
 * @property {Date} createdAt - The timestamp when the user was created.
 * @property {Date} updatedAt - The timestamp when the user's details were last updated.
 */