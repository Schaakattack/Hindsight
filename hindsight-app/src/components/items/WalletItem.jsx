import { Link } from "react-router-dom"

const WalletItem = ({ icon, text, desc }) => {
    return (
        <Link className='wallet-item rounded-[32px] bg-dark-grey-3 hover:bg-dark-grey-2 cursor-pointer relative' to='/dapp'>
            <div className='flex items-start py-4 px-8'>
                <img src={ icon } alt='' className='icon w-6 h-6 mr-19' />
                {/* <div className='flex flex-col items-center'> */}
                    <h2 className='font-brand-regular font-regular text-small text-white content-center'>{ text }</h2>
                    {/* <p className='font-medium text-xx-small tracking-tightest text-white'>{ desc }</p> */}
                {/* </div> */}
            </div>
        </Link>
    )
}

export default WalletItem
