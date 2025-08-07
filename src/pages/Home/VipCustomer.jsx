import React from 'react';
import './VipCustomer.css';
import { motion } from "framer-motion";

import {
  arciteh,
  creativebuildurs,
  gactur,
  modern,
  thedesign,
  thespacegactur,
} from '../../utils/images';

const logos = [
  { src: modern, alt: "modern logo" },
  { src: gactur, alt: "gactur logo" },
  { src: arciteh, alt: "arciteh logo" },
  { src: creativebuildurs, alt: "creativebuildurs logo" },
  { src: thedesign, alt: "thedesign logo" },
  { src: thespacegactur, alt: "thespacegactur logo" },
];

const VipCustomer = () => {
  return (
    <div className='vip-customer-main'>
      <div className='vip-customer'>
        <div className='vip-customer-our'>
          <h2>
            Our Website <span>75000+</span> VIP Customer
          </h2>
        </div>
        <div className='vip-website-main'>
          <div className='vip-inner-website'>
            {logos.map((logo, index) => (
              // <motion.a
              //   key={index}
              //   href="#"
              //   initial={{ scale: 1.1, opacity: 0 }}
              //   animate={{ scale: 1, opacity: 1 }}
              //   transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              // >
              //   <img src={logo.src} alt={logo.alt} className="vip-logo" />
              // </motion.a>

              <motion.a
              key={index}
                href="#"
                className="outlined-text3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img src={logo.src} alt={logo.alt} className="vip-logo" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipCustomer;
