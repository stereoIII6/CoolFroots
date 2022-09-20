// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Greenlist {
    address public admin; // CONTRACT OWNER

    uint256 public l; // LIST SLOTS TAKEN
    uint256 public max; // MAX LIST SLOTS
    string public message; // STATUS MESSAGE ON GREENLIST PAGE
    uint256 public stamp; // TIMESTAMP OF LAST CHNAGE

    mapping(address => bool) public isListed; // IS USER GREENLISTED
    address[1234] public users; // ADDRESSES OF LISTED USERS

    modifier notListed(address _adr) {
        // CHECK IF USER IS LISTED
        require(isListed[_adr] == false, "already listed");
        _;
    }

    constructor() {
        admin = msg.sender;
        isListed[msg.sender] = true;
        users[0] = msg.sender;
        message = "BE FRESH MY FRUITY FRENZ !";
        l = 1;
        max = 1234;
    }

    function getListed() external notListed(msg.sender) returns (bool) {
        // GREENLIST USER ADDRESS
        require(l < max, "no more greenlist tickets left");
        isListed[msg.sender] = true;
        users[l] = (msg.sender);
        l++;
        return isListed[msg.sender];
    }

    function makeListing(address _adr) external notListed(_adr) returns (bool) {
        // ADMIN  GREENLIST USER ADDRESS
        require(admin == msg.sender, "you are not admin");
        isListed[_adr] = true;
        users[l] = (_adr);
        l++;
        return isListed[_adr];
    }

    function showUsers() external view returns (address[1234] memory) {
        // SHOW ALL USERS
        return users;
    }

    function setMsg(string memory _msg) external payable returns (bool) {
        // SET MAIN GREENLIST PAGE MESSAGE
        require(msg.value <= 1 * 10**18, "insufficient balance sent");
        require(block.timestamp >= stamp + 60 * 60, "you need to wait");
        message = _msg;
        stamp = block.timestamp;
        return true;
    }

    function setMsgAdmin(string memory _msg) external returns (bool) {
        // ADMIN SET MAIN GREENLIST PAGE MESSAGE
        require(admin == msg.sender, "you are not admin");
        message = _msg;
        stamp = block.timestamp;
        return true;
    }

    function showMsg() external view returns (string memory) {
        // DISPLAY MESSAGE
        return message;
    }

    function withdraw() external returns (uint256) {
        // WITHDRAW FUNDS FROM CONTRACT
        require(admin == msg.sender, "you are not admin");
        payable(admin).transfer(address(this).balance);
        return address(this).balance;
    }
}
