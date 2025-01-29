# IpGetResponseDTO

## Example Usage

```typescript
import { IpGetResponseDTO } from "dapigate-sdk-node/models/components";

let value: IpGetResponseDTO = {
	country: "US",
	currency: "EUR",
	ip: "192.168.0.1",
};
```

## Fields

| Field      | Type     | Required           | Description     | Example     |
| ---------- | -------- | ------------------ | --------------- | ----------- |
| `country`  | _string_ | :heavy_minus_sign: | IP country code | US          |
| `currency` | _string_ | :heavy_minus_sign: | IP currency     | EUR         |
| `ip`       | _string_ | :heavy_minus_sign: | IP address      | 192.168.0.1 |
