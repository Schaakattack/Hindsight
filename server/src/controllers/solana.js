import solanaWeb3, {PublicKey} from "@solana/web3.js";
import date from "date-and-time";
import querystring from "querystring";
import axios from "axios";
const SolanaController = {
	getTransactionsByWallet: async (
		address,
		limit,
		startTime = "",
		endTime = ""
	) => {
		const solanaConnection = new solanaWeb3.Connection(process.env.SOLANA_RPC_HOST, 'confirmed');
		const pubKey = new solanaWeb3.PublicKey(address);
		const transactionList = await solanaConnection.getSignaturesForAddress(
			pubKey,
			{ limit }
		);

		const signatureList = transactionList.map(
			(transaction) => transaction.signature
		);
		const transactionDetails = await solanaConnection.getParsedTransactions(
			signatureList,
			{ maxSupportedTransactionVersion: 0 }
		);
		const result = [];

		let startBlocktime = 0,
			endBlocktime = 0;
		if (startTime !== "" && startTime !== undefined)
			startBlocktime = date.parse(startTime, "YYYY-MM-DD").getTime();
		if (endTime !== "" && endTime !== undefined)
			endBlocktime = date.parse(endTime, "YYYY-MM-DD").getTime();

		transactionList.forEach((transaction, i) => {
			if (startBlocktime !== 0)
				if (transaction.blockTime * 1000 < startBlocktime) return;
			if (endBlocktime !== 0)
				if (transaction.blockTime * 1000 > endBlocktime) return;
			const programs = [];
			const instructions =
				transactionDetails[i].transaction.message.instructions;
			instructions.map((instruction) => {
				programs.push(instruction.programId.toString());
			});
			let txDate = new Date(transaction.blockTime * 1000);
			txDate = date.format(txDate, "YYYY-MM-DD");
			
			if (instructions.length > 0){
				const from = instructions[0].parsed.info.source;
				const to = instructions[0].parsed.info.destination;
				const lamports = instructions[0].parsed.info.lamports;
				result.push({
					time: txDate,
					amount: lamports / 10 ** 9,
					from,
					to
				});
			}
		});
		return result;
	},

	getTokenHolders: async (tokenAddress, limit, offset) => {
		let axiosOptions = {
			headers: {
				accept: "application/json",
				token: process.env.SOLSCAN_API_KEY,
			},
			url: `${process.env.SOLANA_PUBLIC_ENDPOINT}/token/holders?${querystring.stringify({
				tokenAddress,
				limit,
				offset,
			})}`,
		};
		try {
			const { data } = await axios.get(axiosOptions.url, {
				headers: axiosOptions.headers,
			});
			return data;
		} catch (error) {
			return { data: [], err: error };
		}
	},
};

export default SolanaController;
