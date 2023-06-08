import { SolanaController, EthereumController } from "../controllers/index.js";
import ETH_TOKENS from "../constants/eth_tokens.js";
const Scan = async (fastify, options) => {
	fastify.get("/api/test/any", async (request, reply) => {
		const { chain, tokenAddress } = request.query;
		return await EthereumController.getToken(tokenAddress);
	});

	fastify.get("/api/inspect/home", async (request, reply) => {
		const { chain, tokenAddress } = request.query;
		let data = null;
		switch (chain) {
			case "ethereum":
				data = {
					maxSupply: await EthereumController.getTotalSupply(
						tokenAddress
					),
					numberOfHolders:
						await EthereumController.getNumberOfHolders(
							tokenAddress
						),
				};
				break;
			default:
				// Handle invalid 'chain' values here
				reply.status(400).send({ error: "Invalid chain value" });
		}

		return data;
	});

	fastify.get("/api/tokens", async (request, reply) => {
		const { chain, tokenAddress, limit, offset } = request.query;
		let data = null;
		switch (chain) {
			case "ethereum":
				data = await Promise.all(
					ETH_TOKENS.map(async (token) => {
						const holders =
							await EthereumController.getNumberOfHolders(
								token.address
							);
						const tokenInfo = await EthereumController.getToken(
							token.address
						);
						if (tokenInfo){
							let maxSupply = 0;
							try {
								const divisor = parseInt(tokenInfo[0]['divisor']);
								const totalSupply = tokenInfo[0]['totalSupply'];
								
								if (totalSupply != undefined) {
									console.log(divisor, totalSupply, totalSupply.length - divisor)
									maxSupply = [...totalSupply]; // Make a copy of totalSupply array
									maxSupply.splice(totalSupply.length - divisor, 0, '.');
									maxSupply = maxSupply.join("");
								}
								return { ...token, holders, maxSupply };	
							} catch (error) {
							}
						} else {
							return { ...token, holders, maxSupply: 0 };
						}
					})
				);
				break;
			case "solana":
				data = ETH_TOKENS;
				break;
			default:
				reply.status(400).send({ error: "Invalid chain value" });
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
				break;
			case "solana":
				data = await SolanaController.getTokenHolders(
					tokenAddress,
					limit,
					offset
				);
				break;
			default:
				reply.status(400).send({ error: "Invalid chain value" });
				break;
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
