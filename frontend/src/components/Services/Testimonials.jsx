import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    image: '../images/Testimonial1.jpg',
    text: 'This product has exceeded my expectations. The quality is outstanding and the customer service is top-notch. I would highly recommend this to anyone!',
    author: 'John Doe'
  },
  {
    image: '../images/Testimonial2.jpg',
    text: 'Love it! It makes my life so much easier. I was skeptical at first, but now I cant imagine living without it!',
    author: 'Jane Doe'
  },
  {
    image: '../images/Testimonial3.jpg',
    text: 'I dont know how I was managing my life before this. This product is literally a life-saver. I would give it 10 stars if I could!',
    author: 'Bob Smith'
  },
  {
    image: '../images/Testimonial4.jpg',
    text: 'I dont know how I was managing my life before this. This product is literally a life-saver. I would give it 10 stars if I could!',
    author: 'Bob Smith'
  },
  {
    image: '../images/Testimonial5.jpg',
    text: 'I dont know how I was managing my life before this. This product is literally a life-saver. I would give it 10 stars if I could!',
    author: 'Bob Smith'
  },
  {
    image: '../images/Testimonial6.jpg',
    text: 'I dont know how I was managing my life before this. This product is literally a life-saver. I would give it 10 stars if I could!',
    author: 'Bob Smith'
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
        interval={4000}
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
                    <h2 className="testimonial-title">{testimonial.title}</h2>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    );
  }

export default TestimonialsCarousel;