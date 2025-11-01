import React from 'react'
import "./Services.css"
import ServiceLinkSection from './ServiceLinkSection'
import ArchitecturalServices from './ArchitecturalServices'

const Services = () => {
  return (
    <>
      <div className='main-service-div-div'>
        <ServiceLinkSection/>
        <ArchitecturalServices/>
      </div>
    </>
  )
}

export default Services
