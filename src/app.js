
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
let accounts;
let network;
let user;

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

  const affilly8 = require("../build/contracts/Affilly8.json");
  const NFT_Project = require("../build/contracts/NFT_Project.json");
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

// subnav bar

// pagination

// stages
const home_stage = document.getElementById("home_stage");
const campaign_stage = document.getElementById("campaign_stage");
const link_stage = document.getElementById("link_stage");
const tx_stage = document.getElementById("tx_stage");
const profile_stage = document.getElementById("tx_stage");
const wallet_stage = document.getElementById("tx_stage");
const net_stage = document.getElementById("tx_stage");

// formfields
const logform = document.getElementById("logform");
const profile = document.getElementById("profile");
const tokenList = document.getElementById("tokenList");
const campaignform = document.getElementById("campaignform");
const signup = document.getElementById("signup");
const inputusername = document.getElementById("input-username");
const inputemail = document.getElementById("input-email");
const inputavt = document.getElementById("input-avt");
const bProm = document.getElementById("bProm");
const bProd = document.getElementById("bProd");
const aScanUsers = document.getElementById("aScanUsers");
const aScanCampaigns = document.getElementById("aScanCampaigns");
const aScanTxs = document.getElementById("aScanTxs");
const cCampaign = document.getElementById("cCampaign");
const createC = document.getElementById("create");

// navigation functions
const goCampaigns = (e) => {
  e.preventDefault();
  console.log("campaigns stage opened");
  campaign_stage.style.display = "grid";
  link_stage.style.display = "none";
  tx_stage.style.display = "none";
};

const goLinks = (e) => {
  e.preventDefault();
  console.log("links stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "grid";
  tx_stage.style.display = "none";
};

const goTxs = (e) => {
  e.preventDefault();
  console.log("txs stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "none";
  tx_stage.style.display = "grid";
};

const goProfile = async (e) => {
  e.preventDefault();
  console.log("connected");
  const afl8 = await afl8Data();
  const showUser = await afl8.showU();
  const obj = JSON.parse(showUser[0]);
  console.log(obj);
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
    }
  }
};

