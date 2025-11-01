import React from 'react'
import "./ServiceRightside.css"
import { singleservice1, singleservice2, singleservice3 } from '../../utils/images';

const ServicesRightside = () => {
    const services = [
        "Figma Design",
        "Industry",
        "Information architecture",
        "Prototyping",
        "Uncategorized",
        "UX strategy",
        "Wireframing",
    ];
    return (
        <div className='service-right-side-maindiv'>
            <div className='service-desctiption-div-main'>
                <div className='service-desctiption-div'>
                    <div className='service-desctiption-text-div'>
                        <h2>Description</h2>
                    </div>
                    <div className='service-desctipt-text-parg'>
                        <h2 className='service-desctipt-seem1'>It seems like you might be quoting or referencing something an architecture client said. Could you provide more details or clarify what you're looking for.</h2>
                        <h2 className='service-desctipt-seem2'>Our interior design services offer a comprehensive approach to transforming spaces into functional, aesthetically pleasing environments. We begin with an in-depth consultation to understand your vision and needs, followed by concept development, where we create detailed design plans,</h2>
                    </div>
                    <div className='service-description-interior'>
                        <h2>"Interior Design Schemes Developing cohesive design plans, including color schemes, textures, and patterns functional needs."</h2>
                    </div>
                    <div className='service-desctiption-text-div service-des-using'>
                        <h2>Advantages</h2>
                    </div>
                    <div className='service-desctipt-text-parg'>
                        <h2 className='service-desctipt-seem1 '>Using 3D renderings, we provide realistic visualizations, ensuring you're confident in the design before implementation. Our project management team oversees every aspect, from budget and timeline management to procurement and installation. We also specialize in bespoke designs, customizing furniture and décor to perfectly suit your space.</h2>
                    </div>
                    <div className='service-desc-interior-styling'>
                        <span className='service-interiot-text-desc'>Interior Styling:</span> Adding the final touches that bring the space to life, from arranging furniture to placing décor.
                    </div>
                    <div className='service-staging-photo-div'>
                        <span className='service-interiot-text-desc'>Staging for Photoshoots:</span> Preparing the space for photoshoots, ensuring it looks perfect for marketing or portfolio use.
                    </div>

                    <div className='service-des-image-main-div'>
                        <div className='service-des-img-inner'>
                            <img src={singleservice1} alt="" />
                        </div>
                        <div className='service-image-div-single'>
                            <div className='service-single-div-image'>
                                <img src={singleservice2} alt="" />
                            </div>
                            <div className='service-single-div-image'>
                                <img src={singleservice3} alt="" />
                            </div>
                        </div>
                    </div>








                    <div className="nav-container222">
                        {/* Left side */}
                        <a href='#' className="nav-left222">
                            <button className="nav-btn222">
                                <span className='service-rl-div-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 171.3 123.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144z"></path></svg></span>
                            </button>
                            <p className="nav-text222">Architecture & Building</p>
                        </a>

                        {/* Right side */}
                        <a href='#' className="nav-right222">
                            <p className="nav-text222">House Renovation</p>
                            <button className="nav-btn222">
                                <span className='service-rl-div-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"></path></svg></span>
                            </button>
                        </a>
                    </div>
                </div>











                <div className='service-right-side-main-div'>
                    {/* Services List */}
                    <div className="social-main-div-box1">
                        <div className="social-sidebar-title1">SERVICES LIST</div>
                        <ul className="social-div-services-list1">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#">{service}<svg className='arrow-icon1' viewBox="0 0 512 512"><path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"></path></svg></a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* {Form } */}
                    <div className="form-container2">
                        <div className="social-sidebar-title1">
                            YOU HAVE QUESTION ?
                        </div>
                        <form className="form-body2">
                            <input type="text" placeholder="Full Name*" required />
                            <input type="email" placeholder="Email*" required />
                            <input type="tel" placeholder="Phone No*" required />
                            <textarea placeholder="Message*" required></textarea>
                            <div>
                                <button type="submit" className="submit-btn32">
                                    Submit Now{" "}
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="4" viewBox="0 0 31 4" fill="none">
                                            <path
                                                d="M0.370117 1.75C0.232046 1.75 0.120117 1.86193 0.120117 2C0.120117 2.13807 0.232046 2.25 0.370117 2.25V1.75ZM30.5469 2.17678C30.6445 2.07915 30.6445 1.92085 30.5469 1.82322L28.9559 0.232233C28.8583 0.134602 28.7 0.134602 28.6024 0.232233C28.5047 0.329864 28.5047 0.488155 28.6024 0.585787L30.0166 2L28.6024 3.41421C28.5047 3.51184 28.5047 3.67014 28.6024 3.76777C28.7 3.8654 28.8583 3.8654 28.9559 3.76777L30.5469 2.17678ZM0.370117 2.25H30.3701V1.75H0.370117V2.25Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesRightside
