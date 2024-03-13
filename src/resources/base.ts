import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TConfigWallet, API_BASE_URL_PROD, TConfigBusiness } from '../shared/config';
import { TErrorResponse } from '@elsikora/ecorpay-types';
import { EApiRequestHeaders, signHeaders } from '../shared/signHeaders';
import { isConfigBusiness } from '..';

export abstract class Base {
  private jwt?: string;
  private http: AxiosInstance;
  private config?: TConfigWallet | TConfigBusiness;

  constructor(config?: TConfigWallet | TConfigBusiness) {
    this.jwt = config ? config.jwt : '';
    this.config = config;
    this.http = axios.create({
      baseURL: API_BASE_URL_PROD,
      headers: {
        Authorization: this.jwt && `Bearer ${this.jwt}`,
      },
    });

    this.http.interceptors.request.use(
      (config) => {
        if (this.jwt) {
          config.headers['Authorization'] = `Bearer ${this.jwt}`;
        }
        
        if (EApiRequestHeaders.HASH in config.headers && config.baseURL) {
          const apiToSign = {
            key: config.headers[EApiRequestHeaders.KEY],
            secret: config.headers[EApiRequestHeaders.SECRET],
            hash: config.headers[EApiRequestHeaders.HASH],
          };

          const signHeader = signHeaders(
            config.url,
            config.data || {},
            config.params,
            apiToSign.hash,
            apiToSign.secret,
            apiToSign.key
          );
          config.headers[EApiRequestHeaders.KEY] = signHeader[EApiRequestHeaders.KEY];
          config.headers[EApiRequestHeaders.SIGNATURE] = signHeader[EApiRequestHeaders.SIGNATURE];
          config.headers[EApiRequestHeaders.TIMESTAMP] = signHeader[EApiRequestHeaders.TIMESTAMP];
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  protected getConfigToSign() {
    if (isConfigBusiness(this.config))
    return {
      'X-Api-Key': this.config.key,
      'X-Api-Secret': this.config.secret,
      'X-Api-Hash': this.config.hashingAlgorithm
    };
  }
  public setJwt(jwt: string): void {
    this.jwt = jwt;
  }

  protected async request<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http({
        url: endpoint,
        ...options
      });
      return response.data;
    } catch (error : unknown) {
      throw (((error) as AxiosError<TErrorResponse>).response?.data);
    }
  }
}
