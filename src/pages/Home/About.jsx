import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css'; // Make sure you include your CSS

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = ({ title, percentage }) => (
    <div className="progress-bar-container">
        <div className="progress-bar-header">
            <span className="progress-title">{title}</span>
            <span className="progress-percentage">{percentage}%</span>
        </div>
        <div className="progress-bar-background">
            <div
                className="progress-bar-fill"
                style={{ width: '0%' }}
                data-width={percentage}
            ></div>
        </div>
    </div>
);

const AboutUs = () => {
    const container = useRef(null);
    const imageLogo = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Scroll parallax effect for logo
            const trigger = ScrollTrigger.create({
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    gsap.to(imageLogo.current, {
                        y: self.progress * 200,
                        ease: "none"
                    });
                },
            });

            // Main text and progress bar animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(".about-content > *", {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            })
            .to(".progress-bar-fill", {
                width: function (index, target) {
                    return target.dataset.width + '%';
                },
                stagger: 0.2,
                duration: 1.2,
                ease: 'power2.inOut'
            }, "-=0.5");

            // Signature image animation
            gsap.fromTo(".signature-image",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".signature-image",
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // ✅ Decorative line zoom in-out animation (once on scroll into view)
            gsap.fromTo(".decorative-line",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1.1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".decorative-line",
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                }
            );

            return () => {
                trigger.kill();
                tl.kill();
            };
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="about-us-section-wrapper">
            <div className="about-us-container">
                <div className="about-us-card">
                    <div className="about-us-flex-container">
                        <div className="about-us-left-column">
                            <div className="image-container">
                                <div className="image-wrapper">
                                    <img
                                        src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/03/about1.webp"
                                        alt="Architecture"
                                        className="main-img"
                                    />
                                </div>
                                <div ref={imageLogo} className="logo-container">
                                    <img src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/03/ab_icon.webp" alt="Icon" className="logo-image" />
                                </div>
                            </div>
                        </div>

                        <div className="about-us-right-column">
                            <div className='about-content'>
                                <div className="badge">
                                    <img src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/01/fav_gold.svg" alt="favgold" className="badge-icon" />
                                    <span className="badge-text">About Us</span>
                                </div>
                                <h2 className="heading-title">
                                    "Architectural Iconic Structures Around the World"
                                </h2>
                                <p className="paragraph-text">
                                    It seems like you're asking for ideas or information on creating a title related to architecture. Could you specify the context? For example, are you looking for a title for a presentation, an article, a project.
                                </p>
                                <div className='about-progress-main-div'>
                                    <div className="footer-content">
                                        <h3 className="experience-text">
                                            12+ Work <span className="experience-highlight">Professional</span> Experience
                                        </h3>
                                    </div>
                                    <div className="progress-bars-wrapper">
                                        <ProgressBar title="Interior Design" percentage={85} />
                                        <ProgressBar title="Architecture" percentage={90} />
                                        <img
                                            src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/01/Signeture.svg"
                                            alt="Signature"
                                            className="signature-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Decorative Line Image */}
                    <div>
                        <img
                            src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/01/line1-1.svg"
                            alt="line"
                            className="decorative-line"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
