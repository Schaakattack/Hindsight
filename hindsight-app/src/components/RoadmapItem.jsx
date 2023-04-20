import { Outlet, Link } from "react-router-dom"
import Dot from '../assets/dot.svg'

const RoadmapItem = ({ label , title, text, desc, desc_list }) => {
    return (
        <div className="roadmap-item">
            <div className="relative">
                <h3 className='pb-[29px]'>{ title } <img src={ Dot } className='absolute top-[12px] left-[-62px] z-[2]' /></h3>                        
                <div className="info">
                    <div className="title">{ label }</div>
                </div>
                <div className='content pl-24 pr-[192px] py-6'>
                    <h4>{ text }</h4>                    
                    <p>{ desc }</p> 
                    { desc_list && 
                        <ul className='desc-list'>
                            {desc_list.map((item, idx) => (
                                <li>{ item }</li>
                            ))}
                        </ul>                   
                    }
                </div>
            </div>
        </div>
    )
}

export default RoadmapItem;