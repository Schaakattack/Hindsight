import React, { useState, useEffect, useRef, useMemo } from "react";
import Collapsible from "react-collapsible";

import axios from 'axios';

import WalletAvatarIcon from "../assets/ellipse/07.svg";
import DrondownIcon from "../assets/dropdown-icon.svg";

import Header from "../components/layouts/Header";
import Settings from "../components/items/Settings";

import BubbleIcon from "../assets/dapp/filters/category_tags.png";
import BubbleIconActive from "../assets/dapp/filters/category_tags_active.png";
import FilterIcon from "../assets/dapp/filters/category_filter.png";
import FilterIconActive from "../assets/dapp/filters/category_filter_active.png";
import HistoryIcon from "../assets/dapp/filters/category_history.png";
import HistoryIconActive from "../assets/dapp/filters/category_history_active.png";
import WalletIcon from "../assets/dapp/filters/category_wallet.png";
import WalletIconActive from "../assets/dapp/filters/category_wallet_active.png";

import ShapeIndividual from "../assets/dapp/shape_individual.png";
import ShapeIco from "../assets/dapp/shape_ico.png";
import ShapeExchange from "../assets/dapp/shape_exchange.png";

import ZoomInIcon from "../assets/zoom-in-icon.svg";
import ZoomOutIcon from "../assets/zoom-out-icon.svg";

import D3Component  from "../components/D3Component";

