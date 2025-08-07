import React, { useRef, useEffect } from 'react';
import './Banner.css';
import heroImage from '../../assets/images/hero.webp';
import { gaimg } from '../../utils/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const bannerimageLogo = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    gsap.to(bannerimageLogo.current, {
                        y: self.progress * 200,
                        ease: "none",
                    });
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="banner-main"
            ref={container}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="banner-overlay">
                <h1 className="banner-title motion-text">
                    You Approach The Architecture
                </h1>

                <div className="box box-right">
                    <div className="circle-img" />
                    <div>
                        <p className="box-title"> Our company Architect Firm</p>
                        <p className="box-sub">Watch the videos (2.40s)</p>
                    </div>
                </div>
            </div>

            <div className='banner-div-image-main'>
                <div className='banner-round-main-div'>
                    <div className='banner-div-image-inner '>
                        <div className='banner-img-circle-div' ref={bannerimageLogo}>
                            <img src={gaimg} alt="GA Logo" className='ga-logo' />
                            <svg className="circle-svg" viewBox="0 0 300 300">
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                                    />
                                </defs>
                                <text fill="#fff">
                                    <textPath href="#circlePath" startOffset="0%">
                                        GACTUT ARCHITECTURE 2024 MINIMALISTIC DESIGN FOR •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="box1 box-right">
                    <div className="circle-img1" />
                    <div className='banner-text-des'>
                        <p className="box-title1">Let’s Build Something Great Together</p>
                    </div>
                </div>
            </div>

            <div className='year-main-div'>
                <div className='year-container'>
                    <div className='yeartwofive'>
                        <h3 className='year-inner-div'>2005</h3>
                    </div>
                    <div className='yeartwofive'>
                        <h3 className='year-inner-div'>2005</h3>
                    </div>
                </div>
            </div>

            <div className="banner-container">
                <h1 className="banner-overlay-text">Architecture</h1>
            </div>
        </div>
    );
};

export default Banner;
