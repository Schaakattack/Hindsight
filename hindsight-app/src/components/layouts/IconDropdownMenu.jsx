import React, { useState } from "react";
import NavItem from "../items/NavItem";
const IconDropdownMenu = ({data, title}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="parent"
			>
				<NavItem
					className="text-light-grey-4"
					{...{text: title}}
					isDropDown={true}
				>
					{title}
				</NavItem>
			</div>
			{isHovered && (
				<ul
					className="dropdown absolute flex flex-col gap-4 bg-dark-grey-4 rounded-md w-53 p-6 border-dark-grey-3  border-outline"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{data.map((menu, idx) => (
						<li key={idx} className="flex gap-4 items-center">
							{title==='Networks' && (
								<img src={menu.icon} className=" w-10 h-10"></img>
							)}
							{title==='More' && (
								<img src={menu.icon} className="w-6 h-6"></img>
							)}
							
							<a className="text-small text-light-grey-3 hover:text-yellow-1 font-brand-regular cursor-pointer" href={menu.href}>
								{menu.title}
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default IconDropdownMenu;
