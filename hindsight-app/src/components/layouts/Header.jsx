import { Link } from "react-router-dom"
import { useState } from "react"

import Logo from '../../assets/logo.svg'
import AppLogo from '../../assets/app-logo.svg'

import AvatarIcon from '../../assets/avatars/01.png'
import LogoutIcon from '../../assets/logout-icon.svg'
import UserIcon from '../../assets/user-icon.svg'

import Navbar from './Navbar'
import DefaultButton from "../buttons/DefaultButton"

const Header = ({ isApp, isAction, isLogin, isNavbar }) => {
    const [actionGroupActive, setActionGroupActive] = useState(false);

    return (
        <header className={ `header ${ isApp ? 'bg-brand-1100 py-[0.6rem] ' : 'py-5' }` }>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="header-logo">
                    <img src={ isApp ? AppLogo : Logo } alt="logo" />
                </Link>
                { !isNavbar && <Navbar /> }
                <div className="flex gap-5">
                    { !isApp && <DefaultButton className="btn-outline" addClass='min-w-xl' to='/login'>Login</DefaultButton> }
                    { !isApp && <DefaultButton className="btn-default" addClass='min-w-xl' to='/ether_scan_home'>Launch App</DefaultButton> }
                    { isApp && !isLogin && <DefaultButton className="btn-outline" addClass='min-w-xl' to='/login'>Login</DefaultButton> }
                    { isLogin && <div className="action-group">
                        <Link className="avatar relative" onClick={ () => setActionGroupActive(!actionGroupActive) }><img src={ AvatarIcon } alt="" />
                            <div className={ `dropdown-menu z-10 absolute w-full min-w-[140px] bottom-[-10px] left-0 ${ actionGroupActive ? 'visible' : 'invisible' }` }>
                                <ul className="dropdown-menu-list rounded-xl bg-brand-1100 absolute  after:gradient-primary after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:rounded-xl after:border after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg">
                                    <li>
                                        <Link className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2 text-base font-medium tracking-tighter bg-gradient-primary bg-clip-text text-fill-transparent" to='/ether_scan_home'>
                                            <img src={ LogoutIcon } />Log Out
                                        </Link>
                                    </li>                                
                                    <li>
                                        <Link className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2 text-base font-medium tracking-tighter bg-gradient-primary bg-clip-text text-fill-transparent" to='/ether_scan_home'>
                                            <img src={ UserIcon } />Manage
                                        </Link>
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

export default Header