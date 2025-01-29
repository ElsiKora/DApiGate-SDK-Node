import type { HTTPClient, RequestInput } from "../lib/http.js";
import type { RetryConfig } from "../lib/retries.js";
import type { SecurityState } from "../lib/security.js";

export type AfterErrorContext = {} & HookContext;

export interface AfterErrorHook {
	/**
	 * A hook that is called after the SDK encounters an error, or a
	 * non-successful response. The hook can introduce instrumentation code such
	 * as logging, tracing and metrics or modify the response or error values.
	 */
	afterError: (
		hookContext: AfterErrorContext,
		response: null | Response,
		error: unknown,
	) => Awaitable<{
		error: unknown;
		response: null | Response;
	}>;
}

export type AfterSuccessContext = {} & HookContext;

export interface AfterSuccessHook {
	/**
	 * A hook that is called after the SDK receives a response. The hook can
	 * introduce instrumentation code such as logging, tracing and metrics or
	 * modify the response before it is handled or throw an error to stop the
	 * response from being handled.
	 */
	afterSuccess: (hookContext: AfterSuccessContext, response: Response) => Awaitable<Response>;
}

export type Awaitable<T> = Promise<T> | T;
export type BeforeCreateRequestContext = {} & HookContext;

export interface BeforeCreateRequestHook {
	/**
	 * A hook that is called before the SDK creates a `Request` object. The hook
	 * can modify how a request is constructed since certain modifications, like
	 * changing the request URL, cannot be done on a request object directly.
	 */
	beforeCreateRequest: (hookContext: BeforeCreateRequestContext, input: RequestInput) => RequestInput;
}

export type BeforeRequestContext = {} & HookContext;

export interface BeforeRequestHook {
	/**
	 * A hook that is called before the SDK sends a request. The hook can
	 * introduce instrumentation code such as logging, tracing and metrics or
	 * replace the request before it is sent or throw an error to stop the
	 * request from being sent.
	 */
	beforeRequest: (hookContext: BeforeRequestContext, request: Request) => Awaitable<Request>;
}

export type Hook = AfterErrorHook | AfterSuccessHook | BeforeCreateRequestHook | BeforeRequestHook | SDKInitHook;

export type HookContext = {
	oAuth2Scopes?: Array<string>;
	operationID: string;
	resolvedSecurity: null | SecurityState;
	retryConfig: RetryConfig;
	securitySource?: (() => Promise<any>) | any;
};

export interface Hooks {
	/** Registers a hook to be used by the SDK for the after error event. */
	registerAfterErrorHook(hook: AfterErrorHook): void;

	/** Registers a hook to be used by the SDK for the after success event. */
	registerAfterSuccessHook(hook: AfterSuccessHook): void;

	/** Registers a hook to be used by the SDK for to modify `Request` construction. */
	registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook): void;

	/** Registers a hook to be used by the SDK for the before request event. */
	registerBeforeRequestHook(hook: BeforeRequestHook): void;

	/** Registers a hook to be used by the SDK for initialization event. */
	registerSDKInitHook(hook: SDKInitHook): void;
}

/**
 * SDKInitHook is called when the SDK is initializing. The
 * hook can return a new baseURL and HTTP client to be used by the SDK.
 */
export interface SDKInitHook {
	sdkInit: (options: SDKInitOptions) => SDKInitOptions;
}

export type SDKInitOptions = {
	baseURL: null | URL;
	client: HTTPClient;
};
