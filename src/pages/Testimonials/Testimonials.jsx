import React from 'react';
import './Testimonials.css';
import { quite, testimonial } from '../../utils/images';
import ImageProject from '../Home/ImageProject';
import TestimonialsBanner from './TestimonialsBanner';

const testimonialsmap = [
    {
        id: 1,
        reviewCount: "14.8k",
        stars: 4,
        quote: `Their professionalism, attention to detail, and creativity truly set them apart. I cold couldn't be happier results to looking for top-notch design unique design.`,
        name: "WILLIAM ANDREW",
        title: "Architect",
        image: testimonial,
    },
    {
        id: 2,
        reviewCount: "14.8k",
        stars: 4,
        quote: `Their professionalism, attention to detail, and creativity truly set them apart. I cold couldn't be happier results to looking for top-notch design unique design.`,
        name: "WILLIAM ANDREW",
        title: "Architect",
        image: testimonial,
    },
    {
        id: 3,
        reviewCount: "14.8k",
        stars: 4,
        quote: `Their professionalism, attention to detail, and creativity truly set them apart. I cold couldn't be happier results to looking for top-notch design unique design.`,
        name: "WILLIAM ANDREW",
        title: "Architect",
        image: testimonial,
    },
    {
        id: 4,
        reviewCount: "14.8k",
        stars: 4,
        quote: `Their professionalism, attention to detail, and creativity truly set them apart. I cold couldn't be happier results to looking for top-notch design unique design.`,
        name: "WILLIAM ANDREW",
        title: "Architect",
        image: testimonial,
    },
];

const testimonials = () => {
    return (
        <div className='testniminal-main-div-line-div'>
            <TestimonialsBanner/>
            <div className="testimonial-section">
                {testimonialsmap.map((item) => (
                    <div className="testimonial-card" key={item.id}>
                        <div className='testimonial-main-div'>
                            <span className="count">{item.reviewCount}</span>
                            <div className="testimonial-header">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            viewBox="0 0 576 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`star-icon ${i < item.stars ? 'active' : 'inactive'}`}
                                        >
                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 
        36.1-17.7 54.6l105.7 103-25 145.5c-4.5 
        26.3 23.2 46 46.4 33.7L288 439.6l130.7 
        68.7c23.2 12.2 50.9-7.4 
        46.4-33.7l-25-145.5 105.7-103c19-18.5 
        8.5-50.8-17.7-54.6L382 150.2 
        316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                        </svg>
                                    ))}
                                    <div className="label">Reviews</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="testimonial-text-quote-text">"{item.quote}"</h2>

                        <hr className="divider" />

                        <div className="testimonial-footer">
                            <div className="author">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className="quote-mark"><img className='quit-image' src={quite} alt="quit-img" /></div>
                        </div>
                    </div>
                ))}
            </div>
                <ImageProject />
        </div>
    );
};

export default testimonials;
