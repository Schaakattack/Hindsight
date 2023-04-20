import { Link } from "react-router-dom"

import WebsiteIcon from '../assets/website-icon.svg'
import EtherscanIcon from '../assets/etherscan-icon.svg'
import StarIcon from '../assets/star-icon.svg'

const FeaturedTokenItem = ({ text, icon, url, className }) => {
    return <div className="featured-token-item">
        <img src={ icon } className="icon" alt="" />
        <h5 className="title">{ text } </h5>
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
    </div>
}

export default FeaturedTokenItem;