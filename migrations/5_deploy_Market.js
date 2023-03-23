const Greenlist = artifacts.require("Greenlist");
const ICE = artifacts.require("ICE");
const FCT = artifacts.require("COOLFROOT");
const Market = artifacts.require("Market");
var n;
const net = async () => {
  const netID = await web3.eth.net.getId();
  console.log(netID);
  n = netID;
};
net();
module.exports = function (deployer, n) {
  // var n = net();
  var t;
  console.log("netID :: ", n);
  if (n == "mantletest" || n == "mumbai" || n == "tevmos" || n == "fuji" || n == "fevmt" || n == "alfajores" || n == "fantomtest" || n == "goerli" || n == "arbig" || n == "develop") {
    t = 0;
  } else {
    if (n == "main") t = 1;
    if (n == "polygon") t = 2;
    if (n == "fevm") t = 3;
    if (n == "avax") t = 4;
    if (n == "celo") t = 5;
    if (n == "mantle") t = 6;
    if (n == "evmos") t = 7;
    if (n == "fantom") t = 8;
    if (n == "arbitrum") t = 9;
  }

  console.log("mode :: ", t);
  deployer.deploy(Market, FCT.address, ICE.address, Greenlist.address, t);
};
