import { ECurrencyType, EOrderDirection } from "../../info/currency/currency.t";
import { IPaginationList } from "../../shared/shared.t";
import { IResponse as ICurrencyResponse } from "../../info/currency/currency.t";

export interface IPaginationFilters extends IPaginationList {
  type: ECurrencyType;
  order?: EOrderDirection;
};

export interface IFindById {
  id: string;
};

export interface IResponse {
  id: string;
  currency: ICurrencyResponse;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
};