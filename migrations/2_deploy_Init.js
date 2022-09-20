const Greenlist = artifacts.require("Greenlist");
const ICE = artifacts.require("ICE");
module.exports = function (deployer) {
  deployer.deploy(Greenlist);
  deployer.deploy(ICE);
};
