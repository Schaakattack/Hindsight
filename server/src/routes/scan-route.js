import axios from 'axios'
import { Solana } from '../scanner/index.js'
import Constants from '../constants.js'
import fetch from 'node-fetch'
import { SolanaController } from '../controllers/index.js'

const routes = async(fastify, options)=>{

  // Solana
  fastify.get('/solana/transaction/wallet', async (request, reply) => {
    const { walletAddress, limit = 100 } = request.query
    const data = await SolanaController.getTransactionsByWallet(walletAddress, limit)
    return {data}
  })

  // Common
  fastify.get('/token/holders', async (request, reply) => {
    const { chain, tokenAddress } = request.query
    let axiosOptions = {}
    switch(chain) {
      case 'ethereum':
        break;
      case 'solana':
        axiosOptions = {
          ...Constants.SOLSCAN_OPTIONS,
          url : Solana.tokenHolders(tokenAddress)
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
      console.error(error);
    }
  })
}

export default routes