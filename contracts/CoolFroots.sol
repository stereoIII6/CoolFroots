// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
error Done(address user);


library wallets {
    address constant artist = 0x79E205680908c03047e3f3A4E63FD192Ff4Cf409; // 30%
    address constant comm = 0xB4AB6aCfc8DE6BC53Cc696B902e59274d288D3E8; // 30%
    address constant opsec = 0xB4AB6aCfc8DE6BC53Cc696B902e59274d288D3E8; // 10%
    address constant promo = 0xB4AB6aCfc8DE6BC53Cc696B902e59274d288D3E8; // 10%
    address constant vc = 0x79E205680908c03047e3f3A4E63FD192Ff4Cf409; // 10%
    address constant web3dev = 0x79E205680908c03047e3f3A4E63FD192Ff4Cf409; // 5%
    address constant audit = 0x79E205680908c03047e3f3A4E63FD192Ff4Cf409; // 5%
    address constant arbcon = 0x912CE59144191C1204E64559FE8253a0e49E6548; // Testnet
    address constant arbcont = 0x3F42Dd736C736f931dC23D4358DD92c65687019A; // Testnet
}

contract Greenlist {
    using wallets for *;
    struct State{
        uint id;
        string message;
        string url;
        uint likes;
        uint shares;
        uint stamp;
    }
    address public admin;
    uint256 constant digits = 10**18;
    uint256 public l;
    uint256 public max;
    string public message;
    uint public likes;
    uint public shares;
    mapping(address => uint) public liked;
    mapping(uint => State) public states;
    uint m;
    string public url = "https://coolfroots.xyz";
    uint256 public stamp;
    uint256 public msgprice;
    uint256 public arbprice;
    ERC20 public arb;
    COOLFROOT public FCT;
    mapping(address => bool) public isListed;
    address[1235] public users;
    modifier notListed(address _adr) {
        require(isListed[_adr] == false, "already listed");
        _;
    }
    modifier onlyA() {
        require(msg.sender == admin);
        _;
    }

    constructor(uint256 _t) {
        admin = msg.sender;

        if (_t == 0) {
            l = 0; // Testnet
            max = 2; // Testnet
            msgprice = (30 * digits) / 10000;
            arbprice = (40 * digits) / 10;
            arb = ERC20(wallets.arbcont);
        } else {
            isListed[msg.sender] = true; // OFF ON TESTNET
            users[0] = msg.sender;
            l = 0; // Mainnet
            max = 1234; // Mainnet
            msgprice = (30 * digits) / 10000;
            arbprice = (40 * digits) / 10;
            arb = ERC20(wallets.arbcon);
        }

        message = "GET #FROOTS NOW !";
        likes=1;
    }

    function setFCT(address _fct) external onlyA returns (bool) {
        FCT = COOLFROOT(_fct);
        return true;
    }

    function autoStart() internal returns (bool) {
        return FCT.changeMS();
    }

    function getListed() external notListed(msg.sender) returns (bool) {
        require(l < max, "TU LAYT");
        return _makeListing(msg.sender);
    }

    function _makeListing(address _adr)
        internal
        notListed(_adr)
        returns (bool)
    {
        isListed[_adr] = true;
        users[l] = (_adr);
        l++;
        if (l == max) autoStart();
        return isListed[_adr];
    }

    function makeListing(address _adr)
        external
        notListed(_adr)
        onlyA
        returns (bool)
    {
        return _makeListing(_adr);
    }

    function giveLike() external returns(uint){
        if(liked[msg.sender] > 0) revert Done(msg.sender);
        likes++;
        return liked[msg.sender] = likes;
    }
    function showUsers() external view returns (address[1235] memory) {
        return users;
    }

    function setMsg(string memory _msg, string memory _url)
        external
        payable
        returns (bool)
    {
        require(msg.value >= msgprice, "LO FUNZ");
        require(block.timestamp >= stamp + 60 * 60, "CHILL");
        message = _msg;
        url = _url;
        stamp = block.timestamp;
        return true;
    }

    function saveState() external {
        states[m] = State(m,message,url,0,0,block.timestamp);
        m++;
    }
    function getShareData() external {

    }
    function setArbMsg(string memory _msg, string memory _url)
        external
        returns (bool)
    {
        require(arb.balanceOf(msg.sender) >= arbprice, "LO ARB");
        require(block.timestamp >= stamp + 60 * 60, "CHILL");
        uint256 one = ((arbprice - (arbprice % 100)) / 100);
        arb.transferFrom(msg.sender, wallets.artist, one * 30);
        arb.transferFrom(msg.sender, wallets.comm, one * 30);
        arb.transferFrom(msg.sender, wallets.opsec, one * 10);
        arb.transferFrom(msg.sender, wallets.promo, one * 10);
        arb.transferFrom(msg.sender, wallets.vc, one * 10);
        arb.transferFrom(msg.sender, wallets.web3dev, one * 5);
        arb.transferFrom(msg.sender, wallets.audit, one * 5);
        message = _msg;
        url = _url;
        stamp = block.timestamp;
        return true;
    }

    function setMsgAdmin(string memory _msg, string memory _url)
        external
        onlyA
        returns (bool)
    {
        message = _msg;
        url = _url;
        stamp = block.timestamp;
        return true;
    }

    function showMsg() external view returns (string memory) {
        return message;
    }

    function withdraw() external onlyA returns (uint256) {
        uint256 one = ((address(this).balance - (address(this).balance % 100)) /
            100);
        payable(wallets.artist).transfer(one * 30);
        payable(wallets.comm).transfer(one * 30);
        payable(wallets.opsec).transfer(one * 10);
        payable(wallets.promo).transfer(one * 10);
        payable(wallets.vc).transfer(one * 10);
        payable(wallets.web3dev).transfer(one * 5);
        payable(wallets.audit).transfer(one * 5);
        return address(this).balance;
    }
}

