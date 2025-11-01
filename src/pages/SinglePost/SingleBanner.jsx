import React from 'react'
import "./singleBanner.css"
import { portfolio_image_one, user } from '../../utils/images'

const SingleBanner = () => {
  return (
    <div className='blog-card-singlebanner-div'>
      <div className='image-single-div-main' style={{ backgroundImage: `url(${portfolio_image_one})` }}>
      </div>
      <div className='blog-content-singlebanner-div'>
        <span className='single-div-text-day day-div-text'>
          <span className='single-day-div'>02</span> October
        </span>
        <span className='single-design-div'>
          <a href="#" className='single-text-div'>Figma Design</a>
        </span>
        <h1 className='single-design-text-div'>The Intersection of Art and Function Exploring</h1>
        <ul className='post-detail-single-banner-div'>
          <li className="post-detail-div-single">
            <i className="lnr lnr-user"></i>
            <a className='font-awesome-text-div' href="#">wpuser</a>
          </li>

          <li className="post-detail-div-single">
            <i className="lnr lnr-bubble"></i>
            <a className='font-awesome-text-div' href="#">0 Comments</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingleBanner
