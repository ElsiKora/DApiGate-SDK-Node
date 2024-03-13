import { TConfigBusiness } from "../../shared/config";
import { Merchant } from "./merchant";

export class Business {
  merchant: Merchant;

  constructor(config: TConfigBusiness | undefined ) {
    this.merchant = new Merchant(config);
  }
}