import Icon1 from '../assets/visualization/bx_list-plus.svg'
import Icon2 from '../assets/visualization/discord.svg'
import Icon3 from '../assets/visualization/eos-icons_api-outlined.svg'
import Icon4 from '../assets/visualization/eos-icons_blockchain.svg'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Particle from "../components/Particle";
import DataVisualisationItem from '../components/items/DataVisualisationItem'

const DATA_VISUALISATION_LIST = [
    {
        title: 'Get Listed',
        desc: 'List your DeFi token or NFT collection to make itsHindsight publicly accessible.',
        icon_url: Icon1,
        action_title: 'Apply for listing',
        action_link: ''
    },
    {
        title: 'Discord Bot',
        desc: `Hindsight’s discord bot is a personal over watch tool that can notify you when new transactions broadcast to the blockchain.`,
        icon_url: Icon2,
        action_title: 'Apply for listing',
        action_link: ''
    },
    {
        title: 'Add Your Network',
        desc: 'Hindsight currently views public networks with the correct authority and permissions; we can provide data for any POA or private network.',
        icon_url: Icon4,
        action_title: 'Apply for listing',
        action_link: ''
    },
    {
        title: 'API',
        desc: 'Tabled for now',
        icon_url: Icon3,
        action_title: 'Get in touch',
        action_link: ''     
    }
];

function WorkWithUs(){
    return (
        <>
            <Particle/>
            <Header />
            <section className='data-visualisation-section pt-9 relative z-10'>
                <div className='container mx-auto max-w-xl'>
                    <h3 className='section-title pb-5 text-xxx-large-f font-brand-bold font-semibold text-white text-center'>The most Advanced Data Visualization Suite</h3>
                    <p className='section-description text-2xl font-normal text-secondary-color mb-21 text-center'>
                    Hindsight has developed many versions and different visual models. Feel free to<br/> reach out to get more details about custom solutions!.
                    </p>
                    <div className='flex flex-wrap mx-[-45px]'>
                        {DATA_VISUALISATION_LIST.map((item, idx) => (
                            <DataVisualisationItem { ...item } key={ idx } />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default WorkWithUs