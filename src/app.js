//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com      //
//                                      //
//////////////////////////////////////////

import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import "../public/app.scss";
import { sha256 } from "crypto-hash";
import UAuth from "@uauth/js";
import { create } from "underscore";
import { stripZeros } from "ethers/lib/utils";
// globals 
let accounts;
let network;
let user;
let campaigns = [];
let links = [];
let txs = [];

const client = require("ipfs-http-client");

const ipfs = client.create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

const uauth = new UAuth({
  clientID: "101df3a0-41df-4c22-8edf-0cf4db92a61c",
  redirectUri: "http://127.0.0.1:5000/callback",
});

uauth
  .user()
  .then((user) => {
    // user exists
    console.log("User information:", user);
  })
  .catch(() => {
    // user does not exist
  });

const affilly8 = require("../dist/contracts/Affilly8.json");
const NFT_Project = require("../dist/contracts/NFT_Project.json");
const ERC721 = require("../dist/contracts/ERC721.json");
const EthPrice = require("../dist/contracts/PriceConsumerV3.json");
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
// links & buttons

// main navbar
const campaigns_btn = document.getElementById("campaigns_btn");
const links_btn = document.getElementById("links_btn");
const trxs_btn = document.getElementById("trxs_btn");
// defi navbar
const profile_btn = document.getElementById("profile_btn");
const wallet_btn = document.getElementById("wallet_btn");
const net_btn = document.getElementById("net_btn");
const newD = document.getElementById("new");
const guestD = document.getElementById("guest");
const promD = document.getElementById("promoter");
const prodD = document.getElementById("producer");
const adminD = document.getElementById("admin");

// subnav bar

// pagination

// stages
const home_stage = document.getElementById("home_stage");
const campaign_stage = document.getElementById("campaign_stage");
const link_stage = document.getElementById("link_stage");
const tx_stage = document.getElementById("tx_stage");
const link_detail = document.getElementById("link_detail");
const profile_stage = document.getElementById("tx_stage");
const wallet_stage = document.getElementById("tx_stage");
const net_stage = document.getElementById("tx_stage");

// formfields
const logform = document.getElementById("logform");
const profile = document.getElementById("profile");
const tokenList = document.getElementById("tokenList");
const campaignform = document.getElementById("campaignform");
const campaignshow = document.getElementById("campaignshow");
const campaign_block = document.getElementById("campaign_block");
const link_block = document.getElementById("link_block");
const tx_block = document.getElementById("tx_block");
const signup = document.getElementById("signup");
const inputusername = document.getElementById("input-username");
const inputemail = document.getElementById("input-email");
const inputavt = document.getElementById("input-avt");
const bProm = document.getElementById("promote_btn");
const bProd = document.getElementById("produce_btn");
const aScanUsers = document.getElementById("aScanUsers");
const aScanCampaigns = document.getElementById("aScanCampaigns");
const aScanTxs = document.getElementById("aScanTxs");
const cCampaign = document.getElementById("cCampaign");
const createC = document.getElementById("create");
let tBtns = document.getElementsByClassName("tok_btn");
let cBtns = document.getElementsByClassName("cbtn");
let acBtns = document.getElementsByClassName("acbtn");
let lBtns = document.getElementsByClassName("lbtn");
const mint = document.getElementById("mint");

// const txBtns = document.getElementsByClassName("txbtn");

const description = document.getElementById("desc");
const owner = document.getElementById("owner");
const tokAdr = document.getElementById("tokenAddress");
const tokId = document.getElementById("tokenId");
const price = document.getElementById("price");
const fee = document.getElementById("fee");
const currencyx = document.getElementById("currency_box");
const duration = document.getElementById("duration");
const home_badge = document.getElementById("home_badge");

