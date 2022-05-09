// SPDX-License-Identifier: GPL-3.0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//   
//                                                 
//      
//      
//
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
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
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @title ::           safe contract                                                                                                                                           //
//      @description ::     Decentral Social Network Experiment                                                                                                                     //
//      @version ::         0.0.1                                                                                                                                                   //
//      @purpose ::         Bring real life into the Blockchain                                                                                                                     //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

pragma solidity ^0.8.0;

// Open Zeppelin Imports
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

// Chainlink Imports
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Init{
    address public author = 0x1Cd6F4D329D38043a6bDB3665c3a7b06F79B5242;
    address public avax = 0xa60bD1147c32ACDF9060baDBaa0f62f6Bfd19437;
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
        require(author == msg.sender || avax == msg.sender, "you're not owner");
        _;
    }
    function isUserBool() external returns(bool){
        return isUser[msg.sender];
    }
    function getRole() external returns(uint256){
        return role[msg.sender];
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
        Token20.transfer(msg.sender,Token20.balanceOf(address(this)));
        return true;
    }
    function setMLQ(address _mlq) external returns(bool){
        MLQ = IERC20(_mlq);
        return true;
    }
    function divide(uint256 _a, uint256 _b) internal pure returns(uint256 res){
        uint256 rem = _a % _b;
        res = (_a - rem) / _b;
    }
    fallback() external{

    }
}

contract MLQ is ERC20, Init{
    constructor() ERC20("Milq Token","MLQ") {
        require(msg.sender == author || msg.sender == avax, "not admin");
        role[msg.sender] = 99;
        uData[msg.sender] = bytes('{"username":"@stereoiii6","email":"type.stereo@pm.me"}');
        maxSupply = 1000000 * 10 ** 18;
        rate = 100;
        mint(5000);
    }
    function mint(uint256 _amount) isOwner() internal returns(bool){
        uint256 ts = totalSupply();
        require((_amount * 10 ** 18) <= maxSupply - ts);
        _mint(address(this), rate * _amount * 10 ** 18);
        return true;
    }
    function buy() external payable returns(bool){
        uint256 ts = totalSupply();
        require((msg.value * rate) <= maxSupply - ts,"supply");
        require(msg.value > 0,"value");

        _mint(msg.sender,msg.value * rate);
        return true;
    }
    function showSafeWallet() isAdmin() external view returns(uint256, uint256){
        return (address(this).balance,balanceOf(address(this)));
    }
    function withdraw(uint256 _eth, uint256 _mlq) isAdmin() external returns(bool){
        require(_mlq * 10 ** 18 <= balanceOf(address(this)));
        require(_eth * 10 ** 18 <= address(this).balance);
        transfer(payable(msg.sender), _mlq * 10 ** 18);
        payable(msg.sender).transfer(_eth * 10 ** 18);
        return true;
    }
}

contract MLQuidity is ERC1155, Init{
    constructor() ERC1155("SHK"){
        require(msg.sender == author);
        role[msg.sender] = 99;
        uData[msg.sender] = bytes('{"username":"@stereoiii6","email":"type.stereo@pm.me"}');
        maxSupply = 100000 * 10 ** 18;
        rate = 10;
    }
}