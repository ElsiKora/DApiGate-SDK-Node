import { ClientSDK } from "../lib/sdks.js";

import { Bank } from "./bank.js";
import { BankAlias } from "./bankalias.js";
import { Email } from "./email.js";
import { Ip } from "./ip.js";
import { Phone } from "./phone.js";
import { Proxy } from "./proxy.js";
import { Rate } from "./rate.js";

export class DapiGate extends ClientSDK {
	private _bank?: Bank;

	get bank(): Bank {
		return (this._bank ??= new Bank(this._options));
	}

	private _bankAlias?: BankAlias;

	get bankAlias(): BankAlias {
		return (this._bankAlias ??= new BankAlias(this._options));
	}

	private _email?: Email;

	get email(): Email {
		return (this._email ??= new Email(this._options));
	}

	private _ip?: Ip;

	get ip(): Ip {
		return (this._ip ??= new Ip(this._options));
	}

	private _phone?: Phone;

	get phone(): Phone {
		return (this._phone ??= new Phone(this._options));
	}

	private _proxy?: Proxy;

	get proxy(): Proxy {
		return (this._proxy ??= new Proxy(this._options));
	}

	private _rate?: Rate;

	get rate(): Rate {
		return (this._rate ??= new Rate(this._options));
	}
}
