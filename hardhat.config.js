require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

const projectId = "e4933973f88c4e18b9f032cbdaf20776";
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [process.env.REACT_APP_SECRET],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [process.env.REACT_APP_SECRET],
    },
  },
  solidity: "0.8.4",
};
