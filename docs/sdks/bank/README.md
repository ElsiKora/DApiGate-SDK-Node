# Bank

(_bank_)

## Overview

### Available Operations

- [bankControllerApiControllerDelete](#bankcontrollerapicontrollerdelete) - Deleting `Bank`
- [bankControllerApiControllerGet](#bankcontrollerapicontrollerget) - Fetching `Bank`
- [bankControllerApiControllerPartialupdate](#bankcontrollerapicontrollerpartialupdate) - Updating `Bank`
- [bankControllerApiControllerUpdate](#bankcontrollerapicontrollerupdate) - Updating `Bank`
- [bankControllerApiControllerGetlist](#bankcontrollerapicontrollergetlist) - Fetching list of `Banks`

## bankControllerApiControllerDelete

This method is used for deleting `Bank`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	await dapiGate.bank.bankControllerApiControllerDelete({
		id: "8b0f5823-854f-476c-afba-c5357075f26d",
	});
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DapiGateCore } from "dapigate-sdk-node/core.js";
import { bankBankControllerApiControllerDelete } from "dapigate-sdk-node/funcs/bankBankControllerApiControllerDelete.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await bankBankControllerApiControllerDelete(dapiGate, {
		id: "8b0f5823-854f-476c-afba-c5357075f26d",
	});

	if (!res.ok) {
		throw res.error;
	}

	const { value: result } = res;
}

run();
```

### Parameters

| Parameter              | Type                                                                                                                       | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.BankControllerApiControllerDeleteRequest](../../models/operations/bankcontrollerapicontrollerdeleterequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                             | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                    | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                              | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |

## bankControllerApiControllerGet

This method is used for fetching `Bank`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bank.bankControllerApiControllerGet({
		id: "c6663fe7-157d-4441-9074-b20c82a77b4c",
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
import { bankBankControllerApiControllerGet } from "dapigate-sdk-node/funcs/bankBankControllerApiControllerGet.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await bankBankControllerApiControllerGet(dapiGate, {
		id: "c6663fe7-157d-4441-9074-b20c82a77b4c",
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

| Parameter              | Type                                                                                                                 | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.BankControllerApiControllerGetRequest](../../models/operations/bankcontrollerapicontrollergetrequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                       | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                              | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                        | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankGetResponseDTO](../../models/components/bankgetresponsedto.md)\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |

## bankControllerApiControllerPartialupdate

This method is used for updating `Bank`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bank.bankControllerApiControllerPartialupdate({
		id: "b15056a2-e609-4f04-bcae-1e6f9c232d1c",
		bankPartialUpdateBodyDTO: {
			iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			name: "raiffeisen",
		},
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
import { bankBankControllerApiControllerPartialupdate } from "dapigate-sdk-node/funcs/bankBankControllerApiControllerPartialupdate.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await bankBankControllerApiControllerPartialupdate(dapiGate, {
		id: "b15056a2-e609-4f04-bcae-1e6f9c232d1c",
		bankPartialUpdateBodyDTO: {
			iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			name: "raiffeisen",
		},
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

| Parameter              | Type                                                                                                                                     | Required           | Description                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.BankControllerApiControllerPartialupdateRequest](../../models/operations/bankcontrollerapicontrollerpartialupdaterequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                                           | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                  | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                            | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankPartialUpdateResponseDTO](../../models/components/bankpartialupdateresponsedto.md)\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionBadRequestDTO          | 400         | application/json |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |

## bankControllerApiControllerUpdate

This method is used for updating `Bank`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bank.bankControllerApiControllerUpdate({
		id: "d39021e6-4587-454e-b303-53eb2f18341a",
		bankUpdateBodyDTO: {
			iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			name: "raiffeisen",
		},
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
import { bankBankControllerApiControllerUpdate } from "dapigate-sdk-node/funcs/bankBankControllerApiControllerUpdate.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await bankBankControllerApiControllerUpdate(dapiGate, {
		id: "d39021e6-4587-454e-b303-53eb2f18341a",
		bankUpdateBodyDTO: {
			iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			name: "raiffeisen",
		},
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

| Parameter              | Type                                                                                                                       | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.BankControllerApiControllerUpdateRequest](../../models/operations/bankcontrollerapicontrollerupdaterequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                             | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                    | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                              | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankUpdateResponseDTO](../../models/components/bankupdateresponsedto.md)\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionBadRequestDTO          | 400         | application/json |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |

## bankControllerApiControllerGetlist

This method is used for fetching list of `Banks`

### Example Usage

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bank.bankControllerApiControllerGetlist({
		limit: 1,
		orderBy: "createdAt",
		orderDirection: "asc",
		page: 1,
		createdAtValue: new Date("2025-01-01T00:00:00.000Z"),
		createdAtOperator: "between",
		createdAtValues: ["2025-01-01T00:00:00.000Z"],
		nameValue: "raiffeisen",
		nameOperator: "cont",
		nameValues: ["raiffeisen"],
		updatedAtValue: new Date("2025-01-01T00:00:00.000Z"),
		updatedAtOperator: "between",
		updatedAtValues: ["2025-01-01T00:00:00.000Z"],
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
import { bankBankControllerApiControllerGetlist } from "dapigate-sdk-node/funcs/bankBankControllerApiControllerGetlist.js";

// Use `DapiGateCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const dapiGate = new DapiGateCore();

async function run() {
	const res = await bankBankControllerApiControllerGetlist(dapiGate, {
		limit: 1,
		orderBy: "createdAt",
		orderDirection: "asc",
		page: 1,
		createdAtValue: new Date("2025-01-01T00:00:00.000Z"),
		createdAtOperator: "between",
		createdAtValues: ["2025-01-01T00:00:00.000Z"],
		nameValue: "raiffeisen",
		nameOperator: "cont",
		nameValues: ["raiffeisen"],
		updatedAtValue: new Date("2025-01-01T00:00:00.000Z"),
		updatedAtOperator: "between",
		updatedAtValues: ["2025-01-01T00:00:00.000Z"],
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

| Parameter              | Type                                                                                                                         | Required           | Description                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.BankControllerApiControllerGetlistRequest](../../models/operations/bankcontrollerapicontrollergetlistrequest.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                               | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                      | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                | :heavy_minus_sign: | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiListGetResponse](../../models/components/apilistgetresponse.md)\>**

### Errors

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionUnauthorizedDTO        | 401         | application/json |
| errors.ExceptionNotFoundDTO            | 404         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |
