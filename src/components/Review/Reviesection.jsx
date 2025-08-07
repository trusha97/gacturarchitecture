import React from 'react';
import './Reviesection.css';
import { quite, testimonial } from '../../utils/images';

const testimonials = [
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

const Reviesection = () => {
    return (
        <div className="testimonial-section">
            {testimonials.map((item) => (
                <div className="testimonial-card" key={item.id}>
                    <div className='testimonial-main-div'>
                        <span className="count">{item.reviewCount}</span>
                        <div className="testimonial-header">
                            <div className="stars">
                                {[...Array(item.stars)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                                <span className="inactive">★</span>
                                <div className="label">Reviews</div>
                            </div>
                        </div>
                    </div>

                    <p className="testimonial-text">"{item.quote}"</p>

                    <hr className="divider" />

                    <div className="testimonial-footer">
                        <div className="author">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                        <div className="quote-mark"><img src={quite} alt="quit-img" /></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviesection;
