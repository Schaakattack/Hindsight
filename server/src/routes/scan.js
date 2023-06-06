import {
	SolanaController,
	EthereumController,
} from "../controllers/index.js";

const Scan = async (fastify, options) => {
	
	fastify.get("/api/inspect/home", async (request, reply) => {
		const { chain, tokenAddress } = request.query;
		let data = null;
		switch (chain) {
			case "ethereum":
				data = {
					maxSupply: await EthereumController.getTotalSupply(tokenAddress),
					numberOfHolders: await EthereumController.getNumberOfHolders(tokenAddress)
				};
				break;
		}

		return data;
	});

	fastify.get("/api/token/holders", async (request, reply) => {
		const { chain, tokenAddress, limit, offset } = request.query;
		let data = null;
		switch (chain) {
			case "ethereum":
				data = await EthereumController.getTokenHolders(
					tokenAddress,
					limit, // offset
					offset // page
				);
			case "solana":
				data = await SolanaController.getTokenHolders(
					tokenAddress,
					limit,
					offset
				);
			default:
		}

		return data;
	});

	// fastify.get("/transactions/wallet", async (request, reply) => {
	// 	const { chain, walletAddress, limit, startTime, endTime } =
	// 		request.query;
	// 	let data = undefined;
	// 	switch (chain) {
	// 		case "solana":
	// 			data = await SolanaController.getTransactionsByWallet(
	// 				walletAddress,
	// 				parseInt(limit),
	// 				startTime,
	// 				endTime
	// 			);
	// 			break;
	// 		case "ethereum":
	// 			data = await EtherController.getTransactionsByWallet(
	// 				walletAddress,
	// 				parseInt(limit),
	// 				startTime,
	// 				endTime
	// 			);
	// 			break;
	// 	}
	// 	return { data };
	// });

	// fastify.get("/transactions/nft/wallet", async (request, reply) => {
	// 	const { chain, walletAddress, limit, startTime, endTime } = request.query;
	// 	let data = undefined;
	// 	switch (chain) {
	// 		case "solana":
	// 			break;
	// 		case "ethereum":
	// 			data = await EtherController.getNftTransactionsByWallet(
	// 				walletAddress,
	// 				parseInt(limit),
	// 				startTime,
	// 				endTime
	// 			);
	// 			break;
	// 	}
	// 	return { data };
	// });

	// fastify.get("/nft/owners", async (request, reply) => {
	// 	const { chain, tokenAddress, limit, offset } = request.query;
	// 	switch (chain) {
	// 		case "ethereum":
	// 			let data = await EtherController.getNftOwners(
	// 				tokenAddress,
	// 				limit,
	// 				offset
	// 			);
	// 			return { data };
	// 			break;
	// 		case "solana":
	// 			break;
	// 		default:
	// 	}
	// 	return;
	// });
};

export default Scan;