const beProd = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const producer = await afl8.beProducer();
  console.log(producer);
  if(producer < 1) bProd.style.display = "none";
};
const beProm = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const promoter = await afl8.bePromoter();
  console.log(promoter);
  if(promoter < 1) bProm.style.display = "none";
};
const createCampaign = (e) => {
  e.preventDefault();
  profile.style.display = "none"
  campaignform.style.display = "grid"
}
const makeCampaign = async (e) => {
  e.preventDefault();
  campaignform.style.display = "none"
}
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
    if (Number(network) === 100) networkTag = "xDai";
    if (Number(network) === 10) networkTag = "Optimism";
    if (Number(network) === 200) networkTag = "Arbitrum";
    if (Number(network) === 43224) networkTag = "Avalanche";
    if (Number(network) === 1312) networkTag = "ACAB";
    if (Number(network) === 80001) networkTag = "Mumbai";
    net_btn.innerHTML = networkTag;
    console.log(networkTag)
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
  const contractList = ["0xeedcb4183474d116234e61043596eb5f726cf358","0xbff584b3aab1d8bedf7e22e26c27da5f629a0f8d"]
  const afl8 = await afl8Data();
  let role = await afl8.role(accounts[0])
  
  let contract = await new ethers.Contract(contractList[0],NFT_Project.abi,signer);
  let bal = await contract.balanceOf(accounts[0])
  console.log(Number(role._hex),Number(bal._hex))
  let i = 0;
  let tokens = []
  while(i < bal){
    let tok = await contract.myNFTs(accounts[0],i)
    let t = Number(tok._hex)
    let iUrl =  await contract.tokenURI(t)
    // console.log("url ...",iUrl)
    let response = await fetch(iUrl)
    // console.log(response)
    if (response.ok) { 
      let json = await response.json();
      // console.log(json);
      tokens[i] = json
    } 
    console.log(tokens[i])
    i++;
  }
  let tokenLister = '<h3>my NFT tokens</h3>'
  tokens.map(token =>{
      tokenLister += '<div id="tokenShow" name="'+ token.name+'"><img id="imgShow" src="'+ token.image+'" /><br><b>'+ token.name+'</b><br><i>'+token.description+'</i><div id="create" class="btn">create campaign</div></div>'
  })
  tokenList.innerHTML = tokenLister
} 
const log = async () => {
  const afl8 = await afl8Data();
  // ask contract about user
  console.log("logging in ...")
  const isUser = await afl8.isUser(accounts[0]);
  if (isUser) {
    // is a user
    const uc = await afl8.showU();
    const txt = uc[0];
    const json = JSON.parse(txt);
    console.log(json);
    const role = await afl8.role(accounts[0]);
    console.log(Number(role._hex));
    if (Number(role._hex) === 99) {
      // user is admin
      profile_btn.innerHTML = json.username;
      profile_btn.addEventListener("click", goProfile);
      console.log("admin")
      // show admin menu
      tokenList.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "block";
      aScanCampaigns.style.display = "block";
      aScanTxs.style.display = "block";
      cCampaign.style.display = "block";
      getTokens();
    }
    if (Number(role._hex) === 4) {
      console.log("professional")
      // user is both
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      tokenList.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
    }
    if (Number(role._hex) === 2) {
      console.log("producer")
      // user is producer
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      // show promoter button
      bProd.style.display = "none";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
    }
    if (Number(role._hex) === 3) {
      console.log("promoter")
      // user is promoter
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      // show producer button
      bProd.style.display = "block";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
    }
    if (Number(role._hex) === 1) {
      console.log("guest")
      // user is signed but has no role
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      bProd.style.display = "block";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
    }
  } else {
    // is not a user
    profile_btn.innerHTML =
      accounts[0].slice(0, 4) +
      "..." +
      accounts[0].slice(accounts[0].length - 4, accounts[0].length);
    // open login form
    logform.style.display = "grid";
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
cCampaign.addEventListener("click", createCampaign)
createC.addEventListener("click", makeCampaign)

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
/*






//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com      //
//                                      //
//////////////////////////////////////////
/*
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import "../public/app.scss";
import { sha256 } from "crypto-hash";
import UAuth from "@uauth/js";
import { create } from "underscore";
const { Contract } = require('ethers');
let accounts;
let network;
let user;
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

const affilly8 = require("../build/contracts/Affilly8.json");
const IERC721 = require("../build/contracts/IERC721.json");
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

// subnav bar

// pagination

// stages
const home_stage = document.getElementById("home_stage");
const campaign_stage = document.getElementById("campaign_stage");
const link_stage = document.getElementById("link_stage");
const tx_stage = document.getElementById("tx_stage");
const profile_stage = document.getElementById("tx_stage");
const wallet_stage = document.getElementById("tx_stage");
const net_stage = document.getElementById("tx_stage");

// formfields
const logform = document.getElementById("logform");
const profile = document.getElementById("profile");
const campaignform = document.getElementById("campaignform");
const signup = document.getElementById("signup");
const inputusername = document.getElementById("input-username");
const inputemail = document.getElementById("input-email");
const inputavt = document.getElementById("input-avt");
const bProm = document.getElementById("bProm");
const bProd = document.getElementById("bProd");
const aScanUsers = document.getElementById("aScanUsers");
const aScanCampaigns = document.getElementById("aScanCampaigns");
const aScanTxs = document.getElementById("aScanTxs");
const cCampaign = document.getElementById("cCampaign");
const createC = document.getElementById("create");

// navigation functions
const goCampaigns = (e) => {
  e.preventDefault();
  console.log("campaigns stage opened");
  campaign_stage.style.display = "grid";
  link_stage.style.display = "none";
  tx_stage.style.display = "none";
};

const goLinks = (e) => {
  e.preventDefault();
  console.log("links stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "grid";
  tx_stage.style.display = "none";
};

const goTxs = (e) => {
  e.preventDefault();
  console.log("txs stage opened");
  campaign_stage.style.display = "none";
  link_stage.style.display = "none";
  tx_stage.style.display = "grid";
};

const goProfile = async (e) => {
  e.preventDefault();
  console.log("connected");
  const afl8 = await afl8Data();
  const showUser = await afl8.showU();
  const obj = JSON.parse(showUser[0]);
  console.log(obj);
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
    }
  }
};

const beProd = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const producer = await afl8.beProducer();
  console.log(producer);
  if(producer < 1) bProd.style.display = "none";
};
const beProm = async (e) => {
  e.preventDefault();
  const afl8 = await afl8Data();
  const promoter = await afl8.bePromoter();
  console.log(promoter);
  if(promoter < 1) bProm.style.display = "none";
};
const createCampaign = (e) => {
  e.preventDefault();
  profile.style.display = "none"
  campaignform.style.display = "grid"
}
const makeCampaign = async (e) => {
  e.preventDefault();
  campaignform.style.display = "none"
}
const onClickConnect = async (e) => {
  e.preventDefault();
  try {
    // set label for profile button
    console.log("connecting ...");
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
    if (Number(network) === 100) networkTag = "xDai";
    if (Number(network) === 10) networkTag = "Optimism";
    if (Number(network) === 200) networkTag = "Arbitrum";
    if (Number(network) === 43224) networkTag = "Avalanche";
    if (Number(network) === 1312) networkTag = "ACAB";
    if (Number(network) === 80001) networkTag = "Mumbai";
    net_btn.innerHTML = networkTag;
    console.log(networkTag)
    user = await log();
  } catch (error) {
    console.error("connect error", error);
    profile_btn.innerText = "Connect";
  }
};
const afl8Data = async () => {
  const deploymentKey = Object.keys(affilly8.networks)[0];
  console.log(affilly8.abi,provider);
  return new ethers.Contract(
    affilly8.networks[deploymentKey].address,
    affilly8.abi,
    signer
  );
};


const log = async () => {

  const afl8 = await afl8Data();
  console.log("logging in ...");
  // ask contract about user
  const isUser = await afl8.isUser(accounts[0]);
  if (isUser) {
    console.log("is user ...")
    // is a user
    const uc = await afl8.showU();
    const txt = uc[0];
    const json = JSON.parse(txt);
    console.log(json);
    const role = await afl8.role(accounts[0]);
    console.log(Number(role._hex));
    if (Number(role._hex) === 99) {
      // user is admin
      profile_btn.innerHTML = json.username;
      profile_btn.addEventListener("click", goProfile);
      console.log("admin")
      // show admin menu
      profile.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "block";
      aScanCampaigns.style.display = "block";
      aScanTxs.style.display = "block";
      cCampaign.style.display = "block";
      // getNFTs();
      
    }
    if (Number(role._hex) === 4) {
      console.log("professional")
      // user is both
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      bProd.style.display = "none";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
      // getNFTs();
    }
    if (Number(role._hex) === 2) {
      console.log("producer")
      // user is producer
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      // show promoter button
      bProd.style.display = "none";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "block";
      // getNFTs();
      
    }
    if (Number(role._hex) === 3) {
      console.log("promoter")
      // user is promoter
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      // show producer button
      bProd.style.display = "block";
      bProm.style.display = "none";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
    }
    if (Number(role._hex) === 1) {
      console.log("guest")
      // user is signed but has no role
      profile_btn.innerHTML = json.name;
      profile_btn.addEventListener("click", goProfile);
      profile.style.display = "grid";
      bProd.style.display = "block";
      bProm.style.display = "block";
      aScanUsers.style.display = "none";
      aScanCampaigns.style.display = "none";
      aScanTxs.style.display = "none";
      cCampaign.style.display = "none";
    }
  } else {
    console.log("not user ...");
    // is not a user
    profile_btn.innerHTML =
      accounts[0].slice(0, 4) +
      "..." +
      accounts[0].slice(accounts[0].length - 4, accounts[0].length);
    // open login form
    logform.style.display = "grid";
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
const getNFTs = async () => {
  console.log("getting nfts ...")
  let conArr = ["", ]
  conArr.map(addressC => {
    console.log(addressC)
    const tokenAddress = addressC; 
    const options = {
      address: accounts[0], // your (target) address
      provider: signer, // network = mainnet/testnet/etc (you can omit network if your target is mainnet)
    }
    const nftContract = new Contract(tokenAddress, IERC721.abi, options.provider);
    const getBalance = async (options) => {
      const balance = await nftContract.balanceOf(options.address);
      return balance.toString();
    }
    const getTokenByCount = async (count) => {
      const tokensCount = await nftContract.myNFTAmount(options.address);
      return tokensCount;
    }
  })
   
  
      
}

 // navigation event listeners
campaigns_btn.addEventListener("click", goCampaigns);
links_btn.addEventListener("click", goLinks);
trxs_btn.addEventListener("click", goTxs);
bProd.addEventListener("click", beProd);
bProm.addEventListener("click", beProm);
cCampaign.addEventListener("click", createCampaign)
createC.addEventListener("click", makeCampaign)

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

/*  Back to normal here



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
/*







const initialize = () => {
    //Basic Actions Section
    mlqButton.innerHTML =  " " + count;
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    const clickInstall = () => {
        alert("You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions.");
        window.open("https://metamask.io");
    };
    const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
        onboardButton.addEventListener("click",clickInstall);
        } else {
        //If it is installed we change our button text
        onboardButton.innerText = 'Connect';
        onboardButton.addEventListener("click",onClickConnect);
        }
    };
    MetaMaskClientCheck();
}
const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      onboardButton.innerHTML = 'Connecting ...';
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
     // console.log("what");
     // const accounts = await ethereum.request({ method: 'eth_accounts' });
      const network = await ethereum.request({method: 'net_version'});
      var networkTag = "Switch Network";
    //We take the first address in the array of addresses and display it
                        if(Number(network) === 80001) networkTag =  "Mumbai";
                        if(Number(network) === 1) networkTag =  "ETH";
                        if(Number(network) === 137) networkTag =  "Polygon";
                        if(Number(network) === 100) networkTag =  "xDai";
                        if(Number(network) === 10) networkTag =  "Optimism";
                        if(Number(network) === 200) networkTag =  "Arbitrum";
                        if(Number(network) === 43224) networkTag =  "Avalanche";
                        if(Number(network) === 1312) networkTag = "ACAB";
    networkButton.innerHTML = networkTag;
    const UserData = await log();
    // console.log(UserData);
    
    } catch (error) {
      console.error(error);
      onboardButton.innerText = 'Connect';
    }
    
};
const onClickCreate = async () => {
    try {
        const memDat = await memData();
        const rando = await memDat.getRandomResult().then(result => { console.log(BigInt(result._hex)); return result; });
        fuid.value = rando._hex;
        // console.log(fuid.value);
        form.style.display = "block";

        formBtn.addEventListener("click",makeAMember);

    } catch (error) {
        console.error(error);
        onboardButton.innerText = 'Connect';
        onboardButton.removeEventListener("click",onClickCreate);
        onboardButton.addEventListener("click",onClickConnect);
      }
    
};
const makeAMember = async (e) => {
    try{
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const memDat = await memData();
        const dias = {
            id: fuid.value,
            name: fname.value,
            rank: frank.value,
            status: fstatus.value,
            bday: new Date(fbday.value).getTime(),
        }
        const DIAS = JSON.stringify(dias);
        console.log(DIAS);
        const membership = await memDat.makeMember(dias.name,dias.rank,dias.bday, DIAS ,dias.status).then(result => { return result; });
        form.style.display = "none";
        onboardButton.innerHTML = "<b>"+accounts[0].slice(0,5)+"..."+accounts[0].slice(38,42)+"</b>"; 
        onboardButton.removeEventListener("click",onClickCreate);
        // onboardButton.addEventListener("click",onClickGoPro);
    } catch (error) {
        console.error(error);
        form.style.display = "none";
        onboardButton.innerText = 'Connect';
        onboardButton.removeEventListener("click",onClickCreate);
        onboardButton.addEventListener("click",onClickConnect);
    }
};
const tellRank = (rank) => {
    let title;
    if(rank >= 11) title = "USER";
    if(rank >= 11) title = "MEMBER";
    if(rank >= 22) title = "AMATEUR";
    if(rank >= 33) title = "PRO";
    if(rank >= 44) title = "EXPERT";
    if(rank >= 55) title = "VIRTU0X0";
    if(rank >= 66) title = "MODERATOR";
    if(rank >= 77) title = "PARTNER";
    if(rank >= 88) title = "MANAGER";
    if(rank == 99) title = "ADMIN";
    return title;
};
const goMyPro = async (e) => {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const memDat = await memData();
        myPro.style.display = "block";
        allMem.style.display = "none";
        const id = await memDat.slotId(accounts[0]).then(result => {return Number(result._hex);});
        console.log("my pro", id);
        const proData = await memDat.members(id - 1).then(result => {return result;});

        

        myPro.innerHTML = "<div id='board'><div id='proCard'><div id='name'>"+ proData.name +
                            "</div><div id='status'>"+ proData.status  +
                            "</div><div id='rank'>"+ tellRank(proData.rank)  +
                            "</div><div id='bday'>"+ proData.bday  +
                            "</div><div id='dias'>"+ proData.dias  +
                            "</div><div id='since'>"+ proData.since  +"</div><div id='steps'>"+ count   + " steps</div></div></div>";
        proCard.style.gridRow = 2;
        proCard.style.gridColumn = id;


    } catch(error) {
        console.error(error);
    }
};
const goAllMem = async (e) => {
    try {
        const memDat = await memData();
        allMem.style.display = "block";
        myPro.style.display = "none";
        const count = await memDat.countMem().then(result => {return Number(result._hex);});
        let addi = "";
        for(let i = 0; i < count-1; i++){
            console.log("all mem", i + 1);   
            const proData = await memDat.members(i).then(result => {return result;});
            addi += "<div id='proCard'>"+ (i + 1) + ' | '+ proData.name + " - "+ tellRank(proData.rank) +"</div>";
        }
        allMem.innerHTML = "<div id='board'>"+ addi +"</div>";
        
    } catch(error) {
        console.error(error);
    }
};
const log = async () => {
   
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const memDat = await memData();
    // const verify = await memDat.verify(accounts[0],"dynMem",);
    const sign = signer.signMessage("dynMem");
    const isUser = await memDat.isSigned().then(result => { console.log(result); return result; });
    const userId = Number(isUser._hex);
    // console.log(userId);
    if(userId === 0){
        // generate new random number 
        const vrfReq = await memDat.doRand().then(result => { return result; });
        onboardButton.innerHTML = "<b style='color:red'>create account</b>";  
        onboardButton.removeEventListener("click",onClickConnect);
        onboardButton.addEventListener("click",onClickCreate);
        onboardButton.disabled;
    }
    else {
        links.style.display = "block";
        onboardButton.innerHTML = "<b>"+accounts[0].slice(0,5)+"..."+accounts[0].slice(38,42)+"</b>"; 
        myProBtn.addEventListener("click",goMyPro);
        allMemBtn.addEventListener("click",goAllMem);
    }
    


   
};
/*
const s0xData = async () => {
    
    const deploymentKey = Object.keys(s0xiety.networks)[0];
    // console.log(s0xiety.abi,provider);
    return new ethers.Contract(
            s0xiety
            .networks[deploymentKey]
            .address, s0xiety.abi, signer
    );
}

const memData = async () => {
    
    const deploymentKey = Object.keys(dynMem.networks)[0];
    // console.log(s0xiety.abi,provider);
    return new ethers.Contract(
            dynMem
            .networks[deploymentKey]
            .address, dynMem.abi, signer
    );
}


const checkNameIn = (e) => {
    let nowChar = e.target.value[e.target.value.length-1];
    if(nowChar === "("||nowChar === ")"||nowChar === ","||nowChar === ";"||nowChar === "."||nowChar === ":"||nowChar === "&"||nowChar === "|"||nowChar === "$"||nowChar === "<"||nowChar === ">"||nowChar === "?"||nowChar === "!"||nowChar === "-"||nowChar === "+"||nowChar === "*"||nowChar === "/"||nowChar === "%") {
        nameInput.value = nameInput.value.substring(0, nameInput.value.length - 1)
    }
    if(e.target.value.length < 4 ||nowChar ===  e.target.value.length > 12) nameInput.style.borderColor = "red";
    else nameInput.style.borderColor = "mediumseagreen";  
}
const checkMailIn = (e) => {
    let nowChar = e.target.value[e.target.value.length-1];
    if(nowChar === "("||nowChar === ")"||nowChar === ","||nowChar === ";"||nowChar === ":"||nowChar === "&"||nowChar === "|"||nowChar === "$"||nowChar === "<"||nowChar === ">"||nowChar === "?"||nowChar === "!"||nowChar === "+"||nowChar === "*"||nowChar === "/"||nowChar === "%") {
        emailInput.value = emailInput.value.substring(0, emailInput.value.length - 1)
    }
    if(e.target.value.length < 10 ||nowChar ===  e.target.value.length > 32) emailInput.style.borderColor = "red";
    else emailInput.style.borderColor = "mediumseagreen";
}




//////////////////////////////////////////
//                                      //
//          Connect Web3                //
//                                      //
//////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

*/
