const Greenlist = artifacts.require("Greenlist");
/**
 * net function returns the networkID and logs the id to the console
 * @returns netID the network id
 */
const net = async () => {
  const netID = await web3.eth.net.getId();
  console.log(netID);
  return netID;
};
module.exports = function (deployer) {
  const n = net();
  const t = 1;
  if (n == 80001 || n == 5001) t = 0;
  deployer.deploy(Greenlist, t);
};
