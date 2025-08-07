import React, { useEffect, useState } from 'react';
import './Loader.css';
import { ic_header_logo } from '../../utils/svg'; // Replace with your actual logo component or SVG

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showCurve, setShowCurve] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCurve(true);
      setTimeout(() => setShowLoader(false), 1500); // Wait for curve animation to finish
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  if (!showLoader) return null;

  return (
    <div className={`loader-container ${showCurve ? 'curve-reveal' : ''}`}>
      <div className="logo">{ic_header_logo.icon()}</div>

      {/* <div className="loader-text">
      {'WORDPRESS THEME'.split('').map((char, idx) => (
        <span key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>{char}</span>
      ))}
    </div> */}

      <div className="loader-text">
        <h5>
          {"WORDPRESS THEME".split('').map((char, idx) => (
            <span key={idx} style={{ animationDelay: `${idx * 0.05}s` }} className="loader-char">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h5>
      </div>
    </div>
  );
};

export default Loader;
