const ARB = artifacts.require("ARB");
/**
 * net function returns the networkID and logs the id to the console
 * @returns netID the network id
 */
var n;
const net = async () => {
  const netID = await web3.eth.net.getId();
  console.log(netID);
  n = netID;
  return n;
};
net();
module.exports = function (deployer, n) {
  // var n = net();
  var t;
  console.log("netID :: ", n);
  if (n == "mantletest" || n == "mumbai" || n == "tevmos" || n == "fuji" || n == "fevmt" || n == "alfajores" || n == "fantomtest" || n == "goerli" || n == "arbig" || n == "develop") {
    deployer.deploy(ARB);
  }
};
