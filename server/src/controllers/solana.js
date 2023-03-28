import solanaWeb3 from '@solana/web3.js'
import date from 'date-and-time'
const solanaConnection = new solanaWeb3.Connection(process.env.SOLANA_RPC_HOST)

const SolanaController = {
    getTransactionsByWallet: async (address, limit, startTime = '', endTime = '')=>{
        const pubKey = new solanaWeb3.PublicKey(address)
        const transactionList = await solanaConnection.getSignaturesForAddress(pubKey, {limit})
        // const transactionList = await solanaConnection.getSignaturesForAddress(pubKey, {
        //     limit,
        //     before: '3xP7iC3yf9msMquSCfJNgCYkZ4DUHZoHxwWoGofmVa2WQHAqxF89sa8Hq7h3WcdguUn8YAj67TQxojJSPMBj7nT1'
        // })
        const signatureList = transactionList.map(transaction=>transaction.signature);
        const transactionDetails = await solanaConnection.getParsedTransactions(signatureList, {maxSupportedTransactionVersion:0});
        const result = []

        let startBlocktime = 0, endBlocktime = 0
        if (startTime !== '' && startTime !== undefined)
            startBlocktime = date.parse(startTime, 'YYYY-MM-DD').getTime()
        if (endTime !== '' && endTime !== undefined)
            endBlocktime = date.parse(endTime, 'YYYY-MM-DD').getTime()

        transactionList.forEach((transaction, i)=> {
            if (startBlocktime !== 0)
                if (transaction.blockTime * 1000 < startBlocktime) return
            if (endBlocktime !== 0)
                if (transaction.blockTime * 1000 > endBlocktime) return
            const programs = []
            const instructions = transactionDetails[i].transaction.message.instructions
            instructions.map(instruction=>{ 
                programs.push(instruction.programId.toString())
            })
            let txDate = new Date(transaction.blockTime * 1000)
            txDate = date.format(txDate, 'YYYY-MM-DD')
            result.push({
                time: txDate,
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