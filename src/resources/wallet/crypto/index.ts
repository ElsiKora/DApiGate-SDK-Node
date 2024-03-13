import { User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { ECryptoUrls } from './urls';

/**
 * The `Crypto` class manages operations for cryptocurrency methods.
 * It extends from the `Base` class, inheriting basic HTTP request methods.
 */

export class Crypto extends Base {
  /**
   * Retrieves information about a specific cryptocurrency way by its identifier.
   * @param {User.CryptoWay.TFindById} findParams - The identifier for the cryptocurrency way.
   * @param {string} findParams.way - The unique identifier of the cryptocurrency way to fetch.
   * @returns {Promise<User.CryptoWay.TResponse>} A promise resolving to the details of the specified cryptocurrency way.
   */
  async getCryptoWay({ way }: User.CryptoWay.TFindById): Promise<User.CryptoWay.TResponse> {
    return this.request<User.CryptoWay.TResponse>(ECryptoUrls.CRYPTO_WAY.replace(':id', way), { method: 'GET' });
  }
}
