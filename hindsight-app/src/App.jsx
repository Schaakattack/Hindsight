import { useState } from 'react'
import Slider from "react-slick";


import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import WhatDoWe from './components/WhatDoWe'
import Features from './components/Features'
import Roadmap from './components/Stages'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss'

import BannerImg01 from './assets/banner-img01.png'
import BannerImg02 from './assets/banner-img02.png'

const BANNER_LIST = [
  { title: 'Blockchain data <br /> visualization<br> made easy.',
    desc: 'A platform designed to help you gain insights into token trends<br />and network activity from different blockchain networks in a visually<br />appealing and easy-to-understand format.',
    img: BannerImg01
  },
  { title: 'Blockchain data <br /> visualization<br> made easy.',
    desc: 'A platform designed to help you gain insights into token trends<br />and network activity from different blockchain networks in a visually<br />appealing and easy-to-understand format.',
    img: BannerImg02
  }
];

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header />
      <Slider >
        {BANNER_LIST.map((item, idx) => (
          <Banner { ...item } />
        ))}
      </Slider>      
      <WhatDoWe />
      <Features />
      <Roadmap />
      <div className='main-bg z-[-3]'></div>
      <Footer />
    </>
  )
}

export default App
