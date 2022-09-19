// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ICE.sol";

contract FruityFreshFrenz is ERC721 {
    // Public Constants
    uint256 public constant price = 5 * 10**18; // PRICE VAL
    uint256 public constant num = 1; // MAX MINTS / WALLET
    uint256 public constant max = 5000; // MAX TOTAL MINTS
    uint256 public constant sloz = 1234; // MAX FREE MINTS
    // Public Variables
    address public owner; // CONTRACT OWNER
    uint256 public minted; // TOKENS MINTED 1-5000
    string public nam; // TOKEN NAME
    string public sym; // TOKEN SYMBOL
    uint256 public slots; // SLOZ USED 1-1234
    bool public start; // ALLOWS MINT TO START
    // Public Mappings
    mapping(address => bool) public GL; // IS USER GREENLISTED
    mapping(uint256 => bytes) public dias; // TOKEN ID SHOWS DIAS BYTES OBJECT
    mapping(uint256 => uint256) public tid; // TOKEN ID SHOWS DIAS ID
    mapping(uint256 => string) public status;
    mapping(uint256 => address) public ownedBy;
    mapping(address => uint256) private minter;

    modifier onlyO() {
        // ONLY OWNER CAN USE MOD FUNX
        require(msg.sender == owner);
        _;
    }

    constructor() ERC721("FruityFreshFrenz", "FFF") {
        // INIT CONTRACT SET PUB VARS
        minted = 1;
        slots = 1;
        owner = msg.sender;
        nam = "FruityFreshFrenz";
        sym = "FFF";
    }

    function isOwner(address _adr) external view returns (bool) {
        // SHOWS BOOL OF OWNERSTATUS OF ADDRESS
        if (_adr == owner) return true;
        else return false;
    }

    function mint(
        uint256 _amnt,
        uint256[] memory _diasIDs,
        string[] memory _diasOBJs
    ) external payable returns (uint256) {
        // INITIATES THE MINT OF UP TO 7 TOKENS IF ALLOWED
        require(minted < max, "SOLD OUT");
        require(msg.value >= _amnt * price, "INSUFFICIET FUNDS");
        require(start == true, "MINT IS NOT YET LIVE");
        _doMint(_amnt, msg.sender, _diasIDs, _diasOBJs);
        return minted;
    }

    function greenMint(uint256[] memory _diasIDs, string[] memory _diasOBJs)
        external
        returns (uint256)
    {
        // INITIATES THE MINT OF UP TO 7 TOKENS IF ALLOWED
        require(minted < max, "SOLD OUT");
        require(start == true, "MINT IS NOT YET LIVE");
        require(GL[msg.sender] == true, "YOU ARE NOT GREENLISTED");
        require(slots < sloz, "ALL SLOTS HAVE BEEN MINTED");
        _doMint(1, msg.sender, _diasIDs, _diasOBJs);
        GL[msg.sender] = false;
        slots++;
        return minted;
    }

    function setStatus(uint256 _id, string memory _status)
        external
        returns (bool)
    {
        ICE ice = ICE();
        require(ownedBy[_id] == msg.sender, "YOU ARE NOT THE HOLDER");
        require(start == false, "MINT IS STILL IN PROGRESS");
        status[_id] = _status;
        return true;
    }

    function changeMintState() external onlyO returns (bool) {
        return start = !start;
    }

    function mintOne(
        address _adr,
        uint256 _diasID,
        string memory _diasOBJ
    ) internal returns (uint256) {
        // INTERNAL // MINTS ONE TOKEN
        _mint(_adr, minted);
        tid[minted] = _diasID;
        dias[minted] = bytes(_diasOBJ);
        minter[_adr] = minted;
        minted++;
        return minted;
    }

    function _doMint(
        uint256 _amnt,
        address _adr,
        uint256[] memory _diasIDs,
        string[] memory _diasOBJs
    ) internal returns (uint256) {
        require(balanceOf(_adr) + _amnt <= num, "EXCEEDED MAX MINTABLE TOKENS");
        require(minted + _amnt <= max, "NOT ENOUGH SUPPLY");
        // INTERNAL // MINTS UP TO 7 TOKENS IN ONE TX
        mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
        if (_amnt >= 2) {
            mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
            if (_amnt >= 3) {
                mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
                if (_amnt >= 4) {
                    mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
                    if (_amnt >= 5) {
                        mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
                        if (_amnt >= 6) {
                            mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
                            if (_amnt >= 7) {
                                mintOne(_adr, _diasIDs[0], _diasOBJs[0]);
                            }
                        }
                    }
                }
            }
        }
        return minted;
    }

    function holder(uint256 _id) external view returns (address) {
        // SHOWS OWNER OF TOKEN BY TID
        return ownerOf(_id);
    }

    function flush() external returns (uint256) {
        // WITHDRAW ALL ETHER FROM CONTRACT
        payable(owner).transfer(address(this).balance);
        return address(this).balance;
    }

    function flushERC20(address _erc) external returns (uint256) {
        // WITHDRAW ALL COIN FROM CONTRACT
        ERC20 coin = ERC20(_erc);
        coin.transferFrom(address(this), owner, coin.balanceOf(address(this)));
        return coin.balanceOf(address(this));
    }

    function flushERC721(address _erc, uint256 _id) external returns (uint256) {
        // WITHDRAW ALL NFT FROM CONTRACT
        ERC721 coin = ERC721(_erc);
        coin.transferFrom(address(this), owner, _id);
        return _id;
    }
}
