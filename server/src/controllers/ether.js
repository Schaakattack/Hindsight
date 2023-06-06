import { Unmarshal, Chain } from "@unmarshal/sdk";
import date from "date-and-time";
import ethers from "ethers";
import erc20ABI from "../abis/erc20.json" assert { type: "json" };
import multiAbi from "../abis/multicallAbi.json" assert { type: "json" };
import fetch from "node-fetch";

const unmarshal = new Unmarshal({
	apiKey: process.env.UNMARSHAL_API_KEY,
});

const MultiCall = async (abi, calls, chainId = 1) => {
	const provider = new ethers.providers.JsonRpcProvider(
		process.env.JSON_RPC_ETH_MAINNET
	);
	const multi = new ethers.Contract(
		process.env.MULTICALL_ADDRESS,
		multiAbi,
		provider
	);
	const itf = new ethers.utils.Interface(abi);
	const callData = calls.map((call) => ({
		target: call.address.toLowerCase(),
		callData: itf.encodeFunctionData(call.name, call.params),
	}));
	const { returnData } = await multi.callStatic.aggregate(callData);
	const res = returnData.map((call, i) =>
		itf.decodeFunctionResult(calls[i].name, call)
	);
	return res;
};

const EtherController = {
	getTransactionsByWallet: async (
		address,
		limit,
		startTime = "",
		endTime = ""
	) => {
		let result = [];
		let transList = [];
		let start_time = 0;
		let end_time = 0;

		await unmarshal.WalletApi.getTransactionHistory(
			Chain.ethereum,
			address,
			{ pageSize: limit }
		).then(({ data }) => (transList = data.transactions));

		if (transList === undefined || transList.length == 0) {
			return [];
		}

		if (startTime !== "" && startTime !== undefined)
			start_time = date.parse(startTime, "YYYY-MM-DD").getTime();

		if (endTime !== "" && endTime !== undefined)
			end_time = date.parse(endTime, "YYYY-MM-DD").getTime();

		transList.forEach((trans) => {
			if (trans.date >= start_time/1000 && trans.date <= end_time/1000) {
				result.push(trans);
			}
		});

		return result;
	},

	getTokenHolders: async (tokenAddress, limit) => {
		let res_data = [];
		let holders = [];
		let total_pages = 1;
		if (limit > 100) {
			total_pages = Math.ceil(limit / 100);
		}

		await Promise.all(
			[...Array(total_pages).keys()].map(async (item) => {
				let per_page = 100;
				let page_num = item + 1;

				if (page_num == total_pages) {
					per_page = limit - item * 100;
				}

				const url = `https://api.chainbase.online/v1/token/holders?chain_id=1&contract_address=${tokenAddress}&page=${page_num}&limit=${per_page}`;
				const options = {
					method: "GET",
					headers: {
						accept: "application/json",
						"x-api-key": process.env.CHAINBASE_API_KEY,
					},
				};
				const res = await fetch(url, options);
				let json_data = await res.json();

				if (json_data.data !== undefined && json_data.data.length > 0) {
					holders = holders.concat(json_data.data);
				}
			})
		);

		let calls = [];
		holders.map((holder) => {
			calls.push({
				address: tokenAddress,
				name: "balanceOf",
				params: [holder],
			});
		});

		let resBalances = await MultiCall(erc20ABI, calls, 1);

		for (let i = 0; i < resBalances.length; i++) {
			res_data.push({
				holder: holders[i],
				balance: resBalances[i][0].toNumber(),
			});
		}

		return res_data;
	},

	getNftTransactionsByWallet: async (
		address,
		limit,
		startTime = "",
		endTime = ""
	) => {
		let start_time = 0;
		let end_time = 0;
		let result = [];

		let response = await unmarshal.NFT.getTransactions(
			Chain.ethereum,
			address,
			{ pageSize: limit }
		);

		if (
			response.data.transactions === undefined ||
			response.data.transactions.length == 0
		) {
			return [];
		}

		if (startTime !== "" && startTime !== undefined)
			start_time = date.parse(startTime, "YYYY-MM-DD").getTime();

		if (endTime !== "" && endTime !== undefined)
			end_time = date.parse(endTime, "YYYY-MM-DD").getTime();

		response.data.transactions.forEach((trans) => {
			if (
				trans.timestamp >= start_time / 1000 &&
				trans.timestamp <= end_time / 1000
			)
				result.push(trans);
		});

		return result;
	},

	getNftOwners: async (tokenAddress, limit) => {
		let owners = [];
		let total_pages = 1;
		if (limit > 100) {
			total_pages = Math.ceil(limit / 100);
		}

		await Promise.all(
			[...Array(total_pages).keys()].map(async (item) => {
				let per_page = 100;
				let page_num = item + 1;

				if (page_num == total_pages) {
					per_page = limit - item * 100;
				}

				const url = `https://api.chainbase.online/v1/nft/owners?chain_id=1&contract_address=${tokenAddress}&page=${page_num}&limit=${per_page}`;
				const options = {
					method: "GET",
					headers: {
						accept: "application/json",
						"x-api-key": process.env.CHAINBASE_API_KEY,
					},
				};
				const res = await fetch(url, options);
				let json_data = await res.json();

				if (json_data.data !== undefined && json_data.data.length > 0) {
					owners = owners.concat(json_data.data);
				}
			})
		);

		return owners;
	},
};

export default EtherController;
