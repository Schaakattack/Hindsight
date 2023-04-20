import { Link } from "react-router-dom"

const BlockchainButton = ({ text, icon, url }) => {
    return <Link to={ url } className="btn-blockchain py-[9px] pl-[7px] pr-[11px] gap-[8px]"> 
        <span className="flex items-center gap-[8px]">
            <img src={ icon } className="btn-icon" alt="" /> { text }
        </span>
    </Link>
}

export default BlockchainButton;