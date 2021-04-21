# yogi-bsccall

Utility library to make calls to Binance Smart Chain blockchain.

Uses MakerDAO's [Multicall contract](https://github.com/makerdao/multicall) to make multiple requests in a single HTTP query. Encodes and decodes data automatically.

Inspired and powered by [ethers.js](https://github.com/ethers-io/ethers.js/).

```
npm install yogi-fi/yogi-bsccall
yarn add yogi-fi/yogi-bsccall
```

## API

* `Contract(address, abi)`: create contract instance; calling `contract.call_func_name` will yield a `call` object.
* `all(calls)`: execute all calls in a single request.
* `calls`: list of helper call methods
  * `getEthBalance(address)`: returns account ether balance
