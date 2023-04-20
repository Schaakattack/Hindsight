import { Outlet, Link } from "react-router-dom"

const WalletItem = ({ icon, text, desc }) => {
    return (
        <div className="wallet-item py-[23px] pl-[32px] pr-[34px] rounded-[14px]">
            <div className="flex gap-[44px]">
                <img src={ icon } alt="" className="icon" />
                <div className="flex flex-col gap-[5px]">
                    <h2>{ text }</h2>
                    <p>{ desc }</p>
                </div>
            </div>
        </div>
    )
}

export default WalletItem;