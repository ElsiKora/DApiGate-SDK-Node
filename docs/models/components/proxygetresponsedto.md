# ProxyGetResponseDTO

## Example Usage

```typescript
import { ProxyGetResponseDTO } from "dapigate-sdk-node/models/components";

let value: ProxyGetResponseDTO = {
	country: "US",
	ip: "192.168.0.1",
	password: "login",
	port: 61740,
	username: "login",
};
```

## Fields

| Field      | Type     | Required           | Description    | Example     |
| ---------- | -------- | ------------------ | -------------- | ----------- |
| `country`  | _string_ | :heavy_minus_sign: | Proxy code     | US          |
| `ip`       | _string_ | :heavy_minus_sign: | Proxy IP       | 192.168.0.1 |
| `password` | _string_ | :heavy_minus_sign: | Proxy password | login       |
| `port`     | _number_ | :heavy_minus_sign: | Proxy port     | 61740       |
| `username` | _string_ | :heavy_minus_sign: | Proxy login    | login       |