const Inspector = () => {
	const [filterState, setFilterState] = useState("wallets");
	const transactions = useMemo(async ()=> {
		try {
			const response = await axios.get('http://localhost:3000/api/inspect/home?chain=ethereum&tokenAddress=0xdAC17F958D2ee523a2206206994597C13D831ec7');
			console.log(response);
			return response;
		  } catch (error) {
			console.log(error);
		  }
		  return [];
	}, []);

	return (
		<>
			<div className="bg-dapp-bg-color min-h-screen">
				<Header
					isNavbar={true}
					isApp={true}
					isAction={true}
					isLogin={false}
					isToken={true}
				/>

				<section className="relative z-10">
					<div className="container mx-6.51">
						<div className="flex justify-start gap-4">
							<div className="flex items-center gap-1.7 p-5 bg-dark-grey-4 rounded-outline cursor-pointer font-brand-bold font-bold text-large-semi-bold text-white relative max-w-s-md">
								<img src={WalletAvatarIcon} alt="" />
								<span className="relative overflow-hidden text-ellipsis">
									0xce6e97Abcbb7Fb1d...
								</span>
								{/* <img src={DrondownIcon} alt="" /> */}
							</div>

							<div className="flex flex-col py-5 px-6 bg-dark-grey-4 rounded-outline text-center">
								<h3 className="font-medium text-xx-small tracking-tightest text-white mb-1 whitespace-nowrap">
									Max Supply
								</h3>
								<h4 className="font-normal text-large-semi-bold text-white">
									$68,990,899
								</h4>
							</div>
							
							<div className="flex flex-col py-5 px-6 bg-dark-grey-4 rounded-outline text-center">
								<h3 className="font-medium text-xx-small tracking-tightest text-white mb-1 whitespace-nowrap">
									Number of Holders
								</h3>
								<h4 className="font-normal text-large-semi-bold text-white">
									6,990
								</h4>
							</div>
							<div className="filter-group flex gap-3 p-5 bg-dark-grey-4 rounded-outline">
								<div
									className={`filter-item rounded-outline p-3 cursor-pointer hover:bg-dapp-btn-hover ${
										filterState == "bubble"
											? "bg-dapp-btn-hover"
											: "bg-transparent"
									}`}
									onClick={() => setFilterState("bubble")}
								>
									<img
										src={
											filterState == "bubble"
												? BubbleIconActive
												: BubbleIcon
										}
									/>
								</div>
								<div className="v-divider"></div>
								<div
									className={`filter-item rounded-outline p-3 cursor-pointer hover:bg-dapp-btn-hover ${
										filterState == "filters"
											? "bg-dapp-btn-hover"
											: "bg-transparent"
									}`}
									onClick={() => setFilterState("filters")}
								>
									<img
										src={
											filterState == "filters"
												? FilterIconActive
												: FilterIcon
										}
									/>
								</div>
								<div className="v-divider"></div>
								<div
									className={`filter-item rounded-outline p-3 cursor-pointer hover:bg-dapp-btn-hover ${
										filterState == "history"
											? "bg-dapp-btn-hover"
											: "bg-transparent"
									}`}
									onClick={() => setFilterState("history")}
								>
									<img
										src={
											filterState == "history"
												? HistoryIconActive
												: HistoryIcon
										}
									/>
								</div>
								<div className="v-divider"></div>
								<div
									className={`filter-item rounded-outline p-3 cursor-pointer hover:bg-dapp-btn-hover ${
										filterState == "wallets"
											? "bg-dapp-btn-hover"
											: "bg-transparent"
									}`}
									onClick={() => setFilterState("wallets")}
								>
									<img
										src={
											filterState == "wallets"
												? WalletIconActive
												: WalletIcon
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div
					className="fixed bottom-0 right-0 left-0 top-0 z-0"
				>
					<D3Component transactions={transactions}></D3Component >
				</div>
				<div className="absolute left-6 bottom-6 flex flex-col gap-3 z-10">
					<div className="flex flex-col rounded-[8px] bg-dark-grey-4 gap-5 w-200 p-4">
						<Collapsible trigger="Shapes">
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<img src={ShapeIndividual} />{" "}
								<span className="font-medium text-xx-small text-light-grey-3 tracking-tightest">
									Individual
								</span>
								<span className="font-medium text-xx-small text-info-1 tracking-tightest">
									67
								</span>
							</div>
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<img src={ShapeIco} />{" "}
								<span className="font-medium text-xx-small text-light-grey-3 tracking-tightest">
									ICO wallet
								</span>
								<span className="font-medium text-xx-small text-info-1 tracking-tightest">
									67
								</span>
							</div>
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<img src={ShapeExchange} />{" "}
								<span className="font-medium text-xx-small text-light-grey-3 tracking-tightest">
									Exchange
								</span>
								<span className="font-medium text-xx-small text-info-1 tracking-tightest">
									67
								</span>
							</div>
						</Collapsible>
					</div>
					<div className="flex flex-col rounded-[8px] bg-dark-grey-4 gap-5 w-200 p-4">
						<Collapsible trigger="Tags">
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<span className="font-medium rounded-[20px] px-4 py-2 bg-green-4 text-xx-small text-white tracking-tightest">
									Malicious
								</span>
								<span className="font-medium text-xx-small text-yellow-3 tracking-tightest">
									5
								</span>
							</div>
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<span className="font-medium rounded-[20px] px-4 py-2 bg-yellow-4 text-xx-small text-white tracking-tightest">
									Exploited
								</span>
								<span className="font-medium text-xx-small text-yellow-3 tracking-tightest">
									4
								</span>
							</div>
							<div className="flex gap-2.5 items-center pt-4 justify-between">
								<span className="font-medium rounded-[20px] px-4 py-2 bg-red-4 text-xx-small text-white tracking-tightest">
									Scam
								</span>
								<span className="font-medium text-xx-small text-yellow-3 tracking-tightest">
									1
								</span>
							</div>
						</Collapsible>
					</div>
					<div className="flex flex-row p-5 rounded-[8px] bg-dark-grey-4 gap-5 w-fit">
						<div className="p-2 rounded-md hover:bg-dapp-btn-hover">
							<img src={ZoomInIcon} />
						</div>
						<div className="p-2 rounded-md hover:bg-dapp-btn-hover">
							<img
								className="w-[25px] h-[25px]"
								src={ZoomOutIcon}
							/>
						</div>
					</div>
					{/* <Settings /> */}
				</div>
			</div>
		</>
	);
};

export default Inspector;
