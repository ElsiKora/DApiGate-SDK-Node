export interface IPaginationList {
  limit: number;
  page: number;
}

export type TPaginationResponse<T> = {
  items: T[];
  count: number;
  totalCount: number;
  totalPages: number;
};

export type TErrorResponse = {
  statusCode: number;
  message: string | [{ constraints: Record<string, string>[] }];
};
