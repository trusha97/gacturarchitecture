import React from 'react'
import "./SinglePostSocial.css"
import { FiSearch } from "react-icons/fi";
import { sicialimg1, sicialimg2, sicialimg3, sicialimg4, sicialimg5, sicialimg6 } from '../../utils/images';

const SinglePostSocial = () => {

  const services = [
    "Figma Design",
    "Industry",
    "Information architecture",
    "Prototyping",
    "Uncategorized",
    "UX strategy",
    "Wireframing",
  ];

  const instaImages = [
    { icon: sicialimg1 },
    { icon: sicialimg2 },
    { icon: sicialimg3 },
    { icon: sicialimg4 },
    { icon: sicialimg5 },
    { icon: sicialimg6 },
  ];

  return (
    <div className="social-icon-single-div">
      {/* Search Section */}
      <div className="social-main-div-box">
        <div className="social-sidebar-title">SEARCH HERE</div>
        <div className="social-search-box">
          <input type="text" placeholder="Enter Your Keyword..." />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="social-main-div-box">
        <div className="social-sidebar-title">SERVICES LIST</div>
        <ul className="social-div-services-list">
          {services.map((service, index) => (
            <li key={index}>
              <a href="#">{service}<svg className='arrow-icon' viewBox="0 0 512 512"><path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"></path></svg></a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div className="social-main-div-box">
        <div className="social-sidebar-title">SOCIAL MEDIA</div>
        <div className="social-search-box">
          <div class="social-icon-inner">
            <div class="social-icon">
              <a class="icon-wrapper1" href="#"><img class="icon-img" alt="Facebook" src="/src/assets/images/facebook.png"/></a>
            </div>
            <div class="social-icon">
              <a class="icon-wrapper1" href="#"><img class="icon-img" alt="Instagram" src="/src/assets/images/instagram.png"/></a>
            </div>
            <div class="social-icon">
              <a class="icon-wrapper1" href="#"><img class="icon-img" alt="Twitter" src="/src/assets/images/twitter.png"/></a>
            </div>
            <div class="social-icon">
              <a class="icon-wrapper1" href="#"><img class="icon-img" alt="LinkedIn" src="/src/assets/images/linkedin.png"/></a>
            </div>
          </div>

        </div>
      </div>

      {/* Instagram Follow */}
      <div className="social-main-div-box">
        <div className="social-sidebar-title">INSTAGRAM FOLLOW</div>
        <div className="insta-grid">
          {instaImages.map((item, index) => (
            <div className="insta-img" key={index}>
              <img src={item.icon} alt={`Instagram ${index}`} />
            </div>
          ))}
        </div>
        <button className="insta-btn"><svg aria-hidden="true" class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> Follow Us Instagram</button>
      </div>
    </div>
  )
}

export default SinglePostSocial
