import type { RequestInput } from "../lib/http.js";

import type { AfterErrorContext, AfterErrorHook, AfterSuccessContext, AfterSuccessHook, BeforeCreateRequestContext, BeforeCreateRequestHook, BeforeRequestContext, BeforeRequestHook, Hook, Hooks, SDKInitHook, SDKInitOptions } from "./types.js";

import { initHooks } from "./registration.js";

export class SDKHooks implements Hooks {
	afterErrorHooks: Array<AfterErrorHook> = [];

	afterSuccessHooks: Array<AfterSuccessHook> = [];

	beforeCreateRequestHooks: Array<BeforeCreateRequestHook> = [];

	beforeRequestHooks: Array<BeforeRequestHook> = [];

	sdkInitHooks: Array<SDKInitHook> = [];

	constructor() {
		const presetHooks: Array<Hook> = [];

		for (const hook of presetHooks) {
			if ("sdkInit" in hook) {
				this.registerSDKInitHook(hook);
			}

			if ("beforeCreateRequest" in hook) {
				this.registerBeforeCreateRequestHook(hook);
			}

			if ("beforeRequest" in hook) {
				this.registerBeforeRequestHook(hook);
			}

			if ("afterSuccess" in hook) {
				this.registerAfterSuccessHook(hook);
			}

			if ("afterError" in hook) {
				this.registerAfterErrorHook(hook);
			}
		}
		initHooks(this);
	}

	async afterError(
		hookContext: AfterErrorContext,
		response: null | Response,
		error: unknown,
	): Promise<{
		error: unknown;
		response: null | Response;
	}> {
		let res = response;
		let error_ = error;

		for (const hook of this.afterErrorHooks) {
			const result = await hook.afterError(hookContext, res, error_);
			res = result.response;
			error_ = result.error;
		}

		return { error: error_, response: res };
	}

	async afterSuccess(hookContext: AfterSuccessContext, response: Response): Promise<Response> {
		let res = response;

		for (const hook of this.afterSuccessHooks) {
			res = await hook.afterSuccess(hookContext, res);
		}

		return res;
	}

	beforeCreateRequest(hookContext: BeforeCreateRequestContext, input: RequestInput): RequestInput {
		let inp = input;

		for (const hook of this.beforeCreateRequestHooks) {
			inp = hook.beforeCreateRequest(hookContext, inp);
		}

		return inp;
	}

	async beforeRequest(hookContext: BeforeRequestContext, request: Request): Promise<Request> {
		let request_ = request;

		for (const hook of this.beforeRequestHooks) {
			request_ = await hook.beforeRequest(hookContext, request_);
		}

		return request_;
	}

	registerAfterErrorHook(hook: AfterErrorHook) {
		this.afterErrorHooks.push(hook);
	}

	registerAfterSuccessHook(hook: AfterSuccessHook) {
		this.afterSuccessHooks.push(hook);
	}

	registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook) {
		this.beforeCreateRequestHooks.push(hook);
	}

	registerBeforeRequestHook(hook: BeforeRequestHook) {
		this.beforeRequestHooks.push(hook);
	}

	registerSDKInitHook(hook: SDKInitHook) {
		this.sdkInitHooks.push(hook);
	}

	sdkInit(options: SDKInitOptions): SDKInitOptions {
		return this.sdkInitHooks.reduce((options_, hook) => hook.sdkInit(options_), options);
	}
}
