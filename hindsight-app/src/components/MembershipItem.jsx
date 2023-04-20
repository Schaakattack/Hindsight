import { Link } from "react-router-dom";
import CheckIcon from '../assets/check-icon02.svg'

const MembershipItem = ({ title, desc, list, price_info, sign_up_link }) => {
    return (
        <div className="membership-item rounded-xl w-[50%] px-[45px]">
            <div className="membership-item__content rounded-xl flex gap-[40px] items-start h-[100%]">                
                <div className="flex flex-col membership-item__content--body">
                    <h3>{ title }</h3>
                    <p className="description">{ desc }</p>
                    <hr className="divider" />
                    <ul className="features">
                        {list.map((item, idx) => (
                            <li className="flex gap-2 items-center"> <img src={ CheckIcon } alt="" /> { item }</li>
                        ))}
                    </ul>
                    <hr className="divider" />
                    <h4 className="mb-[29px]">{ price_info.price } <span>{ ` / ${ price_info.title }` }</span> </h4>
                    <Link to={ sign_up_link } className="btn btn-primary justify-center py-[15px] rounded-lg ">Sign Up</Link>
                </div>                                
            </div>
        </div>
    )
}

export default MembershipItem;