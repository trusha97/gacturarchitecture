import React from 'react';
import './Footer.css'
import { facebook, instagram, linkdin, twitter } from '../../utils/images';

const Footer = () => {
  return (
    <footer>
      <div className='footer-main'>
        <div className='footer-inner'>
          <div className='footer-desc'>
            <div>
              <a href="#"><h5 className='hello-gmail'>hello@Gactur.com</h5></a>
              <p className='hello-text'>We build comfortable future for our clients.</p>
            </div>
          </div>
          <div className='footer-number'>
            <div className='our-website-div'>
              <h5 className='our-website'>Our website at</h5>
              <a href='#'><h4 className='gactur-gmail'>Gactur@arc.com</h4></a>
            </div>
            <div className='footer-hurry'>
              <h5 className='our-website'>If you're hurry, quick call for us</h5>
              <h4 className='gactur-gmail'>+88(177)444-90-17</h4>
            </div>
          </div>
          <div className='footer-addres'>
            <div>
              <h3 className='brooklyn'>Brooklyn, New York</h3>
              <p className='brooklyn-desc'>962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.</p>
            </div>
          </div>
        </div>

        <div className="social-icon-main">
          <div className="social-icon-inner">
            <div className="social-icon">
              <a className="icon-wrapper" href="#">
                <img className="icon-img" src={facebook} alt="Facebook" />
              </a>
            </div>
            <div className="social-icon">
              <a className="icon-wrapper" href="#">
                <img className="icon-img" src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="social-icon">
              <a className="icon-wrapper" href="#">
                <img className="icon-img" src={twitter} alt="Twitter" />
              </a>
            </div>
            <div className="social-icon">
              <a className="icon-wrapper" href="#">
                <img className="icon-img" src={linkdin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="footer-link-main">
            <div className="footer-link">
              <div className="footer-link-item">
                <a href="#"><h2 className='link-page'><span className='link-page'>1</span>ABOUT</h2></a>
              </div>
              <div className="footer-link-item">
                <a href="#"><h2 className='link-page'><span className='link-page'>2</span>SERVICES</h2></a>
              </div>
              <div className="footer-link-item">
                <a href="#"><h2 className='link-page'><span className='link-page'>3</span>PROJECTS</h2></a>
              </div>
              <div className="footer-link-item">
                <a href="#"><h2 className='link-page'><span className='link-page'>4</span>TEAM</h2></a>
              </div>
              <div className="footer-link-item">
                <a href="#"><h2 className='link-page'><span className='link-page'>5</span>BLOG</h2></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='themescamp-main-div'>
        <div className='themescamp-inner-div '>
          <p className='theme-right'>© 1995-2025 All rights for <a href='' className='theme-link'>ThemesCamp</a> exclusive</p>
        </div>
      </div>
    </footer>

    
  );
};

export default Footer;
