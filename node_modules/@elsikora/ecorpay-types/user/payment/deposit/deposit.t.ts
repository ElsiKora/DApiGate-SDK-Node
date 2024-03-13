import { IPaginationList } from "../../../shared/shared.t";
import { IResponse as WayType } from "../../way/way.t";

export enum EDepositStatus {
	NEW = "new",
	WAITING = "waiting",
	EXPIRED = "expired",
	REJECTED = "rejected",
	PAID = "paid",
	CANCELED = "canceled",
	FAILED = "failed",
};

export enum EDepositType {
	EXTERNAL = "external",
	INTERNAL = "internal",
	THREEDS = "3ds",
	QR = "qr",
	P2PCARD = "p2pcard",
	P2PWALLET = "p2pwallet",
	P2PCARD_BANK_SELECT = "p2pcardBankSelect",
	P2PWALLET_BANK_SELECT = "p2pwalletBankSelect",
	CRYPTO = "crypto",
}

export interface ICreate {
  way: string;
  amount: number;
};

export interface IFindById {
  way: string;
};

export interface IResponseCreate {
  id: string;
  status: EDepositStatus;
  createdAt: Date;
  updatedAt: Date;
};

export interface IResponse {
  id: string;
  amount: number;
  way: WayType;
  description: string;
  status: EDepositStatus;
  type: EDepositType;
  internal: boolean;
  fee: { internal: number;  depositRatio: number;}
  internalSender: string;
  expiresIn: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaginationFilters extends IPaginationList {
  description?: string;
  way?: string;
  currency?: string;
  status: Array<EDepositStatus>;
  amountFrom: number;
  amountTo: number;
  dateFrom: string;
  dateTo: string;
};