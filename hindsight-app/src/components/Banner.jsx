import { Outlet, Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser'; 

const Banner = ({ img, title, desc }) => {
    return (
        <section className="home-banner pb-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className='section-block flex flex-col	gap-8 py-[77px]'>
                    <h1>{ ReactHtmlParser(title) }</h1>
                    <p className='description'>
                        { ReactHtmlParser(desc) }
                    </p>
                    <div className='action-group flex gap-8'>
                        <Link to="" className="btn btn-secondary py-2.5 px-6 rounded-xl">Go Premium</Link>
                        <Link to="" className="btn btn-secondary py-2.5 px-6 rounded-xl">Launch App</Link>
                    </div>
                </div>
                <div className="sectioin-block">
                    <img src={ img } alt="banner" />
                </div>
            </div>
        </section>   
    )
}

export default Banner;