import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    image: '../images/Testimonial1.png',
    text: 'The Best photographer I have ever worked with. The photos turned out great and the photographer was very professional. I would highly recommend this service to anyone looking for a great photographer.',
    author: 'John Doe',
    stars: 5
  },
  {
    image: '../images/Testimonial2.png',
    text: 'Jo made my wedding day so special. She was very professional and the photos turned out great. I would highly recommend her to anyone looking for a wedding photographer.',
    author: 'Jane Liston',
    stars: 4
  },
  {
    image: '../images/Testimonial3.png',
    text: 'I was very impressed with the quality of the photos. The photographer was very professional and the photos turned out great. I would definitely recommend this service to anyone looking for a great photographer.',
    author: 'Shak Ahmed',
    stars: 4
  },
  {
    image: '../images/Testimonial4.png',
    text: 'Jo was amazing to work with. She was very professional and the photos turned out great. I would definitely recommend her to anyone looking for a great photographer.',
    author: 'Kacy Smith',
    stars: 5
  },
  {
    image: '../images/Testimonial5.png',
    text: 'The customer service is fantastic. I made a mistake with my order and the team was very helpful and fixed it for me. I would definitely recommend this company to anyone looking for a great photography service.',
    author: 'James Wilson',
    stars: 5

  },
  {
    image: '../images/Testimonial6.png',
    text: 'The photos taken for my wedding were amazing. The photographer was very professional and the photos turned out great. I would highly recommend this service to anyone looking for a wedding photographer.',
    author: 'Bob Smith',
    stars: 4
  }
];

function TestimonialsCarousel() {
    // Group every two testimonials into a single array
    const groupedTestimonials = testimonials.reduce((result, value, index, array) => {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
  
    return (
      <Carousel
        autoPlay={true}
        interval={3000}
        transitionTime={310}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        className="testimonials-carousel"
      >
        {groupedTestimonials.map((group, index) => (
          <div key={index} className="testimonial-slide">
            {group.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                <div className="testimonial-content">
                  <div className="testimonial-stars">
                      {[...Array(5)].map((star, index) => (
                          <i key={index} className={`fas fa-star ${index < testimonial.stars ? 'gold-star' : 'gray-star'}`}></i>
                      ))} 
                  </div>
                    <h2 className="testimonial-title">{testimonial.title}</h2>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-author">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    );
  }

export default TestimonialsCarousel;