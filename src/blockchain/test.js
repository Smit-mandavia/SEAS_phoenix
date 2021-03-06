const Blockchain = require("./Blockchain");
const Transaction = require("./Transaction");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

// Your private key goes here
const myKey = ec.keyFromPrivate(
  "7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf"
);
const organizerPrivateKey = ec.keyFromPrivate(
  "7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995de"
);

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic("hex");
const organizerWalletAddress = organizerPrivateKey.getPublic("hex");

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, "address2", 100);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, organizerWalletAddress, -50);
tx2.signTransaction(myKey);
savjeeCoin.addTransaction(tx2);
const tx3 = new Transaction(organizerWalletAddress, myWalletAddress, 100);
tx3.signTransaction(organizerPrivateKey);
savjeeCoin.addTransaction(tx3);

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(
  `Balance of organizer is ${savjeeCoin.getBalanceOfAddress(
    organizerWalletAddress
  )}`,
  `Balance of my is ${savjeeCoin.getBalanceOfAddress(myWalletAddress)}`
);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log(savjeeCoin);
// console.log(
//   "all trans",
//   savjeeCoin.getAllTransactionsForWallet(organizerWalletAddress)
// );
console.log("Blockchain valid?", savjeeCoin.isChainValid() ? "Yes" : "No");
