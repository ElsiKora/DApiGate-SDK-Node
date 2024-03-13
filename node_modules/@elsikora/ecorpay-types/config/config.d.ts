import * as SectionType from './section/section.t';
import * as DataType from './data/data.t';

export declare namespace Config {
  namespace Section {
    export type TCreate = SectionType.ICreate;
    export type TFindByTd = SectionType.IFindById;
    export type TUpdate = SectionType.IUpdate;
    export type TDelete = SectionType.IDelete;
    export type TResponse = SectionType.IResponse;
  }
  namespace Data {
    export type TCreate = DataType.ICreate;
    export type TFindByTd = DataType.IFindById;
    export type TPaginationFilters = DataType.IPaginationFilters;
    export type TUpdate = DataType.IUpdate;
    export type TDelete = DataType.IDelete;
    export type TResponse = DataType.IResponse;
  }
}
