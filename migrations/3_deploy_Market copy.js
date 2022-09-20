const Greenlist = artifacts.require("Greenlist");
const ICE = artifacts.require("ICE");
const FCT = artifacts.require("FrootyCoolTingz");
const Market = artifacts.require("Market");
module.exports = function (deployer) {
  deployer.deploy(FTC);
  deployer.deploy(Market);
};
