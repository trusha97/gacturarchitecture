
import React from "react";
import "./About.css";
import InspirationsSection from "./InspirationsSection";
import ArchitectureList from "./ArchitectureList";
import FeatureTrusted from "./FeatureTrusted";
import ViedoAboutSection from "./ViedoAboutSection";
import TeamAbout from "./TeamAbout";
import LogosGridAbout from "./LogosGridAbout";

const About = () => {
  const aboutData = {
    pagesLinkText: "PAGES",
    aboutTitle: "About Us",
    boxTitle: "Our company Architect Firm",
    boxSubtitle: "Watch the videos (2.40s)",
    aboutRightLinkText: "ABOUT"
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
        <InspirationsSection/>
        <ArchitectureList/>
        <FeatureTrusted/>
        <ViedoAboutSection/>
        <TeamAbout/>
        <LogosGridAbout/>
      </div>
    </>
  );
};

export default About;
