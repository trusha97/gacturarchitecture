import React, { useEffect, useRef } from 'react';
import './ProjectMind.css';
import { projectimg } from '../../utils/images';
import gsap from 'gsap';

const ProjectMind = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className='project-mind-div-main'>
      <p className="top-text">HAVE YOU PROJECT IN MIND?</p>
      <div className="project-mind-main">
        <img src={projectimg} alt="Blueprint" className="blueprint-image" />

        <div className="overlay1">
          <h1 className="heading" ref={headingRef}>
            Create Your Creative <br />
            Unique Design
          </h1>
          <button className="contact-button" ref={buttonRef}>
            Contact Design <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectMind;

