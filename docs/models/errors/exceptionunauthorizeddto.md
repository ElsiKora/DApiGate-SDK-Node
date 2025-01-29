# ExceptionUnauthorizedDTO

## Example Usage

```typescript
import { ExceptionUnauthorizedDTO } from "dapigate-sdk-node/models/errors";

// No examples available for this model
```

## Fields

| Field           | Type     | Required           | Description            | Example                              |
| --------------- | -------- | ------------------ | ---------------------- | ------------------------------------ |
| `correlationID` | _string_ | :heavy_minus_sign: | Correlation identifier | 1a4b6c86-ce3c-4473-99ae-a0246cdb721d |
| `error`         | _string_ | :heavy_minus_sign: | Error name             | Unauthorized                         |
| `message`       | _string_ | :heavy_minus_sign: | Error message          | Error message                        |
| `statusCode`    | _number_ | :heavy_minus_sign: | Error status code      | 401                                  |
| `timestamp`     | _number_ | :heavy_minus_sign: | Error timestamp        | 1738130065898                        |
