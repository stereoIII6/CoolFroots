//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com     //
//                                      //
//////////////////////////////////////////

import { ethers } from "ethers";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import "../public/app.scss";
import { sha256 } from "crypto-hash";
import UAuth from "@uauth/js";
import { create } from "underscore";
import { stripZeros } from "ethers/lib/utils";
import * as htmlToImage from "html-to-image";
// globals
let accounts;
let network;
let networkTag;
let curr;
let user;

let bg_arr = ["mynt", "medo", "yello", "oca", "wood", "rose", "pynk", "vilet", "skay", "ceean"];
let pat_arr = ["", "", "", "", "", "", "", "", "", ""];
let bdy_arr = ["appl", "oranj", "huny", "pyn", "beri", "keewy", "lime", "coco", "melo", "piich"];
let eye_arr = ["hypd", "boord", "stokd", "tyrd", "punchd", "dizzl", "droop", "wyne", "dout", "strezd"];
let brw_arr = ["", "", "", "", "", "", "", "", "", ""];
let mth_arr = ["", "", "", "", "", "", "", "", "", ""];
let bub_arr = ["", "", "", "", ""];
let fly_arr = ["", "", "", "", ""];
let ice_arr = ["", "", "", "", ""];

const client = require("ipfs-http-client");
const ipfs = client.create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
const Greenlist = require("../dist/contracts/Greenlist.json");
const COOLFROOT = require("../dist/contracts/COOLFROOT.json");
const Ice = require("../dist/contracts/ICE.json");
const Market = require("../dist/contracts/Market.json");
const provider = new ethers.providers.Web3Provider(window.ethereum);
if (!ethereum.isConnected()) {
  // alert("install https://metamask.io extension to browser");
}
let signer = provider.getSigner();
// const url = "https://gateway.pinata.cloud/ipfs/QmamRUaez9fyXpeuTuiKCNvrKSsLxid4hzyKKkJXSi67LL/";
const url = "./images/";
let rand = 1234567;
const goRand = () => {
  rand = Math.floor(Math.random() * 99999999);

  if (rand < 99999) rand *= 99;
  if (rand < 999999) rand *= 9;
  console.log(rand);
  draw();
};
const ids = [];
for (let i = 0; i < 5555; i++) {
  ids[i] = Math.floor(Math.random() * 9999999);
  for (let j = 0; j < i; j++) {
    while (ids[j] === ids[i]) ids[i] = Math.floor(Math.random() * 9999999);
  }
}
console.log("dias shuffle", JSON.stringify(ids));
// console.log("sorted", JSON.stringify(diasIds.sort()));
setInterval(goRand, 25000);

const bg = document.getElementById("bg_img");
const ice = document.getElementById("ice_img");
const bodi = document.getElementById("bodi_img");
const bubble = document.getElementById("bubble_img");
const brow = document.getElementById("brow_img");
const eye = document.getElementById("eye_img");
const mouth = document.getElementById("mouth_img");
const msg = document.getElementById("msg");

const pbg = document.getElementById("pbg_img");
const pbodi = document.getElementById("pbodi_img");
const pbubble = document.getElementById("pbubble_img");
const pbrow = document.getElementById("pbrow_img");
const peye = document.getElementById("peye_img");
const pmouth = document.getElementById("pmouth_img");
const pmsg = document.getElementById("pmsg");

const new_msg = document.getElementById("new_msg");
const new_url = document.getElementById("new_url");
const pnew_msg = document.getElementById("pnew_msg");
const pnew_url = document.getElementById("pnew_url");
const set = document.getElementById("set");
const inf = document.getElementById("inf");
const slots = document.getElementById("slots");

const info = document.getElementById("info");
const soshill = document.getElementById("soshill");
const swap = document.getElementById("swap");
const social = document.getElementById("social");
const minty = document.getElementById("minty");
const adm = document.getElementById("adm");
const rrrena = document.getElementById("rrrena");
const arb = document.getElementById("arb");

const glist = document.getElementById("glist");
const mintHead = document.getElementById("minthead");
const gCount = document.getElementById("gCount");
const pCount = document.getElementById("pCount");
const gMint = document.getElementById("greenmnt");
const gMintNow = document.getElementById("gMintNow");
const pMint = document.getElementById("pubmnt");
const pMintNow = document.getElementById("pMintNow");
const tCount = document.getElementById("tCount");
const btn = document.getElementById("btn");

const profile = document.getElementById("profile");
const pform = document.getElementById("pform");
const dias = document.getElementById("dias_canvas");
const procanvas = document.getElementById("pdias_canvas");
const xdias = document.getElementById("xsdias");
const uform = document.getElementById("uForm");
const about = document.getElementById("about");
const road = document.getElementById("road");
const mint = document.getElementById("mint");

const wICE = document.getElementById("wICE");
const fICE = document.getElementById("fICE");

const pset = document.getElementById("pset");
const piset = document.getElementById("piset");

const iceCoolAmnt = document.getElementById("iceCoolAmount");
const cool = document.getElementById("cool");

const iceBuyAmnt = document.getElementById("iceBuyAmnt");
const buyIce = document.getElementById("buyIce");

const cf = document.getElementById("cf");
const icecubes = document.getElementById("icecubes");

const itag = document.getElementById("ipricetag");
const mtag = document.getElementById("mpricetag");
const gtag = document.getElementById("pricetag");

const nt = document.getElementById("nt");
const total = document.getElementById("total");
const green = document.getElementById("green");
const publix = document.getElementById("publix");
const mintmax = document.getElementById("mintmax");

const glp = document.getElementById("glp");
const pp = document.getElementById("pp");
const ip = document.getElementById("ip");

const snap = document.getElementById("snap");

// MAIN NAVIGATION LINKS

