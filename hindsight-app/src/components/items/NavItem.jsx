import { Link } from "react-router-dom"

import ArrowDownIcon from '../../assets/arrow-down.svg'

const NavItem = ({ text, href, active, isDropDown }) => {
    // console.log(isDropDown)
    return (
        <Link to={ href } before={ text } 
            className={ 
                `${active ? 
                    "font-brand-medium bg-gradient-primary bg-clip-text text-fill-transparent" : 
                    ""
                    } text-base tracking-tightest text-brand-50 nav__item hover:bg-gradient-primary hover:bg-clip-text hover:text-fill-transparent before:block before:font-brand-medium before:h-0 before:overflow-hidden before:invisible before:content-[attr(before)] before:border-2 border-red before:border-r-4` }>
            { text } { isDropDown && <img src={ ArrowDownIcon  } className="inline-block ml-1.2" /> }
        </Link>
    );
};

export default NavItem