import DefaultButton from '../buttons/DefaultButton'

export default function WhatDoWe(){
    return (
        <section className='relative z-10 what-do-we pt-16.5 pb-34.5'>
            <div className='container max-w-xl mx-auto flex flex-col items-center gap-6.5'>
                <h2 className='font-brand-medium font-semibold text-xx-large brand-50'>What is Hindsight?</h2>
                <p className='font-brand-medium text-x-medium-s tracking-tighter text-secondary-color text-center'>
                    Welcome to Hindsight, your go-to destination for blockchain data analysis. Our<br /> platform is designed to help you gain
                    insights into token trends, price<br /> movements, and network activity from different blockchain networks in a<br /> visually
                    appealing and easy-to-understand format.
                </p>
                <DefaultButton className='btn-md' to='/roadmap'>View Detailed Roadmap</DefaultButton>
            </div>
        </section>
    )
}