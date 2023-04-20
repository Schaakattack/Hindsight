import Header from '../components/Header'
import Footer from '../components/Footer'

import Icon from '../assets/icon.svg'

import DataVisualisationItem from '../components/DataVisualisationItem'

const DATA_VISUALISATION_LIST = [
    {
        title: "Get Listed",
        desc: "Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.",
        icon_url: Icon,
        action_title: "Apply for listing",
        action_link: ""
    },
    {
        title: "Inframe Integration",
        desc: "Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.",
        icon_url: Icon,
        action_title: "Apply for listing",
        action_link: ""
    },
    {
        title: "API",
        desc: "Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.",
        icon_url: Icon,
        action_title: "Get in touch",
        action_link: ""     
    },
    {
        title: "Add your blockchain",
        desc: "Reprehenderit esse labore id veniam ut veniam non eet ullamco dolor proident.",
        icon_url: Icon,
        action_title: "Apply for listing",
        action_link: ""
    }
];

function WorkWithUs(){
    return (
        <>
            <Header />

            <section className='data-visualisation-section pt-[114px]'>
                <div className="container mx-auto">
                    <h3 className="text-center section-title pb-5">The most Advanced DataVisualisation Suite</h3>
                    <p className='section-description px-[70px]'>
                        Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.
                    </p>
                    <div className='flex flex-wrap mx-[-45px]'>
                        {DATA_VISUALISATION_LIST.map((item, idx) => (
                            <DataVisualisationItem { ...item } />
                        ))}
                    </div>
                </div>
            </section>
                            
            <div className='main-bg z-[-2]'></div>

            <Footer />
        </>
    )
}

export default WorkWithUs