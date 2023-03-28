import axios from 'axios'
import { Solscan, Etherscan } from '../url/index.js'
import { SolanaController, EtherController } from '../controllers/index.js'
import querystring from 'querystring'
const Scan = async(fastify, options)=>{

  fastify.get('/transactions/wallet', async (request, reply) => {
    const { chain, walletAddress, limit, startTime, endTime } = request.query
    let data = undefined
    switch(chain)
    {
      case 'solana':
        data = await SolanaController.getTransactionsByWallet(walletAddress, parseInt(limit), startTime, endTime)
        break;
      case 'ethereum':
        data = await EtherController.getTransactionsByWallet(walletAddress, parseInt(limit), startTime, endTime)
        break;
    }
    return {data}
  })

  fastify.get('/token/holders', async (request, reply) => {
    const { chain, tokenAddress, limit, offset } = request.query
    let axiosOptions = {}
    switch(chain) {
      case 'ethereum':
        break;
      case 'solana':
        axiosOptions = {
          headers: { 'accept': 'application/json', 'token': process.env.SOLSCAN_API_KEY },
          url : `${Solscan.tokenHolders}?${querystring.stringify({tokenAddress, limit, offset})}`
        }
        break;
      default:
    }

    try {
      const { data } = await axios.get(axiosOptions.url, {
        headers: axiosOptions.headers
      })
      return data
    } catch (error) {
      return {data: [], err: error}
    }
  })
}

export default Scan