export interface ICreate {
  code: string;
}
export interface IFindById {
  id: string;
}

export interface IUpdate {
  id: string;
  code: string;
}

export interface IDelete {
  id: string;
}

export interface IResponse {
  id: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}