// navigation functions
let contractList = [];
const getProjects = () => {
  // POLYGON
  // mumbai
  if (Number(network) == 80001)
    contractList = [
      "0xeedcb4183474d116234e61043596eb5f726cf358",
      "0xbff584b3aab1d8bedf7e22e26c27da5f629a0f8d",
      "0xa0ddf52b92c9db7cacc03f734f83e737e17b1906",
    ];
  // polygon mainnet
  if (Number(network) == 137) contractList = [""];

  // ETHEREUM
  // rinkeby
  if (Number(network) == 4)
    contractList = ["0xD8d0fCD69499A8634A09A4E8B2af2634CD6418E2"];
  // eth mainnet
  if (Number(network) == 1) contractList = [""];

  // BINANCE
  // bnb testnet
  if (Number(network) == 97)
    contractList = ["0x177710A55f46318eB3Aae804F1bD623Ba26aDf22"];
  // bnb mainnet
  if (Number(network) == 56) contractList = [""];

  // AVALANCHE
  // fuji
  if (Number(network) == 43113)
    contractList = ["0x6BC6756A133c82b6374eF35F355C8e1D3Fb02Dd4"];
  // avax mainnet
  if (Number(network) == 43114) contractList = [""];
}
const goMint = async (e) => {
  let contractNFT;

  // POLYGON
  // mumbai
  if (Number(network) == 80001)
    contractNFT = "0xa0ddf52b92c9db7cacc03f734f83e737e17b1906";
  // polygon mainnet
  if (Number(network) == 137) contractNFT = "";

  // ETHEREUM
  // rinkeby
  if (Number(network) == 4)
    contractNFT = "0xD8d0fCD69499A8634A09A4E8B2af2634CD6418E2";
  // eth mainnet
  if (Number(network) == 1) contractNFT = "";

  // BINANCE
  // bnb testnet
  if (Number(network) == 97)
    contractNFT = "0x177710A55f46318eB3Aae804F1bD623Ba26aDf22";
  // bnb mainnet
  if (Number(network) == 56) contractNFT = "";

  // AVALANCHE
  // fuji
  if (Number(network) == 43113)
    contractNFT = "0x6BC6756A133c82b6374eF35F355C8e1D3Fb02Dd4";
  // avax mainnet
  if (Number(network) == 43114) contractNFT = "";

  let contract = await new ethers.Contract(
    contractNFT,
    NFT_Project.abi,
    signer
  );
  let mint = await contract.mintToken({ value: 10 ** 14 });
};

