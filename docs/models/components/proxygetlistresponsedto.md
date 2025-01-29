# ProxyGetListResponseDTO

## Example Usage

```typescript
import { ProxyGetListResponseDTO } from "dapigate-sdk-node/models/components";

let value: ProxyGetListResponseDTO = {
	count: 1,
	currentPage: 1,
	items: [
		{
			country: "US",
			ip: "192.168.0.1",
			password: "login",
			port: 61740,
			username: "login",
		},
	],
	totalCount: 1,
	totalPages: 1,
};
```

## Fields

| Field         | Type                                                                               | Required           | Description                                       | Example |
| ------------- | ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- | ------- |
| `count`       | _number_                                                                           | :heavy_minus_sign: | ProxyGetResponseDTO Total number of items on page | 1       |
| `currentPage` | _number_                                                                           | :heavy_minus_sign: | ProxyGetResponseDTO Current page number           | 1       |
| `items`       | [components.ProxyGetResponseDTO](../../models/components/proxygetresponsedto.md)[] | :heavy_minus_sign: | Array of ProxyGetResponseDTO                      |         |
| `totalCount`  | _number_                                                                           | :heavy_minus_sign: | ProxyGetResponseDTO Total number of items         | 1       |
| `totalPages`  | _number_                                                                           | :heavy_minus_sign: | ProxyGetResponseDTO Total number of pages         | 1       |
