import React, { useState, useEffect, useRef } from "react";
import './ImageProject.css';
import { decorasion, dom, ground, imginsta, teresh } from "../../utils/images";

const projectimg = [
    { icon: decorasion },
    { icon: teresh },
    { icon: ground },
    { icon: dom },
];

const ImageProject = () => {
    const imgRefs = useRef([]);
    const [cursorPositions, setCursorPositions] = useState(
        Array(projectimg.length).fill({ x: 0, y: 0 })
    );

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const updated = [...cursorPositions];
        updated[index] = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setCursorPositions(updated);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.3 }
        );

        imgRefs.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="iamge-main-div">
            <div className="imageproject-container-main-div">
                <div className="instagram-container">
                    {projectimg.map((img, index) => (
                        <div
                            className="instagram-card"
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                        >
                            <img
                                src={img.icon}
                                alt={`Instagram ${index}`}
                                ref={(el) => (imgRefs.current[index] = el)}
                            />

                            <div className="main-image-div-curser-pointer">
                                <div className="overlay">
                                    <div
                                        className="overlay-content"
                                        style={{
                                            left: `${cursorPositions[index].x}px`,
                                            top: `${cursorPositions[index].y}px`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <div className="main-insta-div">
                                            <div className="image-div-insta-div-main">
                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        className="img-instagramproject  "
                                                        src={imginsta}
                                                        alt="Instagram icon"

                                                    />
                                                </a>
                                                <span className="instagran-div-text-inner">INSTAGRAM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageProject;