// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ICE is ERC20 {
    uint256 public constant digits = 10**18; // DECIMAL DIGITS
    uint256 public constant price = (1 * digits) / 10; // TOKEN PRICE

    address admin; // CONTRACT OWNER

    modifier onlyA() {
        // ONLY ADMIN MODIFIER
        require(msg.sender == admin);
        _;
    }

    constructor() ERC20("Frooty Cool Ting", "FR00T") {
        admin = msg.sender;
    }

    function _domint(uint256 _amnt, address _adr) internal returns (uint256) {
        _mint(_adr, _amnt);
        return _amnt;
    }

    function _doburn(uint256 _amnt, address _adr) internal returns (uint256) {
        _burn(_adr, _amnt);
        return _amnt;
    }

    function swap(uint256 _amnt, address _adr)
        external
        payable
        returns (uint256)
    {
        require(msg.value >= price * _amnt, "INSUFFICIENT FUNDS PROVIDED");
        return _domint(_amnt, _adr);
    }

    function earn(address _adr) external returns (bool) {
        // RECIEVE ONE ICE AS AN AIRDROP
        _domint(1 * 10**18, _adr);
        return true;
    }
}
