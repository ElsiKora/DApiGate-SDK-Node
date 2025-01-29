# BankControllerApiControllerGetlistRequest

## Example Usage

```typescript
import { BankControllerApiControllerGetlistRequest } from "dapigate-sdk-node/models/operations";

let value: BankControllerApiControllerGetlistRequest = {
	limit: 1,
	orderBy: "createdAt",
	orderDirection: "asc",
	page: 1,
	createdAtValue: new Date("2025-01-01T00:00:00.000Z"),
	createdAtOperator: "between",
	createdAtValues: ["2025-01-01T00:00:00.000Z"],
	nameValue: "raiffeisen",
	nameOperator: "cont",
	nameValues: ["raiffeisen"],
	updatedAtValue: new Date("2025-01-01T00:00:00.000Z"),
	updatedAtOperator: "between",
	updatedAtValues: ["2025-01-01T00:00:00.000Z"],
};
```

## Fields

| Field               | Type                                                                                          | Required           | Description          | Example                                |
| ------------------- | --------------------------------------------------------------------------------------------- | ------------------ | -------------------- | -------------------------------------- |
| `limit`             | _number_                                                                                      | :heavy_check_mark: | Bank Items per page  | 1                                      |
| `orderBy`           | [operations.OrderBy](../../models/operations/orderby.md)                                      | :heavy_minus_sign: | Bank order by field  | createdAt                              |
| `orderDirection`    | [operations.OrderDirection](../../models/operations/orderdirection.md)                        | :heavy_minus_sign: | Bank order direction | asc                                    |
| `page`              | _number_                                                                                      | :heavy_check_mark: | Bank Page to return  | 1                                      |
| `createdAtValue`    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign: | Bank createdAt to    | 2025-01-01T00:00:00.000Z               |
| `createdAtOperator` | [operations.CreatedAtOperator](../../models/operations/createdatoperator.md)                  | :heavy_minus_sign: | Bank                 | between                                |
| `createdAtValues`   | _any_[]                                                                                       | :heavy_minus_sign: | Bank createdAt to    | [<br/>"2025-01-01T00:00:00.000Z"<br/>] |
| `nameValue`         | _string_                                                                                      | :heavy_minus_sign: | Bank name            | raiffeisen                             |
| `nameOperator`      | [operations.NameOperator](../../models/operations/nameoperator.md)                            | :heavy_minus_sign: | Bank name            | cont                                   |
| `nameValues`        | _any_[]                                                                                       | :heavy_minus_sign: | Bank name            | [<br/>"raiffeisen"<br/>]               |
| `updatedAtValue`    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign: | Bank updatedAt to    | 2025-01-01T00:00:00.000Z               |
| `updatedAtOperator` | [operations.UpdatedAtOperator](../../models/operations/updatedatoperator.md)                  | :heavy_minus_sign: | Bank                 | between                                |
| `updatedAtValues`   | _any_[]                                                                                       | :heavy_minus_sign: | Bank updatedAt to    | [<br/>"2025-01-01T00:00:00.000Z"<br/>] |
