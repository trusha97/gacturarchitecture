import React, { useEffect } from "react";
import "./InteriorSingle.css";
import { facebook, instagram, linkdin, singleportfolio2, singleportfolio3, singleportfoliobanner, twitter } from "../../utils/images";

const InteriorSingle = () => {
    const services = [
        "Client",
        "Project Year",
        "Category",
        "Project Name",
        "Location",
        "Website",
        "Social Icon",
    ];

    const service2 = [
        "Towkib LTD.",
        "2018-2024",
        "Interior Design",
        "Gactour House",
        "New York",
        "www.gactour.com",
    ];

    useEffect(() => {
        const images = document.querySelectorAll(".animate-on-scroll");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target); // once animated, stop observing
                    }
                });
            },
            { threshold: 0.3 }
        );

        images.forEach((img) => observer.observe(img));
    }, []);

    return (
        <div className="service-right-side-maindiv">
            {/* Left Side */}
            <div className="service-desctiption-div-main">
                <div className="service-desctiption-div">
                    <div className="service-desctiption-text-div">
                        <h2>Description</h2>
                    </div>

                    <div className="service-desctipt-text-parg">
                        <h2 className="service-desctipt-seem1">
                            It seems like you might be quoting or referencing something an
                            architecture client said. Could you provide more details or
                            clarify what you're looking for.
                        </h2>
                        <h2 className="service-desctipt-seem2">
                            Our interior design services offer a comprehensive approach to
                            transforming spaces into functional, aesthetically pleasing
                            environments. We begin with an in-depth consultation to
                            understand your vision and needs, followed by concept development,
                            where we create detailed design plans,
                        </h2>
                    </div>

                    <div className="service-description-interior">
                        <h2>
                            "Interior Design Schemes Developing cohesive design plans,
                            including color schemes, textures, and patterns functional needs."
                        </h2>
                    </div>

                    <div className="single-image-div-portfolio">
                        <img
                            className="animate-on-scroll"
                            src={singleportfoliobanner}
                            alt=""
                        />
                    </div>

                    <div className="service-desctiption-text-div service-des-using">
                        <h2>Advantages</h2>
                    </div>

                    <div className="service-desctipt-text-parg">
                        <h2 className="service-desctipt-seem1 ">
                            Using 3D renderings, we provide realistic visualizations, ensuring
                            you're confident in the design before implementation. Our project
                            management team oversees every aspect, from budget and timeline
                            management to procurement and installation. We also specialize in
                            bespoke designs, customizing furniture and décor to perfectly suit
                            your space.
                        </h2>
                    </div>

                    <div className="service-des-image-main-div">
                        <div className="service-image-div-single">
                            <div className="service-single-div-image service-sinle-image-div">
                                <img
                                    className="animate-on-scroll"
                                    src={singleportfolio2}
                                    alt=""
                                />
                            </div>
                            <div className="service-single-div-image service-sinle-image-div">
                                <img
                                    className="animate-on-scroll"
                                    src={singleportfolio3}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="service-desc-interior-styling">
                        <span className="service-interiot-text-desc">
                            Interior Styling:
                        </span>{" "}
                        Adding the final touches that bring the space to life, from
                        arranging furniture to placing décor.
                    </div>

                    <div className="service-staging-photo-div">
                        <span className="service-interiot-text-desc">
                            Staging for Photoshoots:
                        </span>{" "}
                        Preparing the space for photoshoots, ensuring it looks perfect for
                        marketing or portfolio use.
                    </div>

                    {/* Navigation */}
                    <div className="nav-container222">
                        {/* Left side */}
                        <a href="#" className="nav-left222">
                            <button className="nav-btn222">
                                <span className="service-rl-div-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 171.3 123.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144z"></path>
                                    </svg>
                                </span>
                            </button>
                            <p className="nav-text222">Architecture & Building</p>
                        </a>

                        {/* Right side */}
                        <a href="#" className="nav-right222">
                            <p className="nav-text222">House Renovation</p>
                            <button className="nav-btn222">
                                <span className="service-rl-div-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"></path>
                                    </svg>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="service-right-side-main-div">
                    <div className="social-main-div-box1">
                        <div className="social-sidebar-title1">SERVICES LIST</div>
                        {/* <ul className="social-div-services-list1">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="social-diaV-services1">
                    <a href="#">{service}</a>
                    {service === "Social Icon" ? (
                      <div className="social-icon-inner1">
                        <div className="social-icon1">
                          <a className="icon-wrapper1" href="#">
                            <img
                              className="icon-img1"
                              src={facebook}
                              alt="Facebook"
                            />
                          </a>
                        </div>
                        <div className="social-icon1">
                          <a className="icon-wrapper1" href="#">
                            <img
                              className="icon-img1"
                              src={instagram}
                              alt="Instagram"
                            />
                          </a>
                        </div>
                        <div className="social-icon1">
                          <a className="icon-wrapper1" href="#">
                            <img
                              className="icon-img1"
                              src={twitter}
                              alt="Twitter"
                            />
                          </a>
                        </div>
                        <div className="social-icon1">
                          <a className="icon-wrapper1" href="#">
                            <img
                              className="icon-img1"
                              src={linkdin}
                              alt="LinkedIn"
                            />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <a href="#">{service2[index]}</a>
                    )}
                  </div>
                </li>
              ))}
            </ul> */}


                        <ul className="social-div-services-list1">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <div className="social-diaV-services1">
                                        <a href="#">{service}</a>

                                        {service === "Social Icon" ? (
                                            <div className="social-icon-inner1">
                                                <div className="social-icon1">
                                                    <a className="icon-wrapper1" href="#">
                                                        <img className="icon-img1" src={facebook} alt="Facebook" />
                                                    </a>
                                                </div>
                                                <div className="social-icon1">
                                                    <a className="icon-wrapper1" href="#">
                                                        <img className="icon-img1" src={instagram} alt="Instagram" />
                                                    </a>
                                                </div>
                                                <div className="social-icon1">
                                                    <a className="icon-wrapper1" href="#">
                                                        <img className="icon-img1" src={twitter} alt="Twitter" />
                                                    </a>
                                                </div>
                                                <div className="social-icon1">
                                                    <a className="icon-wrapper1" href="#">
                                                        <img className="icon-img1" src={linkdin} alt="LinkedIn" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            <a href="#">{service2[index]}</a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteriorSingle;
