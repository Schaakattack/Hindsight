import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import AppLogo from "../../assets/app-logo.png";

import AvatarIcon from "../../assets/avatars/01.png";
import LogoutIcon from "../../assets/logout-icon.svg";
import UserIcon from "../../assets/user-icon.svg";

import Navbar from "./Navbar";
import DefaultButton from "../buttons/DefaultButton";

const Header = ({ isNavbar, isApp, isAction, isLogin, isToken }) => {
	const [actionGroupActive, setActionGroupActive] = useState(false);

	const blur = () => {
		setActionGroupActive(false);
	};

	return (
		<header
			className={`relative header bg-black ${
				isApp ? "py-[0.6rem] " : "py-4"
			} z-20 `}
			onBlur={blur}
		>
			<div
				className={`container ${
					isApp ? "mx-6.51" : "mx-auto"
				} flex justify-between items-center ${
					isToken ? "" : "max-w-xl"
				}`}
			>
				<Link to="/" className="header-logo">
					<img style={{height:"48px"}} src={isApp ? AppLogo : Logo} alt="logo" />
				</Link>
				{!isApp && <Navbar />}
				<div className="flex gap-6 items-center">
					{!isApp && (
						<>
							<DefaultButton className="btn-outline-xs" addClass="w-[168px]" to="/login">
								Connect
							</DefaultButton>
							<DefaultButton className="btn-sm" addClass="w-[168px]" to="/dapp">
								Launch App
							</DefaultButton>
						</>
					)}
					{isApp && !isLogin && (
						<DefaultButton
							className="btn-default"
							addClass="w-[168px] h-btn place-items-center rounded-btn text-primary-brand-2 bg-transparent border border-primary-brand-2 "
							to="/login"
						>
							Connect
						</DefaultButton>
					)}
					{isLogin && (
						<div className="action-group">
							<Link
								className="avatar relative"
								onClick={() =>
									setActionGroupActive(!actionGroupActive)
								}
							>
								<img src={AvatarIcon} alt="" />
								<div
									className={`dropdown-menu z-10 absolute w-full min-w-[140px] bottom-[-10px] left-0 ${
										actionGroupActive
											? "visible"
											: "invisible"
									}`}
								>
									<ul className="dropdown-menu-list rounded-xl bg-brand-1100 absolute  after:gradient-primary after:bg-origin-border after:top-m-1 after:bottom-m-1 after:left-m-1 after:right-m-1 after:border after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg">
										<li className="rounded-xl hover:bg-header-action-hover-bg-color">
											<Link
												className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2 text-base font-medium tracking-tighter bg-gradient-primary bg-clip-text text-fill-transparent"
												to="/dapp"
											>
												<img src={LogoutIcon} />
												Log Out
											</Link>
										</li>
										<li className="rounded-xl hover:bg-header-action-hover-bg-color">
											<Link
												className="dropdown-item flex items-center py-2.5 pl-4 pr-6 gap-2 text-base font-medium tracking-tighter bg-gradient-primary bg-clip-text text-fill-transparent"
												to="/dapp"
											>
												<img src={UserIcon} />
												Manage
											</Link>
										</li>
									</ul>
								</div>
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
