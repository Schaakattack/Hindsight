import solanaWeb3 from '@solana/web3.js'

const solanaConnection = new solanaWeb3.Connection(process.env.SOLANA_RPC_HOST)

const SolanaController = {
    getTransactionsByWallet: async (address, numTx)=>{
        const pubKey = new solanaWeb3.PublicKey(address)
        const transactionList = await solanaConnection.getSignaturesForAddress(pubKey, {limit:numTx})
        const signatureList = transactionList.map(transaction=>transaction.signature);
        const transactionDetails = await solanaConnection.getParsedTransactions(signatureList, {maxSupportedTransactionVersion:0});
        const result = []

        transactionList.forEach((transaction, i)=> {
            const programs = []
            const instructions = transactionDetails[i].transaction.message.instructions
            instructions.map(instruction=>{ programs.push(instruction.programId.toString())})
            result.push({
                time: transaction.blockTime * 1000,
                instructions,
                signature: transaction.signature,
                status: transaction.status,
                programs
            })
        })

        return result
    }
}

export default SolanaController