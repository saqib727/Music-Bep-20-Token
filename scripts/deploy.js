async function main() {
    // We get the contract to deploy
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const TokenAddress = "0xYourTokenAddress";  // Replace with your token address
    
    const VestingContract = await ethers.getContractFactory("VestingContract");

    const vestingContract = await VestingContract.deploy(TokenAddress);

    console.log("VestingContract deployed to:", vestingContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
