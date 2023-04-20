import { Link } from "react-router-dom";
import PlusIcon from '../assets/plus.svg'

const DataVisualisationItem = ({ title, desc, icon_url, action_title, action_link }) => {
    return (
        <div className="data-visualisation-item rounded-xl w-[50%] px-[45px]">
            <div className="data-visualisation__content rounded-xl pb-[49px] flex gap-[40px] items-start">                
                <div className="icon">
                    <img src={ icon_url } />
                </div>
                <div className="flex flex-col">
                    <h4>{ title }</h4>
                    <p>{ desc }</p>
                    <Link to={ action_link } className="btn btn-detail px-6 py-[7px] rounded-lg"> <img src={ PlusIcon } className="icon-img pr-3" />{ action_title }</Link>
                </div>
            </div>
        </div>
    )
}

export default DataVisualisationItem;