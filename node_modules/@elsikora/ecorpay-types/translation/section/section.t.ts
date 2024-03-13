export interface ICreate {
  name: string;
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

export interface IResponse {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
