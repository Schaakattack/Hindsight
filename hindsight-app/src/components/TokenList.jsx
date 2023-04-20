import { Link } from "react-router-dom"

import WebsiteIcon from '../assets/website-icon.svg'
import EtherscanIcon from '../assets/etherscan-icon.svg'
import StarIcon from '../assets/star-icon.svg'

const TokenList = ({ text, token_list }) => {
    return <div className="token-list-item w-[50%] px-[50px] py-[60px]">
        <h5 className="title pb-10">{ text }</h5>
        <ul className="token-list flex flex-col gap-2.5">
            { token_list.map((token, idx) => (
                <li key={ idx } className="flex justify-between items-center">                    
                    <div className="token flex items-center">
                        <span className="number">{ token.num }</span>
                        <img src={ token.icon } alt="" className="token__icon px-2.5" />
                        <h6 className="token__title">{ token.title }</h6>
                    </div>
                    <ul className="options flex gap-[6px] justify-center">
                        <li>
                            <Link className="option-item"><img src={ WebsiteIcon } alt="" /></Link>
                        </li>
                        <li>
                            <Link className="option-item"><img src={ EtherscanIcon } alt="" /></Link>
                        </li>
                        <li>
                            <Link className="option-item"><img src={ StarIcon } alt="" /></Link>
                        </li>
                    </ul>
                </li>
            )) }            
        </ul>
    </div>
}

export default TokenList;