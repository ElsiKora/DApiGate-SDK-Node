import { IPaginationList } from "../../../shared/shared.t";
import { IResponse as WayType } from "../../way/way.t";

export enum ETransferStatus {
	NEW = "new",
	WAITING = "waiting",
	PROCESS = "process",
	PAID = "paid",
	FAILED = "failed",
}

export enum ETransferType {
	EXTERNAL = "external",
	INTERNAL = "internal",
}

export interface ICreate {
  way: string;
  purse: string;
  amount: number;
  description?: string;
};

export interface IFindById {
  way: string;
};

export interface IResponseCreate {
  id: string;
  status: ETransferStatus;
  createdAt: Date;
  updatedAt: Date;
};

export interface IResponse {
  id: string;
  amount: number;
  way: WayType;
  description: string;
  status: ETransferStatus;
  purse: string;
  type: ETransferType;
  internal: boolean;
  fee: { internal: number;  transferType: boolean;}
  internalSender: string;
  expiresIn: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaginationFilters extends IPaginationList {
  description?: string;
  way?: string;
  currency?: string;
  status: Array<ETransferStatus>;
  amountFrom: number;
  amountTo: number;
  dateFrom: string;
  dateTo: string;
};