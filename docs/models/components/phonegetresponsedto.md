# PhoneGetResponseDTO

## Example Usage

```typescript
import { PhoneGetResponseDTO } from "dapigate-sdk-node/models/components";

let value: PhoneGetResponseDTO = {
	carrier: "Carrier",
	country: "US",
	isValid: true,
	phone: 18143008867,
};
```

## Fields

| Field     | Type      | Required           | Description        | Example     |
| --------- | --------- | ------------------ | ------------------ | ----------- |
| `carrier` | _string_  | :heavy_minus_sign: | Phone carrier      | Carrier     |
| `country` | _string_  | :heavy_minus_sign: | Proxy code         | US          |
| `isValid` | _boolean_ | :heavy_minus_sign: | Phone valid status | true        |
| `phone`   | _number_  | :heavy_minus_sign: | Phone              | 18143008867 |
