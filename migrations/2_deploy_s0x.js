require('dotenv').config();


const Affilly8 = artifacts.require("Affilly8");
const NFT_Factory = artifacts.require("NFT_Factory");
const MLQ = artifacts.require("MLQ");

module.exports = function (deployer) {
  let network = deployer.network;
  let ethUsdPrc;
  if (network === "main"){
    ethUsdPrc = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
}
  if (network === "polygon"){
    ethUsdPrc = "0xF9680D99D6C9589e2a93a78A04A279e509205945";
}
  if (network === 43224){
    ethUsdPrc = "0x976B3D034E162d8bD72D6b9C989d545b839003b0";
}
  if (network === "chalen"){
    ethUsdPrc = "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e";
}
  if (network === "bsc"){
    ethUsdPrc = "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7";
}
  if (network === "gnosis"){
    ethUsdPrc = "0xa767f745331D267c7751297D982b050c93985627";
}
  if (network === "optimism"){
    ethUsdPrc = "0x13e3Ee699D1909E989722E753853AE30b17e08c5";
}
  if (network === 42161){
    ethUsdPrc = "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612";
}
  if (network === "celo"){
    ethUsdPrc = "Celo";
}
  if (network === "acab"){
    ethUsdPrc = "ACAB";
}
  if (network === "rinkeby"){
    ethUsdPrc = "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e";
}
  if (network === "mumbai"){
    ethUsdPrc = "0x0715A7794a1dc8e42615F059dD6e406A6594651A";
}
  if (network === "optigno") {e
    thUsdPrc = "Optimism-Gnosis";
}
  if (network === "arbigno") {e
    thUsdPrc = "Arbitrum-Gnosis";
}
  if (network === "fuji"){
    ethUsdPrc = "0x86d67c3D38D2bCeE722E601025C25a575021c6EA";
}
  if (network === "alfajores"){
    ethUsdPrc = "Alfajores";
}
  // deployer.deploy(s0xiety, process.env.ADMIN);
  deployer.deploy(Affilly8,ethUsdPrc);
  deployer.deploy(NFT_Factory);
  deployer.deploy(MLQ);
};

