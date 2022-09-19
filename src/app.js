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
let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();

// const url = "https://gateway.pinata.cloud/ipfs/QmamRUaez9fyXpeuTuiKCNvrKSsLxid4hzyKKkJXSi67LL/";
const url = "./images/";
let rand = 111111;

const goRand = () => {
  rand = Math.floor(Math.random() * 99999);
  // // console.log(rand);
  if (rand < 9999) rand *= 99;
  if (rand < 99999) rand *= 9;
  draw();
};

setInterval(goRand, 5000);
const bg = document.getElementById("bg_img");
const bodi = document.getElementById("bodi_img");
const bubble = document.getElementById("bubble_img");
const brow = document.getElementById("brow_img");
const eye = document.getElementById("eye_img");
const mouth = document.getElementById("mouth_img");
const msg = document.getElementById("msg");
const new_msg = document.getElementById("new_msg");
const set = document.getElementById("set");
const inf = document.getElementById("inf");
const slots = document.getElementById("slots");
const dias = document.getElementById("dias_canvas");
const uform = document.getElementById("uForm");
const about = document.getElementById("about");
const road = document.getElementById("road");
const mint = document.getElementById("mint");
const info = document.getElementById("info");
const community = document.getElementById("community");
const swap = document.getElementById("swap");
const social = document.getElementById("social");
const minty = document.getElementById("minty");
const glist = document.getElementById("glist");
swap.style.opacity = 0.5;
minty.style.opacity = 0.5;
community.style.opacity = 0.5;

const goInfo = () => {
  shutAll();
  about.style.display = "block";
  road.style.display = "block";
};
info.addEventListener("click", goInfo);
const goMint = () => {
  shutAll();
  mint.style.display = "block";
};
minty.addEventListener("click", goMint);
const goGreen = () => {
  shutAll();
  dias.style.display = "grid";
  uform.style.display = "block";
};
glist.addEventListener("click", goGreen);
const goS0x = () => {
  shutAll();
  social.style.display = "grid";
};
community.addEventListener("click", goS0x);
const goSwap = () => {
  shutAll();
  market.style.display = "grid";
};
swap.addEventListener("click", goSwap);
const shutAll = () => {
  uform.style.display = "none";
  dias.style.display = "none";
  about.style.display = "none";
  road.style.display = "none";
  mint.style.display = "none";
};
/** wise bunker outdoor enrich piano spray online they issue foster wonder switch */
const GreenListData = async () => {
  if (network == 137) return new ethers.Contract("0x97E07a5f15d3FB3FE2bB3692c5D44183bA28F277", Greenlist.abi, signer);
  else if (network == 80001) return new ethers.Contract("0x420B8B939892fA27De2d2AeC34e644647AAc3D56", Greenlist.abi, signer);
  else if (network == 9001) return new ethers.Contract("0xecE922B118eEd554Fb9d3318a81FecB8C8D1bD95", Greenlist.abi, signer);
};
const setAdminMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsgAdmin(new_msg.value)
    .then((result) => {
      set.innerHTML = "ADMIN MESSIGE RESET";
      return result;
    })
    .catch((err) => {
      console.error(err);
      set.innerHTML = err.message.split(": ")[1];
    });
  NewMsg.wait().then((result) => {
    // console.log(result);
    set.innerHTML = "NU MESSIGE SET";
  });
};
const setNewMsg = async () => {
  const GL = await GreenListData();
  const NewMsg = await GL.setMsg(new_msg.value, { value: BigInt(1 * 1e18) })
    .then((result) => {
      set.innerHTML = "MESSIGE BEING SET";
      return result;
    })
    .catch((err) => {
      console.error(err.message.data);

      set.innerHTML = err.data.message.split(": ")[1];
    });
  NewMsg.wait().then((result) => {
    // console.log(result);
    set.innerHTML = "NU MESSIGE SET";
  });
};
let MSG;
const getMSG = async () => {
  const GL = await GreenListData();

  const MSGH = GL.showMsg()
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.data.message);
    });

  // console.log(MSGH);
  return MSGH;
};
const draw = async () => {
  // console.log(rand, "bg :" + Math.floor(Number(String(rand)[0])), "body :" + Math.floor(Number(String(rand)[1]) / 2), "bubble :" + Math.floor(Number(String(rand)[2]) / 3), "eye :" + String(rand)[3], "mouth :" + String(rand)[4]);
  bg.src = url + "bg/" + Math.floor(Number(String(rand)[0])) + ".png";
  bodi.src = url + "body/" + Math.floor(Number(String(rand)[1])) + ".png";
  // body.src = url+"body/"+4+".png";
  bubble.src = url + "bubble/" + Math.floor(Number(String(rand)[2]) / 2) + ".png";
  brow.src = url + "brow/" + Math.floor(Number(String(rand)[3])) + ".png";
  eye.src = url + "eye/" + String(rand)[4] + ".png";
  let go;
  if (String(rand)[5] == undefined) go = 0;
  else go = String(rand)[5];
  mouth.src = url + "mouth/" + go + ".png";
  msg.innerHTML = "U CAN EDIT DIS MESSIGE !";
  // // console.log(accounts[0]);
  if (typeof accounts[0] !== "undefined" || accounts[0] !== null) msg.innerHTML = await getMSG();
  const l = msg.innerHTML.length;
  // // console.log(l);
  if (l <= 12) msg.style.fontSize = "3em";
  else if (l <= 32) msg.style.fontSize = "2em";
  else if (l <= 45) msg.style.fontSize = "1.2em";
  else msg.style.fontSize = "1em";
};

