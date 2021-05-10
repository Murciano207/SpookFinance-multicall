import { BaseProvider } from '@ethersproject/providers';

import { Call, all as callAll } from './call';
import { getBalance } from './calls';

export default class Provider {
	provider?: BaseProvider;
	multicallAddress: string;

	constructor() {
		this.multicallAddress = getAddress(1);
	}

	async init(provider: BaseProvider) {
		this.provider = provider;
		const network = await provider.getNetwork();
		this.multicallAddress = getAddress(network.chainId);
	}

	getBalance(address: string) {
		if (!this.provider) {
			console.error('Provider should be initialized before use.');
		}
		return getBalance(address, this.multicallAddress);
	}

	async all(calls: Call[], block?: number) {
		if (!this.provider) {
			console.error('Provider should be initialized before use.');
		}
		const provider = this.provider as BaseProvider;
		return await callAll(provider, this.multicallAddress, calls, block);
	}
}

function getAddress(chainId: number): string {
	const addressMap: Record<number, string> = {
		56:  '0x7B23A56572cBC04035da7852a5427066EC2C2040',
		137: '0x7B23A56572cBC04035da7852a5427066EC2C2040'
	};
	const address = addressMap[chainId];
	return address;
}
