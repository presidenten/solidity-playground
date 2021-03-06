import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";
import "hardhat-jest-plugin";

const config = {
  solidity: {
    version: "0.6.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      gasPrice: 80,
      blockGasLimit: 100000000,
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
