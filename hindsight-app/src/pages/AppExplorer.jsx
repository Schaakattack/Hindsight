import { useState, useMemo, useEffect } from "react";
import Popup from "react-animated-popup";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import {ScaleLoader} from 'react-spinners';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import Breadcrumb from "@/components/layouts/Breadcrumb";
import ArrowDownIcon from "@/assets/arrow-down.svg";
import WalletIcon from "@/assets/dapp/explorer/wallet.png";
import TokenIcon from "@/assets/dapp/explorer/token.png";
import NFTIcon from "@/assets/dapp/explorer/nft.png";
import SearchIcon from "@/assets/dapp/explorer/search.png";
import StarIcon from "@/assets/dapp/explorer/star.png";
import ExplorerWalletItem from "../components/items/ExplorerWalletItem";

const CATEGORY_LIST = [
	{
		icon: TokenIcon,
		title: "Tokens",
	},
	{
		icon: WalletIcon,
		title: "Wallets",
	},
	{
		icon: NFTIcon,
		title: "NFTs",
	},
];

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "#FFFFC1",
  };

function AppExplorer() {
	const [visible, setVisible] = useState(false);
	const [tokenList, setTokenList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/api/tokens?chain=ethereum"
				);
				setTokenList(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	useEffect(()=>{
		if (tokenList.length > 0){
			setLoaded(true);
		}
	}, [tokenList]);

	return (
		<>
			{/* <Particle /> */}
			<Header isApp={true} isLogin={true}></Header>
			<Breadcrumb />
			<section className="container mx-auto">
				<h1 className="text-light-grey-2 text-center text-xxx-large-f mt-20 mb-16">
					Explore the{" "}
					<span className="text-primary-brand-3">Ethereum</span>
				</h1>
				<div className="bg-dark-grey-3 rounded-md mx-auto p-6 max-w-3xl flex gap-6 mb-[57px]">
					<div
						className="h-[45px] flex py-[12.5px] px-[10px] items-center"
						onClick={() => setVisible(true)}
					>
						<div className="pr-[10px]">
							<img
								className="w-[20px] h-auto"
								src={TokenIcon}
								alt="Token Icon"
							></img>
						</div>
						<span className="text-white font-brand-regular text-xx-small mr-6">
							Tokens
						</span>
						<img
							src={ArrowDownIcon}
							className="inline-block mr-6"
						/>
						<div className="border-r-1 h-[25px] w-[2px] bg-light-grey-1"></div>
					</div>
					<div className="flex justify-between items-center">
						<input
							className="bg-transparent focus:bg-transparent focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none text-light-grey-1 mr-6 min-w-[450px] overflow-x-hidden"
							placeholder="Enter Contract Address"
							type="text"
						></input>
						<div className="">
							<img src={SearchIcon}></img>
						</div>
					</div>
				</div>
				<div className="mb-[22px] items-center w-[168px] h-btn rounded-btn text-primary-brand-2 bg-transparent border border-primary-brand-2 justify-center justify-self-center flex gap-2">
					<span>Watchlist</span>
					<div>
						<img className="" src={StarIcon}></img>
					</div>
				</div>

				<div>
					
					<table className="table-auto w-full text-center border-separate border-spacing-y-2">
						<thead className="mb-4">
							<tr className="items-center h-[55px]">
								<td className="text-light-grey-2 text-xx-small pl-6 ">
									#
								</td>
								<td className="text-light-grey-2 text-xx-small"></td>
								<td className="text-light-grey-2 text-xx-small">
									Name
								</td>
								<td className="text-light-grey-2 text-xx-small">
									Contract
								</td>
								<td className="text-light-grey-2 text-xx-small">
									Max Supply
								</td>
								<td className="text-light-grey-2 text-xx-small">
									Holders
								</td>
								<td className="text-light-grey-2 text-xx-small"></td>
							</tr>
						</thead>
						<tbody>
							{!loaded && (
								<tr>
									<td colSpan={7}>
										<ScaleLoader
											color={'#EEC892'}
											loading={loading}
											cssOverride={override}
											size={150}
											aria-label="Loading Spinner"
											data-testid="loader"
										/>
									</td>
								</tr>
							)}
							
							{tokenList &&
								tokenList.length > 0 &&
								tokenList.map((item, idx) => (
									<ExplorerWalletItem
										key={item.contractAddress}
										data={item}
										id={idx}
									/>
								))}
						</tbody>
					</table>
				</div>
			</section>
			<Popup
				visible={visible}
				style={{
					width: "200px",
					backgroundColor: "#202325",
					padding: "10px 24px 10px 24px",
					boxShadow: "0px 20px 56px rgba(0, 0, 0, 0.3)",
					position: "absolute",
					top: "400px",
					left: "28%",
				}}
				onClose={() => setVisible(false)}
			>
				<ul className="flex cursor-pointer bg-dark-grey-4 flex-col gap-4">
					{CATEGORY_LIST.map((item, idx) => (
						<li
							key={idx}
							className="flex h-10 items-center justify-start gap-[10px]"
						>
							<div className="w-fit h-fit">
								<img src={item.icon}></img>
							</div>
							<span className="text-white font-brand-regular hover:text-primary-brand-3 text-xx-small">
								{item.title}
							</span>
						</li>
					))}
				</ul>
			</Popup>
			<Footer />
		</>
	);
}

export default AppExplorer;
