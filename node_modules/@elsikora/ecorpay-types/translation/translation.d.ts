import * as SectionType from './section/section.t';
import * as LanguageType from './language/language.t';
import * as DataType from './data/data.t';

export declare namespace Translation {
  namespace Language {
    export type TCreate = LanguageType.ICreate;
    export type TFindByTd = LanguageType.IFindById;
    export type TUpdate = LanguageType.IUpdate;
    export type TDelete = LanguageType.IDelete;
    export type TResponse = LanguageType.IResponse;
    export type TResponsePagination = TPaginationResponse<Language.IResponse>
  }
  namespace Section {
    export type TCreate = SectionType.ICreate;
    export type TFindByTd = SectionType.IFindById;
    export type TUpdate = SectionType.IUpdate;
    export type TDelete = SectionType.IDelete;
    export type TResponse = SectionType.IResponse;
    export type TResponsePagination = TPaginationResponse<SectionType.IResponse>
  }
  namespace Data {
    export type TCreate = DataType.ICreate;
    export type TFindByTd = DataType.IFindById;
    export type TPaginationFilters = DataType.IPaginationFilters;
    export type TUpdate = DataType.IUpdate;
    export type TDelete = DataType.IDelete;
    export type TResponse = DataType.IResponse;
    export type TResponsePagination = TPaginationResponse<DataType.IResponse>
  }
}
