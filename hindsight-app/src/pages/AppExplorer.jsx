
import {useState} from 'react';
import Popup from 'react-animated-popup';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import Breadcrumb from "@/components/layouts/Breadcrumb";
import ArrowDownIcon from "@/assets/arrow-down.svg";
import WalletIcon from '@/assets/dapp/explorer/wallet.png';
import TokenIcon from '@/assets/dapp/explorer/token.png';
import NFTIcon from '@/assets/dapp/explorer/nft.png';
import SearchIcon from '@/assets/dapp/explorer/search.png';
import StarIcon from '@/assets/dapp/explorer/star.png';
import ExplorerWalletItem from '../components/items/ExplorerWalletItem';

const CATEGORY_LIST = [
	{
		icon: WalletIcon,
		title: 'Wallets'
	},
	{
		icon: TokenIcon,
		title: 'Tokens'
	},
	{
		icon: NFTIcon,
		title: 'NFTs'
	}
]

function AppExplorer() {
	const [visible, setVisible] = useState(false)
	return (
		<>
			{/* <Particle /> */}
			<Header isApp={true} isLogin={true}></Header>
			<Breadcrumb/>
			<section className="container mx-auto max-w-xl">
                <h1 className="text-light-grey-2 text-center text-xxx-large-f mt-20 mb-16">Explore the <span className="text-primary-brand-3">Ethereum</span></h1>
				<div className="bg-dark-grey-3 rounded-md mx-auto p-6 max-w-3xl flex gap-6 mb-[57px]">
					<div className="h-[45px] flex py-[12.5px] px-[10px] items-center" onClick={()=>setVisible(true)}>
						<div className='pr-[10px]'>
							<img className='w-[20px] h-auto' src={WalletIcon}></img>
						</div>
						<span className='text-white font-brand-regular text-xx-small mr-6'>Wallets</span>
						<img src={ArrowDownIcon} className="inline-block mr-6" />
						<div className="border-r-1 h-[25px] w-[2px] bg-light-grey-1"></div>
					</div>
					<div className='flex justify-between items-center'>
						<input className='bg-transparent focus:bg-transparent focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none text-light-grey-1 mr-6 min-w-[450px] overflow-x-hidden' placeholder='Enter Contract Address' type='text'></input>
						<div className=''>
							<img src={SearchIcon}></img>
						</div>
					</div>
				</div>
				<div className="items-center w-[168px] h-btn rounded-btn text-primary-brand-2 bg-transparent border border-primary-brand-2 justify-center justify-self-center flex gap-2">
					<span>Watchlist</span>
					<div><img className='' src={StarIcon}></img></div>
				</div>

				<div>
					<ExplorerWalletItem/>
				</div>
			</section>
			<Popup visible={visible} style={{width: '200px', backgroundColor:'#202325', padding: '10px 24px 10px 24px', boxShadow: '0px 20px 56px rgba(0, 0, 0, 0.3)'}} onClose={() => setVisible(false)}>
                <ul className='flex cursor-pointer bg-dark-grey-4 flex-col gap-4'>
                    {CATEGORY_LIST.map((item, idx)=>(
						<li key={idx} className="flex h-10 items-center justify-start gap-[10px]">
							<div className='w-fit h-fit'>
								<img src={item.icon}></img>
							</div>
							<span className='text-white font-brand-regular hover:text-primary-brand-3 text-xx-small'>{item.title}</span>
						</li >
					))}
                </ul>
            </Popup>
			<Footer/>
		</>
	);
}

export default AppExplorer;
