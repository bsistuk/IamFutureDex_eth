const { ethers } = require("hardhat");

// factory contract address
const FACTORY_ADDRESS = "0xd6023AC8516b22A7872f157736D4A954428AF198";
// WETH Address
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Router contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const IamFutureSwapRouter02 = await ethers.getContractRouter02(
    "IamFutureSwapRouter02"
  );
  const iamFutureSwapRouter02 = await IamFutureSwapRouter02.deploy(
    FACTORY_ADDRESS,
    WETH_ADDRESS
  );

  await iamFutureSwapRouter02.deployed();

  console.log(
    "IamFutureSwapRouter02 deployed to:",
    iamFutureSwapRouter02.address
  );

  console.log(
    "Account balance after deploy:",
    (await deployer.getBalance()).toString()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
