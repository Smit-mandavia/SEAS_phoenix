const Blockchain = require("./Blockchain");
const Transaction = require("./Transaction");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myOrganizationKey = ec.keyFromPrivate(
  "7c4c45907dec412398298330c39032e90049f1a44f3e18c3e07c23e3273995de"
);
const myWalletAddress = myOrganizationKey.getPublic("hex");

const privateKeys = {
  NGO1: ec.keyFromPrivate(
    "7c4c45907dec402323230c39032e90049f1a44f3e18c3e07c23e3273995de"
  ),

  NGO2: ec.keyFromPrivate(
    "7c4c45907dec402323230c39032e90049f138473834c3e07c23e3273995de"
  ),
  NGO3: ec.keyFromPrivate(
    "7c4c45907dec40232323023872837283f138473834c3e07c23e3273995de"
  ),
  NGO4: ec.keyFromPrivate(
    "7c4c45907dec4023232320930293023e90049f138473834c3e07c23e3273995de"
  )
};

const ngoOrgContractPer = {
  NGO1: 30,
  NGO2: 10,
  NGO3: 25,
  NGO4: 5
};

const totalEventCollection = {
  event1: 100,
  event2: 200,
  event3: 500
};
const total = Object.values(totalEventCollection).reduce(
  (total,currVal) => total+currVal
)
const myBitCoin = new Blockchain();

const doTransaction = () => {
  const usersList = Object.keys(privateKeys);
  usersList.forEach(user => {
    const amtForNGO = parseFloat(
      (total * ngoOrgContractPer[user]) / 100
    );
    console.log(amtForNGO);
    const tx = new Transaction(
      myWalletAddress,
      privateKeys[user].getPublic("hex"),
      amtForNGO
    );
    tx.signTransaction(myOrganizationKey);
    myBitCoin.addTransaction(tx);
  });
};

doTransaction();
console.log(myBitCoin.getAllTransactionsForWallet(myWalletAddress));