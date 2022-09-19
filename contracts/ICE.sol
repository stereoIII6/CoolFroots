// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ICE is ERC20 {
    constructor() ERC20("Frooty Cool Ting", "FR00T") {}
}
