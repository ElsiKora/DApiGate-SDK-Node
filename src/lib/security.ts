export enum SecurityErrorCode {
	Incomplete = "incomplete",
	UnrecognisedSecurityType = "unrecognized_security_type",
}

export type SecurityInput = SecurityInputAPIKey | SecurityInputBasic | SecurityInputBearer | SecurityInputCustom | SecurityInputOAuth2 | SecurityInputOAuth2ClientCredentials | SecurityInputOAuth2PasswordCredentials | SecurityInputOIDC;

export type SecurityState = {
	basic: { password?: string | undefined; username?: string | undefined };
	cookies: Record<string, string>;
	headers: Record<string, string>;
	oauth2: { type: "none" } | ({ type: "password" } & OAuth2PasswordFlow);
	queryParams: Record<string, string>;
};

type OAuth2PasswordFlow = {
	clientID: string;
	clientSecret?: string | undefined;
	password?: string | undefined;
	tokenURL: string;
	username: string;
};

type SecurityInputAPIKey = {
	fieldName: string;
	type: "apiKey:cookie" | "apiKey:header" | "apiKey:query";
	value: null | string | undefined;
};

type SecurityInputBasic = {
	type: "http:basic";
	value: { password?: string | undefined; username?: string | undefined } | null | undefined;
};

type SecurityInputBearer = {
	fieldName: string;
	type: "http:bearer";
	value: null | string | undefined;
};

type SecurityInputCustom = {
	fieldName: string;
	type: "http:custom";
	value: any | null | undefined;
};

type SecurityInputOAuth2 = {
	fieldName: string;
	type: "oauth2";
	value: null | string | undefined;
};

type SecurityInputOAuth2ClientCredentials = {
	type: "oauth2:client_credentials";
	value: { clientID?: string | undefined; clientSecret?: string | undefined } | null | undefined;
};

type SecurityInputOAuth2PasswordCredentials = {
	fieldName: string;
	type: "oauth2:password";
	value: null | string | undefined;
};

type SecurityInputOIDC = {
	fieldName: string;
	type: "openIdConnect";
	value: null | string | undefined;
};

export class SecurityError extends Error {
	constructor(
		public code: SecurityErrorCode,
		message: string,
	) {
		super(message);
		this.name = "SecurityError";
	}

	static incomplete(): SecurityError {
		return new SecurityError(SecurityErrorCode.Incomplete, "Security requirements not met in order to perform the operation");
	}

	static unrecognizedType(type: string): SecurityError {
		return new SecurityError(SecurityErrorCode.UnrecognisedSecurityType, `Unrecognised security type: ${type}`);
	}
}

export function resolveSecurity(...options: Array<Array<SecurityInput>>): null | SecurityState {
	const state: SecurityState = {
		basic: {},
		cookies: {},
		headers: {},
		oauth2: { type: "none" },
		queryParams: {},
	};

	const option = options.find((options_) => {
		return options_.every((o) => {
			if (o.value == undefined) {
				return false;
			} else
				switch (o.type) {
					case "http:basic": {
						return o.value.username != undefined || o.value.password != undefined;
					}

					case "http:custom": {
						return null;
					}

					case "oauth2:client_credentials": {
						return o.value.clientID != undefined || o.value.clientSecret != undefined;
					}

					case "oauth2:password": {
						return typeof o.value === "string" && !!o.value;
					}

					default: {
						if (typeof o.value === "string") {
							return !!o.value;
						} else {
							throw new TypeError(`Unrecognized security type: ${o.type} (value type: ${typeof o.value})`);
						}
					}
				}
		});
	});

	if (option == undefined) {
		return null;
	}

	for (const spec of option) {
		if (spec.value == undefined) {
			continue;
		}

		const { type } = spec;

		switch (type) {
			case "apiKey:cookie": {
				state.cookies[spec.fieldName] = spec.value;

				break;
			}

			case "apiKey:header": {
				state.headers[spec.fieldName] = spec.value;

				break;
			}

			case "apiKey:query": {
				state.queryParams[spec.fieldName] = spec.value;

				break;
			}

			case "http:basic": {
				applyBasic(state, spec);

				break;
			}

			case "http:bearer": {
				applyBearer(state, spec);

				break;
			}

			case "http:custom": {
				break;
			}

			case "oauth2": {
				applyBearer(state, spec);

				break;
			}

			case "oauth2:client_credentials": {
				break;
			}

			case "oauth2:password": {
				applyBearer(state, spec);

				break;
			}

			case "openIdConnect": {
				applyBearer(state, spec);

				break;
			}

			default: {
				spec satisfies never;

				throw SecurityError.unrecognizedType(type);
			}
		}
	}

	return state;
}

function applyBasic(state: SecurityState, spec: SecurityInputBasic) {
	if (spec.value == undefined) {
		return;
	}

	state.basic = spec.value;
}

function applyBearer(state: SecurityState, spec: SecurityInputBearer | SecurityInputOAuth2 | SecurityInputOAuth2PasswordCredentials | SecurityInputOIDC) {
	if (typeof spec.value !== "string" || !spec.value) {
		return;
	}

	let value = spec.value;

	if (value.slice(0, 7).toLowerCase() !== "bearer ") {
		value = `Bearer ${value}`;
	}

	state.headers[spec.fieldName] = value;
}
