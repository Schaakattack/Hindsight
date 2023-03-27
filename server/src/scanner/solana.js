"use strict"
import APIs from '../apis.js'

const Solana = {
    tokenHolders:(tokenAddress)=>{
        return `${APIs.Solana.Token.Holders}?tokenAddress=${tokenAddress}&limit=10&offset=0`
    }
}

export default Solana