import { IResponse as UserBalance } from "../balance/balance.t";

export interface IPatch {
  name: string;
  refreshToken?: string;
}

export interface IResponse {
  id: string;
  wallet: number;
  name: string;
  balance: UserBalance;
  createdAt: Date;
  updatedAt: Date;
};