import React from 'react'
import VipCustomer from './Home/VipCustomer'
import BestService from './Home/BestService'
import WhatClientSay from './Home/WhatClientSay'
import ImageProject from './Home/ImageProject'
import Banner from './Home/Banner'
import About from './Home/About'
import Portfolio from './Home/Portfolio'
import PentagramSlider from './Home/pentagramSlider'
import MindProject from './Home/MindProject'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='all-section-main-div'>
        <div className="vertical-lines1">
        <div className="line32"></div>
        <div className="line32"></div>
        <div className="line32"></div>
        <div className="line32"></div>
      </div>
        <PentagramSlider />
        <Banner />
        <About />
        <VipCustomer />
        <BestService />
        <Portfolio />
        <WhatClientSay />
        <ImageProject />
        <MindProject />
      </div>
    </>
  )
}

export default Home
