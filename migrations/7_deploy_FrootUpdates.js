const FU = artifacts.require("FrootsUpdate");
const Counter = artifacts.require("Counter");
const FCT = artifacts.require("COOLFROOT");

module.exports = function (deployer) {
  deployer.deploy(FU, FCT.address);
  deployer.deploy(Counter, 60);
};
