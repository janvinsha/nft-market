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
        "1447537e15027f9570059027e698651bb0d8df6062f9c6818aa95f7db72ee0eb",
      ],
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/e4933973f88c4e18b9f032cbdaf20776`,
      accounts: [
        "1447537e15027f9570059027e698651bb0d8df6062f9c6818aa95f7db72ee0eb",
      ],
    },
  },
  solidity: "0.8.4",
};
