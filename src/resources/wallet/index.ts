import { Authorization } from "../../resources/auth/index";
import { TConfigWallet } from "../../shared/config";
import { Balance } from "./balance";
import { Deposit } from "./deposit";
import { User } from "./user";
import { Way } from "./way";
import { Crypto } from "./crypto";
import { Transfer } from "./transfer";

export class Wallet {
  authorization: Authorization;
  balance: Balance;
  deposit: Deposit;
  transfer: Transfer;
  user: User;
  way: Way;
  crypto: Crypto;

  constructor(config?: TConfigWallet | undefined ) {
    this.authorization = new Authorization(config);
    this.balance = new Balance(config);
    this.deposit = new Deposit(config);
    this.user = new User(config);
    this.way = new Way(config);
    this.crypto = new Crypto(config);
    this.transfer = new Transfer(config);
  }
}