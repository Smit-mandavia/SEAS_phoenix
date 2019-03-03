const Blockchain = require("./Blockchain");
const Transaction = require("./Transaction");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myOrganizationKey = ec.keyFromPrivate(
  "7c4c45907dec412398298330c39032e90049f1a44f3e18c3e07c23e3273995de"
);
const myWalletAddress = myOrganizationKey.getPublic("hex");

const privateKeys = {
  Anuj: ec.keyFromPrivate(
    "7c4c45907dec402323230c39032e90049f1a44f3e18c3e07c23e3273995de"
  ),

  Smit: ec.keyFromPrivate(
    "7c4c45907dec402323230c39032e90049f138473834c3e07c23e3273995de"
  ),
  Shaunak: ec.keyFromPrivate(
    "7c4c45907dec40232323023872837283f138473834c3e07c23e3273995de"
  ),
  Akash: ec.keyFromPrivate(
    "7c4c45907dec4023232320930293023e90049f138473834c3e07c23e3273995de"
  )
};

const ngoOrgContractPer = {
  Anuj: 30,
  Smit: 10,
  Shaunak: 25,
  Akash: 5
};

const userEventContribution = {
  event1: 100,
  event2: 200,
  event3: 500
};

const totalContribution = Object.values(userEventContribution).reduce(
  (total, currVal) => total + currVal,
  0
);

console.log({ totalContribution });

const myBitCoin = new Blockchain();

const doTransaction = () => {
  const usersList = Object.keys(privateKeys);
  usersList.forEach(user => {
    const amtToTransfer = parseFloat(
      (totalContribution * ngoOrgContractPer[user]) / 100
    );
    const tx = new Transaction(
      myWalletAddress,
      privateKeys[user].getPublic("hex"),
      amtToTransfer
    );
    tx.signTransaction(myOrganizationKey);
    myBitCoin.addTransaction(tx);
  });
};

doTransaction();
