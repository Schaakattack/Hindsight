import ReactHtmlParser from "react-html-parser"

import DefaultButton from '../buttons/DefaultButton'

const Banner = ({ img, title, desc }) => {
    return (
        <section className='relative z-10 home-banner pt-40 text-center'>
            <div className='container mx-auto'>
                <div className='section-block flex flex-col'>
                    <h1 className='text-xxx-large-s font-brand-bold font-bold text-white pb-6'>{ ReactHtmlParser(title) }</h1>
                    <p className=' font-medium text-x-medium-s text-white tracking-tighter pb-16'>
                        { ReactHtmlParser(desc) }
                    </p>
                    <div className='action-group flex justify-center'>
                        <DefaultButton className='btn-md' addClass="w-fit" to='/app/networks'>Launch App</DefaultButton>
                    </div>
                </div>
                {/* <div className='section-block'>
                    <img src={ img } alt='banner' />
                </div> */}
            </div>
        </section>   
    )
}

export default Banner