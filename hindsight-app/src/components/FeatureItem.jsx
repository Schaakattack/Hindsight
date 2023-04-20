import { Outlet, Link } from "react-router-dom"

const FeatureItem = ({ text, icon, desc }) => {
    return (
        <div className="feature-item rounded-xl px-[33px]">
            <div className="feature-item__content rounded-xl p-[30px] flex flex-col gap-[15px] items-start">
                <img src={ icon } className="icon" />
                <h3>{ text }</h3>
                <p>{ desc }</p>
            </div>
        </div>
    )
}

export default FeatureItem;