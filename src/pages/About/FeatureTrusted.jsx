import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeatureTrusted.css";
import { favgold, trustedabout1, ft1, ft2, ft3, ft4 } from "../../utils/images";

const FeatureTrusted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // 👈 slow smooth animation
      once: true,     // ek vaar j animate thase
    });
  }, []);

  return (
    <div className="trusted-feature-div">
      <div className="trusted-div1">
        <div className="feature-div1">
          <img className="trustedabout-image" src={trustedabout1} alt="" />
        </div>

        <div className="trusted-div-main-div">
          <div className="trusted-inner-div">
            <div className="inspiration-image-text-div122">
              <img src={favgold} alt="favgold img" />
              <span className="inspir-about-text122">Gactour feature</span>
            </div>

            <div className="trust-feature-div-text">
              <h2>Trusted Architectural Best Work.</h2>
            </div>
          </div>

          <div className="services-container122">
            <div className="trust-feature-div-line"></div>
            <div className="trust-feature-div-line122"></div>

            <div className="services-grid122">
              <div
                className="service-box122"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature-text-trust-div">
                  <img src={ft1} alt="ft1" />
                </div>
                <div className="feature-text-trust-div1">
                  <h3>Innovative Design</h3>
                  <p>We stay ahead of industry trends by embracing the latest.</p>
                </div>
              </div>

              <div
                className="service-box122"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="feature-text-trust-div">
                  <img src={ft2} alt="ft2" />
                </div>
                <div className="feature-text-trust-div1">
                  <h3>Architectural Drawing</h3>
                  <p>We stay ahead of industry trends by embracing the latest.</p>
                </div>
              </div>

              <div
                className="service-box122"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="feature-text-trust-div">
                  <img src={ft3} alt="ft3" />
                </div>
                <div className="feature-text-trust-div1">
                  <h3>3D Model Building</h3>
                  <p>We stay ahead of industry trends by embracing the latest.</p>
                </div>
              </div>

              <div
                className="service-box122"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="feature-text-trust-div">
                  <img src={ft4} alt="ft4" />
                </div>
                <div className="feature-text-trust-div1">
                  <h3>Building The Space</h3>
                  <p>We stay ahead of industry trends by embracing the latest.</p>
                </div>
              </div>
            </div>

            <div className="learn-more122">
              <button type="submit" className="submit-btn11">
                Learn More{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="4"
                    viewBox="0 0 31 4"
                    fill="none"
                  >
                    <path
                      d="M0.370117 1.75C0.232046 1.75 0.120117 1.86193 0.120117 2C0.120117 2.13807 0.232046 2.25 0.370117 2.25V1.75ZM30.5469 2.17678C30.6445 2.07915 30.6445 1.92085 30.5469 1.82322L28.9559 0.232233C28.8583 0.134602 28.7 0.134602 28.6024 0.232233C28.5047 0.329864 28.5047 0.488155 28.6024 0.585787L30.0166 2L28.6024 3.41421C28.5047 3.51184 28.5047 3.67014 28.6024 3.76777C28.7 3.8654 28.8583 3.8654 28.9559 3.76777L30.5469 2.17678ZM0.370117 2.25H30.3701V1.75H0.370117V2.25Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTrusted;
