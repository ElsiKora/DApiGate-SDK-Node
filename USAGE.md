<!-- Start SDK Example Usage [usage] -->

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bankAlias.bankAliasControllerSearch({
		name: "sber",
	});

	// Handle the result
	console.log(result);
}

run();
```

<!-- End SDK Example Usage [usage] -->
