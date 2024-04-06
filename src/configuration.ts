/**
 * DApiGate
 * DApiGate `Reaper API` documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface ConfigurationParameters {
	accessToken?: ((name?: string, scopes?: Array<string>) => Promise<string>) | ((name?: string, scopes?: Array<string>) => string) | Promise<string> | string;
	apiKey?: ((name: string) => Promise<string>) | ((name: string) => string) | Promise<string> | string;
	baseOptions?: any;
	basePath?: string;
	formDataCtor?: new () => any;
	password?: string;
	serverIndex?: number;
	username?: string;
}

export class Configuration {
	/**
	 * parameter for oauth2 security
	 * @param name security name
	 * @param scopes oauth2 scope
	 * @memberof Configuration
	 */
	accessToken?: ((name?: string, scopes?: Array<string>) => Promise<string>) | ((name?: string, scopes?: Array<string>) => string) | Promise<string> | string;

	/**
	 * parameter for apiKey security
	 * @param name security name
	 * @memberof Configuration
	 */
	apiKey?: ((name: string) => Promise<string>) | ((name: string) => string) | Promise<string> | string;

	/**
	 * base options for axios calls
	 *
	 * @type {any}
	 * @memberof Configuration
	 */
	baseOptions?: any;

	/**
	 * override base path
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	basePath?: string;

	/**
	 * The FormData constructor that will be used to create multipart form data
	 * requests. You can inject this here so that execution environments that
	 * do not support the FormData class can still run the generated client.
	 *
	 * @type {new () => FormData}
	 */
	formDataCtor?: new () => any;

	/**
	 * parameter for basic security
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	password?: string;

	/**
	 * override server index
	 *
	 * @type {number}
	 * @memberof Configuration
	 */
	serverIndex?: number;

	/**
	 * parameter for basic security
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	username?: string;

	constructor(parameter: ConfigurationParameters = {}) {
		this.apiKey = parameter.apiKey;
		this.username = parameter.username;
		this.password = parameter.password;
		this.accessToken = parameter.accessToken;
		this.basePath = parameter.basePath;
		this.serverIndex = parameter.serverIndex;
		this.baseOptions = parameter.baseOptions;
		this.formDataCtor = parameter.formDataCtor;
	}

	/**
	 * Check if the given MIME is a JSON MIME.
	 * JSON MIME examples:
	 *   application/json
	 *   application/json; charset=UTF8
	 *   APPLICATION/JSON
	 *   application/vnd.company+json
	 * @param mime - MIME (Multipurpose Internet Mail Extensions)
	 * @return True if the given MIME is JSON, false otherwise.
	 */
	public isJsonMime(mime: string): boolean {
		const jsonMime: RegExp = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");

		return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
	}
}
