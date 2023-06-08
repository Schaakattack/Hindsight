import { Link } from "react-router-dom"

import FooterLogo from '../../assets/app-logo.png'

import Instagram from '../../assets/icons/instagram.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Discord from '../../assets/icons/discord.svg'


const ABOUT_LINK_LIST = [
    { 
        text: 'About us', 
        href: '/work-with-us' 
    },
    { 
        text: 'Roadmap', 
        href: '/support' 
    },
    { 
        text: 'Resources', 
        href: '/premium' 
    },
    { 
        text: 'FAQ', 
        href: '/partners' 
    }
];

const CONTACT_INFO = [
    { 
        text: 'info@hindsight.com', 
        href: 'mailto:info@hindsight.com' 
    },
    { 
        text: 'support@hindsight.com', 
        href: 'mailto:support@hindsight.com' 
    }
];  

const CONNECT_LIST = [
    {
        text: "Discord",
        href: ""
    },
    {
        text: "Telegram",
        href: ""
    },
    {
        text: "LinkedIn",
        href: ""
    },
    {
        text: "Twitter",
        href: ""
    },
    {
        text: "Github",
        href: ""
    },
    {
        text: "Youtube",
        href: ""
    }
];

export default function Footer(){
    return (
        <footer className='footer pt-25 pb-10 relative z-10'>
            <div className='container footer-inner mx-auto rounded-2xl'>
                <div className='flex justify-between pb-12.5'>
                    <div className='footer-section flex flex-col'>
                        <Link to='#' className='footer-logo'>
                            <img src={ FooterLogo } alt='footer logo' />
                        </Link>
                        <p className='description text-small font-medium text-footer-color mt-4 relative'>
                            Blockchain data visualization made easy.
                        </p>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-regular font-regular text-xx-medium text-white mb-9'>About</h4>   
                        <ul className='footer-link__list flex flex-col gap-2.5'>
                            {ABOUT_LINK_LIST.map((link, idx) => (
                                <li key={ idx }>
                                    <Link to={ link.href } className='hover:no-underline font-brand-regular text-small font-medium text-light-grey-2 hover:text-yellow-1'>{ link.text }</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-regular font-regular text-xx-medium text-white mb-9'>Connect</h4>   
                        <ul className='footer-link__list flex flex-col justify-between gap-2'>
                            {CONNECT_LIST.map((link, idx) => (
                                <li key={ idx }>
                                    <Link className="text-small font-brand-regular hover:no-underline text-light-grey-2 hover:text-yellow-1" to={ link.href }>
                                        {link.text}
                                        {/* <img src={ link.icon } alt={ link.text } /> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4 className='footer-section__title font-brand-regular font-regular text-xx-medium text-white mb-9'>Get in touch</h4>   
                        <ul className='footer-link__list flex flex-col gap-2.5'>
                            {CONTACT_INFO.map((link, idx) => (
                                <li key={ idx }>
                                    <Link to={ link.href } className='text-small font-brand-regular font-medium text-light-grey-2 hover:text-yellow-1'>{ link.text }</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>      
                <div className='copyright text-center'>
                    <p className='text-base font-medium text-footer-color'>
                        Copyright ©2023 Hindsight, All rights reserved.
                    </p>
                </div>          
            </div>
        </footer>
    )
}