const goInfo = () => {
  shutAll();
  setCurr();
  about.style.display = "block";
  road.style.display = "block";
  nt.innerHTML = curr + " " + networkTag + " " + network;
  total.innerHTML = fctMax;
  green.innerHTML = fctSlotMax;
  publix.innerHTML = fctMax - fctSlotMax;
  mintmax.innerHTML = fctMaxMints;
  glp.innerHTML = 0 + " " + curr;
  pp.innerHTML = (fctPrice / 1e18).toFixed(3) + " " + curr;
  ip.innerHTML = (icePrice / 1e18).toFixed(3) + " <img src='https://www.freepnglogos.com/uploads/ice-png/ice-cube-transparent-vector-graphic-pixabay-36.png' style='height: 24px; width: 24px' />";
};
const goProfile = async () => {
  shutAll();
  console.log(FCT);
  pform.style.display = "grid";
  procanvas.style.display = "grid";
  // const Froots = await FrootyCoolTingsData();
  var balance = await FCT.balanceOf(accounts[0]);
  const tokID = await FCT.minter(accounts[0]);
  const diasID = await FCT.tid(tokID);
  pdraw(diasID);
  const frootsbalance = Number(balance._hex);
  const Ice = await IceData();
  balance = await Ice.balanceOf(accounts[0]);
  traits.style.display = "grid";
  tname.document.getElementById("tname");
  tname.innerHTML = tdiasid.document.getElementById("tdiasid");
  tbgcol.document.getElementById("tbgcol");
  tpattern.document.getElementById("tpattern");
  tfruit.document.getElementById("tfruit");
  teyes.document.getElementById("teyes");
  teyebrows.document.getElementById("teyebrows");
  tmouth.document.getElementById("tmouth");
  tbubble.document.getElementById("tbubble");
  tmessage.document.getElementById("tmessage");
  tice.document.getElementById("tice");
  tflys.document.getElementById("tflys");
  tmojo.document.getElementById("tmojo");
  textra.document.getElementById("textra");

  var icebalance = Number(balance._hex) / 1e18;
  wICE.innerHTML = icebalance;
  let fice = await FCT.meltState().then((result) => {
    return Number(result._hex);
  });
  if (fice >= 48) {
    fice = (fice / 24).toFixed(0);
    fICE.innerHTML = fice + " MO DAZE";
  } else {
    fICE.innerHTML = fice + " MO HOUAZ";
  }
  // show profile and social buttons
  if (frootsbalance > 0) {
    profile.style.display = "block";
    minty.style.display = "none";
    console.log(frootsbalance, (icebalance / 1e18).toFixed(2), Number(diasID._hex));
  } else {
    profile.style.display = "none";
    minty.style.display = "block";
    console.log("no tokens available");
  }
  checkNav();
  piset.addEventListener("click", setIceMsg);
  pset.addEventListener("click", setProMsg);
  cool.addEventListener("click", addIce);
  buyIce.addEventListener("click", getIce);
  iceBuyAmnt.addEventListener("change", buyA);
  iceCoolAmnt.addEventListener("change", coolA);
  iceBuyAmnt.value = 10;
  iceCoolAmnt.value = 1;
  cf.innerHTML = 1;
  cool.innerHTMML = 10;
  itag.innerHTML = ((10 * icePrice) / 1e18).toFixed(2) + " " + curr;
  pset.innerHTML = "SET MSG " + (fctStatusPrice / 1e18).toFixed(3) + " " + curr;
};
info.addEventListener("click", goInfo);
const goMint = () => {
  shutAll();
  mint.style.display = "grid";
  checkNav();
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
  dias.style.display = "grid";
  social.style.display = "grid";
};
soshill.addEventListener("click", goS0x);
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
  pform.style.display = "none";
  procanvas.style.display = "none";
};
const goWa = (e) => {
  wame.href = `https://wa.me/491631107542?text=check+out+https://coolfroots.xyz/snapshot+ ${accounts[0]}`;
};
const goTw = (e) => {
  const href = `https://twitter.com/messages/compose?recipient_id=3805104374&text=Hi%my%Froot%Wallet%is%${accounts[0]}" class="twitter-dm-button" data-screen-name="@go_vrl"`;
};
const checkNav = async () => {
  // are gl slots left
  // rename button
  // const GL = await GreenListData();
  const sloz = await GL.max();
  const slots = await GL.l();
  const greenLeft = Number(sloz._hex) - Number(slots._hex);
  console.log(greenLeft, sloz, slots);
  if (greenLeft == 0) {
    glist.innerHTML = "SO SHILL";
    glist.removeEventListener("click", goGreen);
    glist.addEventListener("click", goS0x);
  }
  // const Froots = await FrootyCoolTingsData();
  const balance = await FCT.balanceOf(accounts[0]);
  const frootsbalance = Number(balance._hex);
  const max = await FCT.max();
  const minted = await FCT.minted();
  const leftToMint = Number(max._hex) - Number(minted._hex);
  if (leftToMint > 0) minty.style.display = "block";
  else {
    minty.style.display = "none";
    soshill.style.display = "block";
    swap.style.display = "block";
    swap.style.gridColumn = -2;
  }
  if (frootsbalance > 0) {
    profile.style.display = "block";
    minty.style.display = "none";
    swap.style.display = "block";
    swap.style.gridColumn = -2;
  } else {
    profile.style.display = "none";
    minty.style.display = "block";
    swap.style.display = "none";
    console.log("no tokens available");
  }
};
// CONTRACT IMPORT
const GreenListData = async () => {
  let a = setNet();
  const deploymentKey = await Object.keys(Greenlist.networks)[a];
  console.log(deploymentKey, a, network);
  return new ethers.Contract(Greenlist.networks[deploymentKey].address, Greenlist.abi, signer);
};
const FrootyCoolTingsData = async () => {
  let a = setNet();
  const deploymentKey = await Object.keys(COOLFROOT.networks)[a];
  console.log(deploymentKey, a, network);
  return new ethers.Contract(COOLFROOT.networks[deploymentKey].address, COOLFROOT.abi, signer);
};
const IceData = async () => {
  let a = setNet();
  const deploymentKey = await Object.keys(Ice.networks)[a];
  // console.log(deploymentKey, a, network);
  return new ethers.Contract(Ice.networks[deploymentKey].address, Ice.abi, signer);
};
const MarketData = async () => {
  let a = setNet();
  const deploymentKey = await Object.keys(Market.networks)[a];
  // console.log(deploymentKey, a, network);
  return new ethers.Contract(Market.networks[deploymentKey].address, Market.abi, signer);
};

const ArbData = async () => {
  let a = setNet();
  const deploymentKey = await Object.keys(ERC20.networks)[a];
  // console.log(deploymentKey, a, network);
  return new ethers.Contract(Market.networks[deploymentKey].address, Market.abi, signer);
};

// CONTRACT VARS
// Greenlist
let GL;
let glUrl;
let glSlotMax;
let glSlotsTaken;
let glMsg;
let glStamp;
let glAdmin;
let glFctAdr;
let glPrice;
const getGreenVars = async () => {
  GL = await GreenListData();
  glSlotMax = await GL.max()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glSlotsTaken = await GL.l()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glMsg = await GL.message()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glStamp = await GL.stamp()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glPrice = await GL.msgprice()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glUrl = await GL.url()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  glAdmin = await GL.admin();
  glFctAdr = await GL.FCT();
  console.log(glMsg, glUrl);
  return glSlotMax, glSlotsTaken, glMsg, glStamp, glPrice, glUrl;
};

// ICE
let ICE;
let icePrice;
const getIceVars = async () => {
  ICE = await IceData();
  icePrice = await ICE.price()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
};

// Froots
let FCT;
let fctPrice;
let fctStatusPrice;
let fctMaxMints;
let fctMax;
let fctMinted;
let fctSlotMax;
let fctSlotsMinted;
let fctStart;
const getFrootVars = async () => {
  FCT = await FrootyCoolTingsData();
  fctPrice = await FCT.price()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctStatusPrice = await FCT.statusprice()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctMaxMints = await FCT.num()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctMax = await FCT.max()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctMinted = await FCT.minted()
    .then((result) => {
      return Number(result._hex) - 1;
    })
    .catch((err) => {
      console.error(err);
    });
  fctSlotMax = await FCT.sloz()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctSlotsMinted = await FCT.slots()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  fctStart = await FCT.start()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
  // fctAdr = await FCT().address;
  return fctStart, fctMax, fctMinted, fctPrice, fctStatusPrice;
};
// Market
let MRKT;
let marketRoy;
const getMarketVars = async () => {
  MRKT = await MarketData();
  marketRoy = await MRKT.roy()
    .then((result) => {
      return Number(result._hex);
    })
    .catch((err) => {
      console.error(err);
    });
};

