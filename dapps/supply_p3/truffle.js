const HDWallet = require('truffle-hdwallet-provider');
const fs = require('fs');

const mnemonic = fs.readFileSync("./mnemonic.secret").toString().trim();
const infura = fs.readFileSync("./infura.secret").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "0.4.0"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infura}`);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  }
};
