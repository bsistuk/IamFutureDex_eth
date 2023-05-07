const { ethers } = require("hardhat");

// this is your router address
const defaultRouter = "0x3027Ae348394349886f963D35786e5F468A221DE";
// this is external router address, can be uniswap or sushiswap
const externalRouter = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
// this is treasury address which receive fee on every swap
const treasury = "0x3dd61427dbbC0E980FD65bAE7F84a297c1Cd4eED";
// this is fee when swap on your router
const defaultFee = "10"; // 0.1%
// this is fee when swap on external router / uniswap / sushiswap
const externalFee = "5"; // 0.05%

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying Dex Management contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const DexContract = await ethers.getContractFactory("DEXManagement");
  const dexContract = await DexContract.deploy(
    defaultRouter,
    externalRouter,
    treasury,
    defaultFee,
    externalFee
  );

  await dexContract.deployed();

  console.log("DEXManagement deployed to:", dexContract.address);

  console.log(
    "Account balance after deploy:",
    (await deployer.getBalance()).toString()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
