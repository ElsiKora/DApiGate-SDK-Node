# Phone

(_phone_)

## Overview

### Available Operations

- [phoneControllerGet](#phonecontrollerget) - Fetching `Phone`

## phoneControllerGet

This method is used for fetching `Phone`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.phone.phoneControllerGet({
		phone: 18143008867,
	});

	// Handle the result
	console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DapiGateCore } from "dapigate-sdk-node/core.js";
import { phonePhoneControllerGet } from "dapigate-sdk-node/funcs/phonePhoneControllerGet.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await phonePhoneControllerGet(dapiGate, {
		phone: 18143008867,
	});

	if (!res.ok) {
		throw res.error;
	}

	const { value: result } = res;

	// Handle the result
	console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                         | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PhoneControllerGetRequest](../../models/operations/phonecontrollergetrequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                               | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)      | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PhoneGetResponseDTO](../../models/components/phonegetresponsedto.md)\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |
