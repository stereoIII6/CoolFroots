require('dotenv').config();
const Affilly8 = artifacts.require("Affilly8");
const NFT_Factory = artifacts.require("NFT_Factory");
const MLQ = artifacts.require("MLQ");
module.exports = function (deployer) {
  // deployer.deploy(s0xiety, process.env.ADMIN);
  deployer.deploy(Affilly8);
  deployer.deploy(NFT_Factory);
  deployer.deploy(MLQ);
};