// GREENMINT DISPLAY
const setAdminMsg = async () => {
  // const GL = await GreenListData();
  const NewMsg = await GL.setMsgAdmin(new_msg.value, new_url.value)
    .then((result) => {
      set.innerHTML = "ADMIN MESSIGE RESET";
      return result;
    })
    .catch((err) => {
      console.error(err);
      set.innerHTML = err.message.split(": ")[1];
    });
  NewMsg.wait().then(async (result) => {
    // console.log(result);
    set.innerHTML = "NU MESSIGE SET";
  });
};
const setNewMsg = async () => {
  // const GL = await GreenListData();
  const NewMsg = await GL.setMsg(new_msg.value, new_url.value, { value: BigInt(1 * 1e15) })
    .then((result) => {
      set.innerHTML = "MESSIGE BEING SET";
      return result;
    })
    .catch((err) => {
      console.error(err.message.data);
      set.innerHTML = err.data.message.split(": ")[1];
    });
  NewMsg.wait().then(async (result) => {
    // console.log(result);
    set.innerHTML = "NU MESSIGE SET";
  });
};
const setProMsg = async () => {
  // const Froots = await FrootyCoolTingsData();
  // await getGreenVars();
  const tokID = await FCT.minter(accounts[0]);
  console.log("one :: ", Number(tokID._hex), pnew_msg.value, pnew_url.value);
  const diasID = await FCT.tid(Number(tokID._hex));
  console.log("two :: ", Number(tokID._hex), Number(diasID._hex), pnew_msg.value);
  const ProMsg = await FCT.setStatus(Number(tokID._hex), pnew_msg.value, pnew_url.value, { value: BigInt(1 * 1e15) })
    .then((result) => {
      pset.innerHTML = "MESSIGE BEING SET";
      return result;
    })
    .catch((err) => {
      console.error(err.message.data);
      pset.innerHTML = err.data.message.split(": ")[1];
    });

  ProMsg.wait().then(() => {
    // console.log(result);
    pset.innerHTML = "NU MESSIGE SET";
    pdraw(Number(diasID._hex));
    goProfile();
  });
};
const setIceMsg = async () => {
  // const Froots = await FrootyCoolTingsData();
  // await getGreenVars();
  const tokID = await FCT.minter(accounts[0]);
  console.log("one :: ", Number(tokID._hex), pnew_msg.value);
  const diasID = await FCT.tid(Number(tokID._hex));
  console.log("two :: ", Number(tokID._hex), Number(diasID._hex), pnew_msg.value);
  const IceMsg = await FCT.iceSetStatus(Number(tokID._hex), pnew_msg.value, pnew_url.value)
    .then((result) => {
      piset.innerHTML = "COOL";
      return result;
    })
    .catch((err) => {
      console.error(err.message.data);
      piset.innerHTML = err.data.message.split(": ")[1];
    });

  IceMsg.wait().then(() => {
    // console.log(result);
    piset.innerHTML = "DONE";
    pdraw(Number(diasID._hex));
    goProfile();
  });
};

const buyA = async (e) => {
  e.preventDefault();
  // console.log(e.target.value);
  icecubes.innerHTML = e.target.value;
  const p = await ICE.price()
    .then((res) => {
      return Number(res._hex);
    })
    .catch((err) => {
      console.err(err);
    });
  itag.innerHTML = ((e.target.value * p) / 1e18).toFixed(2) + " " + curr;
};
const coolA = async (e) => {
  e.preventDefault();
  // console.log(e.target.value);
  cf.innerHTML = e.target.value;
};

const getIce = async () => {
  // console.log(icePrice, iceBuyAmnt.value, icePrice * iceBuyAmnt.value);
  const buy = await ICE.swap(Number(iceBuyAmnt.value), accounts[0], { value: BigInt(Number(icePrice) * Number(iceBuyAmnt.value)) })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.err(err.message);
    });
  buy.wait().then((result) => {
    goProfile();
    return result;
  });
};

const addIce = async () => {
  const tokID = FCT.minter(accounts[0])
    .then((res) => {
      return Number(res._hex);
    })
    .catch((err) => {
      console.err(err.message);
    });
  const add = await FCT.addIce(iceCoolAmnt.value, tokID)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.err(err.message);
    });
  add.wait().then((result) => {
    goProfile();
    return result;
  });
};

const getMSG = async () => {
  const GL = await GreenListData();

  const MSGH = await GL.showMsg()
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.data.message);
    });

  console.log(MSGH);
  return MSGH;
};
const getURL = async () => {
  const GL = await GreenListData();

  const URL = await GL.url()
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.data.message);
    });

  console.log(URL);
  return URL;
};

