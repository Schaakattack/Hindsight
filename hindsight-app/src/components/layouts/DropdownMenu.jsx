import React, { useState } from "react";
import NavItem from "../items/NavItem";
const DropdownMenu = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const MENU_LIST = [
		{
			text: "About us",
			href: "/about-us",
			description: "Meet the team and what we intend to achieve",
		},
		{
			text: "Roadmap",
			href: "/roadmap",
			description:
				"Browse through our roadmap and see how we are progressing",
		},
		{
			text: "Resources",
			href: "/resources",
			description: "Browse through our resources",
		},
		{
			text: "FAQ",
			href: "/faq",
			description: "Learn more",
		},
	];

	return (
		<>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="parent "
			>
				<NavItem
					className="text-light-grey-4"
					isDropDown={true}
					{...{
						text: "About",
					}}
				>
					About
				</NavItem>
			</div>
			{isHovered && (
				<ul
					className="dropdown absolute flex flex-col gap-2 bg-dark-grey-4 rounded-md w-80 p-4 border-dark-grey-1"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{MENU_LIST.map((menu, idx) => (
						<li key={idx} className="flex flex-col gap-2 pt-4 pb-2 pl-6 pr-6">
							<a className="text-small text-light-grey-3 hover:text-yellow-1  cursor-pointer" href={menu.href}>
								{menu.text}
							</a>
							<span className="text-light-grey-4 text-xx-small font-brand-regular">{menu.description}</span>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default DropdownMenu;
