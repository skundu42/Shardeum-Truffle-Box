# Shardeum Truffle Box

- [Shardeum Truffle Box](#shm-truffle-box)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Setup](#setup)
    - [Using the env File](#using-the-env-file)
    - [New Configuration File](#new-configuration-file)
    - [New Directory Structure for Artifacts](#new-directory-structure-for-artifacts)
  - [Shardeum](#shm)
    - [Compiling](#compiling)
    - [Migrating](#migrating)
    - [Paying for Migrations](#paying-for-migrations)
  - [Basic Commands](#basic-commands)
    - [Testing](#testing)
  - [Support](#support)


Shardeum Truffle box provides you with the boilerplate structure necessary to start coding on the Shardeum blockchain. Shardeum is a EVM based Layer-1 Blockchain which uses Dynamic State Sharding to achieve linear scalability. You can learn more about Shardeum [here](https://docs.shardeum.org/).


As a starting point, this box contains only the ```SimpleStorage``` Solidity contract. The Simple Storage contract demonstrates the basic Read and Write functionalities on the Shardeum blockchain. With this box, you will be able to compile, migrate, and test Solidity code on the live Shardeum testnets.


## Requirements

The Shardeum Truffle Box has the following requirements:

- [Node.js](https://nodejs.org/) 10.x or later
- [NPM](https://docs.npmjs.com/cli/) version 5.2 or later
- Windows, Linux or MacOS

Helpful, but optional:

- A [MetaMask](https://metamask.io/) Wallet

## Installation

```bash
truffle unbox Shardeum-Truffle-Starter-Box
```

## Setup

### Using the env File

You will need at least one mnemonic to use with the network. The `.dotenv` npm package has been installed for you, and you will need to create a `.env` file for storing your mnemonic and any other needed private information.

The `.env` file is ignored by git in this project, to help protect your private data. In general, it is good security practice to avoid committing information about your private keys to github. The `truffle-config.shm.js` file expects a `MNEMONIC` value to exist in `.env` for running migrations on the networks listed in `truffle-config.shm.js`.

If you are unfamiliar with using `.env` for managing your mnemonics and other keys, the basic steps for doing so are below:

1. Use `touch .env` in the command line to create a `.env` file at the root of your project.
2. Open the `.env` file in your preferred IDE
3. Add the following, filling in your own mnemonic:

```
MNEMONIC="<Your Mnemonic>"
```

4. As you develop your project, you can put any other sensitive information in this file. You can access it from other files with `require('dotenv').config()` and refer to the variable you need with `process.env['<YOUR_VARIABLE>']`.

### New Configuration File

A new configuration file exists in this project: `truffle-config.shm.js`. This file contains a reference to the new file location of the `contracts_build_directory` for Shardeum smart contracts and lists out the different Shardeum testnets. (see [below](#migrating)).

Please note, the classic `truffle-config.js` configuration file is included here as well, because you will eventually want to deploy contracts to on localhost for local development. All normal truffle commands (`truffle compile`, `truffle migrate`, etc.) will use this config file and save built files to `build/local-contracts`. You can save Solidity contracts that you wish to deploy locally in the `contracts/local-dev` folder.

### New Directory Structure for Artifacts

When you compile or migrate, the resulting `json` files will be at `build/shm-contracts/`. This is to distinguish them from contracts you build for any other network other than Shardeum. As we have included the appropriate `contracts_build_directory` in each configuration file, Truffle will know which set of built files to reference!

## Shardeum

### Compiling

You do not need to add any new compilers or settings to compile your contracts for the BNB Smart Chain, as it is fully EVM compatible. The `truffle-config.shm.js` configuration file indicates the contract and build paths for BSC-destined contracts.

If you are compiling contracts specifically for the Shardeum network, use the following command, which indicates the appropriate configuration file:

```
npm run compile:shm
```

If you would like to recompile previously compiled contracts, you can manually run this command with
`truffle compile --config=truffle-config.shm.js` and add the `--all` flag.

### Migrating

To migrate on the Shardeum network, run `npm run migrate:shm --network=(shm_Liberty | shm_Sphinx)` (remember to choose a network from these options!).

As you can see, you have two Shardeum testnets to choose from:

- `shm_Liberty`: Alphanet of Shardeum. This is an early version of Shardeum testnet.
- `shm_Sphinx`: Betanet of Shardeum. This is the latest version of Shardeum testnet.


### Paying for Migrations

The documentation for setting up MetaMask to configure custom networks like Shardeum can be found [here](https://docs.shardeum.org/wallets/MetaMask/add-shardeum-network).

To pay for your deployments, you will need to have testnet SHM which you can claim from a number of [Shardeum Faucets](https://docs.shardeum.org/faucet/claim). You will need your mnemomic phrase (saved in the `.env` file or through some other secure method).


## Basic Commands

The code here will allow you to compile, migrate, and test your code on the Shardeum Blockchain. The following commands can be run (more details on each can be found in the next section):

To compile:

```
npm run compile:shm 
```

To migrate:

To migrate smart contracts on Shardeum Sphinx testnet
```
npm run migrate:shmSphinx  
```
To migrate smart contracts on Shardeum Liberty testnet
```
npm run migrate:shmLiberty  
```

To test:

To run tests on Shardeum Sphinx testnet
```
npm run test:shmSphinx 
```
To run tests on Shardeum Liberty testnet
```
npm run test:shmLiberty 
```



## Support

Support for this box is available via the Truffle community [here](https://www.trufflesuite.com/community) or on [Shardeum Discord ](https://discord.gg/shardeum).
