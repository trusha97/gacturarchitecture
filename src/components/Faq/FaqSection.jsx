import React, { useState } from 'react';
import './FaqSection.css';
import { favgold } from '../../utils/images';

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

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h6 className="subtitle"><img src={favgold} alt="faqgolden" />  Our Frequency</h6>
      <h2 className="title-faq-genral">General Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <span>{item.question}</span>
              <span className="icon-faq">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
