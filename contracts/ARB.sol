// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ARB is ERC20 {
    constructor() ERC20("Arbitest", "ARB") {
        _mint(msg.sender, 100 * 10**18);
    }

    function drop() external {
        _mint(msg.sender, 100 * 10**18);
    }

    receive() external payable {
        _mint(msg.sender, 100 * 10**18);
    }
}
