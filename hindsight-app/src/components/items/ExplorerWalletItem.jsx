import { Link } from "react-router-dom";
import EllipseIcon02 from "@/assets/ellipse/02.png";
import CopyIcon from '@/assets/dapp/explorer/copy.png';
import WebsiteIcon from "../../assets/website-icon.svg";
import EtherscanIcon from "../../assets/etherscan-icon.svg";
import StarIcon from "../../assets/star-icon.svg";
const ExplorerWalletItem = ({data, id}) => {
	return (
		<tr className="bg-dark-grey-4 items-center px-6">
            <td className="pl-6 text-xx-small text-light-grey-0 font-brand-regular py-[10px] rounded-l-md">{id + 1}.</td>
            <td className="py-[10px]">
                <img src={`https://etherscan.io/${data.img}`} className="rounded-full"></img>
            </td>
            <td className="text-xx-small text-light-grey-0 font-brand-regular">{data.name}</td>
            <td className="text-xx-small text-light-grey-0 font-brand-regular items-center flex">
                <span>{data.address}</span>
                <div className="float-right">
                    <img src={CopyIcon}></img>
                </div>
            </td>
            
            {/* <td className="text-xx-small text-light-grey-0 font-brand-regular">$8,000,0000</td> */}
            <td className="text-xx-small text-light-grey-0 font-brand-regular">{data.maxSupply.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</td>
            <td className="text-xx-small text-light-grey-0 font-brand-regular">{data.holders}</td>
            <td className="rounded-r-md">
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
            </td>
            
		</tr>
	);
};

export default ExplorerWalletItem;
