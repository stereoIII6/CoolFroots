const Greenlist = artifacts.require("Greenlist");
const ICE = artifacts.require("ICE");
const FCT = artifacts.require("FrootyCoolTingz");
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
  if (n == "mantletest" || n == "mumbai" || n == "tevmos" || n == "fuji") {
    t = 0;
  } else t = 1;
  console.log("mode :: ", t);
  deployer.deploy(FCT, ICE.address, Greenlist.address, t);
};
