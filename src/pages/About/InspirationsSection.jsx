import React from 'react'
import "./InspirationsSection.css"
import { aboutimg1, aboutimg2, favgold } from '../../utils/images'

const InspirationsSection = () => {
    const items = [
        "Experienced Professionals",
        "Design Excellence",
        "Sustainability and Innovation"
    ];
    return (
        <div className="inspiration-main-div">
            <div className='inspiration-image-main-div'>
                <div className='about-inspiration-text-image'>
                    <div className='text-inspiration-div-text'>
                        <div className='inspiration-image-text-div'>
                            <img src={favgold} alt="favgold img" />
                            <span className='inspir-about-text'>About Us</span>
                        </div>
                        <div className='main-inspiration-div'>
                            <h2 className='Inspirations-text'>Inspirations in Art Architecture</h2>
                            <h3 className='Inspirations-text1'>The future is shaped by rapid technological progress commitment sustainability.</h3>
                            <p className='Inspirations-text2'>Evolving social of the dynamics. By understanding and these trends, and organizations can navigate.</p>
                        </div>
                    </div>
                    <div className='inspiration-image'>
                        <img className='about-insiration-image-div' src={aboutimg1} alt="" />
                    </div>
                </div>

                <div className='about-inspiration-text-image'>
                    <div className='inspiration-image'>
                        <img className='about-insiration-image-div1' src={aboutimg2} alt="" />
                    </div>
                    <div className='text-inspiration-div-text'>
                        <div className='main-inspiration-div'>
                            <h2 className='Inspirations-text'>View On Behance</h2>
                            <p className='Inspirations-text3'>The future is shaped by rapid technological progress, a commitment sustainability, and evolving social dynamics. By understanding and these trends, individuals and organizations can navigate.</p>
                        </div>
                        <div className="list-container">
                            <ol>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <span className="number">{index + 1}.</span>
                                        <span className="text">{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default InspirationsSection
