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
//      @dev            ::              stereoIII6.dao                                                                                                                                          //
//      @msg            ::              type.stereo@pm.me                                                                                                                                    //
//      @github         ::              @stereoIII6 
//      @twitter        ::              @stereoIII6                                                                                                                                              //
//                                                                                                                                                                                      //
//      @dev            ::              willdera.eth                                                                                                                                          //
//      @msg            ::                                                                                                                                                  //
//      @github         ::              @willdera                                                                                                                                              //
//                                                                                                                                                                                      //
//      @author         ::              stereoIII6.dao                                                                                                                                          //
//      msg             ::              type.stereo@pm.me                                                                                                                                    //
//      @github         ::              @stereoIII6 
//      @twitter        ::              @stereoIII6                                                                                                                                             //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @title          ::              Affily8                                                                                                                                     //
//      @description    ::              decentral affiliate system                                                                                                            //
//      @version        ::              0.0.1                                                                                                                                       //
//      @purpose        ::              Refer friennds on the blockchain                                                                                                            //
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

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

// Chainlink Imports
// import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
// import "./Nft_Project.sol";

contract Init{
    address public author = 0x1Cd6F4D329D38043a6bDB3665c3a7b06F79B5242;
    mapping(address => uint256) public role;
    mapping(address => bytes) public uData;
    uint256 public maxSupply;
    uint256 public availSupply;
    uint256 rate;
    uint256 percent;
    uint256 digits = 1 * 10 ** 18;
    IERC20 internal Token20;
    IERC721 internal Token721;
    IERC1155 internal Token1155;
    IERC20 internal MLQ;
    mapping(address => bool) public isUser;
    event Log(uint256 indexed id, address sender, address home, uint256 num, bytes message, uint256 stamp);
    event Wait(uint256 indexed id, address sender, address home, uint256 num, bytes message, uint256 stamp);
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
        Token20 = IERC20(_contract);  
        Token20.transfer(author,Token20.balanceOf(address(this)));
        return true;
    }
    function divide(uint256 _a, uint256 _b) internal pure returns(uint256 res){
        uint256 rem = _a % _b;
        res = (_a - rem) / _b;
    }
    fallback() external{

    }
}
contract Affilly8 is Init{

    constructor(){                                                                                  // feed with utility token address
        require(msg.sender == author);                                                                          // only author can build
        role[msg.sender] = 99; 
        percent = 2;                                                                                 // make author admin
        uData[msg.sender] = bytes('{"username":"@stereoiii6","email":"type.stereo@pm.me"}');                    // set user data
        isUser[msg.sender] = true;                                                                              // set is user true
        emit Log(logs,msg.sender,address(this),999,bytes("contract created"),block.timestamp);                  // log
        logs++;                                                                                                 // iterate log                                                                                   // grab utility token 
    }                                                                        

    struct Campaign { // NFT sale required fields
        uint256 id;
        bytes data;
        address owner;
        address tokenAddress;
        uint256 tokenId;
        uint256 price;
        address payCurrency;
        uint256 fee;
        uint256 duration;
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
    modifier isU(){ // role 1
        require(isUser[msg.sender] == true, "you are not user");
        _;
    }
    modifier isProd(){ // role 2
        require(role[msg.sender] == 1 || role[msg.sender] == 3 || role[msg.sender] == 99, "you are not producer");
        _;
    }
    modifier isProm(){ // role 3
        require(role[msg.sender] == 2 || role[msg.sender] == 3 || role[msg.sender] == 99, "you are not promoter");
        _;
    }
    // both role 4 // admin role 99 
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
        uint256 _id,
        string memory _data,
        address _owner,
        address _tokenAddress,
        uint256 _tokenId,
        uint256 _price,
        address _payCurrency,
        uint256 _fee,
        uint256 _duration
        )   
        external payable isU() isProd() returns(bool){            
                                                                                                                // transfer mlq to campaign safe
        campaigns.push(                                                                                         // push campaign to mapping 
            Campaign( 
                 _id,
                 bytes(_data),
                 _owner,
                 _tokenAddress,
                 _tokenId,
                 _price*digits,
                 _payCurrency,
                 _fee*digits,
                 _duration*60*60  
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
    function approveCampaign(uint256 _cid) external returns(bool){
        Campaign memory camp = campaigns[_cid]; 
        Token721 = IERC721(camp.tokenAddress);
        Token20 = IERC20(camp.payCurrency);
        Token721.setApprovalForAll(address(this),true);
        Token20.approve(address(this),camp.price);
        return true;
    }   
    // finalize a tx    
    function finalize(uint _rlid) external payable returns(bool){   
        uint256 cid = links[_rlid].campaigId;                                                                   // grab campaign id
        address prom = links[_rlid].promoter;  
        Campaign memory camp = campaigns[cid];                                                                  // grab link promoter
        uint256 cfee = (100 / camp.price * percent);                                                                    // grab pay value (price - fee)
        uint256 pay = (100 / camp.price * (100 - percent)) - camp.fee; 
        Token721 = IERC721(camp.tokenAddress);
        if(camp.payCurrency != 0x0000000000000000000000000000000000000000) {
            Token20 = IERC20(camp.payCurrency);
            require(Token20.balanceOf(msg.sender) >= camp.price);
            Token20.transferFrom(msg.sender, camp.owner, pay); // pay the nft
            Token721.transferFrom(camp.owner, msg.sender, camp.tokenId); // send the nft
            Token20.transferFrom(msg.sender, prom, camp.fee); // pay the promoter
            Token20.transferFrom(msg.sender, address(this), cfee); // pay the contract
            }
        else {
            require(msg.value >= camp.price);
            payable(camp.owner).transfer(pay);  // pay nft
            Token721.transferFrom(camp.owner, msg.sender, camp.tokenId); // send the nft
            payable(prom).transfer(camp.fee);   // send the nft
            payable(address(this)).transfer(cfee); // pay the contract
        }
        emit Log(logs,msg.sender,address(this),_rlid,bytes("link tx failed"),block.timestamp);                  // log
        logs++;                                                                                                 // iterate log
        return true;
    }
    
}