contract ICE is ERC20 {
    using wallets for *;
    uint256 public constant digits = 10**18;
    uint256 public price; // Testnet :: 10000 // Mainnet :: 10
    address public froots;
    address admin;
    modifier onlyA() {
        require(msg.sender == admin);
        _;
    }

    constructor(uint256 _t) ERC20("Incredibly Cool Essence", "ICE") {
        admin = msg.sender;
        if (_t == 0) {
            price = (8 * digits) / 10000000;
        } else {
            if (_t == 1) {
                price = (1 * digits) / 1000;
            }
            if (_t == 2) {
                price = (1 * digits) / 1000;
            }
        }
    }

    function setPrices(uint256 _ice) external onlyA {
        price = (_ice * digits) / 10000;
    }

    function _domint(uint256 _amnt, address _adr) internal returns (uint256) {
        _mint(_adr, _amnt);
        return _amnt;
    }

    function setFroots(address _adr) external onlyA returns (address) {
        froots = _adr;
        return froots;
    }

    function burn(uint256 _amnt, address _adr) external returns (uint256) {
        _burn(_adr, _amnt);
        return _amnt;
    }

    function swap(uint256 _amnt, address _adr)
        external
        payable
        returns (uint256)
    {
        require(_amnt >= 10, "MO ICE");
        require(msg.value >= price * _amnt, "LO FUNZ");
        return _domint(_amnt * digits, _adr);
    }

    function move() external {
        _domint(1000000 * digits, address(froots));
    }

    function withdraw() external onlyA returns (uint256) {
        uint256 one = ((address(this).balance - (address(this).balance % 100)) /
            100);
        payable(wallets.artist).transfer(one * 30);
        payable(wallets.comm).transfer(one * 30);
        payable(wallets.opsec).transfer(one * 10);
        payable(wallets.promo).transfer(one * 10);
        payable(wallets.vc).transfer(one * 10);
        payable(wallets.web3dev).transfer(one * 5);
        payable(wallets.audit).transfer(one * 5);
        return address(this).balance;
    }
}

