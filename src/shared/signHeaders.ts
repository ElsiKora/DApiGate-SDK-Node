import { blake2bHex } from 'blakejs';
import * as crypto from "crypto";

export enum EAuthenticationMerchantAlgorithm {
  BLAKE2B_512 = 'BLAKE2b512',
  SHA_512 = 'SHA512',
  SHA_256 = 'SHA256',
}

export enum EApiRequestHeaders {
  TIMESTAMP = 'X-Timestamp',
  SIGNATURE = 'X-Signature',
  KEY = 'X-Api-Key',
  SECRET = 'X-Api-Secret',
  HASH = 'X-Api-Hash',
}

type TParams = { [k: string]: number | string };
export const signHeaders = (
  requestUrl: string | undefined,
  data: Record<string, string>,
  params: TParams,
  sign: EAuthenticationMerchantAlgorithm,
  secret: string,
  key: string
) => {
  const timestamp: number = +new Date();
  let dataToSign: string;

  // Construct the data to sign based on the parameters and data

  if (params && Object.keys(params).length > 0) {
    dataToSign = `${timestamp}/v1/${requestUrl}?${new URLSearchParams(
      params as unknown as Record<string, string>
    ).toString()}${JSON.stringify(data)}`;
  } else dataToSign = `${timestamp}/v1/${requestUrl}${JSON.stringify(data)}`;


  // Decode the data to sign
  dataToSign = decodeURIComponent(dataToSign);
  // Generate the signature based on the authentication algorithm

  const secretKeyUint8Array = new TextEncoder().encode(secret);

  const algorithmMethod = {
    [EAuthenticationMerchantAlgorithm.BLAKE2B_512]: blake2bHex(dataToSign, secretKeyUint8Array),
    [EAuthenticationMerchantAlgorithm.SHA_256]: crypto.createHmac('SHA256', secret).update(dataToSign).digest("hex"),
    [EAuthenticationMerchantAlgorithm.SHA_512]: crypto.createHmac('SHA512', secret).update(dataToSign).digest("hex"),
  };

  const algorithm = algorithmMethod[sign];


  return {
    [EApiRequestHeaders.KEY]: key,
    [EApiRequestHeaders.TIMESTAMP]: timestamp,
    [EApiRequestHeaders.SIGNATURE]: algorithm,
  };
};