import react from 'react'
import { Link } from "react-router-dom"

import Header from '../components/Header'
import Footer from '../components/Footer'

import EthereumIcon from '../assets/ethereum-icon.svg'
import SolanaIcon from '../assets/solana-icon.svg'
import CosmosIcon from '../assets/cosmos-icon.svg'

import BlockchainButton from '../components/BlockchainButton'
import DefaultButton from '../components/DefaultButton'
import FeaturedTokenItem from '../components/FeaturedTokenItem'
import TokenList from '../components/TokenList'

import EllipseIcon01 from '../assets/ellipse/01.png'
import EllipseIcon02 from '../assets/ellipse/02.png'
import EllipseIcon03 from '../assets/ellipse/03.png'
import EllipseIcon04 from '../assets/ellipse/04.png'
import EllipseIcon05 from '../assets/ellipse/05.png'
import EllipseIcon06 from '../assets/ellipse/06.png'

import SearchIcon from '../assets/search-icon.svg'

import TokenIcon01 from '../assets/tokens/01.png'
import TokenIcon02 from '../assets/tokens/02.png'

import StarIcon from '../assets/star-icon02.svg'
import DropdownIcon from '../assets/dropdown-icon.svg'

import WebsiteIcon from '../assets/website-icon.svg'
import EtherscanIcon from '../assets/etherscan-icon.svg'
import StarIcon01 from '../assets/star-icon.svg'

const BLOCKCHAIN_BUTTON_LIST = [
    { text: "Ethereum Inspector", icon: EthereumIcon, url: '' },
    { text: "Solana Inspector Inspector", icon: SolanaIcon, url: '' },
    { text: "Cosmos Inspector", icon: CosmosIcon, url: '' }
];

const ELLIPSE_LIST = [ 
    { text: 'Moonbirds', icon: EllipseIcon01 },
    { text: 'Magic Internet Money', icon: EllipseIcon02 },
    { text: 'UniCrypt', icon: EllipseIcon03 },
    { text: 'EverRise', icon: EllipseIcon04 },
    { text: 'Azuki', icon: EllipseIcon05 }
];

const TOKEN_LIST = [
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
    { num: '1', icon: EllipseIcon06, title: 'Moobirds', max: '$80,900,090', current: '$80,000', holders: '90,000', site_list: [
        { 
            icon: WebsiteIcon, link_url: '',                        
        }, {
            icon: EtherscanIcon, link_url: '',
        },
        {
            icon: StarIcon01, link_url: ''
        }
    ]},
];

function AllTokens(){
    return (
        <>
            <Header isApp={ true }></Header>

            <section className='blockchain-action-group-section pt-[40px] pb-[80px]'>
                <div className='container mx-auto'>
                    <div className='blockchain-action-group flex justify-between items-center mt-[1px]'>
                        <div className='blockchain-action-group__l flex gap-[20px]'>                    
                            { BLOCKCHAIN_BUTTON_LIST.map((btnInfo, idx) => (
                                <BlockchainButton { ...btnInfo } key={ idx } />
                            ))}
                        </div>
                        <div className='blockchain-action-group__r'>
                            <DefaultButton text="Get Listed" className='py-[10px] pl-[15px] pr-[23px]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-token-section'>
                <div className='container mx-auto'>
                    <div className='featured-token-group flex justify-between'>
                        {ELLIPSE_LIST.map((item, idx) => (
                            <FeaturedTokenItem { ...item } />
                        ))}
                    </div>
                </div>
            </section>

            <form action="#" className='search-form pt-10'>
                <div className='container mx-auto px-[192px]'>
                    <div className='input-group'>
                        <input type="text" className='form-control' placeholder='Search by name, address, symbol' />
                        <span className='icon'>
                            <img src={ SearchIcon } alt="" />
                        </span>
                    </div>
                </div>
            </form>

            <section className='alll-listed-tokens'>
                <div className='container mx-auto'>
                    <h2 className='pt-[50px] pb-[60px]'>All listed tokens</h2>
                    <div className='action-group flex justify-start'>
                        <DefaultButton icon={ StarIcon } text='Watchlist' className='py-2.5 pl-4 pr-6' />
                    </div>

                    <div className='tokens-list-table-wrapper py-[50px] px-[39px] mt-[33px]'>
                        <h3 className='pb-10'>All listed tokens</h3>
                        <table className='tokens-list-table'>
                            <thead>
                                <tr>
                                    <th className='pt-[15px] pb-[35px] text-left'># Name</th>
                                    <th className='pt-[15px] pb-[35px] text-center'>Max Supply <img src={ DropdownIcon } alt="" className='inline pl-2.5' /></th>
                                    <th className='pt-[15px] pb-[35px] text-center'>Current Supply <img src={ DropdownIcon } alt="" className='inline pl-2.5' /></th>
                                    <th className='pt-[15px] pb-[35px] text-center'>Holders <img src={ DropdownIcon } alt="" className='inline pl-2.5' /></th>
                                    <th className='pt-[15px] pb-[35px] text-center'></th>
                                </tr>                                
                            </thead>
                            <tbody>
                                {TOKEN_LIST.map((token, idx) => (
                                    <tr>
                                        <td className='flex items-center gap-2.5 pb-2.5'>
                                            <span className='number'>{ token.num }.</span> <img src={ token.icon } className='w-[50px] h-[50px]' /> <span className='title'>{ token.title }</span></td>
                                        <td className='pb-2.5 tracking-[1.5px] text-center'>{ token.max }</td>
                                        <td className='pb-2.5 tracking-[1.5px] text-center'>{ token.current }</td>
                                        <td className='pb-2.5 tracking-[1.5px] text-center'>{ token.holders }</td>
                                        <td className='pb-2.5 tracking-[1.5px] text-center'>
                                            <ul className="options flex gap-[6px] justify-center">
                                                {token.site_list.map((item, idx) => (
                                                    <li>
                                                        <Link to={ item.link_url } className="option-item"><img src={ item.icon } alt="" /></Link>
                                                    </li>
                                                ))}                                                
                                            </ul>
                                        </td>
                                    </tr>
                                ))}                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <div className='main-bg z-[-2]'></div>
            
            <Footer></Footer>
        </>
    )
}

export default AllTokens