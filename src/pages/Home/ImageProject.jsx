import React, { useState } from "react";
import './ImageProject.css';
import { decorasion, dom, ground, img_insta, teresh } from "../../utils/images";

const projectimg = [
    { icon: decorasion },
    { icon: teresh },
    { icon: ground },
    { icon: dom },
];

const ImageProject = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div className="iamge-main-div">
            <div className="container">
                <div className="instagram-container">
                    {projectimg.map((img, index) => (
                        <div
                            className="instagram-card"
                            key={index}
                            onMouseMove={handleMouseMove}
                        >
                            <img src={img.icon} alt={`Instagram ${index}`} />
                            <div className="overlay">
                                <div
                                    className="overlay-content"
                                    style={{
                                        left: `${cursorPos.x}px`,
                                        top: `${cursorPos.y}px`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <div className="main-insta-div">
                                        <a><img className="img-instagramproject" src={img_insta} alt="instaimg" /></a>
                                        <span>INSTAGRAM</span>
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
