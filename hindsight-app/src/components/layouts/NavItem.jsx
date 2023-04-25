import { Link } from "react-router-dom"

const NavItem = ({ text, href, active }) => {
    return (
        <Link to={ href } before={ text } className={ `${active ? "font-brand-bold font-bold bg-gradient-primary bg-clip-text text-fill-transparent" : "font-brand-regular font-medium"} test text-base tracking-tightest text-brand-50 nav__item hover:font-brand-bold hover:font-bold hover:bg-gradient-primary hover:bg-clip-text hover:text-fill-transparent before:block before:font-brand-bold before:h-0 before:overflow-hidden before:invisible before:content-[attr(before)]` }>
            {text}
        </Link>
    );
};

export default NavItem