// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./FrootyCoolTingz.sol";

contract Market {
    address public admin; // CONTRACT OWNER

    ERC721[] public nft; // FROOT ADDRESS
    uint256 n;
    mapping(address => uint256) idByNFTAdr;
    mapping(uint256 => NFT) NftById;

    ERC20[] public coin;
    uint256 e;
    mapping(address => uint256) idByCoinAdr;
    mapping(uint256 => Coin) CoinById;

    uint256 public roy;
    uint256 public fee;

    struct NFT {
        // STRUCT FOR SALES LISTINGS
        uint256 id;
        address contractAdr;
        bytes info;
        uint256 roy;
        uint256 total;
        address admin;
    }
    struct Coin {
        // STRUCT FOR SALES LISTINGS
        uint256 id;
        address contractAdr;
        bytes info;
        uint256 roy;
        uint256 max;
        address admin;
    }

    constructor(uint256 _t) {
        admin = msg.sender;

        if (_t == 0) {
            roy = 5;
            fee = 1;
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

    function setNFT(
        address _nft,
        string memory _name,
        uint256 _roy,
        uint256 _total
    ) external {
        nft[n] = ERC721(_nft);
        NftById[n] = NFT(n, _nft, bytes(_name), _roy, _total, msg.sender);
        n++;
    }

    function setCoin(
        address _coin,
        string memory _name,
        uint256 _roy,
        uint256 _max
    ) external {
        coin[e] = ERC20(_coin);
        CoinById[e] = Coin(e, _coin, bytes(_name), _roy, _max, msg.sender);
        e++;
    }
}
