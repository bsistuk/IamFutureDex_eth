const { ethers } = require("hardhat");

// change this to your account or desired fee receiver account
const FEE_TO_SETTER = "0xCEB4010fFB37f3be54A682a9b3fb7F0d3DF62205";
const FEE_TO = "0xCEB4010fFB37f3be54A682a9b3fb7F0d3DF62205";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const IamFutureSwapFactory = await ethers.getContractFactory(
    "IamFutureSwapFactory"
  );
  const iamFutureSwapFactory = await IamFutureSwapFactory.deploy(
    FEE_TO_SETTER,
    FEE_TO
  );

  await iamFutureSwapFactory.deployed();

  console.log(
    "IamFutureSwapFactory deployed to:",
    iamFutureSwapFactory.address
  );

  const pairCodeHash = await iamFutureSwapFactory.pairCodeHash();
  console.log("pairCodeHash:", pairCodeHash);
  console.log(
    "Account balance after deploy:",
    (await deployer.getBalance()).toString()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
