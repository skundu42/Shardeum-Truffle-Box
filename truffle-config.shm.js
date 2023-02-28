const HDWalletProvider = require('@truffle/hdwallet-provider');
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic etc. Note: .env is ignored by git to keep your private information safe

require('dotenv').config();

const mnemonic = process.env["MNEMONIC"].toString().trim();

module.exports = {

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/shm-contracts',

  /**
  * contracts_directory tells Truffle where the contracts you want to compile are located
  */
  contracts_directory: './contracts',


  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    shm_Liberty:{
      provider: () => new HDWalletProvider(mnemonic, `https://liberty20.shardeum.org/`),
      network_id: 8081,
  
    },
    shm_Sphinx: {
      provider: () => new HDWalletProvider(mnemonic, `https://sphinx.shardeum.org/`),
      network_id: 8082,
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4"
    }
  },
}
