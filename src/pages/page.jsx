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

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <VipCustomer />
      <BestService />
      <Portfolio />
      <WhatClientSay />
      <ImageProject />
      <MindProject/>
      <PentagramSlider />
    </>
  )
}

export default Home
