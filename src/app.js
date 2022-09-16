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
let rand = 11111;

const goRand = () => {
  rand = Math.floor(Math.random() * 99999);
  // console.log(rand);
  if (rand < 999) rand *= 99;
  if (rand < 9999) rand *= 9;
  draw();
};

setInterval(goRand, 5000);
const bg = document.getElementById("bg_img");
const body = document.getElementById("body_img");
const bubble = document.getElementById("bubble_img");
const eye = document.getElementById("eye_img");
const mouth = document.getElementById("mouth_img");
const msg = document.getElementById("msg");
const new_msg = document.getElementById("new_msg");
const set = document.getElementById("set");
const inf = document.getElementById("inf");

const GreenListData = async () => {
  return new ethers.Contract("0x890b24d94075B743a89171E5b8A2d9B9049eBf36", Greenlist.abi, signer);
};

const setNewMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsg(new_msg.value, { value: BigInt(1 * 1e18) });
  NewMsg.wait((load) => {
    set.removeEventListener("click", setNewMsg);
    set.innerHTML = "PLEASE WAIT FOR TX TO CONFIRM";
  }).then((result) => {
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
  eye.src = url + "eye/" + String(rand)[3] + ".png";
  let go;
  if (String(rand)[4] == undefined) go = 0;
  else go = String(rand)[4];
  mouth.src = url + "mouth/" + go + ".png";
  msg.innerHTML = "YOU CAN EDIT THIS MESSAGE !";
  // console.log(accounts[0]);
  if (accounts[0]) msg.innerHTML = await getMSG();
  const l = msg.innerHTML.length;
  // console.log(l);
  if (l <= 12) msg.style.fontSize = "3em";
  else if (l <= 27) msg.style.fontSize = "2em";
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
    // get wallet address and account data of client and store in main state accounts
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // get network data
    network = await ethereum.request({ method: "net_version" });
    var networkTag = "Switch Network";
    // evaluate legal networks
    if (Number(network) === 137) networkTag = "Polygon";
    else networkTag = "Switch To Polygon";

    // net_btn.innerHTML = networkTag;
    // net_btn.style.display = "block";
    console.log(networkTag);
    user = await log();
    set.style.display = "block";
    set.addEventListener("click", setNewMsg);
    new_msg.style.display = "block";
    inf.style.display = "block";
  } catch (error) {
    console.error("connect error", error);
    btn.innerText = "Connect";
  }
};

const goGreenList = async () => {
  const GL = await GreenListData();
  const GLme = await GL.getListed();
  GLme.wait((load) => {
    console.log(load);
    btn.removeEventListener("click", goGreenList);
    btn.innerHTML = "PLEASE WAIT FOR TX TO CONFIRM";
  }).then((load) => {
    btn.innerHTML = "YOU ARE ON THE GREENLIST";
    btn.style.background = "white";
    btn.style.color = "mediumseagreen";
  });
};
const log = async () => {
  btn.innerHTML = "GET A GREENLIST SLOT NOW";
  btn.addEventListener("click", goGreenList);
  //
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
