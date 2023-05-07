# SMART CONTRACT

This dex contract contain :

- Factory Contract
- Router Contract
- LP Contract
- Dex Management

Factory, Router and LP Contract Is based on Uniswap V2 / Pancakeswap V2 Contract, only modified name and some properties like Name of LP-Token

DEX Management Contract is for operating **SWAP** its based on Arborswap dex management, which allow DEX MANAGEMENT To check swap route.

## INSTALL

- clone repository
- install dependency using `yarn install`
- create `.env` file base on `env.example`
- compile contract using command `yarn compile`

## DEPLOYING CONTRACT

First of all we need deploy factory contract and grab `paircode hash`.

using command `npx hardhat run .\scripts\deploy.js --network eth` will deploy factory to ETHEREUM NETWORK, output like this :

```
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance: 10000000000000000000000
IamFutureSwapFactory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
pairCodeHash: 0xb963b92ac0f3eea454fe7124463e37023477dc06f3bc6c9b454985a8595dfb9f
Account balance after deploy: 9999995208859375000000
```

you will see `pairCodeHash` on output result, then change `IamFutureSwapLibrary.sol` at `contract/libraries/IamFutureSwapLibrary.sol`
on line 33

```
hex'2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b' // init code hash
```

change that value to

```
hex'value from pairCodehash' //init code hash
```

after change init code hash / pair code hash, you need recompile the contract using command `yarn compile`

and then deploy router and dex management contract.
