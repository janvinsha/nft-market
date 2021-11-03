require("@nomiclabs/hardhat-waffle");

const projectId = "e4933973f88c4e18b9f032cbdaf20776";
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/e4933973f88c4e18b9f032cbdaf20776`,
      accounts: [
       
      ],
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/e4933973f88c4e18b9f032cbdaf20776`,
      accounts: [
    
      ],
    },
  },
  solidity: "0.8.4",
};