contract COOLFROOT is ERC721 {
    using wallets for *;
    // Public Constants
    uint256 public price; // PRICE VAL Testnet
    uint256 public statusprice;
    uint256 public digits = 1 * 10**18; // PRICE VAL Mainnet
    uint256 public constant num = 1; // MAX MINTS / WALLET

    uint256 public max; // MAX TOTAL MINTS
    uint256 public sloz; // MAX FREE MINTS
    // */
    // Public Variables
    address public owner; // CONTRACT OWNER
    address iceAdr;
    uint256 public minted; // TOKENS MINTED 1-5000
    uint256 public slots; // SLOZ USED 1-1234
    bool public start; // ALLOWS MINT TO START
    // Public Mappings
    mapping(uint256 => bytes) public dias; // TOKEN ID SHOWS DIAS BYTES OBJECT
    mapping(uint256 => uint256) public tid; // TOKEN ID SHOWS DIAS ID
    mapping(uint256 => string) public status; // TOKEN ID SHOWS USER STATUS
    mapping(uint256 => uint256) public icebox; // TOKEN ID SHOWS FROOT ICE BALANCE
    mapping(uint256 => uint256) public meltbox; // melted ICE of token id
    mapping(uint256 => address) public ownedBy;
    mapping(address => uint256) public minter; // Token ID by Address
    ICE public ice;
    Greenlist public GLC;

    modifier onlyO() {
        // ONLY OWNER CAN USE MOD FUNX
        require(msg.sender == owner);
        _;
    }

    constructor(
        address _ICE,
        address _Greenlist,
        uint256 _t
    ) ERC721("Cool Froots", "FR00TS") {
        // INIT CONTRACT SET PUB VARS
        minted = 1;
        slots = 0;
        owner = msg.sender;
        ice = ICE(_ICE);
        GLC = Greenlist(_Greenlist);
        if (_t == 0) {
            max = 10;
            sloz = GLC.max();
            price = (5 * digits) / 100000; // 0.00005 MATIC
            statusprice = digits / 1000000; // 0.000001 MATIC

        } else {
            max = 5555;
            sloz = 1234;
            price = 88 * digits; // MATIC
            statusprice = 1 * digits; // MATIC

        }
    }

    function _earn(address _adr, uint256 _o) internal returns (uint256) {
        ice.transfer(_adr, _o * digits);
        return _o;
    }

    function mint(
        uint256 _amnt,
        uint256 _diasID,
        string memory _diasOBJ,string memory _diasName
    ) external payable returns (uint256) {
        // INITIATES THE MINT OF UP TO 7 TOKENS IF ALLOWED
        require(minted <= max + 1, "SOLD");
        require(msg.value >= _amnt * price, "CASH LO");
        require(start == true, "SOON");
        ownedBy[minted] = msg.sender;
        mintOne(msg.sender, _diasID, _diasOBJ,_diasName);
        uint256 o = 1 + (block.timestamp % 9);
        return _earn(msg.sender, o);
    }

    function setPrices(uint256 _price, uint256 _sts) external onlyO {
        price = (_price * digits) / 100; // 0.05ETH
        statusprice = (_sts * digits) / 1000; // 0.001ETH
    }

    function greenMint(uint256 _diasID, string memory _diasOBJ,string memory _diasName)
        external
        returns (uint256)
    {
        // INITIATES THE MINT OF UP TO 7 TOKENS IF ALLOWED
        require(minted <= max, "SOLD");
        require(start == true, "SOON");
        bool boo = GLC.isListed(msg.sender);
        require(boo == true, "NOT LISZD");
        require(slots <= sloz, "ALL GON");
        ownedBy[minted] = msg.sender;
        mintOne(msg.sender, _diasID, _diasOBJ,_diasName);
        uint256 o = 1 + (block.timestamp % 9);
        slots++;
        return _earn(msg.sender, o);
    }

    function setStatus(uint256 _id, string memory _status)
        external
        payable
        returns (bool)
    {
        require(ownedBy[_id] == msg.sender, "NOT UR'S");
        // require(start == false, "MINT IS STILL IN PROGRESS");
        require(msg.value >= statusprice);
        status[_id] = _status;
        return true;
    }

    function iceSetStatus(uint256 _id, string memory _status)
        external
        returns (string memory)
    {
        require(ownedBy[_id] == msg.sender, "NOT UR'S");
        // require(start == false, "MINT IS STILL IN PROGRESS");
        require(ice.balanceOf(msg.sender) >= digits, "LO ICE");
        ice.burn(digits, msg.sender);
        if (block.timestamp % 9 < 3) {
            icebox[_id] += 1;
            if (meltbox[_id] == 0)
                meltbox[_id] = block.timestamp + 1 * 60 * 60 * 24;
            else meltbox[_id] += 1 * 60 * 60 * 24;
        }
        status[_id] = _status;
        return "FRESH";
    }

    function addIce(uint256 _amount, uint256 _id)
        external
        returns (string memory)
    {
        require(ice.balanceOf(msg.sender) >= _amount * digits);
        ice.burn(_amount * digits, msg.sender);
        icebox[_id] += _amount;
        meltbox[_id] += _amount * 60 * 60 * 24;
        return "COOL";
    }

    function meltState() external view returns (int256 state) {
        int256 meltleft = int256(meltbox[minter[msg.sender]]) -
            int256(block.timestamp);
        return state = ((meltleft - (meltleft % 3600)) / 3600);
    }

    function changeMS() external returns (bool) {
        require(msg.sender == address(GLC), "NOT CONTRACT !");
        return cMS();
    }

    function cMS() internal returns (bool) {
        return start = !start;
    }

    function mintOne(
        address _adr,
        uint256 _diasID,
        string memory _diasOBJ,
        string memory _name
    ) internal returns (uint256) {
        // INTERNAL // MINTS ONE TOKEN
        require(balanceOf(_adr) + 1 <= num, "XCDID WOLLIT MAX");
        require(minted <= max, "GON");
        _mint(_adr, minted);
        status[minted] = _name;
        tid[minted] = _diasID;
        dias[minted] = bytes(_diasOBJ);
        meltbox[minted] = block.timestamp + (7 * 60 * 60 * 24);
        minter[_adr] = minted;
        minted++;
        if (minted >= max + 1) cMS();
        return minted;
    }

    function showDIAS(uint _tID) external view returns(string memory) {
        return string(dias[_tID]);
    }

    function _transfer(address from, address to, uint256 tokenId) internal virtual override {
        require(ERC721.ownerOf(tokenId) == from, "NOT FROOT OWNA");
        require(ERC721.balanceOf(to) == 0, "ALREDY OWNA");
        require(to != address(0), "NOT TO ZERO");
    }

    function withdraw() external onlyO returns (uint256) {
        uint256 one = ((address(this).balance - (address(this).balance % 100)) /
            100);
        payable(wallets.artist).transfer(one * 45);
        payable(wallets.comm).transfer(one * 30);
        payable(wallets.opsec).transfer(one * 10);
        payable(wallets.promo).transfer(one * 10);
        payable(wallets.audit).transfer(one * 5);
        return address(this).balance;
    }
}