const goCreate = (e) => {
  e.preventDefault();
  console.log(e.target.id);
  tokenList.style.display = "none";
  campaignform.style.display = "grid";
  campaignshow.style.display = "grid";
  tokAdr.value = e.target.id.split("/%/")[0];
  tokId.value = e.target.id.split("/%/")[1];
  owner.value = accounts[0];
  let img = e.target.id.split("/%/")[3];
  description.value = e.target.id.split("/%/")[2];
  home_badge.innerHTML =
    "now it's time to<br/>create campaigns<br/><i>affilly8</i>";
  campaignshow.innerHTML = `<img src="${img}" id="campaignimg"/>`;
  console.log(tokAdr.value, tokId.value, img, description.value);
  grabCreateInfo();
};
const grabCreateInfo = () => {
  let currencyX;
  if (Number(network) === 1) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0000000000000000000000000000000000000000",
      dai: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    };
  }
  if (Number(network) === 137) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0000000000000000000000000000000000000000",
      dai: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      weth: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    };
  }
  if (Number(network) === 100) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0000000000000000000000000000000000000000",
      dai: "0x26F2319Fbb44772e0ED58fB7c99cf8da59e2b5BE",
      weth: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
    };
  }
  if (Number(network) === 10) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 42161) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 43224) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 42220) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 1312) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 4) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x41598ba8E72C056131eee70787A125Aa36E5d3aA",
      dai: "0x0165b733e860b1674541BB7409f8a4743A564157",
      weth: "0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15",
    };
  }
  if (Number(network) === 97) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x8A7E9B9339bAe94FEdc51a1b3D0DaDA378f7806E",
      dai: "0x8A7E9B9339bAe94FEdc51a1b3D0DaDA378f7806E",
      weth: "0x8A7E9B9339bAe94FEdc51a1b3D0DaDA378f7806E",
    };
  }
  if (Number(network) === 56) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0000000000000000000000000000000000000000",
      dai: "0x0000000000000000000000000000000000000000",
      weth: "0x0000000000000000000000000000000000000000",
    };
  }
  if (Number(network) === 80001) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
      dai: "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
      weth: "0x062f24cb618e6ba873EC1C85FD08B8D2Ee9bF23e",
    };
  }
  if (Number(network) === 300) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 200) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  if (Number(network) === 43113) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x472b3EA79d50FcC16f0fC4E10B081122437780D9",
      dai: "0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a",
      weth: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    };
  }
  if (Number(network) === 44787) {
    currencyX = {
      eth: "0x0000000000000000000000000000000000000000",
      mlq: "0x0",
      dai: "0x0",
      weth: "0x0",
    };
  }
  console.log(currencyx);
  currencyx.innerHTML += `<select id="currency" ><option  id="eth" value="${currencyX.eth}">ETH</option><option  id="mlq" value="${currencyX.mlq}">MLQ</option><option  id="dai" value="${currencyX.dai}">DAI</option><option  id="weth" value="${currencyX.weth}">WETH</option></select>`;
};
const goCreateCustom = async (e) => {
  e.preventDefault();
  tokenList.style.display = "none";
  campaignform.style.display = "grid";
  campaignshow.style.display = "grid";
  let tAdr;
  let tId;
  if (opensea.value.length >= 0) {
    let hold = [];
    hold = opensea.value.split("/");
    if (opensea.value.includes("/mumbai/")) {
      tAdr = hold[5];
      tId = hold[6];
    } else {
      tAdr = hold[4];
      tId = hold[5];
    }
  } else {
    tAdr = customAdr.value;
    tId = customId.value;
  }
  console.log(tAdr, tId);
  let contract = await new ethers.Contract(tAdr, NFT_Project.abi, signer);
  console.log(tId);
  const img = await contract.tokenURI(tId);
  console.log(img.result);
  description.value = "external token";
  home_badge.innerHTML =
    "now it's time to<br/>create campaigns<br/><i>affilly8</i>";
  campaignshow.innerHTML = `<img src="${img}" id="campaignimg"/>`;
  grabCreateInfo();
};
const goCreateLink = async (e) => {
  e.preventDefault();
  console.log(e.target.id);
  const afl8 = await afl8Data();
  const makelink = await afl8.makeLink(e.target.id);
  console.log(makelink);
};
const goCampaigns = (e) => {
  e.preventDefault();
  console.log("campaigns stage opened");
  campaign_stage.style.display = "grid";
  link_stage.style.display = "none";
  tx_stage.style.display = "none";
  campaignform.style.display = "none";
  campaignshow.style.display = "none";
  tokenList.style.display = "none";
  home_stage.style.display = "none";
  createCampaignList();
  console.log(campaigns);
};

const goLinks = (e) => {
  e.preventDefault();
  console.log("links stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "grid";
  tx_stage.style.display = "none";
  campaignform.style.display = "none";
  campaignshow.style.display = "none";
  tokenList.style.display = "none";
  home_stage.style.display = "none";
  createLinkList();
};

const goTxs = (e) => {
  e.preventDefault();
  console.log("txs stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "none";
  tx_stage.style.display = "grid";
  campaignform.style.display = "none";
  campaignshow.style.display = "none";
  tokenList.style.display = "none";
  home_stage.style.display = "none";
  createTxList();
};

const goProfile = async (e) => {
  e.preventDefault();
  console.log("connected");
  const afl8 = await afl8Data();
  const showUser = await afl8.showU();
  const obj = JSON.parse(showUser[0]);
  console.log(obj);

  campaignform.style.display = "none";
  campaignshow.style.display = "none";
  home_stage.style.display = "grid";
  tokenList.style.display = "grid";
  tokenList.innerHTML = "";
  home_badge.innerHTML =
    "create campaigns<br/>promote campaigns<br/><i>affilly8</i>";
  user = await log();
  // getTokens();
};
const makeUser = async (e) => {
  e.preventDefault();
  if (
    inputusername.value.length > 5 &&
    inputemail.value.length > 10 &&
    inputavt.value.length > 5
  ) {
    const obj = `{"name":"${inputusername.value}","email":"${
      inputemail.value
    }","avt":"${inputavt.value}","created": "${Date.now()}"}`;
    console.log(obj);
    const afl8 = await afl8Data();
    const makeUser = await afl8.makeU(obj);
    profile_btn.innerHTML = "@" + obj.name;
    if (makeUser) {
      logform.style.display = "none";
      profile.style.display = "grid";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
      user = obj;
    }
  }
};

const beProd = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const producer = await afl8.beProducer();
  console.log(producer);
  if (producer < 1) bProd.style.display = "none";
};
const beProm = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const promoter = await afl8.bePromoter();
  console.log(promoter);
  if (promoter < 1) bProm.style.display = "none";
};
const createCampaign = (e) => {
  e.preventDefault();
  profile.style.display = "none";
  campaignform.style.display = "grid";
};