const getProMSG = async () => {
  // const Froots = await FrootyCoolTingsData();
  const tokID = await FCT.minter(accounts[0]);
  console.log("tokid :: ", Number(tokID._hex));
  const ProStatus = await FCT.status(Number(tokID._hex))
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err.data.message);
    });

  console.log("pstate :: ", ProStatus);
  return ProStatus;
};
const paralax = (e) => {
  e.preventDefault();
  const bg_group = document.getElementsByName("bg_group");
  const avt_group = document.getElementsByName("avt_group");
  const bub_group = document.getElementsByName("bub_group");
  const bubm_group = document.getElementsByName("bubm_group");
  const pbg_group = document.getElementsByName("pbg_group");
  const pavt_group = document.getElementsByName("pavt_group");
  const pbub_group = document.getElementsByName("pbub_group");
  const pbubm_group = document.getElementsByName("pbubm_group");
  const far = 6;
  const mid = 5;
  const close = 4;
  let rect = dias.getBoundingClientRect();
  let prect = procanvas.getBoundingClientRect();
  let x = (e.clientX - (rect.left + 250)) / 30;
  let y = (e.clientY - (rect.top + 250)) / 30;
  let px = (e.clientX - (prect.left + 250)) / 30;
  let py = (e.clientY - (prect.top + 250)) / 30;
  console.log("Cursor position: " + (x / 50).toFixed(0) + "," + (y / 50).toFixed(0) + "," + (px / 50).toFixed(0) + "," + (py / 50).toFixed(0));
  // console.log("dias mode", bg_group);
  for (let i = 0; i < bg_group.length; i++) {
    bg_group[i].style.width = `${100 + far}%`;
    bg_group[i].style.height = `${100 + far}%`;
    bg_group[i].style.left = `calc(-${far}% + ${far + x / 2}px)`;
    bg_group[i].style.top = `calc(-${far}% + ${far + x / 2}px)`;
    pbg_group[i].style.width = `${100 + far}%`;
    pbg_group[i].style.height = `${100 + far}%`;
    pbg_group[i].style.left = `calc(-${far}% + ${far + px / 2}px)`;
    pbg_group[i].style.top = `calc(-${far}% + ${far + px / 2}px)`;
  }
  for (let i = 0; i < avt_group.length; i++) {
    avt_group[i].style.width = `${100 + mid}%`;
    avt_group[i].style.height = `${100 + mid}%`;
    avt_group[i].style.left = `-${mid + x / 4}%`;
    avt_group[i].style.top = `${mid + y / 4}%`;
    pavt_group[i].style.width = `${100 + mid}%`;
    pavt_group[i].style.height = `${100 + mid}%`;
    pavt_group[i].style.left = `-${mid + px / 4}%`;
    pavt_group[i].style.top = `${mid + py / 4}%`;
  }
  for (let i = 0; i < bub_group.length; i++) {
    bub_group[i].style.width = `${100 + close}%`;
    bub_group[i].style.height = `${100 + close}%`;
    bub_group[i].style.left = `${close + -x / 2}px`;
    bub_group[i].style.top = `${close + -y / 2}px`;
    pbub_group[i].style.width = `${100 + close}%`;
    pbub_group[i].style.height = `${100 + close}%`;
    pbub_group[i].style.left = `${close + -px / 2}px`;
    pbub_group[i].style.top = `${close + -py / 2}px`;
  }
  for (let i = 0; i < bubm_group.length; i++) {
    bubm_group[i].style.left = `${260 + close + -x / 2}px`;
    bubm_group[i].style.top = `${50 + close + -y / 2}px`;
    pbubm_group[i].style.left = `${260 + close + -px / 2}px`;
    pbubm_group[i].style.top = `${50 + close + -py / 2}px`;
  }
};
const unlax = (e) => {
  e.preventDefault();
  const bg_group = document.getElementsByName("bg_group");
  const avt_group = document.getElementsByName("avt_group");
  const bub_group = document.getElementsByName("bub_group");
  const bubm_group = document.getElementsByName("bubm_group");
  const pbg_group = document.getElementsByName("pbg_group");
  const pavt_group = document.getElementsByName("pavt_group");
  const pbub_group = document.getElementsByName("pbub_group");
  const pbubm_group = document.getElementsByName("pbubm_group");
  const far = 1;
  const mid = 1;
  const close = 1;
  for (let i = 0; i < bg_group.length; i++) {
    bg_group[i].style.width = `${100 + far}%`;
    bg_group[i].style.height = `${100 + far}%`;
    bg_group[i].style.left = `${far / -2}%`;
    bg_group[i].style.top = `${far / -2}%`;
    pbg_group[i].style.width = `${100 + far}%`;
    pbg_group[i].style.height = `${100 + far}%`;
    pbg_group[i].style.left = `${far / -2}%`;
    pbg_group[i].style.top = `${far / -2}%`;
  }
  for (let i = 0; i < avt_group.length; i++) {
    avt_group[i].style.width = `${100 + mid}%`;
    avt_group[i].style.height = `${100 + mid}%`;
    avt_group[i].style.left = `${mid / -2}%`;
    avt_group[i].style.top = `${mid / -2}%`;
    pavt_group[i].style.width = `${100 + mid}%`;
    pavt_group[i].style.height = `${100 + mid}%`;
    pavt_group[i].style.left = `${mid / -2}%`;
    pavt_group[i].style.top = `${mid / -2}%`;
  }
  for (let i = 0; i < bub_group.length; i++) {
    bub_group[i].style.width = `${100 + close}%`;
    bub_group[i].style.height = `${100 + close}%`;
    bub_group[i].style.left = `${close / -2}%`;
    bub_group[i].style.top = `${close / -2}%`;
    pbub_group[i].style.width = `${100 + close}%`;
    pbub_group[i].style.height = `${100 + close}%`;
    pbub_group[i].style.left = `${close / -2}%`;
    pbub_group[i].style.top = `${close / -2}%`;
  }
  for (let i = 0; i < bubm_group.length; i++) {
    bubm_group[i].style.left = `${240 + close / 2}px`;
    bubm_group[i].style.top = `${40 + close / 2}px`;
    pbubm_group[i].style.left = `${240 + close / 2}px`;
    pbubm_group[i].style.top = `${40 + close / 2}px`;
  }
};
const draw = async () => {
  // await getGreenVars();
  // console.log(rand, "bg :" + Math.floor(Number(String(rand)[0])), "body :" + Math.floor(Number(String(rand)[1]) / 2), "bubble :" + Math.floor(Number(String(rand)[2]) / 3), "eye :" + String(rand)[3], "mouth :" + String(rand)[4]);
  bg.src = url + "bg/" + Math.floor(Number(String(rand)[0])) + ".png";
  bodi.src = url + "body/" + Math.floor(Number(String(rand)[1])) + ".png";
  // body.src = url+"body/"+4+".png";
  bubble.src = url + "bubble/" + Math.floor(Number(String(rand)[2]) / 2) + ".png";
  brow.src = url + "brow/" + Math.floor(Number(String(rand)[3])) + ".png";
  eye.src = url + "eye/" + Math.floor(Number(String(rand)[4])) + ".png";
  dias.addEventListener("mouseover", paralax);
  dias.addEventListener("mousemove", paralax);
  dias.addEventListener("mouseout", unlax);

  let go;
  if (String(rand)[5] + String(rand)[0] == undefined) go = "0" + String(rand)[0];
  else go = Math.floor(Number(String(rand)[5]));
  mouth.src = url + "mouth/" + go + ".png";
  msg.innerHTML = "U CAN EDIT THIS MESSAGE !";
  msg.href = "https://coolfroots.xyz";
  // // console.log(accounts[0]);
  if (typeof accounts[0] !== "undefined" || accounts[0] !== null) {
    msg.innerHTML = await getMSG();
    msg.href = await getURL();
  }
  const l = msg.innerHTML.length;
  // // console.log(l);
  if (l <= 12) msg.style.fontSize = "3em";
  else if (l <= 32) msg.style.fontSize = "2em";
  else if (l <= 45) msg.style.fontSize = "1.2em";
  else msg.style.fontSize = "1em";
};

draw();

const writePng = async () => {
  console.log("writing png now");
  htmlToImage
    .toPng(dias)
    .then((dataUrl) => {
      let img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
      console.log("dataurl :: ", dataUrl);
    })
    .catch((error) => {
      console.error("oops, render bug crawling !");
      console.log(error);
    });
};

const pdraw = async (diasID) => {
  // console.log(rand, "bg :" + Math.floor(Number(String(rand)[0])), "body :" + Math.floor(Number(String(rand)[1]) / 2), "bubble :" + Math.floor(Number(String(rand)[2]) / 3), "eye :" + String(rand)[3], "mouth :" + String(rand)[4]);
  pbg.src = url + "bg/" + Math.floor(Number(String(diasID)[0])) + ".png";
  pbodi.src = url + "body/" + Math.floor(Number(String(diasID)[1])) + ".png";
  // body.src = url+"body/"+4+".png";
  pbubble.src = url + "bubble/" + Math.floor(Number(String(diasID)[2]) / 2) + ".png";
  pbrow.src = url + "brow/" + Math.floor(Number(String(diasID)[3])) + ".png";
  peye.src = url + "eye/" + Math.floor(Number(String(diasID)[4])) + ".png";
  procanvas.addEventListener("mouseover", paralax);
  procanvas.addEventListener("mousemove", paralax);
  procanvas.addEventListener("mouseout", unlax);
  let go;
  if (String(diasID)[5] + String(diasID)[0] == undefined) go = "0" + String(diasID)[0];
  else go = Math.floor(Number(String(diasID)[5]));
  pmouth.src = url + "mouth/" + go + ".png";
  pmsg.innerHTML = "U CAN EDIT THIS MESSAGE !";
  // // console.log(accounts[0]);
  var nupmsg;
  if (typeof accounts[0] !== "undefined" || accounts[0] !== null) {
    nupmsg = await getProMSG();
  }
  console.log(nupmsg);
  pmsg.innerHTML = nupmsg;
  const l = pmsg.innerHTML.length;
  // // console.log(l);
  if (l <= 12) pmsg.style.fontSize = "3em";
  else if (l <= 32) pmsg.style.fontSize = "2em";
  else if (l <= 45) pmsg.style.fontSize = "1.2em";
  else pmsg.style.fontSize = "1em";
};

