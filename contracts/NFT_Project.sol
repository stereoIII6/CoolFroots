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
pragma solidity ^0.8.3;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT_Project is ERC721URIStorage {
    // counter class 
    using Counters for Counters.Counter; 
    // iterator for token ids
    Counters.Counter internal _tokenIds;
    // admin account = author 
    address internal admin;
    //      user    => amount
    mapping(address => uint256) public myNFTAmount;
    //      user    => wallet id        => token id
    mapping(address => mapping(uint256 => uint256)) public myNFTs;
    //      token id    => token uri
    mapping(uint256 => string) public _tokenURIz;
    // total amount of minted tokens
    uint256 public total;
    // maximum amount of tokens to mint
    uint256 public max;
    // base uri that points to ipfs
    string internal baseURI;
    // decimal spaces wanted at eth level
    uint256 internal digits;
    // maximum amount of tokens per lootbox
    uint internal maxBoxSize;


    constructor(address _author, uint256 _max, string memory _name, string memory _sym, string memory _baseUri, uint256 _n, uint256 _m) ERC721(_name, _sym) {
        admin = _author; // author from input
        max = _max;
        total = 1;
        baseURI = _baseUri;
        digits = 10 ** (18 - _n);
        maxBoxSize = _m;
    }

    function mintToken() external payable returns(bool) {
        require(msg.value >= 1*digits,"insuficient balance ...");
        require(myNFTAmount[msg.sender] <= maxBoxSize, "max limit reached ...");
        _mint(msg.sender, total);
        _tokenURIz[total] = tokenURI(total);
        myNFTs[msg.sender][myNFTAmount[msg.sender]] = total;
        myNFTAmount[msg.sender]++;
        total++;
        return true;
    }
    function dropToken() external returns(bool){
        require(myNFTAmount[msg.sender] == 0, "max limit reached ...");
        _mint(msg.sender, total);
        _tokenURIz[total] = tokenURI(total);
        myNFTs[msg.sender][myNFTAmount[msg.sender]] = total;
        myNFTAmount[msg.sender]++;
        total++;
        return true;
    }
    function tokenURI(uint256 tokenId) public view virtual override returns(string memory){
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");
        string memory idstring = Strings.toString(tokenId);
        string memory diasPath = append(baseURI,"/",idstring);
        return baseURI;
    }
    function withdrawAll() external payable returns(bool){
        require(admin == msg.sender, "not authorized ...");
        require(admin.balance >= 1 * digits);
        payable(admin).transfer(admin.balance);
        return true;
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory) {
    return string (abi.encodePacked(a, b, c));
    }
    fallback() external {

    }
}