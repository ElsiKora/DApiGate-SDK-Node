# ProxyControllerGetListRequest

## Example Usage

```typescript
import { ProxyControllerGetListRequest } from "dapigate-sdk-node/models/operations";

let value: ProxyControllerGetListRequest = {
	limit: 1,
	page: 1,
	country: "US",
};
```

## Fields

| Field     | Type     | Required           | Description                        | Example |
| --------- | -------- | ------------------ | ---------------------------------- | ------- |
| `limit`   | _number_ | :heavy_check_mark: | ProxyGetResponseDTO Items per page | 1       |
| `page`    | _number_ | :heavy_check_mark: | ProxyGetResponseDTO Page to return | 1       |
| `country` | _string_ | :heavy_minus_sign: | Proxy code                         | US      |
