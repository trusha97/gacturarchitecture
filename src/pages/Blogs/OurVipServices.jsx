import React from 'react'
import { motion } from 'framer-motion'
import "./OurVipServices.css"
import { arciteh, creativebuildurs, gactur, modern, thedesign, thespacegactur } from '../../utils/images';

const logos = [
  { src: modern, alt: "modern logo" },
  { src: gactur, alt: "gactur logo" },
  { src: arciteh, alt: "arciteh logo" },
  { src: creativebuildurs, alt: "creativebuildurs logo" },
  { src: thedesign, alt: "thedesign logo" },
  { src: thespacegactur, alt: "thespacegactur logo" },
];

// fadeInUp animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const OurVipServices = () => {
  return (
    <div className='vip-customer-main12'>
      <div className='vip-customer'>
        <div className='vip-customer-our1'>
          <h2>
            Our Website <span>75000+</span> VIP Customer
          </h2>
        </div>
        <div className='vip-website-main'>
          <div className='vip-inner-website'>
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href="#"
                className="outlined-text3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img src={logo.src} alt={logo.alt} className="vip-logo1" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVipServices
