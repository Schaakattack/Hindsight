import { useState, useRouter } from "react"
import { useLocation } from 'react-router-dom'

import NavItem from '../components/NavItem'

const MENU_LIST = [
  { text: "About Us", href: "/about" },
  { text: "Work With Us", href: "/work_with_us" },
  { text: "Go Premium", href: "/premium" },
  { text: "Resources", href: "/resources" },
];

const Navbar = (props) => {	
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const location = useLocation();

  return (
    <nav className="nav">
        <ul className="flex justify-between gap-6 nav__menu-list">
            {MENU_LIST.map((menu, idx) => (
                <li
                    onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                    }}
                    key={menu.text}
                >
                  <NavItem active={location.pathname === menu.href} {...menu} />
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;