const setSlot = async () => {
  await getGreenVars();
  await getFrootVars();
  console.log("set slots :: ", "gl max " + glSlotMax, "gl minted " + glSlotsTaken, "f max " + fctMax, "f minted " + fctMinted, "fg minted " + fctSlotsMinted);
  slots.innerHTML = glSlotMax - glSlotsTaken;
  gCount.innerHTML = fctSlotMax - fctSlotsMinted; // Testnet
  pCount.innerHTML = fctMax - fctSlotMax - (fctMinted - fctSlotsMinted); // Testnet
  tCount.innerHTML = fctMax - fctMinted;
  mtag.innerHTML = (fctPrice / 1e18).toFixed(3) + " " + curr;
  gtag.innerHTML = (glPrice / 1e18).toFixed(3) + " " + curr;
};
const getStamp = async () => {
  // const GL = await GreenListData();
  const stamp = await GL.stamp().then((result) => {
    // console.log(result);
    return Number(result._hex);
  });
  // console.log(Math.floor((1000 * (stamp + 60 * 60) - Number(String(Date.now()))) / (60 * 1000)));
  if (1000 * (stamp + 60 * 60) >= Number(Date.now())) {
    set.innerHTML = "U NEED 2 WAIT " + Math.floor((1000 * (stamp + 60 * 60) - Number(String(Date.now()))) / (60 * 1000)) + " MIN UNTIL THE NEXT UPDATE !";
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
const goArbig = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x66EED",
        chainName: "Arbitrum Goerli",
        nativeCurrency: {
          name: "Arbitrum ETH",
          symbol: "AGOR",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://arbitrum-goerli.public.blastapi.io"],
        blockExplorerUrls: ["https://goerli.arbiscan.io/"],
      },
    ],
  });
  netSwap();
};
const goArbi = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0xA4B1",
        chainName: "Arbitrum One",
        nativeCurrency: {
          name: "Arbitrum ETH",
          symbol: "ETH",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io"],
      },
    ],
  });
  netSwap();
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
const goMumbai = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x13881",
        chainName: "Polygon Mumbai",
        nativeCurrency: {
          name: "Polygon Matic",
          symbol: "MATIC",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://polygon-mumbai.blockpi.network/v1/rpc/public"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com"],
      },
    ],
  });
  netSwap();
};
const goEvmosTest = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x2328",
        chainName: "EVMOS",
        nativeCurrency: {
          name: "EVMOS",
          symbol: "EVMOS",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://eth.bd.evmos.dev:8545"],
        blockExplorerUrls: ["https://evm.evmos.dev/"],
      },
    ],
  });
  netSwap();
};
const goMantleTest = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x1389",
        chainName: "Mantle",
        nativeCurrency: {
          name: "Mantle Bit",
          symbol: "BIT",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://rpc.testnet.mantle.xyz/"],
        blockExplorerUrls: ["https://explorer.testnet.mantle.xyz"],
      },
    ],
  });
  netSwap();
};
const goEvmos = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x2328",
        chainName: "EVMOS",
        nativeCurrency: {
          name: "EVMOS",
          symbol: "EVMOS",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://eth.bd.evmos.dev:8545"],
        blockExplorerUrls: ["https://evm.evmos.dev/"],
      },
    ],
  });
  netSwap();
};
const goMantle = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x1389",
        chainName: "Mantle",
        nativeCurrency: {
          name: "Mantle Bit",
          symbol: "BIT",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://rpc.testnet.mantle.xyz/"],
        blockExplorerUrls: ["https://explorer.testnet.mantle.xyz"],
      },
    ],
  });
  netSwap();
};
const goFuji = async () => {
  const change = await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0xA869",
        chainName: "Avalanche Fuji",
        nativeCurrency: {
          name: "AVAX",
          symbol: "AVAX",
          decimals: 18, //In number form
        },
        rpcUrls: ["https://ava-testnet.public.blastapi.io/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://testnet.snowtrace.io/"],
      },
    ],
  });
  netSwap();
};
const goGreenMint = async (e) => {
  e.preventDefault();
  const count = await FCT.minted()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  const diasTemp = await fetch("./json/dias_base.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
  await getFrootVars();
  let diasID = diasTemp.diasIds[fctMinted];
  let diasOBJ = diasTemp.diasObject;
  diasOBJ.image = "./images/ad.png";
  diasOBJ.id = fctMinted;
  diasOBJ.diasId = diasID;
  diasOBJ.diasName = (diasOBJ.colors[Number(String(diasID).slice(0, 2))] + " " + diasOBJ.attitudes[Number(String(diasID).slice(2, 4))] + " " + diasOBJ.animals[Number(String(diasID).slice(4, 6))]).toLowerCase();
  diasOBJ.traits.background = Number(String(diasID).slice(0, 1));
  diasOBJ.traits.workspace = Number(String(diasID).slice(0, 1));
  diasOBJ.traits.body = Number(String(diasID).slice(1, 2));
  diasOBJ.traits.mouth = Number(String(diasID).slice(2, 3));
  diasOBJ.traits.brows = Number(String(diasID).slice(3, 4));
  diasOBJ.traits.eye = Number(String(diasID).slice(4, 5));
  diasOBJ.traits.brows = Number(String(diasID).slice(5, 6));
  diasOBJ.traits.fly = 0;
  diasOBJ.traits.ice = 0;
  console.log(diasOBJ.diasName, diasOBJ.traits, diasID);
  let namer = "Hi #FROOTS it's " + diasOBJ.diasName;
  const doGreenMint = await FCT.greenMint(diasID, diasOBJ, namer)
    .then((result) => {
      gMintNow.innerHTML = "MINTING";
      console.log("earn :: ", result);
      return result;
    })
    .catch((err) => {
      console.error(err.data.message);
      gMintNow.innerHTML = err.data.message.split(": ")[1];
    });
  doGreenMint.wait().then((result) => {
    gMintNow.innerHTML = "MINTED";
    setSlot();
    checkNav();
    return result;
  });
};
const goPubMint = async (e) => {
  e.preventDefault();
  const count = await FCT.minted()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  const diasTemp = await fetch("./json/dias_base.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
  const minted = await FCT.minted().then((result) => {
    console.log(Number(result._hex));
    return Number(result._hex);
  });
  let diasID = diasTemp.diasIds[fctMinted];
  let diasOBJ = diasTemp.diasObject;
  console.log("DIAS // ", diasOBJ);
  diasOBJ.image = "./images/ad.png";
  diasOBJ.id = fctMinted;
  diasOBJ.diasId = diasID;
  diasOBJ.diasName = (diasOBJ.colors[Number(String(diasID).slice(0, 2))] + " " + diasOBJ.attitudes[Number(String(diasID).slice(2, 4))] + " " + diasOBJ.animals[Number(String(diasID).slice(4, 6))]).toLowerCase();
  const bgNum = Number(String(diasID).slice(0, 1));
  const wsNum = Number(String(diasID).slice(1, 2));
  diasOBJ.traits.background = bgNum === 0 ? "bamboo" : bgNum === 1 ? "mint" : bgNum === 2 ? "lemon" : bgNum === 3 ? "sun" : bgNum === 4 ? "mango" : bgNum === 5 ? "pink" : bgNum === 6 ? "berry" : bgNum === 7 ? "violet" : bgNum === 8 ? "turquoise" : bgNum === 9 ? "cyan" : "bamboo";
  diasOBJ.traits.workspace = wsNum === 0 ? "city" : wsNum === 1 ? "mountains" : wsNum === 2 ? "forest" : wsNum === 3 ? "castle" : wsNum === 4 ? "island" : wsNum === 5 ? "temple" : wsNum === 6 ? "pyramid" : wsNum === 7 ? "" : wsNum === 8 ? "" : wsNum === 9 ? "" : "city";
  diasOBJ.traits.body = Number(String(diasID).slice(2, 3));
  diasOBJ.traits.mouth = Number(String(diasID).slice(3, 4));
  diasOBJ.traits.brows = Number(String(diasID).slice(4, 5));
  diasOBJ.traits.eye = Number(String(diasID).slice(5, 6));
  diasOBJ.traits.brows = Number(String(diasID).slice(6, 7));
  diasOBJ.traits.bubble = Number(String(diasID).slice(7, 8));
  diasOBJ.traits.fly = 0;
  diasOBJ.traits.ice = 0;
  diasOBJ.dias.layers[0].data.filename = "bg/" + bgNum + ".png";
  diasOBJ.dias.layers[1].data.filename = "ws/" + Number(String(diasID).slice(1, 2)) + ".png";
  diasOBJ.dias.layers[2].data.filename = "body/" + Number(String(diasID).slice(2, 3)) + ".png";
  diasOBJ.dias.layers[3].data.filename = "mouth/" + Number(String(diasID).slice(3, 4)) + ".png";
  diasOBJ.dias.layers[4].data.filename = "brows/" + Number(String(diasID).slice(4, 5)) + ".png";
  diasOBJ.dias.layers[5].data.filename = "eye/" + Number(String(diasID).slice(5, 6)) + ".png";
  diasOBJ.dias.layers[6].data.filename = "brows/" + Number(String(diasID).slice(6, 7)) + ".png";
  diasOBJ.dias.layers[7].data.filename = "bubble/" + Number(String(diasID).slice(7, 8)) + ".png";
  diasOBJ.dias.layers[8].data.filename = "ice/0.png";
  diasOBJ.dias.layers[9].data.filename = "fly/0.png";
  console.log(diasOBJ.diasName, diasOBJ.traits, diasID);
  let namer = "Hi #FROOTS it's " + diasOBJ.diasName;
  const doPubMint = await FCT.mint(1, diasID, diasOBJ, namer, { value: BigInt(5 * 1e16), gasLimit: 1000000 })
    .then((result) => {
      pMintNow.innerHTML = "MINTING";
      console.log("earn :: ", Number(result.data));
      return result;
    })
    .catch((err) => {
      console.error(err);
      pMintNow.innerHTML = err.data.message.split(": ")[1];
    });
  doPubMint.wait().then((result) => {
    pMintNow.innerHTML = "MINTED";
    setSlot();
    checkNav();
    return result;
  });
};
const setNet = () => {
  let a;
  if (Number(network) === 137) a = 0;
  else if (Number(network) === 5001) a = 0;
  else if (Number(network) === 42161) a = 0;
  else if (Number(network) === 43113) a = 0;
  else if (Number(network) === 421613) a = 0;
  else if (Number(network) === 80001) a = 0;
  return a;
};
const goSetFCT = async () => {
  // const GL = await GreenListData();

  let a = setNet();

  const deploymentKey = await Object.keys(COOLFROOT.networks)[a];
  const setFCT = await GL.setFCT(COOLFROOT.networks[deploymentKey].address)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  setFCT.wait().then((result) => {});
  checkNav();
  // alert(`THE FROOT CONTRACT HAS BEEN SET TO ${COOLFROOT.networks[deploymentKey].address}`);
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
    user = accounts[0];
    // get network data

    network = await ethereum.request({ method: "net_version" });
    var networkTag = "Switch Network";
    // evaluate legal networks
    //
    if (Number(network) !== 137 && Number(network) !== 80001) {
      goMumbai();
    } /*/ /
    if (Number(network) !== 5001 && Number(network) !== 5000) {
      goMantleTest();
    } // /
    if (Number(network) !== 43114 && Number(network) !== 43113) {
      goFuji();
    } // */
    if (Number(network) !== 137 && Number(network) !== 80001) {
      goPoly();
    } /* //
    if (Number(network) !== 42161 && Number(network) !== 421613 && Number(network) !== 43113 && Number(network) !== 5001) {
      goArbig();
    } // /
    /** END OF CONFIG JUNGLE */ else {
      // console.log(networkTag);

      await getGreenVars();
      await getIceVars();
      await getFrootVars();
      await getMarketVars();

      set.style.display = "block";
      btn.removeEventListener("click", onClickConnect);
      btn.innerHTML = "GIT GRIINLISTD HERE";
      btn.addEventListener("click", goGreenList);
      profile.innerHTML = "PROFYL";
      profile.addEventListener("click", goProfile);
      snap.addEventListener("click", writePng);
      let a;
      a = setCurr();
      const deploymentKey = await Object.keys(COOLFROOT.networks)[a];
      // console.log(Number(COOLFROOT.networks[deploymentKey].address), Number(glFctAdr));
      if (Number(COOLFROOT.networks[deploymentKey].address) !== Number(glFctAdr)) {
        // console.log(fctAdr);
        await goSetFCT();
        const frootMove = await ICE.setFroots(COOLFROOT.networks[deploymentKey].address);
        const move = async () => {
          await ICE.move();
        };
        frootMove.wait().then((res) => {
          move();
        });
      }
      console.log("remainder :: ", fctMax - fctMinted);
      if (glSlotMax - glSlotsTaken < 1) {
        mintHead.innerHTML = "<h2>MINT IS LIVE NOW !</h2>";
        gMint.addEventListener("click", goGreenMint);
        pMint.addEventListener("click", goPubMint);
      } else {
        mintHead.innerHTML = `<h2>MYNT GO'S LYVE AFTA<br/> ${glSlotMax - glSlotsTaken} MO GRIINLIZ GIT SWO0PD !</h2>`; // Testnet
        // else mintHead.innerHTML = `<h2>MINT GO'S LIVE AFTER<br/> ${1234 - mintState} MORE GREENLIST !</h2>`; // Mainnet
        gMint.innerHTML = "GRIIN<h2>MO0N</h2>";
        pMint.innerHTML = "PUBLICK<h2>SO0N</h2>";
        gMint.removeEventListener("click", goGreenMint);
        pMint.removeEventListener("click", goPubMint);
        // minty.disabled = true;
      }

      setSlot();
      checkNav();

      if (Number(await GL.admin()) === Number(accounts[0])) {
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
      console.log("do this");
      new_msg.style.display = "block";
      new_url.style.display = "block";
      inf.style.display = "block";
      console.log("done");
    }
  } catch (error) {
    console.error("connect error", error);
    btn.innerText = "KUNECT";
    profile.innerText = "KUNECT";
  }
};
const setCurr = () => {
  let a;
  if (Number(network) === 5000) {
    a = 0;
    curr = "<img id='cur' src='https://token-list.mantle.xyz/data/BitDAO/logo.svg' style='height:24px;width:24px;'/>";
    networkTag = "MANTLE";
  }
  if (Number(network) === 5001) {
    a = 0;
    curr = "<img id='cur' src='https://token-list.mantle.xyz/data/BitDAO/logo.svg' style='height24px;width:24px;'/>";
    networkTag = "MANTLE TESTNET";
  }
  if (Number(network) === 137) {
    a = 3;
    curr = "MATIC";
    networkTag = "POLYGON";
  }
  if (Number(network) === 80001) {
    a = 0;
    curr =
      "<img id='cur' src='data:image/png;base64,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' style='height24px;width:24px;'/>";
    networkTag = "POLYGON MUMBAI";
  }
  if (Number(network) === 421613) {
    a = 2;
    curr =
      "<img id='cur' src='data:image/png;base64,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' style='height24px;width:24px;'/>";
    networkTag = "ARBITRUM GOERLI";
  }
  if (Number(network) === 42161) {
    a = 0;
    curr =
      "<img id='cur' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADrCAMAAADNG/NRAAAA81BMVEX///8tN0uWvtwooPCZwN2ryuIiKDyOtNEopvmTvNuNudmaw+EgJjstKjYtNUgnMkcAFDMlLUEtM0QbnvEZJz8tLjz3+vwfK0IAGTYtLTsAEzMnL0Pa5/IWJD1dY3BkanbG2+sMHjmkxuAIHDjj7fW40uZtcn53fIZBSVrk5efAwsYrYo8qeLJ8nbjb3N4pjNEpluEqg8Ocn6ZGV2zf6vQ2Qld0kqyEp8PM3u1CUmdog5uusbaBhY7LzdAtRWJQVmWPk5stP1hacolQZXsraZssVXu2ub4sUndsiKEiHSshPFscjthPqetrseV9tuI8pO1Ui7hgB1VMAAAPUElEQVR4nO1da1cbtxZlbGOwDR6ehsSQAIGEtE1LSEhIIIU8Suhtbnv//6+5M7ZHR5rR0T6ah8fuYn/qWpk02pzXPkdCWlh4wAMe8IAHTBmDwaDuJZSNwd7JUXeEo5O9fw27t4vdTqfTGCH6j+7icd0rKgPHrW4jhe7R3NtsENkqTStmdjLfzA6srGJ/7F7Wvbb82GswrEbMWm/rXl8+HB9lAitlssU5dMbBCeeCRpjVvUxfXApYxTbrzFWYvW2JWI2Yteammg2OZMaaEJuXMDtxpwsL5iHMLjucrXq9Hmuzzl7d63bDIpoSVo1X9/evWhy17iyHGSOaYlatj+314bA9vOeMNsNhxoqmVu9dMAxGWL94xZms0z2om4ENvGjqvf/QDhL0V94sscxmL8x40dTrfF3pBxrClS+NOQkzXjT1eh/bwyCF4ZyEGS+aeq+C9TSreQmzt3xgLX1o9220Isx6mDlye+PLSsiwQmF2VHeYsaKp17sfZgIrFWbhO94Zax0UOETTqwtrYKXD7P0MhplDNC29WcGsgriafeXDrFFLmOUOLBPhykdeNNYwj3OJphAElolh/12vxTGbcpi5RNNpG3Mx0T51hNkUBwUO0bSUEk0yuMNsSvM4T9Ekw7D9kZdWUwkzf9EkZBa4wqxqVvykySWaROi3P/BhVu08rqTczjJb+dphmVXYwRQRTTI4w6yiDmavoGiSYT1gO5hKwqwE0STDVMOs4sAyEXUwbJiVOyhwiaZ+KYFlYrg+jUFBuaJJhuoHBQP5pKlMVD2Pc+T23KJJhirncVWJJhmqmscdO0TTm2KiSYgqwmyquZ2FK8xyDQoOKhdNMpQ7j5uOaJJhOCxrHucSTV/LFE1ClDOPc2/PTSuwDJQxj5u2aJKh6DxuwOd2fXuuBsRjb3ZQgPLHgGVVpWgSwjGP67p9ccD4YOWiSQZHmDmJDZjsPg3RJAM/KHC54pGdVdQQ1+2CBHYe12GTx4HNWtMUTTIwg4LOIhtcFlbTFU0yMPM4zhNPsubqvZ+2aJLBGmadI6G56hFNMtjmcXaDpaOr16hJNMnQb39I5/yOdb6YEhp1iiYZ4g7GzIxd7Ia9N7WKJhmGwRJ0xL2OSWvGjTVGeGG4YucAhFfv1cwmDBPrH3VitgAzsnzvQ/6MEYY7O1tb+xG2YuzECLU/BfD7x/qGwWyZftFww5zBtb51uHvx9Pr86u6nCHd3V1fn5+e3t9fXyXLDmycJnk7wfIwXYzzxJLaim6PTAryW8vDaOdx5cferLdUuXG1NaJ1a/1jDqSevtpE5EK+Od3iF++GtnVOEwe7kqzX2k+QHsO/571bLKzy8+cmx2sS5dq4BrcGhJ61qeW1dfHKt9qdnyXeA1sKLnVni9fjcvdpksYd3gNava760KuQVboGguZ7wCm8ALe+kUSWvMABDLmWEtZeA1p1v0qiQVxii2V1ihJ1b8OHClj8tX17i+rWLjKAy9w6idZvEYX+jKl4Nqb0Or8BiVek6dBWCGC8Tf+0HZ6s18wqfICM8DaVf3iRJ49Hr5W/b9fKCXqhK12P45eHky/735ebyZ+lgrxJe+8gLVenCSUOl+NWzZrP5m9QTq+CFVWxSuoIQfamSxsbPyxGv5Z+FuaMKXtC3fn08+fKZOGkEG80x+jJPrIDX1i0ywqk4aSTpJdj+ZXnM67XME8vnFV6gxarSBZXGp6Qa9H+f0Gou/yHyxPJ5PUa91EDJeKCLFxYuEnOt/tZUEOX60nnBXopKV4C+PE8U1DhpTAz2y6M6eMEM9ykx166zOVvQDBtsNzUsfxekjrJ5wcWqghQ+RV+qblIljTHOBAYrmdfOC7RYVZB2keBXjUz/s0Er8kQcYiXz2kKLfZmULpw0Tm1JY0zsd+iJ5fKC4pxKl7wabPyxnOLV/AsWsVJ54ZBRi8VJQzXJj87StJpY2HvycveVz5AXqgy3/hz9BJSE3P6WMVcTC/syeWEZ/zwJmUNxHPYDCy0s7EvkhedKShbhn4DWTdpoQWFfIi8o46l0wUbm7jAx13eruSK4HbE8Xvswcd8msgiO41XfOe4mrXAL+9J4YRuoXsqjeG/YksbEE53CvjRe2AY38qShusk+xyqGK9eXxQsPKlTpwknjiTaC4mk5hX1JvHDPobZ6sMOqYRV1k3ZiDjlVEq81KOOfJwePsMOq/+vqXy5aTmFfDi/cTKrShT+1dpOMJ7IhVhIvtFayAdzDUxNumzAUe2IpvHahjL8V7+GR1sL2cgj7MnhhEasSt4fWCiyNV9Zg35giVgYvWI+odGGtdaHtTaYbZRsCuyeWwAu7Fu113Yo/HcHao5hghH1xXnhoS6cUYH5JH2gQpA67sPfjZTtHBPeEqHThMUH6QAMv5wlWRyzMC6silQmwZbMHGpj2S8drW3Uu6odYFS0E8qSRPdDQdyrfsSfahH1RXnitquvCSUN1kwGtVFDEbMK+IC88BVSDCjzhpgMN21oyQCLRLqeK8cJTQCpdcA/P2JskgQRE/YhYVk4V44W1+dVh8iOAScPYm9QEUmo6b0P2AEQhXlibUz3C5eBG35vUBdI2omWZkxbihSNG1SMciHSgYex4JJAsg+wMsfSctAgvvCdEpQv209qBhrHa1QQS1r8ZOVWAFx4rUenCPwJVDhLraGWJmfmanmgWsQK8YIdIaw3lnYwWTVqEYf2bEvb5eWGxR6UL7uFZDjQY8yZ+PMp4Ym5eeE+IEhxOGnSgQWu5tI1kSREzhH1uXnBPiFSRoHqrQFzVda42b3qEi1izDF7wgKG2MYeThhpBmX2JLpA2WDrqa13Ye/YpSSeF5xRUunZg0qADDak40sqSQP8uf98oygueANLmL9hjX7DbDH5FTBP2+XjhPSGKGNx40oGGIGMCSgaCIY7mt7l4CZpJFTGCb09de5NUlgT6l4R9Ll64maQyK5D8SYKxJnNt+w4PcUjY5+GFDxhS6cJii/KmtfhqcmoDD3GUsM/BS6BhqaHfh0nj2jzpmgUlA8EQJ8mgOXhhzyIT4KSRPemaXiklg2xeyWKSQf154WaS8ragzN1khWGa2O9eRWws7HPwgkv95JE06EADrwC1Lh8PcSYZ1JsXFkW0dSAwLR1o4Muu1uUL9O/YE315YVFEpUvSoaGkMSb22auIxbXclxfeE6KuC2+00Lfu2Ywmp/AQZyTsPXmtwaXSIQVB0ngCk4ZmgolhBUOcSNh79il4qVS6sCqhAw1Q+9GvOQj0byTs/Xh14VIHKrjwOF470ADXSnJKsol5tr3iw8t2L0IKtIGF68F5egTlMgHJKcEQZ/mXPz142X7NPgXawMJjHZ8DDU1dTgmGOMv/8eAFbzvTShcex9OBBskUzZBTgk3Mv+S8BF5IpcujoZYETNOQU87jYGNsdqW8BF5IGlbQyijT9j9LaBlyCg9x5LwEXkiXZOAdCe1Ag2RLsmnIKfw3xLzslxUZoNKF9/CMAw2SkUzTkFPwb8jtBWnRNqpgFmwcaBBGmCan4N+Q8hJ4oWp8BUkjdaBBlBENOYX0r5CXwAtpqXgcnznQIChJI9CeCah5Ul5wpVrp8pl/JH4l6Kti0KgaDHFkvLr4bRkqXYLOM3tDg2RfoWmMqledQxwRL/ZqRAKVLryHp0WiFmIie2lbLO4hjowXvgeXShfew6NuUoNA+44MRnLK8TsDMl7gstgYqpOSjO5vMqegsF8RMZJTrmQj4YW9kMYvgj08daDBhGQ4GIPklCvZCHh1sRdSwAiSBncJj7+cchQxzEvwghiVLsHZh3P2uhqpnNK2WGT2st7PZr911ABVWcG4ir8Lyl9O8clmU7+x0nafnuBO8HOPcTwdaLDAX06xJv5h3MRpyRC4Ir9U/bxgD08/Hm/xRKGcgpuYZngJOmILqHThcTxtz9o9USantJ1/u4k3/2uYK9d7MZS2CyWNyTKlcspVxDabf6fug83zpgppIryHN3B64YiYhJYhp9L6dzMylkmLuXDZDSpdgqTxAt4+7S+nUkOczR+d9LXmeV4Ho9IlGMdL7vvzl1P6SfTNf7rZy9pt1xIjUOmC97/I7vsTHJgfgQ4Ak06JAytLK082pNIl2MOTXRIqllOZIpYJrAkvf1paHsB7eAPhNYZCOUUnVsbVYfOHxQUbop44AxIPeA/P2k3a4C+nouqw+c/f9sdGBJOZDKjrEiQNhzBMQSqnaItl9czugqJWPwsyAJ6sMd2kFZ5yKnsxO9EqVroEe3iZEZQDUjk1OgDsenGvm8daWjXC4/gFYXCN4SGnXE+35XtHkKoRHsfTgQYhMZkjnq2uOx6OPcjDSqtGgj08edIYQ3B0Lcbm/zgXzP2AoFa6BEnD95p1kZxic3uel+gSUOkS7OGpO9nkgHLKLpqKBFYMKl2SpOHNCsspRjSNjFXg3WLyq2d4soa6SSuccooTTUUfwKXSJdjDG/hfRx445VSmIdZotXLIQcLtWmIwQdJ47ps0xuDkVLYh1oxV9IHpl093R6sV7OG5R1AO2OXU5g9ONDX8Xq3klnu6L9rDM25o8IJNTlkb4gmr3Lk9hav9HcE43vvJCUJGTrkCq4THlxWuBUnjMDetiJjhic7AOiiPlQj+T05oMOSUZdKkWJX2uLkUOZ6c0EG/CVCJaMqPHE9OmBZLAot3wTIDS4rL+36xh/jGcqoi0ZQbg26v8aXYq3WRnKpKNOVH/MhW/Mpggec7+2Floik3jse7UEVehRwO76sTTXlxlDzC1XuX7xVP5yPmZYimXNijTcNcr672245JUw25PYH54uDSG89HtmxPbCYuWEduT5B+f9XvxXr+5eEaRJMOy/urvft1YZgxT9iOWdWT2xMcWdYkDTPmyeEYdQZWjD3L68YN2WPU69wT0TUH1gjMi+g4zNy5vWZWUXgtcszcYcbvItQdWAmOW3ZXjJh1uDBz7SK06g0sDZfMO/axtPrQzobZcP2ez+11iSYrTjiTRWEWpMJsxgPLhCvMPra1MLO8c02sas7tVhy3WGfsUAczq6LJhUs+50dhFiWQ/syKJgA2zFq9d2+G7eDLrOd2DoMjPsxiMLRnMrBMvGXDjMXMBpYJPswYY81abucw4KtZ1lYzHlgmjo+EzOqaNOXGXkPgjDMmmmQ4gGFW36SpEKIwczGbg9zOwRFmc5LbOezZO5iZFk0yWMJsvnI7hzjMDGpzHFgmBgetiNoY3e7iXAdWCoO3lycRDvb+JaZ6wAMe8IB5wf8B6I/qNVvQ1QkAAAAASUVORK5CYII=' style='height24px;width:24px;'/>";
    networkTag = "ARBITRUM";
  }
  if (Number(network) === 43113) {
    a = 0;
    curr = "<img id='cur' src='https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg' style='height24px;width:24px;'/>";
    networkTag = "FUJI";
  }
  console.log(a);
  return a;
};
const goGreenList = async () => {
  console.log(GL, network, user);
  // if (typeof GL == "undefined") GL = await GreenListData();
  const GLme = await GL.getListed()
    .then((result) => {
      console.log(result);
      btn.removeEventListener("click", goGreenList);
      btn.innerHTML = "PLEAZ WAIT 4 TX 2 FINNISH";
      return result;
    })
    .catch((err) => {
      console.error(err.message);
      btn.innerHTML = err.data.message.split(": ")[1];
      btn.removeEventListener("click", goGreenList);
    });
  GLme.wait().then((load) => {
    // console.log(load);
    btn.innerHTML = "WOWZERS ... UR ON DA GREENLIZ NOW";
    btn.style.background = "white";
    btn.style.color = "mediumseagreen";
    setSlot();
    checkNav();
  });
};

const goMove = async () => {
  await FCT.move();
};

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
  const MetaMaskClientCheck = async () => {
    console.log(isMetaMaskInstalled());
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      btn.innerText = "install metamask!";
      btn.addEventListener("click", clickInstall);
      profile.addEventListener("click", clickInstall);
    } else {
      //If it is installed we change our button text
      btn.innerText = "KUNECT";
      btn.addEventListener("click", onClickConnect);
      profile.addEventListener("click", onClickConnect);
    }
  };
  MetaMaskClientCheck();
};
// IMPRTANT INITIAL FUNCTION CALL
set.style.display = "none";
new_msg.style.display = "none";
// pnew_msg.style.display = "none";
web3init();
// IMPORTANT FUNCTION WEB3INIT DO NOT EDIT END //
