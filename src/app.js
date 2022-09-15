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
const url = "https://fruityfreshfrenz.netlify.app/images/";
let rand = 0;

const goRand = () => {
  rand = Math.floor(Math.random() * 99999);
  // console.log(rand);
  if (rand < 999) rand *= 99;
  if (rand < 9999) rand *= 9;
  draw();
};

setInterval(goRand, 25000);
const bg = document.getElementById("bg_img");
const body = document.getElementById("body_img");
const bubble = document.getElementById("bubble_img");
const eye = document.getElementById("eye_img");
const mouth = document.getElementById("mouth_img");
const msg = document.getElementById("msg");
const new_msg = document.getElementById("new_msg");
const set = document.getElementById("set");
set.display.none;
new_msg.display.none;
const setNewMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsg(new_msg.value).call({ value: 1 * 1e18 });
  NewMsg.wait((load) => {
    set.removeEventListener("click", setNewMsg);
    set.innerHTML = "PLEASE WAIT FOR TX TO CONFIRM";
  }).then((result) => {
    set.innerHTML = "NEW MESSAGE SET";
  });
};

const draw = () => {
  console.log(rand, "bg :" + Math.floor(Number(String(rand)[0]) / 2), "body :" + Math.floor(Number(String(rand)[1]) / 2), "bubble :" + Math.floor(Number(String(rand)[2]) / 3), "eye :" + String(rand)[3], "mouth :" + String(rand)[4]);
  bg.src = url + "bg/" + Math.floor(Number(String(rand)[0]) / 2) + ".png";
  body.src = url + "body/" + Math.floor(Number(String(rand)[1]) / 2) + ".png";
  // body.src = url+"body/"+4+".png";
  bubble.src = url + "bubble/" + Math.floor(Number(String(rand)[2]) / 3.4) + ".png";
  eye.src = url + "eye/" + String(rand)[3] + ".png";
  let go;
  if (String(rand)[4] == undefined) go = 0;
  else go = String(rand)[4];
  mouth.src = url + "mouth/" + go + ".png";
  msg.innerHTML = "BE FRUITY MY FRESH FAM !";
  const l = msg.innerHTML.length;
  // console.log(l);
  if (l <= 12) msg.style.fontSize = "3em";
  else if (l <= 24) msg.style.fontSize = "2em";
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
  } catch (error) {
    console.error("connect error", error);
    profile_btn.innerText = "Connect";
    set.display = "block";
    new_msg.display = "block";
    set.addEventListener("click", setNewMsg);
  }
};
const GreenListData = async () => {
  return new ethers.Contract("0xBdb10895Ce1F50f169922bfE1f698E88FBe939B5", Greenlist.abi, signer);
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
  });
};
const log = async () => {
  btn.innerHTML = "GET A GREENLIST SLOT NOW !";
  btn.addEventListener("click", goGreenList);
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
web3init();
// IMPORTANT FUNCTION WEB3INIT DO NOT EDIT END //
