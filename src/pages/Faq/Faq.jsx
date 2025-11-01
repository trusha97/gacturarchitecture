import React, { useState } from 'react';
import './Faq.css';
import { faqbannerimage, faqbannerimg, favgold } from '../../utils/images';

const faqData = [
  {
    question: "What industries do you specialize in?",
    answer:
      "The architectural design process typically includes conceptual design, schematic design, design development, construction documents, and construction administration.",
  },
  {
    question: "What are the different architectural styles?",
    answer:
      "The architectural design process typically includes conceptual design, schematic design, design development, construction documents, and construction administration.",
  },
  {
    question: "What does an architect do?",
    answer:
      "The architectural design process typically includes conceptual design, schematic design, design development, construction documents, and construction administration.",
  },
  {
    question: "How long does it take to become an architect?",
    answer:
      "The architectural design process typically includes conceptual design, schematic design, design development, construction documents, and construction administration.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-main-section-div">
      <div className="faq-text-accoding-div">
        <div className="faq-container">
          <div className="faq-section-text-main-div">
            <h6 className="subtitle">
              <img src={favgold} alt="faqgolden" /> Our Frequency
            </h6>
            <h2 className="title-faq-genral">General Questions</h2>
          </div>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span className="icon-faq">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-inner-section-div">
        <div className="faq-image-second-main-div">
          <div className="faq-section-image-div">
            <img src={faqbannerimg} alt="faq img" />
          </div>
          <div className="faq-section-image-div2">
            <img src={faqbannerimage} alt="faqimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
