import React from 'react'
import "./ServicesDetails.css"
import { srvdet1 } from '../../utils/images'
import ServicesRightside from './Servicesrightside'

const ServicesDetails = () => {
    const singlepostcreative = {
        singlepostcreativeTitle: "Interior Design",
        boxTitle: "Our company Architect Firm",
        boxSubtitle: "Watch the videos (2.40s)",
        pagesLinkText: "PAGES",
        servicesRightLinkText: "SERVICE DETAILS"
    }



    return (
        <>
            <div>
                <div className="about-div-main-div1">
                    <div className="vertical-lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className='singlepost-creative-banner-div1'>
                        <a href="#">
                            <div className="pages-text">{singlepostcreative.pagesLinkText}</div>
                        </a>
                        <div className='image-single-div-main-img1' style={{ backgroundImage: `url(${srvdet1})` }}>
                        </div>
                        <div className="center-content12">
                            <h1 className="singlecreative-title1">{singlepostcreative.singlepostcreativeTitle}</h1>
                            <div className="box5 box-right5">
                                <div className="circle-img5" />
                                <div>
                                    <p className="box-title5">{singlepostcreative.boxTitle}</p>
                                    <p className="box-sub5">{singlepostcreative.boxSubtitle}</p>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="about-right-text">{singlepostcreative.servicesRightLinkText}</div>
                        </a>
                    </div>
                    <ServicesRightside/>
                </div>
            </div>
        </>
    )
}

export default ServicesDetails