draw();
const btn = document.getElementById("btn");
const setSlot = async () => {
  const GL = await GreenListData();
  const slot = await GL.l().then((result) => {
    // console.log(result);
    return Number(result._hex);
  });
  slots.innerHTML = 1234 - slot;
};
const getStamp = async () => {
  const GL = await GreenListData();
  const stamp = await GL.stamp().then((result) => {
    // console.log(result);
    return Number(result._hex);
  });
  // console.log(Math.floor((1000 * (stamp + 60 * 60) - Number(String(Date.now()))) / (60 * 1000)));
  if (1000 * (stamp + 60 * 60) >= Number(Date.now())) {
    set.innerHTML = "U NIED 2 W8 " + Math.floor((1000 * (stamp + 60 * 60) - Number(String(Date.now()))) / (60 * 1000)) + " MIN UNTIL THE NEXT UPDATE !";
    set.removeEventListener("click", setNewMsg);
  } else set.addEventListener("click", setNewMsg);
};
const netSwap = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  network = await ethereum.request({ method: "net_version" });
  window.location.reload();
};
const goPoly = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x89",
        chainName: "Polygon",
        nativeCurrency: {
          name: "Polygon",
          symbol: "MATIC",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com"],
      },
    ],
  });
  netSwap();
};
const onClickConnect = async (e) => {
  e.preventDefault();
  try {
    // set label for profile button
    // console.log("connecting");
    btn.innerHTML = "LO DING ...";
    // set eventlistener for profile button

    // get wallet address and account data of client and store in main state accounts
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // get network data
    network = await ethereum.request({ method: "net_version" });
    var networkTag = "Switch Network";
    // evaluate legal networks
    if (Number(network) !== 137 && Number(network) !== 80001 && Number(network) !== 9001) {
      // prompt network switch to polygon main
      goPoly(e);
    } else {
      networkTag = "Polygon";
      // console.log(networkTag);
      set.style.display = "block";
      btn.removeEventListener("click", onClickConnect);
      btn.innerHTML = "GWAB GREENLIZ SLOZ NOW";
      btn.addEventListener("click", goGreenList);
      const GL = await GreenListData();
      const admin = await GL.admin().then((result) => {
        // console.log(result);
        return result;
      });
      setSlot();
      if (Number(admin) === Number(accounts[0])) {
        // set.removeEventListener("click", setNewMsg);
        set.addEventListener("click", setAdminMsg);
        // getStamp();
        // console.log("admin");
      } else {
        // set.removeEventListener("click", setAdminMsg);
        set.addEventListener("click", setNewMsg);
        getStamp();
        // console.log("user", set.innerHTML);
      }
      new_msg.style.display = "block";
      inf.style.display = "block";
    }
  } catch (error) {
    console.error("connect error", error);
    btn.innerText = "CONNEC";
  }
};

const goGreenList = async () => {
  const GL = await GreenListData();
  const GLme = await GL.getListed()
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.message);
      btn.innerHTML = err.data.message.split(": ")[1];
      btn.removeEventListener("click", goGreenList);
    });
  GLme.wait((load) => {
    // console.log(load);
    btn.removeEventListener("click", goGreenList);
    btn.innerHTML = "PLEAZ WAIT 4 TX 2 FINNISH";
  }).then((load) => {
    // console.log(load);
    btn.innerHTML = "WOWZERS ... UR ON DA GREENLIZ NOW";
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
