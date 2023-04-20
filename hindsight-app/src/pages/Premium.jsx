import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

import MembershipItem from '../components/MembershipItem'

import CheckIcon from '../assets/check-icon.svg'

const MEMBERSHIP_DATA_LIST = [
    { 
        title: "Individual", 
        desc: "Upgrade to our Individual Plan for comprehensive token analysis.", 
        list: ['Unlimited Access', 'Advanced historical data analysis and comparison', 'Support'],
        price_info: { price: "$5", title:'per month' },
        sign_up_link: ''
    },
    { 
        title: "Team", 
        desc: "Elevate your token analysis with our Team Plan, designed for collaborative use.", 
        list: ['Unlimited Access', 'Advanced historical data analysis and comparison', '5 Team Members', 'Support'],
        price_info: { price: "$20", title:'per month' },
        sign_up_link: ''
    }
];

function Premium(){
    const [toggleActive, setToggleActive] = useState(true);
    const handleChange = (e) => { 
        setToggleActive(!toggleActive);
    };

    return (
        <div className="App">      
            <Header />

            <section className='membership-section pt-[114px]'>
                <div className="container mx-auto flex flex-col gap-10">
                    <h3 className="text-center section-title">Unlock Premium Membership</h3>
                    <p className='section-description text-center px-[70px]'>
                        Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.
                    </p>
                    <div className='toggle-action flex items-center justify-center gap-2.5'>
                        <label className={ `toggle-action__label ${toggleActive ? 'active' : '' }` }>Monthy</label>
                        <div className='toggle-button'>                        
                            <input type="checkbox" id="switch" onChange={ handleChange } /><label for="switch"><img src={CheckIcon} className='icon' /></label>
                        </div>
                        <label className={ `toggle-action__label ${!toggleActive ? 'active' : '' }` }>Yearly</label>
                    </div>                    
                    <div className='flex flex-wrap px-[100px]'>
                        {MEMBERSHIP_DATA_LIST.map((item, idx) => (
                            <MembershipItem { ...item } />
                        ))}
                    </div>
                </div>
            </section>

            <div className='main-bg z-[-2]'></div>
            
            <Footer />
        </div>
    )
}

export default Premium