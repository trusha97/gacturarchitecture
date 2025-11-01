import React from 'react'
import "./SinglePostCreative.css"
import { blog_bg_scaled } from '../../utils/images'
import Singleposttab from './Singleposttab'

const SinglePostCreative = () => {
  const singlepostcreative = {
    singlepostcreativeTitle: "Blog Details",
    boxTitle: "Our company Architect Firm",
    boxSubtitle: "Watch the videos (2.40s)",
  }

  return (
    <>
      <div>
        <div className="about-div-main-div">
        <div className="vertical-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className='singlepost-creative-banner-div'>
          <div className='image-single-div-main-img' style={{ backgroundImage: `url(${blog_bg_scaled})` }}>
          </div>
          <div className="center-content1">
            <h1 className="singlecreative-title">{singlepostcreative.singlepostcreativeTitle}</h1>
            <div className="box4 box-right4">
              <div className="circle-img4" />
              <div>
                <p className="box-title4">{singlepostcreative.boxTitle}</p>
                <p className="box-sub4">{singlepostcreative.boxSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <Singleposttab />
      </div>
      </div>
    </>
  )
}

export default SinglePostCreative
