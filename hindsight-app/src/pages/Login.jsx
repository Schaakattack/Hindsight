import Header from "../components/layouts/Header"
import { Link } from "react-router-dom"

import LogoIcon from '../assets/login-logo.png'

import MetamaskIcon from '../assets/wallets/metamask.svg'
import CoinbaseIcon from '../assets/wallets/coinbase.svg'
import PhantomIcon from '../assets/wallets/phantom.svg'
import GoogleIcon from '../assets/wallets/google.svg'

import WalletItem from '../components/items/WalletItem'
import Message from '../components/sections/Message'

const WALLET_LIST = [
    { 
        text: 'Continue with MetaMask', 
        icon: MetamaskIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    },
    { 
        text: 'Continue with Coinbase', 
        icon: CoinbaseIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    },
    { 
        text: 'Continue with Phantom', 
        icon: PhantomIcon, 
        desc: 'Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox.' 
    }
];

export default function Login(){
    return (
        <>
            <Header/>
            {/* <header className='login-header py-10 flex justify-center'>
                <div className='max-w-md mx-auto'>
                    <Link to='/'><img src={ LogoIcon } alt='' /></Link>
                </div>
            </header> */}

            <div className='login-content mt-[66.5px] w-[660px] mx-auto'>
                <div className='logo-inner mx-auto flex flex-col gap-10 bg-white rounded-medium px-28 pt-10 pb-20'>
                    <div className='head'>
                        <h1 className='pb-4.3 font-brand-bold font-bold text-sx-large text-dark-grey-3 text-center'>Login to Hindsight</h1>
                        <p className='text-x-medium font-normal text-dark-grey-3 text-center'>Connect with your web3 based wallet and sign-in</p>
                    </div>
                    {/* <Message className='warning'>
                        Info: MetaMask is NOT detected in your browser, please enable it and refresh this page
                    </Message> */}

                    <div className='wallet-list flex flex-col gap-6'>
                        {WALLET_LIST.map((item, idx) => (
                            <WalletItem { ...item } key={ idx } />
                        ))}
                    </div>
                    <span className='text-divider block w-full font-normal text-xxx-small text-dark-grey-3 text-center'>By connecting a wallet, you agree to Hindsights’ <b>Terms of Service</b> and consent to its <b>Privacy Policy</b>.</span>
                    <span className='text-divider block w-full font-normal text-xx-medium text-dark-grey-3 text-center'>Or</span>
                    <WalletItem text='Continue with Google' icon={ GoogleIcon } desc='Sign in with your Google account.' />
                </div>
            </div>
{/*             
            <div className='block w-full h-full top-0 bg-cover absolute z-[-2]'></div> */}
        </>
    )
}
