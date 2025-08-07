import React from 'react'
import "./WhatClientSay.css";
import Slider from "react-slick";
import { quite } from '../../utils/images';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "WILLIAM ANDREW",
        text1: "It sounds like you’re looking common phrases or",
        highlight: "feedback that clients might say when discussing.",
        text2:
            "Architecture projects. Here’s a list of things architecture clients might say architecture. We need the space to be flexible and multi-functional.",
    },
    {
        name: "SARAH JANE",
        text1: "It sounds like you’re looking common phrases or",
        highlight: "feedback that clients might say when discussing.",
        text2:
            "Architecture projects. Here’s a list of things architecture clients might say architecture. We need the space to be flexible and multi-functional.",
    },
];

const WhatClientSay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };
    return (
        <div className='what-clientsays-main-div'>
            <div className='what-client-main-div'>
                <div className=''>
                    <div className='outlined-main-div1'>
                        <motion.div
                            className="outlined-text1"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            What Client Says
                        </motion.div>
                    </div>
                </div>

                <div className="testimonial-container">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-slide">
                                <div className='quite-desc-div'>
                                    <div className="quote-icon">
                                        <img src={quite} alt="quote icon" />
                                    </div>
                                    <div className='quite-text-div'>
                                        <h3 className="client-name">{testimonial.name}</h3>
                                    </div>
                                </div>
                                <div className='quite-div-main-desc'>
                                    <p className="testimonial-text">
                                        {testimonial.text1} <span className="highlight">{testimonial.highlight}</span>
                                    </p>
                                    <p className="testimonial-text">{testimonial.text2}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default WhatClientSay
