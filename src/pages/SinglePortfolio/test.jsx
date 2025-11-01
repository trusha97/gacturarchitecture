
import React from 'react'
import "./SingleSlider.css"
import { blogsimg1, blogsimg2, blogsimg3, blogsimg4, favgold } from '../../utils/images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SingleSlider = () => {
    const settings = {
        centerMode: true,
        delay: 5000,
        centerPadding: '280px',
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        direction: "horizontal",
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                }
            }
        ]
    };

    const sliderData = [
        {
            id: 1,
            img: blogsimg1,
            title: "CLASSIC HOME PROJECT",
            text: "It sounds like you're looking for common phrases or feedback clients."
        },
        {
            id: 2,
            img: blogsimg2,
            title: "MODERN INTERIOR",
            text: "Providing inspiration and functional design ideas for interiors."
        },
        {
            id: 3,
            img: blogsimg3,
            title: "ARCHITECTURAL DESIGN",
            text: "Unique styles crafted to meet contemporary expectations."
        },
        {
            id: 4,
            img: blogsimg4,
            title: "FUTURISTIC STRUCTURE",
            text: "Conceptual designs with creative futuristic elements."
        }
    ];

    return (
        <div className='singleslider-main-div'>
            <div className='single-main-div-text'>
                <div className='single-text-slider'>
                    <span className="portfolio-subtitle">
                        <img src={favgold} alt="" /> Our Portfolio
                    </span>
                    <h2 className="portfolio-title">
                        We provide the best solutions for your dream home
                    </h2>
                </div>
            </div>

            <div className='slider-main-div'>
                <Slider {...settings}>
                    {sliderData.map((item) => (
                        <div className='slider-inner-div' key={item.id}>
                            <div className='slider-image-div-and-text-div'>
                                <img src={item.img} alt={`slider img ${item.id}`} />
                            </div>

                            <div className='slider-button-main-div'>
                                <h2 className='slider-button-div'>
                                    <a href="#" className='slider-text-div-button'>Architecture</a>
                                </h2>
                                <h2 className='slider-button-div'>
                                    <a href="#" className='slider-text-div-button'>Interior</a>
                                </h2>
                            </div>

                            <div className='slider-inner-text-heding'>
                                <a href='#'>{item.title}</a>
                            </div>

                            <div className='slider-div-parag-text-div'>
                                <h2>{item.text}</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SingleSlider
