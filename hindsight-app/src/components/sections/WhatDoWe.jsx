import DefaultButton from '../buttons/DefaultButton'
import EthereumLogo from '../../assets/home/ethereum.png';
import SolanaLogo from '../../assets/home/solana.png';
import ClassicLogo from '../../assets/home/classic.png';
export default function WhatDoWe(){
    return (
        <section className='relative z-10 what-do-we'>
            <div className='container mx-auto flex flex-col items-center gap-6.5'>
                <h2 className='font-brand-medium font-semibold text-xxx-large-x text-light-grey-0'>About Hindsight</h2>
                <p className='font-brand-regular font-light text-x-medium tracking-tighter text-secondary-color text-center'>
                    Welcome to Hindsight, the place for blockchain data analysis. Our platform helps you <br/>understand token trends, price movements, and network activity across blockchain networks.<br/>All the data is presented in an easy-to-understand format with visuals.
                </p>
                <DefaultButton className='btn-md' addClass="mb-20" to='/roadmap'>Launch App</DefaultButton>
                <div className='flex gap-6 bg-dark-grey-4 rounded-normal px-10 py-12 mb-40'>
                    <div className='border rounded-full border-yellow-2 px-8 py-8'>
                        <img src={EthereumLogo}></img>
                    </div>
                    <div className='border rounded-full border-yellow-2 px-8 py-8'>
                        <img src={SolanaLogo}></img>
                    </div>
                    <div className='border rounded-full border-yellow-2 px-8 py-8'>
                        <img src={ClassicLogo}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}