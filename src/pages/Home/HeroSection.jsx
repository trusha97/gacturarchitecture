// src/components/Hero.jsx
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const container = useRef();

    // GSAP એનિમેશન
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });
        
        tl.from('.bg-image', { scale: 1.15, opacity: 0 })
          .from('.hero-heading .char', { y: 100, opacity: 0, stagger: 0.03 }, "-=1")
          .from('.video-card', { y: 50, opacity: 0 }, "-=1")
          .from('.build-card', { y: 50, opacity: 0 }, "-=0.8")
          .from('.rotating-text', { scale: 0.5, opacity: 0 }, "-=1");

    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
            {/* બેકગ્રાઉન્ડ ઇમેજ */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-image"
                style={{ backgroundImage: "url('https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/03/hero1-1.webp')" }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            
            <div className="relative container mx-auto px-4 z-10">
                {/* મુખ્ય હેડિંગ */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-center hero-heading">
                    {'You Approach The Architecture'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                    ))}
                </h1>

                {/* વિડિઓ કાર્ડ */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 video-card">
                    <div className="bg-brand-gray bg-opacity-80 backdrop-blur-sm rounded-full p-3 flex items-center space-x-4 shadow-lg cursor-pointer">
                        <img src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/03/hero1-1.webp" alt="Firm" className="w-14 h-14 rounded-full object-cover"/>
                        <div>
                            <p className="font-semibold text-white">Our company Architect Firm</p>
                            <p className="text-gray-400 text-sm">Watch the videos (2.40s)</p>
                        </div>
                    </div>
                </div>

                {/* બિલ્ડ કાર્ડ */}
                <div className="absolute bottom-[-15vh] right-[10vw] build-card">
                    <div className="relative flex items-center group cursor-pointer">
                        <img src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/03/hero2.webp" alt="Build Together" className="w-36 h-36 rounded-full object-cover"/>
                        <p className="ml-6 text-xl font-semibold leading-tight">Let's Build <br/> Something Great <br/> Together</p>
                    </div>
                </div>

                {/* ફરતો ટેક્સ્ટ */}
                <div className="absolute bottom-[-10vh] left-[10vw] rotating-text">
                    <div className="relative w-40 h-40">
                         <img src="https://i.imgur.com/2s42tG2.png" alt="Rotating Text" className="animate-spin" style={{ animationDuration: '10s' }}/>
                         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">GA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;