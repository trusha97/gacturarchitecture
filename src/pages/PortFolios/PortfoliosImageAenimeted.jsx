import React from 'react'
import "./PortfoliosImageAenimeted.css"
import { blog1, faqbannerimage, hero_section_bg, portfolio21, portfolio22, singleservice3 } from '../../utils/images'

const PortfoliosImageAenimeted = () => {
  return (
    <div className='portfoloi-image-div-main-aenimted'>
      <div className='poertfolio-image-aenimted'>
        
        {/* Row 1 */}
        <div className='portfolios2-image-div-main'>
          <div className='portfolio-aemited-image-main-div'>
            <a href="#">
              <img src={singleservice3} alt="" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">ARCHITECT , INTERIOR</span>
                <h3>Interior Design</h3>
              </div>
            </a>
          </div>

          <div className='portfolio-aemited-image-main-div2'>
            <a href="#">
              <img src={portfolio21} alt="" />
              <div className="portfolio-overlay portfolio-overlay1">
                <span className="portfolio-tag portfolio-tag1">ARCHITECT , INTERIOR</span>
                <h3>CLASSIC HOME PROJECT</h3>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className='portfolios2-image-div-main'>
          <div className='portfolio-aemited-image-main-div2'>
            <a href="#">
              <img src={blog1} alt="" />
              <div className="portfolio-overlay portfolio-overlay1">
                <span className="portfolio-tag portfolio-tag1">ARCHITECT , INTERIOR</span>
                <h3>Retail and Hospitality</h3>
              </div>
            </a>
          </div>

          <div className='portfolio-aemited-image-main-div'>
            <a href="#">
              <img src={faqbannerimage} alt="" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">ARCHITECT , INTERIOR</span>
                <h3>ABERY Apartment Bedroom</h3>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className='portfolios2-image-div-main'>
          <div className='portfolio-aemited-image-main-div'>
            <a href="#">
              <img src={portfolio22} alt="" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">ARCHITECT , INTERIOR</span>
                <h3>RESTAURANT DECORATE</h3>
              </div>
            </a>
          </div>

          <div className='portfolio-aemited-image-main-div2'>
            <a href="#">
              <img src={hero_section_bg} alt="" />
              <div className="portfolio-overlay portfolio-overlay1">
                <span className="portfolio-tag portfolio-tag1">ARCHITECT , INTERIOR</span>
                <h3>Retail and Hospitality</h3>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfoliosImageAenimeted
