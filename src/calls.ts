import * as multicallAbi from './abi/multicall.json';

import Contract from './contract';

export function getBnbBalance(address: string, multicallAddress: string) {
	const multicall = new Contract(multicallAddress, multicallAbi);
	return multicall.getBnbBalance(address);
}
