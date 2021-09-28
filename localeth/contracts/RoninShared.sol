// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


/**
 * Stores constant shared between the token and presale contracts
 * Prevents accidental mismatches between contracts
 * bsc main PCS v2 router 0x10ED43C718714eb63d5aA57B78B54704E256024E
 * Uniswap v2 router 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
 * testnet PCS router 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3
 */
contract RoninShared {
    address constant public ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E; // CHANGEME - This needs changing to the PCS Router address: 0x10ED43C718714eb63d5aA57B78B54704E256024E
}