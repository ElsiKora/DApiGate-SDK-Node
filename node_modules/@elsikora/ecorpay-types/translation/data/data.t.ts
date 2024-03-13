import { IPaginationList } from '../../shared/shared.t';

export interface ICreate {
  key: string;
  value: string;
  section: string;
  language: string;
}
export interface IFindById {
  id: string;
}

export interface IUpdate {
  id: string;
  key?: string;
  value?: string;
}

export interface IDelete {
  id: string;
}

export interface IPaginationFilters extends IPaginationList {
  language?: string;
  section?: string;
}

export interface IResponse {
  id: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

