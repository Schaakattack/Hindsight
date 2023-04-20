import { Outlet, Link } from "react-router-dom"
import { useState, useRouter } from "react"

import Logo from '../assets/logo.svg'
import AppLogo from '../assets/app-logo.svg'
import Navbar from '../components/Navbar'

import AvatarIcon from '../assets/avatars/01.png'
import LogoutIcon from '../assets/logout-icon.svg'
import UserIcon from '../assets/user-icon.svg'

const Header = ({ isApp, isAction }) => {
    const [actionGroupActive, setActionGroupActive] = useState(false);

    return (
        <header className={ `header ${ isApp ? 'app-header py-[0.6rem] ' : 'py-5' }` }>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="header-logo">
                    <img src={ isApp ? AppLogo : Logo } alt="logo" />
                </Link>
                <Navbar />
                <div>
                    { !isApp && <Link to="" className="btn btn-primary py-[15px] px-6 rounded-xl">Launch App</Link> }
                    { isApp && !isAction && <Link to="" className="btn btn-primary py-[10px] px-[45px] rounded-xl">Login</Link> }
                    { isAction && <div className="action-group">
                        <Link className="avatar relative" onClick={ () => setActionGroupActive(!actionGroupActive) }><img src={ AvatarIcon } alt="" />
                            <div className={ `dropdown-menu z-10 absolute w-full min-w-[140px] bottom-[-10px] right-0 ${ actionGroupActive ? 'visible' : 'invisible' }` }>
                                <ul className="dropdown-menu-list rounded-xl">
                                    <li>
                                        <Link className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2"><img src={ LogoutIcon } />Log Out</Link>
                                    </li>                                
                                    <li>
                                        <Link className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2"><img src={ UserIcon } />Manage</Link>
                                    </li>
                                </ul>
                            </div>
                        </Link>     
                    </div>}
                </div>
            </div>
        </header>        
    )
}

export default Header;