import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Portfolio.css";
import { favgold } from "../../utils/images";

const portfolioItems = [
  {
    id: 1,
    title: "Blending futuristic building",
    category: "ARCHITECTURE",
    image:
      "https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2024/09/1.webp",
  },
  {
    id: 2,
    title: "Modern wooden villa",
    category: "ARCHITECTURE",
    image:
      "https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2024/09/2.webp",
  },
  {
    id: 3,
    title: "Eco-friendly concept",
    category: "ARCHITECTURE",
    image:
      "https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2024/09/1.webp",
  },
  {
    id: 4,
    title: "Modern wooden villa",
    category: "ARCHITECTURE",
    image:
      "https://gactur.themescamp.com/home1/wp-content/uploads/sites/2/2024/09/2.webp",
  },
];

const Portfolio = () => {
  const cursorRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = portfolioItems.length;

  useEffect(() => {
  const section = document.querySelector(".portfolio-section");

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
      cursorRef.current.style.opacity = 1; // show on move
    }
  };

  const handleMouseEnter = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = 0;
  };

  section.addEventListener("mousemove", handleMouseMove);
  section.addEventListener("mouseenter", handleMouseEnter);
  section.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    section.removeEventListener("mousemove", handleMouseMove);
    section.removeEventListener("mouseenter", handleMouseEnter);
    section.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <span className="portfolio-subtitle">
          <img src={favgold} alt="" /> Our Portfolio
        </span>
        <h2 className="portfolio-title">
          We provide the best solutions for your dream home
        </h2>
      </div>

      <div className="cursor" ref={cursorRef}>
        HOLD AND <br /> DRAG
      </div>

      <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{
    clickable: true,
    el: ".swiper-dots", 
  }}
  loop={true}
  slidesPerView={1.4}
  spaceBetween={120}
  autoplay={true}
  speed={1500}
  effect="slide"
  centeredSlides={false}
  autoHeight={false}
  className="portfolio-swiper"
  onSlideChange={(swiper) => {
    setCurrentIndex((swiper.realIndex || 0) + 1);
  }}
  breakpoints={{
    1200: { slidesPerView: 1.4, spaceBetween: 120 },
    991: { slidesPerView: 1, spaceBetween: 120 },
    787: { slidesPerView: 1, spaceBetween: 120 },
    480: { slidesPerView: 1, spaceBetween: 120 },
    0: { slidesPerView: 1, spaceBetween: 120 },
  }}
>
  {portfolioItems.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="portfolio-slide single">
        <img src={item.image} alt={item.title} className="main-image" />
        <div className="image-overlay"></div>

        <div className="portfolio-text">
          <span className="category">{item.category}</span>
          <h3 className="title-blending">{item.title}</h3>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



      <div className="portfolio-pagination-container">
        <div className="portfolio-progress-bar">
          <div
            className="portfolio-progress-fill"
            style={{ width: `${(currentIndex / totalSlides) * 100}%` }}
          ></div>
        </div>
        <div className="portfolio-fraction">{currentIndex}/{totalSlides}</div>
        <div className="swiper-dots"></div>
      </div>
    </div>
  );
};

export default Portfolio;
