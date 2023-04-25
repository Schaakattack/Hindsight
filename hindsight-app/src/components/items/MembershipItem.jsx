import CheckIcon from '../../assets/check-icon02.svg'

import DefaultButton from '../buttons/DefaultButton'

const MembershipItem = ({ title, desc, list, price_info, sign_up_link }) => {
    return (
        <div className='membership-item rounded-xl w-2/4 px-11.7 py-5'>
            <div className='membership-item__content rounded-xl flex gap-10 items-start h-full relative'>                
                <div className='membership-item__content--body flex flex-col px-10 py-11.8 h-full bg-gradient-item-blur-bg rounded-xl after:bg-gradient-item-blur-border-bg after:bg-origin-border after:top-m-2 after:bottom-m-2 after:left-m-2 after:right-m-2 after:rounded-xl after:border-2 after:border-transparent after:rounded-xl after:z-[-1] after:absolute webkit-mask backdrop-blur-lg'>
                    <h3 className='font-brand-bold font-semibold text-title-xl text-brand-200 mb-2.5'>{ title }</h3>
                    <p className='description font-medium text-sm tracking-tightest text-brand-100'>{ desc }</p>
                    <hr className='divider h-px w-xxl bg-divider-bg-color my-7.5' />
                    <ul className='features flex flex-col gap-3 max-w-xxl font-medium text-sm tracking-tightest text-brand-50'>
                        {list.map((item, idx) => (
                            <li className='flex gap-2 items-center' key={ idx }> <img src={ CheckIcon } alt='' /> { item }</li>
                        ))}
                    </ul>
                    <hr className='divider h-px w-xxl bg-divider-bg-color my-7.5' />
                    <h4 className='mb-7.5 flex font-brand-medium items-center font-semibold text-title-x-lg text-brand-50'>
                        { price_info.price } 
                        <span className='font-medium text-sm tracking-tightest text-brand-50'>{ ` / ${ price_info.title }` }</span> 
                    </h4>
                    <DefaultButton className='btn-default' to={ sign_up_link }>Sign Up</DefaultButton>                    
                </div>                                
            </div>
        </div>
    )
}

export default MembershipItem