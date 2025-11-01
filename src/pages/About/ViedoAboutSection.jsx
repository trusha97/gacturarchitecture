import React, { useState, useEffect, useRef } from "react";
import "./ViedoAboutSection.css"
import { favgold, post2 } from "../../utils/images";

const ProgressBar = ({ title, percentage }) => {
    const barRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const targetWidth = el.getAttribute("data-width");
                        el.style.width = targetWidth + "%";
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) observer.unobserve(barRef.current);
        };
    }, []);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-header">
                <span className="progress-title">{title}</span>
                <span className="progress-percentage">{percentage}%</span>
            </div>
            <div className="progress-bar-background">
                <div
                    ref={barRef}
                    className="progress-bar-fill"
                    style={{ width: "0%" }}
                    data-width={percentage}
                ></div>
            </div>
        </div>
    );
};


const ViedoAboutSection = () => {
     const [isOpen, setIsOpen] = useState(false);
        const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    
        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
  return (
    <div className="about-video-div">
                <div className="about-video-main-div">
                    <div className="about-video-inner-div">
                        <div className="inspiration-image-text-div333">
                            <img src={favgold} alt="favgold img" />
                            <span className="inspir-about-text133">About Us</span>
                        </div>
                        <div className="viedo-mainabout-div">
                            <button
                                className="about-architec-button"
                                onClick={() => setIsOpen(true)}
                            >
                                "Architectural Iconic{" "}
                                <span className="viedo-span-about">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-fas-play"
                                        viewBox="0 0 448 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                    </svg>
                                    Watch The Video
                                </span>
                                Structures Around the World"
                            </button>
                        </div>
                        <div className="dviedo-about-test-text">
                            <h2>
                                It seems like you're asking for ideas or information on creating a
                                title related to architecture. Could you specify the context? For
                                example, are you looking for a title for a presentation, an
                                article, a project.
                            </h2>
                        </div>
                    </div>
    
                    <div className="progersh-about-div">
                        <div className="progress-bars-wrapper1">
                            <ProgressBar title="Interior Design" percentage={85} />
                            <ProgressBar title="Architecture" percentage={90} />
                            <ProgressBar title="Interior Design" percentage={85} />
                            <img
                                src="https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2025/01/Signeture.svg"
                                alt="Signature"
                                className="signature-image1"
                            />
                        </div>
                    </div>
                </div>
    
                <div className="about-image-click-viedo-div">
                    <div
                        className="about-image-click-viedo-div-inner"
                        onClick={() => setIsOpen(true)}
                    >
                        <div
                            className="about-image-click-viedo-div-main"
                            onMouseMove={handleMouseMove}
                        >
                            <img src={post2} alt="Video Thumbnail" />
    
                            {/* Moving cursor circle */}
                            <div
                                className="video-cursor-circle"
                                style={{ left: cursorPos.x, top: cursorPos.y }}
                            >
                                <span>PLAY VIDEOS</span>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                {/* Modal Popup */}
                {isOpen && (
                    <div className="video-modal-overlay" onClick={() => setIsOpen(false)}>
                        <div
                            className="video-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="video-close-btn" onClick={() => setIsOpen(false)}>
                                ✕
                            </button>
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/qYgdnM3BC3g?autoplay=1"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
  )
}

export default ViedoAboutSection
