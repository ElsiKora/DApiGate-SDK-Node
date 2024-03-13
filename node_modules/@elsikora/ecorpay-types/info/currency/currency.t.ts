export enum ECurrencyType {
	FIAT = "fiat",
	CRYPTO = "crypto",
};

export enum EOrderDirection {
	DESC = "desc",
	ASC = "asc",
};

export interface IResponse {
  id: string;
  code: string;
  type: ECurrencyType;
  precision: number;
  createdAt: Date;
  updatedAt: Date;
}