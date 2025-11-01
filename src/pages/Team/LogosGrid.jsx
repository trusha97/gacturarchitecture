import React from "react";
import "./LogosGrid.css";
import {
  arciteh,
  creativebuildurs,
  gactur,
  modern,
  thedesign,
  thespacegactur,
} from "../../utils/images";

const logos = [
  { id: 1, src: modern, alt: "modern logo" },
  { id: 2, src: gactur, alt: "gactur logo" },
  { id: 3, src: arciteh, alt: "arciteh logo" },
  { id: 4, src: creativebuildurs, alt: "creativebuildurs logo" },
  { id: 5, src: thedesign, alt: "thedesign logo" },
  { id: 6, src: thespacegactur, alt: "thespacegactur logo" },
  { id: 7, src: modern, alt: "modern logo 2" },
  { id: 8, src: gactur, alt: "gactur logo 2" },
];

const LogosGrid = () => {
  return (
    <div className="logo-main-div-about">
      <div className="logos-grid">
        {logos.map((logo) => (
          <div className="logo-card" key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosGrid;
