import type {HTTPClient} from "./http.js";
import type {Logger} from "./logger.js";
import type {RetryConfig} from "./retries.js";
import type {Params as Parameters_} from "./url.js";
import {pathToFunc as pathToFunction} from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://reaper.dapigate.com"] as const;

export type SDKOptions = {
	debugLogger?: Logger;
	httpClient?: HTTPClient;
	/**
	 * Allows overriding the default retry config used by the SDK
	 */
	retryConfig?: RetryConfig;
	/**
	 * Allows overriding the default server used by the SDK
	 */
	serverIdx?: number;
	/**
	 * Allows overriding the default server URL used by the SDK
	 */
	serverURL?: string;
	timeoutMs?: number;
};

export function serverURLFromOptions(options: SDKOptions): null | URL {
	let serverURL = options.serverURL;

	const parameters: Parameters_ = {};

	if (!serverURL) {
		const serverIndex = options.serverIdx ?? 0;

		if (serverIndex < 0 || serverIndex >= ServerList.length) {
			throw new Error(`Invalid server index ${serverIndex}`);
		}
		serverURL = ServerList[serverIndex] || "";
	}

	const u = pathToFunction(serverURL)(parameters);

	return new URL(u);
}

export const SDK_METADATA = {
	genVersion: "2.497.0",
	language: "typescript",
	openapiDocVersion: "1.0",
	sdkVersion: "0.0.1",
	userAgent: "speakeasy-sdk/typescript 0.0.1 2.497.0 1.0 dapigate-sdk-node",
} as const;
