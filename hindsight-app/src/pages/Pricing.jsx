import React, { useState } from 'react';

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Plans from '../components/sections/Plans';

function Pricing(){
    const [toggleActive, setToggleActive] = useState(true);
    const handleChange = (e) => { 
        setToggleActive(!toggleActive);
    };

    return (
        <>
            <Header />
            <Plans/>
            <Footer />
        </>
    )
}

export default Pricing