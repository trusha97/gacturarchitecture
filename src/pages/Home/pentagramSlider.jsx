import React, { useState, useEffect, useRef } from 'react';
import './PentagramSlider.css';
import {
  sliderimg1, sliderimg2, sliderimg3, sliderimg4, sliderimg5, sliderimg6,
  sliderimg7, sliderimg8, sliderimg9, sliderimg10, sliderimg11, sliderimg12,
  downaerrow
} from '../../utils/images';

const slides = [
  {
    image: sliderimg1,
    title: 'Brand Identity',
    category: 'Arts & Culture',
    description: 'We build memorable identities that communicate the brand’s core values.',
  },
  {
    image: sliderimg2,
    title: 'Product Design',
    category: 'Technology',
    description: 'Designing experiences that users love and return to, again and again.',
  },
  {
    image: sliderimg3,
    title: 'Visual Strategy',
    category: 'Media',
    description: 'Crafting impactful visuals that align with your business goals.',
  },
  {
    image: sliderimg4,
    title: 'Brand Identity',
    category: 'Arts & Culture',
    description: 'Identity design that sets your brand apart in competitive markets.',
  },
  {
    image: sliderimg5,
    title: 'Product Design',
    category: 'Technology',
    description: 'We blend functionality with aesthetics to enhance product value.',
  },
  {
    image: sliderimg6,
    title: 'Visual Strategy',
    category: 'Media',
    description: 'Visually connecting brands with their ideal audience through strategy.',
  },
  {
    image: sliderimg7,
    title: 'Brand Identity',
    category: 'Arts & Culture',
    description: 'Refining and reshaping identities to build stronger presence.',
  },
  {
    image: sliderimg8,
    title: 'Product Design',
    category: 'Technology',
    description: 'From concept to execution, we deliver impactful product designs.',
  },
  {
    image: sliderimg9,
    title: 'Visual Strategy',
    category: 'Media',
    description: 'Making your message stand out through design clarity.',
  },
  {
    image: sliderimg10,
    title: 'Brand Identity',
    category: 'Arts & Culture',
    description: 'Our identity systems scale across platforms and audiences.',
  },
  {
    image: sliderimg11,
    title: 'Product Design',
    category: 'Technology',
    description: 'User-first product design for tomorrow’s solutions.',
  },
  {
    image: sliderimg12,
    title: 'Visual Strategy',
    category: 'Media',
    description: 'Strategic visuals tailored for engagement and growth.',
  },
];

export default function PentagramSlider() {
  const [current, setCurrent] = useState(0);
  const [isCentered, setIsCentered] = useState(true);
  const [scaleClass, setScaleClass] = useState('');
  const [animateText, setAnimateText] = useState(false);
  const sliderRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isCentered) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isCentered]);

  useEffect(() => {
    if (!isCentered) return;

    sliderRef.current.scrollTo({
      top: sliderRef.current.scrollHeight,
      behavior: 'smooth',
    });

    setScaleClass('scale');
    setAnimateText(true);

    const timeout = setTimeout(() => {
      setScaleClass('');
      setAnimateText(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [current]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY.current) {
        setIsCentered(false);
      } else if (scrollY < lastScrollY.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsCentered(true);
        }
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sliderRef} className="slider-container">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      <div className={`slider-text ${isCentered ? 'centered' : 'bottom'}`}>
        <span className="fixed-text">We design</span>
        <span className={`dynamic-text ${scaleClass} ${animateText ? 'translate-text' : ''}`}>
          {isCentered ? slides[current].title : 'Everything'}
        </span>

        <span className="fixed-text">
          <img className='eaerrow-slider-down' src={downaerrow} width={30} height={30} alt="arrow" />
          for
        </span>

        <span className={`dynamic-text ${scaleClass} ${animateText ? 'translate-text' : ''}`}>
          {isCentered ? slides[current].category : 'Everyone'}
          <img className='eaerrow-slider-down down-erroe-text-last' src={downaerrow} width={30} height={30} alt="arrow" />
        </span>
      </div>

      <div className="slider-left-text">
        <p>{slides[current].title}</p>
        <p>{slides[current].description}</p>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}


