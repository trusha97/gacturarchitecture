import React, { useEffect, useState, useRef } from 'react';
import "./BestService.css";
import { Architect, Architectural, bestserviceimg, Landscape } from '../../utils/images';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const BestService = () => {
  const text = 'Service';
  const letters = text.split('');
  const [scrollProgressIndex, setScrollProgressIndex] = useState(0);
  const glowRef = useRef(null);

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // 👇 Scroll progress logic to animate each letter based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!glowRef.current) return;

      const rect = glowRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleRatio = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
        const visibleLetters = Math.floor(visibleRatio * letters.length);
        setScrollProgressIndex(visibleLetters);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [letters.length]);

  const services = [
    {
      title: 'Architectural Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore?`,
      icon: Architectural,
    },
    {
      title: 'Landscape Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore?`,
      icon: Landscape,
    },
    {
      title: '3D Architect Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore?`,
      icon: Architect,
    },
  ];

  return (
    <div className='best-service'>
      <div className='best-service-main'>
        <div className='best-service-text'>
          <div className='best-service-button'>
            <a href='/' className='best-service-btn'>Best Service</a>
          </div>

          {/* <div className="animated-heading" ref={headingRef}>
            {[
              "Building", "for", "Tomorrow", "Trends", "in", "Contemporary", "Architecture",
            ].map((line, i) => (
              <motion.div
                key={i}
                className="animated-line"
                initial={{ opacity: 0, y: 60 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {line}
              </motion.div>
              
            ))}
          </div> */}
          <div className='outlined-main-div2'>
            <motion.div
              className="outlined-text2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
             Building for Tomorrow Trends in Contemporary Architecture
            </motion.div>
          </div>
        </div>

        <div className='best-service-main-div'>
          <div className='bestservice-img-div'>
            <div className='best-service-image' ref={imageRef}>
              <motion.img
                src={bestserviceimg}
                alt="bestservice img"
                className="best-img-service"
                initial={{ scale: 0.5, y: -100, opacity: 0 }}
                animate={imageInView ? { scale: 1, y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className='best-serviceaenimation-main-div'>
              <div className='best-serviceaenimation-inner-div'>
                <div className='service-best-aenimation'>
                  <div className="glow-text" ref={glowRef}>
                    {letters.map((letter, i) => {
                      let className = 'glow-letter';

                      if (i === scrollProgressIndex - 1) {
                        className += ' active';
                      } else if (
                        i < scrollProgressIndex - 1 &&
                        i >= scrollProgressIndex - 5
                      ) {
                        const distance = scrollProgressIndex - 1 - i;
                        className += ` faded faded-${distance}`;
                      }

                      return (
                        <span key={i} className={className}>
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="design-container">
                {services.map((service, index) => (
                  <div className="design-card" key={index}>
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="text-content">
                      <h2>{service.title}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestService;
