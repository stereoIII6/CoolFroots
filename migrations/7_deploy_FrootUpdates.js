const FU = artifacts.require("FrootsUpdate");
const GreenUpdate = artifacts.require("GreenUpdate");
const FCT = artifacts.require("COOLFROOT");
const Greenlist = artifacts.require("Greenlist");

module.exports = function (deployer) {
  deployer.deploy(FU, FCT.address);
  deployer.deploy(GreenUpdate, Greenlist.address);
};
