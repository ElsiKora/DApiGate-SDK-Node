import { Business, Wallet  } from './index';


const ecorpayClient = new Business({  key: "",  secret: "", hashingAlgorithm: "SHA256" });


ecorpayClient.merchant.ways.getMerchantWayList({ limit: 10, page: 1 }).then((res) => {
  console.log("res", res)
}).catch((e) => {
  console.log("zalypa");
  console.log(e);
});