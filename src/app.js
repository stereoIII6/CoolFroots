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

const client = require("ipfs-http-client");
const ipfs = client.create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
const Greenlist = require("../dist/contracts/Greenlist.json");
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// const url = "https://gateway.pinata.cloud/ipfs/QmamRUaez9fyXpeuTuiKCNvrKSsLxid4hzyKKkJXSi67LL/";
const url = "./images/";
let rand = 111111;

const goRand = () => {
  rand = Math.floor(Math.random() * 99999);
  // console.log(rand);
  if (rand < 9999) rand *= 99;
  if (rand < 99999) rand *= 9;
  draw();
};

setInterval(goRand, 5000);
const bg = document.getElementById("bg_img");
const body = document.getElementById("body_img");
const bubble = document.getElementById("bubble_img");
const brow = document.getElementById("brow_img");
const eye = document.getElementById("eye_img");
const mouth = document.getElementById("mouth_img");
const msg = document.getElementById("msg");
const new_msg = document.getElementById("new_msg");
const set = document.getElementById("set");
const inf = document.getElementById("inf");
// users
// 0xCECBDA74A1539F55dd73D92CBa274208262eBEFc
// 0x325A04e1f9baa3B081aDf627272D6B5328c54496
const GreenListData = async () => {
  if (network == 137) return new ethers.Contract("0xb2330f3836799B36F0be49Df1043C62d30253479", Greenlist.abi, signer);
  else if (network == 80001) return new ethers.Contract("0x0458e1c2eE2259d34f49749DB3f192fF80951992", Greenlist.abi, signer);
};
const setAdminMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsgAdmin(new_msg.value)
    .then((result) => {
      set.innerHTML = "ADMIN MESSAGE RESET";
      return result;
    })
    .catch((err) => {
      console.error(err);
      set.innerHTML = err.message.split(": ")[1];
    });
  NewMsg.wait().then((result) => {
    console.log(result);
    set.innerHTML = "NEW MESSAGE SET";
  });
};
const setNewMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsg(new_msg.value, { value: BigInt(1 * 1e18) })
    .then((result) => {
      set.innerHTML = "MESSAGE BEING SET";
      return result;
    })
    .catch((err) => {
      console.error(err.message.data);

      set.innerHTML = err.data.message.split(": ")[1];
    });
  NewMsg.wait().then((result) => {
    console.log(result);
    set.innerHTML = "NEW MESSAGE SET";
  });
};
let MSG;
const getMSG = async () => {
  const GL = await GreenListData();
  const MSGH = GL.showMsg().then((result) => {
    console.log(result);
    return result;
  });
  console.log(MSGH);
  return MSGH;
};
const draw = async () => {
  console.log(rand, "bg :" + Math.floor(Number(String(rand)[0])), "body :" + Math.floor(Number(String(rand)[1]) / 2), "bubble :" + Math.floor(Number(String(rand)[2]) / 3), "eye :" + String(rand)[3], "mouth :" + String(rand)[4]);
  bg.src = url + "bg/" + Math.floor(Number(String(rand)[0])) + ".png";
  body.src = url + "body/" + Math.floor(Number(String(rand)[1])) + ".png";
  // body.src = url+"body/"+4+".png";
  bubble.src = url + "bubble/" + Math.floor(Number(String(rand)[2]) / 2) + ".png";
  brow.src = url + "brow/" + Math.floor(Number(String(rand)[3])) + ".png";
  eye.src = url + "eye/" + String(rand)[4] + ".png";
  let go;
  if (String(rand)[5] == undefined) go = 0;
  else go = String(rand)[5];
  mouth.src = url + "mouth/" + go + ".png";
  msg.innerHTML = "YOU CAN EDIT THIS MESSAGE !";
  // console.log(accounts[0]);
  if (accounts[0]) msg.innerHTML = await getMSG();
  const l = msg.innerHTML.length;
  // console.log(l);
  if (l <= 12) msg.style.fontSize = "3em";
  else if (l <= 32) msg.style.fontSize = "2em";
  else if (l <= 45) msg.style.fontSize = "1.2em";
  else msg.style.fontSize = "1em";
};
draw();
const btn = document.getElementById("btn");

const onClickConnect = async (e) => {
  e.preventDefault();
  try {
    // set label for profile button
    console.log("connecting");
    btn.innerHTML = "connecting ...";
    // set eventlistener for profile button
    btn.removeEventListener("click", onClickConnect);
    btn.innerHTML = "GET A GREENLIST SLOT NOW";
    btn.addEventListener("click", goGreenList);
    // get wallet address and account data of client and store in main state accounts
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // get network data
    network = await ethereum.request({ method: "net_version" });
    var networkTag = "Switch Network";
    // evaluate legal networks
    if (Number(network) === 137) networkTag = "Polygon";
    if (Number(network) === 80001) networkTag = "Mumbai";
    else networkTag = "Switch To Polygon or Mumbai";
    // console.log(networkTag);
    set.style.display = "block";
    const GL = await GreenListData();
    const admin = await GL.admin().then((result) => {
      console.log(result);
      return result;
    });
    // console.log(admin, accounts[0], Number(admin) === Number(accounts[0]), Number(admin), Number(accounts[0]));
    if (Number(admin) === Number(accounts[0])) {
      set.removeEventListener("click", setNewMsg);
      set.addEventListener("click", setAdminMsg);
      console.log("admin");
    } else {
      set.removeEventListener("click", setAdminMsg);
      set.addEventListener("click", setNewMsg);
      console.log("user");
    }
    new_msg.style.display = "block";
    inf.style.display = "block";
  } catch (error) {
    console.error("connect error", error);
    btn.innerText = "CONNECT";
  }
};

const goGreenList = async () => {
  const GL = await GreenListData();
  const GLme = await GL.getListed()
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.message);
      btn.innerHTML = err.data.message.split(": ")[1];
      btn.removeEventListener("click", goGreenList);
    });
  GLme.wait((load) => {
    console.log(load);
    btn.removeEventListener("click", goGreenList);
    btn.innerHTML = "PLEASE WAIT FOR TX TO CONFIRM";
  }).then((load) => {
    console.log(load);
    btn.innerHTML = "YOU ARE ON THE GREENLIST";
    btn.style.background = "white";
    btn.style.color = "mediumseagreen";
  });
};

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

    alert("You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions.");
    window.open("https://metamask.io");
  };
  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      btn.innerText = "install metamask!";
      btn.addEventListener("click", clickInstall);
    } else {
      //If it is installed we change our button text
      btn.innerText = "connect";
      btn.addEventListener("click", onClickConnect);
    }
  };
  MetaMaskClientCheck();
};
// IMPRTANT INITIAL FUNCTION CALL
set.style.display = "none";
new_msg.style.display = "none";
web3init();
// IMPORTANT FUNCTION WEB3INIT DO NOT EDIT END //
