import { Link } from "react-router-dom";
import EllipseIcon02 from "@/assets/ellipse/02.png";
import CopyIcon from '@/assets/dapp/explorer/copy.png';
import WebsiteIcon from "../../assets/website-icon.svg";
import EtherscanIcon from "../../assets/etherscan-icon.svg";
import StarIcon from "../../assets/star-icon.svg";
const ExplorerWalletItem = () => {
	return (
		<>
			<div className="flex">
				<span className="text-xx-small text-light-grey-0 font-brand-regular mr-[10px]">#</span>
				<div className="mr-[16px]">
					<img src={EllipseIcon02}></img>
				</div>
				<span className="text-xx-small text-light-grey-0 font-brand-regular mr-[24px]">Name</span>
				<span className="text-xx-small text-light-grey-0 font-brand-regular mr-[8px]">Contract</span>
                <div>
                    <img src={CopyIcon}></img>
                </div>
				<span className="text-xx-small text-light-grey-0 font-brand-regular">Market Cap</span>
				<span className="text-xx-small text-light-grey-0 font-brand-regular">Current Supply</span>
				<span className="text-xx-small text-light-grey-0 font-brand-regular">Holders</span>
				<ul className="options flex gap-1.5 justify-center">
					<li>
						<Link className="option-item">
							<img src={WebsiteIcon} alt="" />
						</Link>
					</li>
					<li>
						<Link className="option-item">
							<img src={EtherscanIcon} alt="" />
						</Link>
					</li>
					<li>
						<Link className="option-item">
							<img src={StarIcon} alt="" />
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ExplorerWalletItem;
