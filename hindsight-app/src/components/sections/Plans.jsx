import { useState } from 'react';
import CheckIcon from '../../assets/check-icon.svg'
import PlanItem from '../items/PlanItem';
const Plans = ()=>{
    const [toggleActive, setToggleActive] = useState(true);
    const handleChange = (e) => { 
        setToggleActive(!toggleActive);
    };
    return (
        <section className="relative z-10">
            <div className="container mx-auto max-w-xl">
                <div className="text-xxx-large-x text-light-grey-3 text-center mb-12 mt-20">Unlock Hindsight's Full Potential</div>
                <p className='font-brand-regular font-regular text-x-medium text-secondary-color text-center mb-16'>
                    Our premium service provides advanced features and benefits for those looking for insights and protection against scams.
                </p>
                <div className='toggle-action flex items-center justify-center gap-2.5 mb-7'>
                    <label className={ `text-small toggle-action__label font-medium tracking-tighter ${toggleActive ? 'text-light-grey-0' : 'text-fourth-color' }` }>Monthy</label>
                    <div className='toggle-button'>                        
                        <input type='checkbox' id='switch' className='h-0 w-0 hidden invisible' onChange={ handleChange } />
                        <label htmlFor='switch' className='block w-xxs h-xxs rounded-xxl cursor-pointer indent-m-9999 bg-tertiary-color relative'>
                            <img src={ CheckIcon } className='icon top-1 left-1 min-w-3 min-h-xxs bg-btn-switch-circle-bg-color rounded-r-full rounded-l-full transition-all duration-300 py-1.7 px-1.3 absolute' />
                        </label>
                    </div>
                    <label className={ `toggle-action__label font-medium text-small tracking-tighter ${toggleActive ? 'text-fourth-color' : 'text-light-grey-0' }` }>Yearly</label>
                </div>
                <div className="rounded-normal border rounded-yellow-1 px-10 grid grid-cols-4 grid-flow-row gap-10 bg-gradient-pricing">
                    <div className='flex flex-col py-10'>
                        <span>&nbsp;</span>
                        <span className='text-xs-large text-light-grey-0 mb-10'>Pricing</span>
                        <div className='gap-8 flex flex-col'>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>Unlimited Access</span>
                            <span className='text-xx-small text-light-grey-3'>Advanced historical data analysis and comparison</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>Support</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>No Ads</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>Discord bot</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>Report wallets</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>5 Team Members</span>
                            <span className='text-xx-small text-light-grey-3 py-[10px] content-start'>Tagged suspicious addresses</span>
                        </div>
                        
                    </div>
                    <div className='flex flex-col py-10 place-items-center hover:bg-gradient-pricing-item-bg'>
                        <span>Basic</span>
                        <span className='text-xs-large text-light-grey-0 mb-10'>Free</span>
                        <PlanItem/>
                    </div>
                    <div className='flex flex-col py-10 place-items-center hover:bg-gradient-pricing-item-bg'>
                        <span>Recommended</span>
                        <span className='text-xs-large text-light-grey-0 mb-10'>$5/month</span>
                        <PlanItem/>
                    </div>
                    <div className='flex flex-col py-10 place-items-center hover:bg-gradient-pricing-item-bg'>
                        <span>Team</span>
                        <span className='text-xs-large text-light-grey-0 mb-10'>$20/month</span>
                        <PlanItem/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans;