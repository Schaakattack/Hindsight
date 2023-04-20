import { Outlet, Link } from "react-router-dom"

const NavItem = ({ text, href, active }) => {
  return (
    <Link to={ href } className={`third nav__item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
};

export default NavItem;