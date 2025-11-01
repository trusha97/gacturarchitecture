import React, { useEffect, useRef } from "react";
import "./ServiceLinkSection.css";
import {
  service1,
  service2,
  service3,
  service4,
  serviceimg1,
  serviceimg2,
  serviceimg3,
  serviceimg4,
} from "../../utils/images"; // adjust paths

const services = [
  { id: "01", title: "Interior Consulting", icon: service1, image: serviceimg1 },
  { id: "02", title: "Architecture & Building", icon: service2, image: serviceimg2 },
  { id: "03", title: "Landscaping Design", icon: service3, image: serviceimg3 },
  { id: "04", title: "Décor & Art Design", icon: service4, image: serviceimg4 },
];

const ServiceLinkSection = () => {
  const imageRefs = useRef({});

  // ✅ Animate on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // ek vaar j animate thavu
          }
        });
      },
      { threshold: 0.3 } // 30% visible
    );

    services.forEach((service) => {
      if (imageRefs.current[service.id]) {
        observer.observe(imageRefs.current[service.id]);
      }
    });
  }, []);

  return (
    <div className="service-section-div-main-div">
      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${index >= 2 ? "reverse" : ""}`} // reverse for 03, 04
          >
            <a className="service-content" href="#">
              <div className="service-text">
                <h2>{service.id}</h2>
                <h3 className="service-div-title23">
                  <p className="service-div-title22">{service.title}</p>
                </h3>
              </div>

              <div className="service-footer">
                <div className="service-icon">
                  <img src={service.icon} alt="icon" />
                </div>
                <div className="service-arrow-div">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M507.3 267.3c6.2-6.2 
                      6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 
                      0s-6.2 16.4 0 22.6L457.4 240H16c-8.8 
                      0-16 7.2-16 16s7.2 16 16 
                      16h441.4L340.7 388.7c-6.2 
                      6.2-6.2 16.4 0 
                      22.6s16.4 6.2 22.6 
                      0l144-144z"></path>
                  </svg>
                </div>
              </div>
            </a>

            <div className="service-image">
              <img
                ref={(el) => (imageRefs.current[service.id] = el)}
                src={service.image}
                alt={service.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLinkSection;
