/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

module.exports = {
  solidity: "0.8.24",
  networks: {
      hardhat: {},
      bscTestnet: {
          url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
          accounts: [`0x${process.env.PRIVATE_KEY}`],  // Set your private key in the .env file
      },
      bscMainnet: {
          url: "https://bsc-dataseed.binance.org/",
          accounts: [`0x${process.env.PRIVATE_KEY}`],  // Set your private key in the .env file
      },
  },
};