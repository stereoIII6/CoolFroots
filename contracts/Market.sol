// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./FrootyCoolTingz.sol";

contract Market {
    address public admin; // CONTRACT OWNER

    mapping(address => uint256) public myListCount; // LISTING COUNT FOR USER
    mapping(uint256 => uint256) public tid2lc; // TAKES Token Id and returns ListCount
    mapping(address => mapping(uint256 => Listing)) public myListings; // LISTINGS OF USER
    uint256 l; // NUMBER OF LISTINGS
    FrootyCoolTingz public fct; // FROOT ADDRESS
    ICE public ice;
    Greenlist public gl;
    uint256 public roy;
    uint256 public fee;

    struct Listing {
        // STRUCT FOR SALES LISTINGS
        uint256 id;
        address holder;
        uint256 tid;
        uint256 price;
        uint256 deadline;
    }

    struct Auction {
        // STRUCT FOR AUCTION LISTINGS
        uint256 id;
        address holder;
        uint256 tid;
        uint256 minprice;
        uint256 iterSteps;
        uint256 deadline;
    }

    struct Offer {
        // STRUCT FOR OFFERS
        uint256 id;
        address holder;
        uint256 tid;
        address buyer;
        uint256 price;
        uint256 deadline;
    }
    struct AuctionOffer {
        // STRUCT FOR AUCTION OFFERS
        uint256 id;
        address holder;
        uint256 tid;
        address buyer;
        uint256 price;
        uint256 deadline;
    }
    struct DedicatedListing {
        // STRUCT FOR DEDICATED LISTING
        uint256 id;
        address holder;
        uint256 tid;
        address buyer;
        uint256 price;
        uint256 deadline;
    }

    constructor(
        address _FCT,
        address _ICE,
        address _GL,
        uint256 _t
    ) {
        admin = msg.sender;
        fct = FrootyCoolTingz(_FCT);
        ice = ICE(_ICE);
        gl = Greenlist(_GL);
        if (_t == 0) {
            roy = 5;
            fee = 0;
        } else {
            if (_t == 1) {
                roy = 5;
                fee = 1;
            }
            if (_t == 2) {
                roy = 5;
                fee = 1;
            }
            if (_t == 3) {
                roy = 5;
                fee = 1;
            }
            if (_t == 4) {
                roy = 5;
                fee = 1;
            }
            if (_t == 5) {
                roy = 5;
                fee = 1;
            }
            if (_t == 6) {
                roy = 5;
                fee = 1;
            }
            if (_t == 7) {
                roy = 5;
                fee = 1;
            }
            if (_t == 8) {
                roy = 5;
                fee = 1;
            }
        }
    }

    function makeListing(
        address _adr,
        uint256 _tid,
        uint256 _price,
        uint256 _dead
    ) external returns (bool) {
        // MAKE A LISTING
        require(fct.holder(_tid) == _adr, "You are not the owner !");
        myListings[_adr][myListCount[_adr]] = Listing(
            l,
            _adr,
            _tid,
            _price,
            block.timestamp + _dead
        );
        tid2lc[myListCount[_adr]] = l;
        myListCount[_adr]++;
        return true;
    }

    function deleteListing(address _adr, uint256 _tid) external returns (bool) {
        // DELETE A LISTING
        Listing memory thisList = myListings[_adr][tid2lc[_tid]];
        thisList.holder = 0x0000000000000000000000000000000000000000;
        thisList.tid = 0;
        thisList.price = 0;
        thisList.deadline = 0;
        myListings[_adr][tid2lc[_tid]] = thisList;
        return true;
    }
}
