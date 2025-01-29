# RateGetSimpleListResponseDTO

## Example Usage

```typescript
import { RateGetSimpleListResponseDTO } from "dapigate-sdk-node/models/components";

let value: RateGetSimpleListResponseDTO = {
	items: [
		{
			currency: "EUR",
			rate: 1.100525,
		},
	],
	totalCount: 1,
};
```

## Fields

| Field        | Type                                                                             | Required           | Description                              | Example |
| ------------ | -------------------------------------------------------------------------------- | ------------------ | ---------------------------------------- | ------- |
| `items`      | [components.RateGetResponseDTO](../../models/components/rategetresponsedto.md)[] | :heavy_minus_sign: | Array of RateGetResponseDTO              |         |
| `totalCount` | _number_                                                                         | :heavy_minus_sign: | RateGetResponseDTO Total number of items | 1       |