const makeCampaign = async (e) => {
  e.preventDefault();
  campaignform.style.display = "none";
  const obj = {
    description: description.value,
    owner: owner.value,
    tokAdr: tokAdr.value,
    tokId: tokId.value,
    price: price.value,
    fee: fee.value,
    currency: currency.value,
    duration: duration.value,
  };

  const afl8 = await afl8Data();
  const count = await afl8.getCampaignCount();
  console.log(obj, count);
  const makeCamp = await afl8.makeCampaign(
    Number(count._hex),
    description.value,
    owner.value,
    tokAdr.value,
    tokId.value,
    price.value,
    currency.value,
    fee.value,
    duration.value
  );
  console.log("make campaign ::: ",obj);
  // createCampaignList();
};

const createCampaignList = async () => {
  const afl8 = await afl8Data();
  const count = await afl8.getCampaignCount();
  console.log(count);
  let i = 0;
  while (i < Number(count._hex)) {
    const campaign = await afl8.campaigns(i);
    console.log(campaign);
    campaigns[i] = campaign;
    i++;
  }
  showCampaignList();
};

const showCampaignList = async () => {
  const afl8 = await afl8Data();
  // console.log(campaigns);
  campaign_block.innerHTML = "";
  campaigns.map((campaign, indx) => {
    // console.log(campaign)
    campaign_block.innerHTML +=
      "<div class='campaign_item' id='" +
      campaign.id +
      "'><div id='name'>" +
      campaign.owner.slice(0, 4) +
      "..." +
      campaign.owner.slice(38, 42) +
      "</div><div id='description'>" +
      campaign.tokenAddress.slice(0, 4) +
      "..." +
      campaign.tokenAddress.slice(38, 42) +
      "/" +
      campaign.tokenId +
      "</div><div id='currency'>" +
      campaign.payCurrency.slice(0, 4) +
      "..." +
      campaign.payCurrency.slice(38, 42) +
      "</div><div id='price'>" +
      (Number(campaign.price) / 10 ** 18).toFixed(2) +
      "</div><div id='fee'>" +
      (Number(campaign.fee) / 10 ** 18).toFixed(2) +
      "</div> <div id=" +
      campaign.id +
      " class='cbtn'>create a ref link</div></div>";
  });

  let t = 0;
  while (t < cBtns.length) {
    const camps = await afl8.campaigns(t);
    console.log(accounts[0], camps.owner);
    if(String(accounts[0]).toLowerCase()  == String(camps.owner).toLowerCase()) {
      cBtns[t].innerHTML = "approve token for collection"; 
      cBtns[t].addEventListener("click", goApproveCampaign);
      console.log("owner");
    }
    else {cBtns[t].addEventListener("click", goCreateLink);console.log("promoter");}
    t++;
  }
};
const createLink = async (e) => {
  e.preventDefault();
  console.log(campaign[e.target.id]);
  // isolate campaign data
  const afl8 = await afl8Data();
  const count = await afl8.makeLink(e.target.id);
};
const createLinkList = async () => {
  const afl8 = await afl8Data();
  const count = await afl8.getLinkCount();
  let i = 0;
  while (i < Number(count._hex)) {
    const link = await afl8.links(i);
    links[i] = link;
    i++;
  }
  showLinkList();
};
const showLinkList = async () => {
  let block = "";
  let aprlink;
  links.map((link) => {
    console.log(Number(link.campaigId._hex));
    block +=
      "<div class='link_item' id='" +
      Number(link.id._hex) +
      "'><div id='name'>" +
      link.promoter.slice(0, 4) +
      "..." +
      link.promoter.slice(38, 42) +
      "</div><div id='campaign'>" +
      Number(link.id._hex) +
      ":" +
      Number(link.campaigId._hex) +
      "</div>";
    block +=
      "<div id='apr:" +
      Number(link.campaigId._hex) +
      ":" +
      Number(link.id._hex) +
      "' class='acbtn'>approve campaign</div>";
    // block += "<div id='fin" + Number(link.id._hex) +"' class='lbtn'>finalize tx</div>";
    block += "</div>";
    
  });
    link_block.innerHTML = block;
    let i = 0;
    while(i < acBtns.length){
    const camps = await afl8.campaigns(i);
    if(String(accounts[0]).toLowerCase()  == String(camps.owner).toLowerCase()) { acBtns[i].style.display = "none"; }
    else acBtns[i].addEventListener("click", goApproveFunds);
    i++;}
    };
