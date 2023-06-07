import React, {useState} from 'react';
import Popup from 'react-animated-popup';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Avatar1 from '../assets/aboutus/avatar1.png';
import Avatar2 from '../assets/aboutus/avatar2.png';
import Avatar3 from '../assets/aboutus/avatar3.png';

const AboutUs = ()=> {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Header/>
            <section className="container mx-auto max-w-xl">
                <h1 className="text-light-grey-2 text-center text-xxx-large-f mt-16 mb-6">About Hindsight</h1>
                <p className='text-x-medium text-light-grey-2 font-brand-regular mb-26'>
                    The Hindsight team is a small but dedicated team, working around the clock to bring the future of
                    blockchain data and community driven information. We will be looking to add to our team but for now
                    here are the people working daily to make the whole space a more easily understood and safer environment as a whole.
                </p>
                <h3 className="text-light-grey-2 text-center text-large mb-6">Mission Statement</h3>
                <p className='text-small text-light-grey-2 font-brand-regular mb-26'>
                    The Hindsight team is a small but dedicated team, working around the clock to bring the future of
                    blockchain data and community driven information. We will be looking to add to our team but for now
                    here are the people working daily to make the whole space a more easily understood and safer environment as a whole.
                </p>
                <h3 className="text-light-grey-2 text-center text-large mb-10">Meet Our Team</h3>
                <div className='flex justify-self-center justify-center gap-6'>
                    <div className='flex flex-col text-center gap-4 cursor-pointer' onClick={()=> setVisible(true)}>
                        <img src={Avatar1} className='rounded-full border-team border-dark-grey-4'></img>
                        <span className='text-large-semi-bold text-light-grey-2'>Chandler Schaak</span>
                        <span className=' text-light-grey-3 text-xx-small font-brand-regular'>Chief Executive Officer</span>
                    </div>
                    <div className='flex flex-col text-center gap-4'>
                        <img src={Avatar2} className='rounded-full border-team border-dark-grey-4'></img>
                        <span className='text-large-semi-bold text-light-grey-2'>Patrick Cole</span>
                        <span className=' text-light-grey-3 text-xx-small font-brand-regular'>Co-Founder</span>
                    </div>
                    <div className='flex flex-col text-center gap-4'>
                        <img src={Avatar3} className='rounded-full border-team border-dark-grey-4'></img>
                        <span className='text-large-semi-bold text-light-grey-2'>Darian Wang</span>
                        <span className=' text-light-grey-3 text-xx-small font-brand-regular'>Software Engineer</span>
                    </div>
                </div>
                <h3 className="text-light-grey-2 text-center text-large mt-28 mb-6">Contact Us</h3>
                <p className='text-small text-light-grey-2 font-brand-regular mb-26'>
                    Our Team would love to hear from you. If you would like to work with us or have feedback please reach us at our Discord or ContactUs@hindsight.vip. We would love to start experimenting with tagging wallets and malicious contracts and would love to get community feedback on where to start. What network and project will be the first?
                </p>
                
            </section>
            <Popup visible={visible} style={{maxWidth: '732px', backgroundColor:'#202325', border: '1px #303437 solid', padding: '32px'}} onClose={() => setVisible(false)}>
                <div className='flex cursor-pointer bg-dark-grey-4 gap-4'>
                    <img src={Avatar1} className='rounded-full border-team-popup border-dark-grey-3 w-[144px] h-[144px]'></img>
                    <div className='flex flex-col gap-2'>
                        <span className='text-large-semi-bold text-light-grey-2 font-brand-regular'>Chandler Schaak</span>
                        <span className=' text-light-grey-3 text-xx-small font-brand-regular'>Chief Executive Officer</span>
                        <p className='text-small text-light-grey-2 font-brand-regular font-light'>
                            Based in Oregon, US and recently moved back to rural Oregon. This has really inspired and driven the inspiration to the work over the last 3 years, to build software and solutions that are high impact, low cost and can be implemented in the middle-of-nowhere for small agriculture based businesses. After continuing education, a tool to make blockchain transactions and display NFT collections and rugs was thus born. More personally is the passion for working in the orchard and fishing.
                        </p>
                    </div>
                </div>
            </Popup>
            <Footer/>
        </>
    );
}

export default AboutUs