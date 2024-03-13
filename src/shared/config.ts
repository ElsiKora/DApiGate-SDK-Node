import { EAuthenticationMerchantAlgorithm } from "./signHeaders";

export const API_BASE_URL_PROD = 'https://reaper.ecorpay.com/v1/';

export type TConfigWallet = {
  jwt: string | undefined;
};

export type TConfigBusiness = {
  key: string;
  hashingAlgorithm?: EAuthenticationMerchantAlgorithm | string;
  secret: string;
  jwt?: string | undefined;
};