const showApprove = async (e) => {
  e.preventDefault();
  const cid = e.target.id.split(":")[1];
  const rlid = e.target.id.split(":")[2];
  const afl8 = await afl8Data();
  console.log(cid,rlid);
  const campaign = await afl8.campaigns(cid);
  const reflink = await afl8.links(Number(rlid));
  // link_detail.innerHTML = `<h2>${campaign.name} informationen</h2>`
}
const goFinalize = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  console.log(e.target.id);
  let rlid = e.target.id.split(':')[2];
  console.log(rlid);
  const finalize = await afl8.finalize(rlid);
  // createTxList();
};
const goApproveCampaign = async (e) => {
  e.preventDefault();
  const cid = e.target.id;
  console.log(cid);
  const afl8 = await afl8Data();
  const camp = await afl8.campaigns(cid);
  const tId = camp.tokenId;
  console.log(camp,tId);
  const appr = await afl8.approveCampaign(cid);
  const aprlink = document.getElementById(e.target.id);
  aprlink.innerHTML = "finalize tx";
  aprlink.removeEventListener("click", goApproveCampaign);
  aprlink.addEventListener("click", goFinalize);
  // createTxList();
};
const goApproveFunds = async (e) => {
  e.preventDefault();
  const cid = e.target.id.split(":")[1];
  const rlid = e.target.id.split(':')[2];
  console.log(cid,rlid);
  const afl8 = await afl8Data();
  const campaign = await afl8.campaigns(cid);
  const link = await afl8.links(rlid);
   console.log("check rlid :: ",rlid,"check user :: ", accounts[0] ,"check cid :: ", cid,"check promoter :: ",link.promoter,"check owner :: ",campaign.owner,"check tok adr :: ",campaign.tokenAddress,"check tok id :: ",campaign.tokenId._hex);
  const approve = await afl8.approveFunds(rlid);
  const aprlink = document.getElementById(e.target.id);
  aprlink.innerHTML = "finalize tx";
  aprlink.removeEventListener("click", goApproveFunds);
  aprlink.addEventListener("click", goFinalize);
  // createTxList();
};
const createTxList = async () => {
  const afl8 = await afl8Data();
  const count = await afl8.getTxCount();
  let i = 0;
  while (i < Number(count._hex)) {
    const tx = await afl8.txs(i);
    txs[i] = tx;
    i++;
  }
  showTxList();
};
const showTxList = () => {
  tx_block.innerHTML = "";
  txs.map((tx) => {
    console.log(tx);
    tx_block.innerHTML +=
      "<div class='link_item' id='" +
      Number(tx.id._hex) +
      "'><div id='referal'>" +
      Number(tx.rlid._hex) +
      "</div><div id='campaign'>" +
      Number(tx.cid._hex) +
      "</div></div>";
  });
};
const onClickConnect = async (e) => {
  e.preventDefault();
  try {
    // set label for profile button
    console.log("connecting");
    profile_btn.innerHTML = "connecting ...";
    // set eventlistener for profile button
    profile_btn.removeEventListener("click", onClickConnect);
    // get wallet address and account data of client and store in main state accounts
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // get network data
    network = await ethereum.request({ method: "net_version" });
    var networkTag = "Switch Network";
    // evaluate legal networks
    if (Number(network) === 1) networkTag = "ETH";
    if (Number(network) === 137) networkTag = "Polygon";
    if (Number(network) === 43224) networkTag = "Avalanche";
    if (Number(network) === 56) networkTag = "BSC";
    if (Number(network) === 97) networkTag = "Chalen";
    if (Number(network) === 100) networkTag = "xDai";
    if (Number(network) === 10) networkTag = "Optimism";
    if (Number(network) === 42161) networkTag = "Arbitrum";
    if (Number(network) === 42220) networkTag = "Celo";
    if (Number(network) === 1312) networkTag = "ACAB";
    if (Number(network) === 4) networkTag = "Rinkeby";
    if (Number(network) === 80001) networkTag = "Mumbai";
    if (Number(network) === 300) networkTag = "Optimism-Gnosis";
    if (Number(network) === 200) networkTag = "Arbitrum-Gnosis";
    if (Number(network) === 43113) networkTag = "Fuji";
    if (Number(network) === 44787) networkTag = "Alfajores";
    net_btn.innerHTML = networkTag;
    net_btn.style.display = "block";
    console.log(networkTag);
    user = await log();
  } catch (error) {
    console.error("connect error", error);
    profile_btn.innerText = "Connect";
  }
};
const afl8Data = async () => {
  const deploymentKey = Object.keys(affilly8.networks)[0];
  // console.log(s0xiety.abi,provider);
  return new ethers.Contract(
    affilly8.networks[deploymentKey].address,
    affilly8.abi,
    signer
  );
};
const getTokens = async () => {

  const afl8 = await afl8Data();
  // let role = await afl8.role(accounts[0]);
  getProjects();
  let j = 0;
  let contract;
  while (j < contractList.length) {
      contract = await new ethers.Contract(
      contractList[j],
      NFT_Project.abi,
      signer
      );
    let bal = await contract.balanceOf(accounts[0]);
    
    // console.log("Role : " + Number(role._hex), "Balance : " + Number(bal._hex));
    let i = 0;
    let tokens = [];
    let tok = [];
    while (i < bal) {
      tok[i] = await contract.myNFTs(accounts[0], i);
      let t = Number(tok[i]._hex);
      console.log(Number(tok[i]._hex));
      let iUrl = await contract.tokenURI(t);
      // console.log("url ...",iUrl)
      let response = await fetch(iUrl);
      // console.log(response)
      if (response.ok) {
        let json = await response.json();
        // console.log(json);
        tokens[i] = json;
      }
      console.log(tokens[i]);
      i++;
    }
    let tokenLister = "";
    let list = [];
    tokens.map((token, indx) => {
      tokenLister =
        '<div class="tokenShow" id="show-' +
        contractList[j] +
        "/" +
        Number(tok[indx]._hex) +
        '" name="' +
        token.name +
        '"><img id="imgShow" src="' +
        token.image +
        '" /><br><b>' +
        token.name +
        "</b><br><i>" +
        token.description +
        '</i><div id="' +
        contractList[j] +
        "/%/" +
        Number(tok[indx]._hex) +
        "/%/" +
        token.name +
        "/%/" +
        token.image +
        '" class="tok_btn">create campaign</div></div>';
      tokenList.innerHTML += tokenLister;

      tokenList.style.display = "grid";
      console.log(j);
    });
    j++;
  }
  tokenList.innerHTML +=
    "<div class='tokenShow' id='custom'>Add a new token to the list by adding the contract address and token id<input type='text' id='customAdr' placeholder='contract address'/><input type='text' id='customId' placeholder='token id' />or an opensea link<input type='text' id='opensea' placeholder='https://opensea.io/...' /> <div id='custombtn' class='btn'>custom campaign</div></div>";
    let t = 0;
  while (t < tBtns.length) {
    tBtns[t].addEventListener("click", goCreate);
    t++;
  }
  const custombtn = document.getElementById("custombtn");
  const customAdr = document.getElementById("customAdr");
  const customId = document.getElementById("customId");
  const opensea = document.getElementById("opensea");
  custombtn.addEventListener("click", goCreateCustom);
};
const log = async () => {
  campaign_stage.style.display = "none";
  link_stage.style.display = "none";
  tx_stage.style.display = "none";
  const afl8 = await afl8Data();
  // ask contract about user
  const role = await afl8.getRole();
  const isUser = await afl8.isUserBool();
  console.log("logging in ...", role._hex);
  if (isUser) {
    // is a user
    const uc = await afl8.showU();
    console.log(uc);
    let txt = uc[0];
    let hold = txt.replaceAll("/", "");
    console.log(txt);
    user = JSON.parse(txt);
    console.log(user);

    console.log(role._hex);
    if (Number(role._hex) === 99) {
      // user is admin
      profile_btn.innerHTML = user.username;
      profile_btn.addEventListener("click", goProfile);
      console.log("admin");
      // show admin menu
      tokenList.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "block";
      aScanCampaigns.style.display = "block";
      aScanTxs.style.display = "block";
      cCampaign.style.display = "block";
      net_btn.style.display = "block";

      getTokens();
    }
    if (Number(role._hex) === 4) {
      console.log("professional");
      // user is both
      profile_btn.innerHTML = user.name;
      profile_btn.addEventListener("click", goProfile);
      tokenList.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
      net_btn.style.display = "block";

      getTokens();
    }
    if (Number(role._hex) === 2) {
      console.log("producer");
      // user is producer
      profile_btn.innerHTML = user.name;
      profile_btn.addEventListener("click", goProfile);
      tokenList.style.display = "grid";
      // show promoter button
      bProd.style.display = "none";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
      net_btn.style.display = "block";

      getTokens();
    }
    if (Number(role._hex) === 3) {
      console.log("promoter");
      // user is promoter
      profile_btn.innerHTML = user.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      // show producer button
      bProd.style.display = "block";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
      net_btn.style.display = "block";
    }
    if (Number(role._hex) === 1) {
      console.log("guest");
      // user is signed but has no role
      profile_btn.innerHTML = user.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      bProd.style.display = "block";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
      net_btn.style.display = "block";
    }
  } else {
    // is not a user
    profile_btn.innerHTML =
      accounts[0].slice(0, 4) +
      "..." +
      accounts[0].slice(accounts[0].length - 4, accounts[0].length);
    // open login form
    logform.style.display = "grid";
    net_btn.style.display = "block";

    signup.addEventListener("click", makeUser);
  }
};

