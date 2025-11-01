import React from 'react'
import "./BlogsTwo.css"
import BlogDetailpage from './BlogDetailpage';
import OurWebsite from './OurWebsite';

const BlogsTwo = () => {
  const aboutData = {
    pagesLinkText: "PAGES",
    aboutTitle: "Blog Page",
    boxTitle: "Our company Architect Firm",
    boxSubtitle: "Watch the videos (2.40s)",
    aboutRightLinkText: "BLOGS2"
  };
  return (
    <>
      <div className="about-div-main-div">
        <div className="vertical-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>


        <div className="about-container">
          <a href="#">
            <div className="pages-text">{aboutData.pagesLinkText}</div>
          </a>

          <div className="center-content">
            <h1 className="about-title">{aboutData.aboutTitle}</h1>
            <div className="box2 box-right3">
              <div className="circle-img3" />
              <div>
                <p className="box-title3">{aboutData.boxTitle}</p>
                <p className="box-sub3">{aboutData.boxSubtitle}</p>
              </div>
            </div>
          </div>

          <div className="gold-bar"></div>

          <a href="#">
            <div className="about-right-text">{aboutData.aboutRightLinkText}</div>
          </a>
        </div>
        <BlogDetailpage/>
        <OurWebsite/>
      </div>
    </>
  )
}

export default BlogsTwo
