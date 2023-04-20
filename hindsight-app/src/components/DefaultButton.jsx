import { Link } from "react-router-dom"

const DefaultButton = ({ text, icon, url, className }) => {
    return <Link to={ url } className="btn-default"> 
        <span className={`flex items-center gap-[8px] ${ className }`}>
            { icon && <img src={ icon } className="btn-icon" alt="" /> } { text }
        </span>
    </Link>
}

export default DefaultButton;