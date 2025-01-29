# dapigate-sdk-node

Developer-friendly & type-safe Typescript SDK specifically catered to leverage _dapigate-sdk-node_ API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=dapigate-sdk-node&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

> [!IMPORTANT] This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/elsikora/dapigate). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->

## Summary

DApiGate: DApiGate `Reaper API` documentation

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->

## Table of Contents

<!-- $toc-max-depth=2 -->

- [dapigate-sdk-node](#dapigate-sdk-node)
  - [SDK Installation](#sdk-installation)
  - [Requirements](#requirements)
  - [SDK Example Usage](#sdk-example-usage)
  - [Available Resources and Operations](#available-resources-and-operations)
  - [Standalone functions](#standalone-functions)
  - [Retries](#retries)
  - [Error Handling](#error-handling)
  - [Server Selection](#server-selection)
  - [Custom HTTP Client](#custom-http-client)
  - [Debugging](#debugging)
- [Development](#development)
  - [Maturity](#maturity)
  - [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->

## SDK Installation

> [!TIP] To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE] This package is published with CommonJS and ES Modules (ESM) support.

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [bank](docs/sdks/bank/README.md)

- [bankControllerApiControllerDelete](docs/sdks/bank/README.md#bankcontrollerapicontrollerdelete) - Deleting `Bank`
- [bankControllerApiControllerGet](docs/sdks/bank/README.md#bankcontrollerapicontrollerget) - Fetching `Bank`
- [bankControllerApiControllerPartialupdate](docs/sdks/bank/README.md#bankcontrollerapicontrollerpartialupdate) - Updating `Bank`
- [bankControllerApiControllerUpdate](docs/sdks/bank/README.md#bankcontrollerapicontrollerupdate) - Updating `Bank`
- [bankControllerApiControllerGetlist](docs/sdks/bank/README.md#bankcontrollerapicontrollergetlist) - Fetching list of `Banks`

### [bankAlias](docs/sdks/bankalias/README.md)

- [bankAliasControllerSearch](docs/sdks/bankalias/README.md#bankaliascontrollersearch) - Searching for `BankAlias`

### [email](docs/sdks/email/README.md)

- [emailControllerGet](docs/sdks/email/README.md#emailcontrollerget) - Fetching `Email`

### [ip](docs/sdks/ip/README.md)

- [ipControllerGet](docs/sdks/ip/README.md#ipcontrollerget) - Fetching `IP`

### [phone](docs/sdks/phone/README.md)

- [phoneControllerGet](docs/sdks/phone/README.md#phonecontrollerget) - Fetching `Phone`

### [proxy](docs/sdks/proxy/README.md)

- [proxyControllerGetList](docs/sdks/proxy/README.md#proxycontrollergetlist) - Fetching list of `Proxys`

### [rate](docs/sdks/rate/README.md)

- [rateControllerGetSimpleList](docs/sdks/rate/README.md#ratecontrollergetsimplelist) - Fetching simple list of `Rates`

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->

## Standalone functions

All the methods listed above are available as standalone functions. These functions are ideal for use in applications running in the browser, serverless runtimes or other environments where application bundle size is a primary concern. When using a bundler to build your application, all unused functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`bankAliasBankAliasControllerSearch`](docs/sdks/bankalias/README.md#bankaliascontrollersearch) - Searching for `BankAlias`
- [`bankBankControllerApiControllerDelete`](docs/sdks/bank/README.md#bankcontrollerapicontrollerdelete) - Deleting `Bank`
- [`bankBankControllerApiControllerGet`](docs/sdks/bank/README.md#bankcontrollerapicontrollerget) - Fetching `Bank`
- [`bankBankControllerApiControllerGetlist`](docs/sdks/bank/README.md#bankcontrollerapicontrollergetlist) - Fetching list of `Banks`
- [`bankBankControllerApiControllerPartialupdate`](docs/sdks/bank/README.md#bankcontrollerapicontrollerpartialupdate) - Updating `Bank`
- [`bankBankControllerApiControllerUpdate`](docs/sdks/bank/README.md#bankcontrollerapicontrollerupdate) - Updating `Bank`
- [`emailEmailControllerGet`](docs/sdks/email/README.md#emailcontrollerget) - Fetching `Email`
- [`ipIPControllerGet`](docs/sdks/ip/README.md#ipcontrollerget) - Fetching `IP`
- [`phonePhoneControllerGet`](docs/sdks/phone/README.md#phonecontrollerget) - Fetching `Phone`
- [`proxyProxyControllerGetList`](docs/sdks/proxy/README.md#proxycontrollergetlist) - Fetching list of `Proxys`
- [`rateRateControllerGetSimpleList`](docs/sdks/rate/README.md#ratecontrollergetsimplelist) - Fetching simple list of `Rates`

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate();

async function run() {
	const result = await dapiGate.bankAlias.bankAliasControllerSearch(
		{
			name: "sber",
		},
		{
			retries: {
				strategy: "backoff",
				backoff: {
					initialInterval: 1,
					maxInterval: 50,
					exponent: 1.1,
					maxElapsedTime: 100,
				},
				retryConnectionErrors: false,
			},
		},
	);

	// Handle the result
	console.log(result);
}

run();
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate({
	retryConfig: {
		strategy: "backoff",
		backoff: {
			initialInterval: 1,
			maxInterval: 50,
			exponent: 1.1,
			maxElapsedTime: 100,
		},
		retryConnectionErrors: false,
	},
});

async function run() {
	const result = await dapiGate.bankAlias.bankAliasControllerSearch({
		name: "sber",
	});

	// Handle the result
	console.log(result);
}

run();
```

<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->

## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the _Errors_ tables in SDK docs. For example, the `bankAliasControllerSearch` method may throw the following errors:

| Error Type                             | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.ExceptionBadRequestDTO          | 400         | application/json |
| errors.ExceptionTooManyRequestsDTO     | 429         | application/json |
| errors.ExceptionInternalServerErrorDTO | 500         | application/json |
| errors.APIError                        | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { DapiGate } from "dapigate-sdk-node";
import { ExceptionBadRequestDTO, ExceptionInternalServerErrorDTO, ExceptionTooManyRequestsDTO, SDKValidationError } from "dapigate-sdk-node/models/errors";

const dapiGate = new DapiGate();

async function run() {
	let result;
	try {
		result = await dapiGate.bankAlias.bankAliasControllerSearch({
			name: "sber",
		});

		// Handle the result
		console.log(result);
	} catch (err) {
		switch (true) {
			// The server response does not match the expected SDK schema
			case err instanceof SDKValidationError: {
				// Pretty-print will provide a human-readable multi-line error message
				console.error(err.pretty());
				// Raw value may also be inspected
				console.error(err.rawValue);
				return;
			}
			case err instanceof ExceptionBadRequestDTO: {
				// Handle err.data$: ExceptionBadRequestDTOData
				console.error(err);
				return;
			}
			case err instanceof ExceptionTooManyRequestsDTO: {
				// Handle err.data$: ExceptionTooManyRequestsDTOData
				console.error(err);
				return;
			}
			case err instanceof ExceptionInternalServerErrorDTO: {
				// Handle err.data$: ExceptionInternalServerErrorDTOData
				console.error(err);
				return;
			}
			default: {
				// Other errors such as network errors, see HTTPClientErrors for more details
				throw err;
			}
		}
	}
}

run();
```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error     | Description                                          |
| --------------------- | ---------------------------------------------------- |
| RequestAbortedError   | HTTP request was aborted by the client               |
| RequestTimeoutError   | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError       | HTTP client was unable to make a request to a server |
| InvalidRequestError   | Any input used to create a request is invalid        |
| UnexpectedClientError | Unrecognised or unexpected error                     |

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:

```typescript
import { DapiGate } from "dapigate-sdk-node";

const dapiGate = new DapiGate({
	serverURL: "https://reaper.dapigate.com",
});

async function run() {
	const result = await dapiGate.bankAlias.bankAliasControllerSearch({
		name: "sber",
	});

	// Handle the result
	console.log(result);
}

run();
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This client is a thin wrapper around `fetch` and provides the ability to attach hooks around the request lifecycle that can be used to modify the request or handle errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be used to integrate a third-party HTTP client or when writing tests to mock out the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a custom header and a timeout to requests and how to use the `"requestError"` hook to log errors:

```typescript
import { DapiGate } from "dapigate-sdk-node";
import { HTTPClient } from "dapigate-sdk-node/lib/http";

const httpClient = new HTTPClient({
	// fetcher takes a function that has the same signature as native `fetch`.
	fetcher: (request) => {
		return fetch(request);
	},
});

httpClient.addHook("beforeRequest", (request) => {
	const nextRequest = new Request(request, {
		signal: request.signal || AbortSignal.timeout(5000),
	});

	nextRequest.headers.set("x-custom-header", "custom value");

	return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
	console.group("Request Error");
	console.log("Reason:", `${error}`);
	console.log("Endpoint:", `${request.method} ${request.url}`);
	console.groupEnd();
});

const sdk = new DapiGate({ httpClient });
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING] Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { DapiGate } from "dapigate-sdk-node";

const sdk = new DapiGate({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DAPIGATE_DEBUG` to true.

<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=dapigate-sdk-node&utm_campaign=typescript)
