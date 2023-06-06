import { useLocation } from "react-router-dom";
import NavItem from "../items/NavItem";
import React from "react";
import DropdownMenu from "../DropdownMenu";

const MENU_LIST = [
	{
		text: "Pricing",
		href: "/work-with-us",
		before_text: "Work_with_us",
	},
	{
		text: "Explore",
		href: "/premium",
		before_text: "Go_Premium",
	},
];

const Navbar = (children) => {
	const location = useLocation();

	return (
		<nav className="nav">
			<ul className="flex justify-between gap-12 nav__menu-list align-middle content-center items-center place-items-center	">
				<li>
					<DropdownMenu/>
				</li>
				{MENU_LIST.map((menu, idx) => (
					<li key={idx}>
						<NavItem
							isDropDown={false} active={location.pathname === menu.href}
							{...menu}						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
