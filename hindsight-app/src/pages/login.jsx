import { Outlet, Link } from "react-router-dom"

import LogoIcon from '../assets/l-logo.svg'

import WalletIcon01 from '../assets/wallets/01.svg'
import WalletIcon02 from '../assets/wallets/02.svg'
import GoogleIcon from '../assets/wallets/03.svg'

import WalletItem from '../components/WalletItem'
import Message from '../components/Message'

const WALLET_LIST = [
    { text: 'MetaMask', icon: WalletIcon01, desc: "Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox." },
    { text: 'MetaMask', icon: WalletIcon02, desc: "Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox." },
    { text: 'MetaMask', icon: WalletIcon01, desc: "Connect using a browser plugin or mobile app. Best supported on Chrome or Firefox." }
];

export default function Login(){
    return (
        <>
            <header className="login-header py-10 flex justify-center">
                <div className='logo-inner mx-auto'>
                    <Link to='/'><img src={ LogoIcon } alt="" /></Link>
                </div>
            </header>

            <div className='login-content'>
                <div className='logo-inner mx-auto flex flex-col gap-10'>
                    <div className='head'>
                        <h1 className='text-center pb-[15px]'>Login to Hindsight</h1>
                        <p className='text-center'>Connect with your web3 based wallet and sign-in</p>
                    </div>

                    <Message className="warning">
                        Info: MetaMask is NOT detected in your browser, please enable<br />it and refresh this page
                    </Message>

                    <div className='wallet-list flex flex-col gap-[15px]'>
                        {WALLET_LIST.map((item, idx) => (
                            <WalletItem { ...item } />
                        ))}
                    </div>

                    <span className='text-divider'>or</span>
                    <WalletItem text="Google" icon={ GoogleIcon } desc="Sign in with your Google account." />

                    <div className='footer mb-9'>
                        <p>By connecting your wallet and signing a message, you agree to Hindsight’s Term’s & Conditions and Privacy Policy</p>
                    </div>
                </div>
            </div>
            
            <div className='main-bg z-[-2]'></div>
        </>
    )
}