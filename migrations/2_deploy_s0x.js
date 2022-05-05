require('dotenv').config();
const Affilly8 = artifacts.require("Affilly8");
const NFT_Factory = artifacts.require("NFT_Factory");
// const NFT_Project = artifacts.require("NFT_Project");
module.exports = function (deployer) {
  // deployer.deploy(s0xiety, process.env.ADMIN);
  deployer.deploy(Affilly8);
  deployer.deploy(NFT_Factory);
  // deployer.deploy(NFT_Project);
};

