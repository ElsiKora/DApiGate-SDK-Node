# ExceptionTooManyRequestsDTO

## Example Usage

```typescript
import { ExceptionTooManyRequestsDTO } from "dapigate-sdk-node/models/errors";

// No examples available for this model
```

## Fields

| Field           | Type     | Required           | Description            | Example                              |
| --------------- | -------- | ------------------ | ---------------------- | ------------------------------------ |
| `correlationID` | _string_ | :heavy_minus_sign: | Correlation identifier | b8cbd648-137c-4af3-b68f-5859c3eb4872 |
| `error`         | _string_ | :heavy_minus_sign: | Error name             | TooManyRequests                      |
| `message`       | _string_ | :heavy_minus_sign: | Error message          | Error message                        |
| `statusCode`    | _number_ | :heavy_minus_sign: | Error status code      | 429                                  |
| `timestamp`     | _number_ | :heavy_minus_sign: | Error timestamp        | 1738130065790                        |
