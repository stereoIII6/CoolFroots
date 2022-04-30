// SPDX-License-Identifier: GPL-3.0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//   
//      ┃┃┃┃┃┏━┓┏━┓┃┓┃┓┃┃┃┃┃━━━┓
//      ┃┃┃┃┃┃┏┛┃┏┛┃┃┃┃┃┃┃┃┃┏━┓┃
//      ┏━━┓┃┛┗┓┛┗┓┓┃┃┃┃┓┃┏┓┗━┛┃
//      ┗┃┓┃┃┓┏┛┓┏┛┫┃┃┃┃┃┃┃┃┏━┓┃
//      ┃┗┛┗┓┃┃┃┃┃┃┃┗┓┗┓┗━┛┃┗━┛┃
//      ┗━━━┛┗┛┃┗┛┃┛━┛━┛━┓┏┛━━━┛
//      ┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃━┛┃┃┃┃┃┃
//      ┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃━━┛┃┃┃┃┃
// 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//      @artist ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @dev ::             stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @author ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @title ::                                                                                                                                                        //
//      @description ::                                                                                                                          //
//      @version ::         0.0.1                                                                                                                                                   //
//      @purpose ::                                                                                                                              //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


pragma solidity ^0.8.0;
// Open Zeppelin Imports
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

// Chainlink Imports
// import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Init{
    address public author = 0x1Cd6F4D329D38043a6bDB3665c3a7b06F79B5242;
    mapping(address => uint256) public role;
    mapping(address => bytes) public uData;
    uint256 public maxSupply;
    uint256 public availSupply;
    uint256 rate;
    uint256 digits = 1 * 10 ** 18;
    IERC20 internal Token;
    IERC20 internal MLQ;
    mapping(address => bool) public isUser;
    event Log(uint256 indexed id, address sender, address home, uint256 num, bytes message, uint256 stamp);
    uint256 logs;
    modifier isAdmin() {
        require(role[msg.sender] == 99, "you're not admin");
        _;
    }
    modifier isOwner() {
        require(author == msg.sender, "you're not owner");
        _;
    }
    function changeRole(address _to, uint256 _role) external isAdmin() returns(bool){
        role[_to] = _role;
        return true;
    }
    function makeU(string memory _data) external returns(bool){
        isUser[msg.sender] = true;
        role[msg.sender] = 1;
        uData[msg.sender] = bytes(_data);
        return true;
    }
    function showU() external view returns(string memory, uint256){
        return(string(uData[msg.sender]),role[msg.sender]);
    }
    function withdrawToken(address _contract) external isAdmin() returns(bool){
        Token = IERC20(_contract);  
        Token.transfer(author,Token.balanceOf(address(this)));
        return true;
    }
    function divide(uint256 _a, uint256 _b) internal pure returns(uint256 res){
        uint256 rem = _a % _b;
        res = (_a - rem) / _b;
    }
    fallback() external{

    }
}
contract Affilly8 is Init {

    constructor(){                                                                                              // feed with utility token address
        require(msg.sender == author);                                                                          // only author can build
        role[msg.sender] = 99;                                                                                  // make author admin
        uData[msg.sender] = bytes('{"username":"@stereoiii6","email":"type.stereo@pm.me"}');                    // set user data
        isUser[msg.sender] = true;                                                                              // set is user true
        emit Log(logs,msg.sender,address(this),999,bytes("contract created"),block.timestamp);                  // log
        logs++;                                                                                                 // grab utility token 
    }
      
    struct Campaign{  
        uint256 typ;                                                                                            // Campaign Struct
        bytes description;                                                                                      // description var
        bytes txAction;                                                                                         // 0 - from safe // 1 - from msg.sender 
        uint256 txPrice;                                                                                        // piced in currency
        address currency;                                                                                       // if 0x0 zero address use ETH
        uint256 fee;                                                                                            // gets subtracted from price
        address txTo;                                                                                           // recieves payment
        uint256 interval;                                                                                       // in hours
        uint256 start;                                                                                          // in hours
        uint256 end;                                                                                            // in hours
        uint256 safeWallet;                                                                                     // campaign balance
    }                                                                           

    struct RefLinks{                                                                                            // Link Structs
        uint256 id;                                                                                             // id
        uint256 campaigId;                                                                                      // campaing reference id
        address promoter;                                                                                       // fee reciever / promoter
    }                                                                           
    Campaign[] public campaigns;                                                                                // Campaign Mapping
    RefLinks[] public links;                                                                                    // List Mapping
    
    mapping(address => uint256) internal myCampaignCount;                                                       // counts users campaigns
    mapping(address => mapping(uint256 => Campaign)) public showCampaign;                                       // maps users campaigns
    mapping(address => uint256) internal mylinkCount;                                                           // counts users links
    mapping(address => mapping(uint256 => RefLinks)) public showLinks;                                          // maps users links
    uint256 c;                                                                                                  // count campaigns
    uint256 l;                                                                                                  // count links
    uint256 t;                                                                                                  // count txs
    modifier isU(){
        require(isUser[msg.sender] == true, "you are not user");
        _;
    }
    modifier isProd(){
        require(role[msg.sender] == 2 || role[msg.sender] == 4 || role[msg.sender] == 99, "you are not producer");
        _;
    }
    modifier isProm(){
        require(role[msg.sender] == 3 || role[msg.sender] == 4 || role[msg.sender] == 99, "you are not promoter");
        _;
    }
    // become a producer 
    function beProducer() external isU() returns(bool){
        require(role[msg.sender] != 2, "you are producer");
        if(role[msg.sender] == 1) { role[msg.sender] = 2;}                                                      // if user is guest
        if(role[msg.sender] == 3) { role[msg.sender] = 4;}                                                      // is user is promoter
        emit Log(logs,msg.sender,address(this),999,bytes("became producer"),block.timestamp);
        logs++;
        return true;
    }
    // become a promoter
    function bePromoter() external isU() returns(bool){
        require(role[msg.sender] != 3, "you are promoter");
        if(role[msg.sender] == 1) { role[msg.sender] = 3;}                                                      // if user is guest 
        if(role[msg.sender] == 2) { role[msg.sender] = 4;}                                                      // if user is producer
        emit Log(logs,msg.sender,address(this),999,bytes("became promoter"),block.timestamp);
        logs++;
        return true;
    }
    // make a ref link
    function makeLink(uint256 _cid) external isU() isProm() returns(bool){
        links.push(RefLinks(l, _cid, msg.sender));                                                              // Push reflink to struct mapping
        mylinkCount[msg.sender]++;                                                                              // iterate user link count
        showLinks[msg.sender][l] = links[l];                                                                    // preserve links in mapping
        emit Log(logs,msg.sender,address(this),l,bytes("link created"),block.timestamp);                        // log 
        logs++;                                                                                                 // iterate log
        l++;                                                                                                    // iterate link
        return true;    
    }   
    // makes ref links for producers automatically  
    function makeOwnLink(uint256 _cid) internal isU() returns(bool){    
        links.push(RefLinks(l, _cid, msg.sender));                                                              // Push reflink to struct mapping
        mylinkCount[msg.sender]++;                                                                              // iterate user link count
        showLinks[msg.sender][l] = links[l];                                                                    // preserve links in mapping
        emit Log(logs,msg.sender,address(this),l,bytes("link created"),block.timestamp);                        // log 
        logs++;                                                                                                 // iterate log
        l++;                                                                                                    // iterate link
        return true;    
    }   
    // make a campaign  
    function makeCampaign(  
        uint256 _type,  
        string memory _desc,    
        string memory _txAction,    
        uint256 _price,     
        uint256 _fee,   
        address _currency,  
        address _txTarget,  
        uint256 _int,   
        uint256 _start,     
        uint256 _end,   
        uint256 _safeIn 
        )   
        external payable isU() isProd() returns(bool){  
        if(_type == 0) require(_safeIn*digits >= _fee*digits * 50*digits);  
        MLQ.transferFrom(msg.sender, address(this),_safeIn * digits);                                          // transfer mlq to campaign safe
        campaigns.push(                                                                                         // push campaign to mapping 
            Campaign(   
                _type,  
                bytes(_desc),   
                bytes(_txAction),   
                _price * digits,    
                _currency,  
                _fee * digits,  
                _txTarget,  
                _int*60*60,     
                block.timestamp + (_start*60*60) * 10 ** 20,    
                block.timestamp + (_end*60*60) * 10 ** 40,  
                _safeIn * digits    
                )   
            );  
        myCampaignCount[msg.sender]++;                                                                          // iterate user campaign count
        showCampaign[msg.sender][c] = campaigns[c];                                                             // preserve user campaign in mapping
        emit Log(logs,msg.sender,address(this),c,bytes(". campaign created"),block.timestamp);                  // log
        logs++;                                                                                                 // iterate logs
        makeOwnLink(c);                                                                                         // create ref link for producer
        l++;                                                                                                    // iterate item mapping
        c++;                                                                                                    // iterate campaign mapping
        return true;    
    }   
    // finalize a tx    
    function finalize(uint _rlid) external payable returns(bool){   
        uint256 cid = links[_rlid].campaigId;                                                                   // grab campaign id
        address prom = links[_rlid].promoter;                                                                   // grab link promoter
        Token = IERC20(campaigns[cid].currency);                                                                // grab payment currency
        uint256 pay = campaigns[cid].txPrice - campaigns[cid].fee;                                              // grab pay value (price - fee)
        string memory val = string(campaigns[cid].txAction);                                                    // grab transaction call data
        (bool success, ) = campaigns[cid].txTo.call{value: pay, gas: 50000}(abi.encodeWithSignature(val));      // call external tx
        if(!success){                                                                                           // success check
            address ref;                                                                                        // declare reference payer address
            uint256 x = 0;                                                                                      // declare comparison uint256
            if(campaigns[cid].typ == x) {                                                                       // if check campaign payment type
                ref = address(this);                                                                            // set contract safe wallet address as payer
                campaigns[cid].safeWallet -= campaigns[cid].fee;                                                // decrease safewallet balance
            }   
            else ref = msg.sender;                                                                              // else set msg.sender as payer
            if(campaigns[cid].currency != 0x0000000000000000000000000000000000000000){                          // if !0 address use contract address
                Token.transferFrom(ref,prom,campaigns[cid].fee);                                                // transfer fee to promoter
                     }    
            else     
            emit Log(logs,msg.sender,address(this),_rlid,bytes("link tx finalized"),block.timestamp);           // log
            logs++;                                                                                             // iterate log
            return false;   
        }   
        emit Log(logs,msg.sender,address(this),_rlid,bytes("link tx failed"),block.timestamp);                  // log
        logs++;                                                                                                 // iterate log
        return true;
    }
    
}