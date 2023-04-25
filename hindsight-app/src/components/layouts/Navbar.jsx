import { useLocation } from "react-router-dom"

import NavItem from './NavItem'

const MENU_LIST = [
	{ 
		text: 'About Us', 
		href: '/about_us', 
		before_text: 'About_Us' 
	},
	{ 
		text: 'Work With Us', 
		href: '/work_with_us', 
		before_text: 'Work_With_Us' 
	},
	{ 
		text: 'Go Premium', 
		href: '/premium', 
		before_text: 'Go_Premium' 
	},
	{ 
		text: 'Resources', 
		href: '/resources', 
		before_text: 'Resources' 
	},
];

const Navbar = (children) => {	
  const location = useLocation()

  return (
    <nav className='nav'>
		<ul className='flex justify-between gap-6 nav__menu-list'>
			{MENU_LIST.map((menu, idx) => (
				<li key={ idx }>
					<NavItem active={ location.pathname === menu.href } {...menu} />
				</li>
			))}
		</ul>
    </nav>
  );
};

export default Navbar