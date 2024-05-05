import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { 
        question: 'What type of photography services do you offer?', 
        answer: 'We offer a range of services including wedding photography, event photography, portrait photography, and commercial photography.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'How far in advance should I book your services?', 
        answer: 'We recommend booking as far in advance as possible to ensure availability, especially during peak seasons.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'Do you provide digital copies of the photos?', 
        answer: 'Yes, we provide high-resolution digital copies of all photos.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'Do you offer photo retouching or editing services?', 
        answer: 'Yes, Some of our packages include photo retouching and editing services. Please contact us for more details.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'How long after the event will the photos be ready?', 
        answer: 'Typically, photos are ready within 2-3 weeks after the event.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'What is your cancellation policy?', 
        answer: 'We require a 30-day notice for cancellations. Please contact us for more details.', 
        author: 'Jo Smith' 
      },
      { 
        question: 'Do you travel for destination weddings?', 
        answer: 'Yes, we are available for destination weddings. Travel fees may apply.', 
        author: 'Jo Smith' 
      },
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
            <h3>{faq.question}</h3>
            <div className="faq-answer">
              <p>{faq.answer}</p>
              <p className="faq-author">{faq.author}</p>
            </div>
          </div>
          {index !== faqs.length - 1 && <hr className="divider" />}
        </div>
      ))}
    </div>
  );
};

export default FAQs;