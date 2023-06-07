import { useLocation } from "react-router-dom";
import NavItem from "../items/NavItem";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import IconDropdownMenu from "./IconDropdownMenu";
import EthereumIcon from "@/assets/dapp/explorer/ethereum.png";
import SolanaIcon from "@/assets/dapp/explorer/solana.png";
import CosmosIcon from "@/assets/dapp/explorer/cosmos.png";
import PolygonIcon from "@/assets/dapp/explorer/polygon.png";
import BNBIcon from "@/assets/dapp/explorer/bnb.png";
import AvalancheIcon from "@/assets/dapp/explorer/avalanche.png";
import FantomIcon from "@/assets/dapp/explorer/fantom.png";
import CardanoIcon from "@/assets/dapp/explorer/cardano.png";
import LightBulbIcon from '@/assets/dapp/menu/light-bulb.png';
import BugAntIcon from '@/assets/dapp/menu/bug-ant.png';
import QuestionIcon from '@/assets/dapp/menu/question.png';
import SettingsIcon from '@/assets/dapp/menu/settings.png';

const HOME_MENU_LIST = [
	{
		text: "Pricing",
		href: "/premium",
	},
	{
		text: "Explore",
		href: "/dapp",
	},
];

const APP_MENU_LIST = [
	{
		text: 'Get Listed',
		href: '/explore',
	}
]

const APP_MENU_NETWORK_LIST = [
	{
		id: 0,
		icon: EthereumIcon,
		title: "Ethereum",
		enabled: true,
	},
	{
		id: 1,
		icon: SolanaIcon,
		title: "Solana",
		enabled: true,
	},
	{
		id: 2,
		icon: CosmosIcon,
		title: "Cosmos",
		enabled: false,
	},
	{
		id: 3,
		icon: PolygonIcon,
		title: "Polygon",
		enabled: false,
	},
	{
		id: 4,
		icon: BNBIcon,
		title: "BNB",
		enabled: false,
	},
	{
		id: 5,
		icon: AvalancheIcon,
		title: "Avalanche",
		enabled: false,
	},
	{
		id: 6,
		icon: FantomIcon,
		title: "Fantom",
		enabled: false,
	},
	{
		id: 7,
		icon: CardanoIcon,
		title: "Cardano",
		enabled: false,
	},
]

const APP_MENU_MORE_LIST = [
	{
		icon: LightBulbIcon,
		title: 'Suggest a feature'
	},
	{
		icon: BugAntIcon,
		title: 'Report a bug'
	},
	{
		icon: QuestionIcon,
		title: 'Help'
	},
	{
		icon: SettingsIcon,
		title: 'Settings'
	}
]

const Navbar = ({type}) => {
	const location = useLocation();

	return (
		<nav className="nav">
			<ul className="flex justify-between gap-12 nav__menu-list align-middle content-center items-center place-items-center">
				{type==1 && (
					<li>
						<DropdownMenu/>
					</li>
				)}
				{type==2 && (
					<li>
						<IconDropdownMenu data={APP_MENU_NETWORK_LIST} title='Networks'/>
					</li>
				)}
				{type==1 && HOME_MENU_LIST.map((menu, idx) => (
					<li key={idx}>
						<NavItem
							isDropDown={false} active={location.pathname === menu.href}
							{...menu}						/>
					</li>
				))}
				{type==2 && APP_MENU_LIST.map((menu, idx) => (
					<li key={idx}>
						<NavItem
							isDropDown={false} active={location.pathname === menu.href}
							{...menu}						/>
					</li>
				))}
				{type==2 && (
					<li>
						<IconDropdownMenu data={APP_MENU_MORE_LIST} title='More'/>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
