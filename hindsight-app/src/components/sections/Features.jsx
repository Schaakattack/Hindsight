import Real from '../../assets/features/real-time.svg'
import Insights from '../../assets/features/insights.svg'
import Innovative from '../../assets/features/innovative.svg'
import Expert from '../../assets/features/expert.svg'

import FeatureItem from '../items/FeatureItem'

const FEATURE_LIST = [
    {
        text: "Insights and Analytics",
        desc: "You can gather insights and analytics on token trends, price movements, and network activity, and choose how you would like to visualize it!"
    },
    {
        text: "Real-Time Data Analysis",
        desc: "You always have access to the latest information and insights about the tokens you are monitoring, as our system will pull information in real time from the blockchain"
    },
    {
        text: "Expert Support",
        desc: "We are here to provide you with expert support if you have any questions or concerns about using the platform."
    },
    {
        text: "Feature Request implementation",
        desc: "HindSight developers value your feedback, and always do our best to incorporate feedback and feature suggestions in new updates!"
    },
    {
        text: "Network integrations",
        desc: "HindSight pulls data through multiple networks, to make it the one-stop-shop for blockchain visualization."
    },
    {
        text: "Simple Data Visualization",
        desc: "Get data through easy-to-read and visually appealing data visuals, allowing you to quickly gain insights into the data."
    },
    // { 
    //     text: 'Real-Time Data Analysis', 
    //     icon: Real, 
    //     desc: 'You always have access to the latest information and insights about the tokens you are monitoring.' 
    // },
    // { 
    //     text: 'Insights and Analytics', 
    //     icon: Insights, 
    //     desc: 'Get insights and analytics on token trends, price movements, and network activity'
    // },
    // { 
    //     text: 'Innovative Data Visualizations', 
    //     icon: Innovative, 
    //     desc: 'Get data through easy-to-read and visually appealing data visuals, allowing you to quickly gain insights into the  data.'
    // },
    // { 
    //     text: 'Expert Support', 
    //     icon: Expert, 
    //     desc: 'Get expert support if you have any questions or concerns about using the platform.'
    // }
];

export default function Header(){
    return (
        <section className='relative z-10 key-features pt-10 pb-42'>
            <div className='container mx-auto max-w-xl flex flex-col items-center gap-10'>
                <h2 className='font-brand-medium text-white text-xx-large'>Features</h2>
                <p className='font-brand-regular font-regular text-x-medium text-secondary-color text-center'>
                    Our easy-to-understand data visualization tools allow you to<br/> quickly gain insights into the data that lives on the blockchain.
                </p>
                <div className='grid grid-cols-3 gap-6'>
                    {FEATURE_LIST.map((item, idx) => (
                        <FeatureItem { ...item } key={ idx } />
                    ))}
                </div>
            </div>
        </section>
    )
}