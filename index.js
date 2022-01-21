import { Bundle } from "arbundles";
import Arweave from "arweave";
const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});
const txId = "5kOUQ06PTYaMwVLS4sR6nR0qAGPPuCYH4nITjA73YDc";
const data = await arweave.transactions.getData(txId, { decode: true });
const bundle = new Bundle(data);
console.log("Bundle TxID " + txId);
console.log("DataItem Ids In Bundle " + (await bundle.getIds()));
const dataItemOne = bundle.items[0];
const dataItemTwo = bundle.items[1];
console.log(dataItemOne.toJSON());
console.log(dataItemTwo.rawData);

console.log("Verify Bundle " + (await bundle.verify()));
