import { IResponse as  IMerchantBalance} from "../../user/balance/balance.t";
import { IResponse as IWay } from "../ways/ways.t";

export enum EMerchantStatus {
	ACTIVE = "active",
	MODERATION = "moderation",
	CONFIRMATION = "confirmation",
	SUSPENDED = "suspended",
	BLOCKED = "blocked",
};

export enum ERequestMethodEnum {
	GET = "GET",
	POST = "POST",
};

export enum EHashingAlgorithms {
	BLAKE2B_512 = "BLAKE2b512",
	SHA2_512 = "SHA512",
	SHA2_256 = "SHA256",
}

interface IMerchantCallbackParams {
  url: string;
  method: ERequestMethodEnum;
}

export interface IMerchantFee {
  value: {
    deposit: number;
    transfer: number;
  };
  depositRatio: number;
  transferType: boolean;
}

export interface IMerchantCallbacks {
  notification: IMerchantCallbackParams;
  success: IMerchantCallbackParams;
  fail: IMerchantCallbackParams;
}

export interface ICreate {
  name: string;
  host: string;
}
export interface IFindById {
  id: string;
}
export interface IUpdate {
  id: string;
  name: string;
}

export interface IDelete {
  id: string;
}

export interface IResponseCreate {
  id: string;
  status: EMerchantStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponse extends IResponseCreate {
  balance: IMerchantBalance;
  ways: IWay[];
  callback: IMerchantCallbacks;
  hashingAlgorithm: EHashingAlgorithms;
  key: string;
  secret: string;
}
