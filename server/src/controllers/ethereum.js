import date from "date-and-time";
import axios from "axios";

const EthereumController = {
    getToken: async () => {
        let result = [];
		try {
			const apiUrl = `${process.env.ETHSCAN_PUBLIC_ENDPOINT}/api?module=token&action=tokeninfo&contractaddress=${tokenAddress}&apikey=${process.env.ETHSCAN_API_KEY}`;
			await axios
				.get(apiUrl)
				.then((response) => {
                    console.log(response)
					if (response.data.status === "1")
						result = response.data.result;
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (error) {

        }

		return result;
    },
	getTokens: async () => {},
	getTokenHolders: async (tokenAddress, limit, page) => {
		let tokenHolders = [];
		try {
			const apiUrl = `${process.env.ETHSCAN_PUBLIC_ENDPOINT}/api?module=token&action=tokenholderlist&contractaddress=${tokenAddress}&page=${page}&offset=${limit}&apikey=${process.env.ETHSCAN_API_KEY}`;
			await axios
				.get(apiUrl)
				.then((response) => {
					if (response.data.status === "1")
						tokenHolders = response.data.result;
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (error) {
			console.error(error);
		}

		return tokenHolders;
	},
	getTotalSupply: async (tokenAddress) => {
		let result = 0;
		try {
			const apiUrl = `${process.env.ETHSCAN_PUBLIC_ENDPOINT}/api?module=stats&action=tokensupply&contractaddress=${tokenAddress}&apikey=${process.env.ETHSCAN_API_KEY}`;
			await axios
				.get(apiUrl)
				.then((response) => {
                    console.log(response)
					if (response.data.status === "1")
						result = response.data.result;
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (error) {}

		return result;
	},
	getNumberOfHolders: async (tokenAddress) => {
		let result = 0;
		try {
			const apiUrl = `${process.env.ETHSCAN_PUBLIC_ENDPOINT}/api?module=account&action=tokentx&contractaddress=${tokenAddress}&page=1&offset=10000&apikey=${process.env.ETHSCAN_API_KEY}`;
			await axios
				.get(apiUrl)
				.then((response) => {
					const holders = response.data.result.map((tx) => tx.to);
					const uniqueHolders = new Set(holders);
                    result = uniqueHolders.size;
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (error) {}

		return result;
	},
};

export default EthereumController;
