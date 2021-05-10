"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
var multicallAbi = require("./abi/multicall.json");
var contract_1 = require("./contract");
function getBalance(address, multicallAddress) {
    var multicall = new contract_1.default(multicallAddress, multicallAbi);
    return multicall.getBalance(address);
}
exports.getBalance = getBalance;
