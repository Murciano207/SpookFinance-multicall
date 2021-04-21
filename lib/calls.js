"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBnbBalance = void 0;
var multicallAbi = require("./abi/multicall.json");
var contract_1 = require("./contract");
function getBnbBalance(address, multicallAddress) {
    var multicall = new contract_1.default(multicallAddress, multicallAbi);
    return multicall.getBnbBalance(address);
}
exports.getBnbBalance = getBnbBalance;
