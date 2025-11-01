import React from "react";
import "./TestimonialsBanner.css";

const TestimonialsBanner = () => {
  const contactData = {
    pagesLinkText: "PAGES",
    aboutTitle: "Testimonials",
    boxTitle: "Our company Architect Firm",
    boxSubtitle: "Watch the videos (2.40s)",
    aboutRightLinkText: "TESTIMONIALS"
  };

  return (
    <>
      <div className="about-div-main-div1">
        <div className="vertical-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>


        <div className="about-container">
          <a href="#">
            <div className="pages-text">{contactData.pagesLinkText}</div>
          </a>

          <div className="center-content">
            <h1 className="about-title">{contactData.aboutTitle}</h1>
            <div className="box2 box-right3">
              <div className="circle-img3" />
              <div>
                <p className="box-title3">{contactData.boxTitle}</p>
                <p className="box-sub3">{contactData.boxSubtitle}</p>
              </div>
            </div>
          </div>

          <div className="gold-bar"></div>

          <a href="#">
            <div className="about-right-text">{contactData.aboutRightLinkText}</div>
          </a>

        </div>
      </div>
    </>
  );
};

export default TestimonialsBanner;
