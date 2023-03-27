const Constants = {
    ETH_ENDPOINT: 'https://api.etherscan.io',
    SOL_ENDPOINT: 'https://public-api.solscan.io',
    SOLSCAN_OPTIONS: {
        headers: { 'accept': 'application/json', 'token': process.env.SOLSCAN_API_KEY },
    }
}

export default Constants