// unstoppable login tool
window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup();

    console.log(authorization);
  } catch (error) {
    console.error(error);
  }
};

// navigation event listeners
campaigns_btn.addEventListener("click", goCampaigns);
links_btn.addEventListener("click", goLinks);
trxs_btn.addEventListener("click", goTxs);
bProd.addEventListener("click", beProd);
bProm.addEventListener("click", beProm);
cCampaign.addEventListener("click", createCampaign);
createC.addEventListener("click", makeCampaign);
mint.addEventListener("click", goMint);

/* IMPORTANT FUNCTION WEB3INIT DO NOT EDIT  //
//////////////////////////////////////////
//                                      //
//          Init Metamask               //
//                                      //
//////////////////////////////////////////


Function initializes dapp for Defi interaction

requirements :
- a button with id:'profile_btn'
- a button with id:'net_btn'
- a button with id: 'wallet_btn' 
- a div with class: 'stage' and id: 'profile_stage'

*/
const web3init = async () => {
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  const clickInstall = (e) => {
    e.preventDefault();
    alert(
      "You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions."
    );
    window.open("https://metamask.io");
  };
  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      profile_btn.innerText = "install metamask!";
      profile_btn.addEventListener("click", clickInstall);
    } else {
      //If it is installed we change our button text
      profile_btn.innerText = "connect";
      profile_btn.addEventListener("click", onClickConnect);
    }
  };
  MetaMaskClientCheck();
};
// IMPRTANT INITIAL FUNCTION CALL
web3init();
// IMPORTANT FUNCTION WEB3INIT DO NOT EDIT END //
