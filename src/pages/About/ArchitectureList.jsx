import React, { useEffect } from 'react'
import "./ArchitectureList.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { favgold, sr1, sr2, sr3, sr4, aboutimg1 } from '../../utils/images'

const services = [
    { id: "01", title: "ARCHITECTURAL DESIGN", svg: sr1, img: aboutimg1 },
    { id: "02", title: "LANDSCAPE DESIGN", svg: sr2, img: aboutimg1 },
    { id: "03", title: "3D ARCHITECT DESIGN", svg: sr3, img: aboutimg1 },
    { id: "04", title: "DÉCOR & ART DESIGN", svg: sr4, img: aboutimg1 },
];

const ArchitectureList = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true }); // once = ek vaar animation
    }, []);

    return (
        <div className='architecture-list-div'>
            <div className='architecture-main-div'>
                <div className='architecture-inner-div'>
                    <div className='inspiration-image-text-div'>
                        <img src={favgold} alt="favgold img" />
                        <span className='inspir-about-text1'>Our Services</span>
                    </div>
                    <div className='insights-hed'>
                        <h2>Insights and Inspirations in Architecture</h2>
                    </div>
                </div>

                {/* Services List */}
                <div className="services-container">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-row"
                            data-aos="fade-up"        // 👈 fadeInUp jevu
                            data-aos-delay={index * 200} // 👈 ek ek kare delay
                        >
                            {/* ID + Title */}
                            <div className="service-left">
                                <span className="service-id-div">{service.id}</span>
                                <div className="service-title">{service.title}</div>
                            </div>

                            {/* Icon */}
                            <div className="service-icon22">
                                <img src={service.svg} alt={service.title} />
                            </div>

                            {/* Animated Image */}
                            <div className='service-aenim-image'>
                                <img className='service-aenim-image22' src={service.img} alt={service.title} />
                            </div>

                            {/* Arrow */}
                            <div className='svg-button-service'>
                                <button className="service-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M336 96c8.8 0 16 7.2 16 16V336c0 
                      8.8-7.2 16-16 16s-16-7.2-16-16V150.6L59.3 
                      411.3c-6.2 6.2-16.4 6.2-22.6 
                      0s-6.2-16.4 0-22.6L297.4 128H112c-8.8 
                      0-16-7.2-16-16s7.2-16 16-16H336z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="all-services-btn">
                        <button type="submit" className="submit-btn11">
                            All Services{" "}
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
                </div>
            </div>
        </div>
    )
}

export default ArchitectureList
