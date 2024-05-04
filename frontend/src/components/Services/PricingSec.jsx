// import React from 'react';

const PricingSec = () => {
  const pricingLevels = [
    {
      title: 'Large Print',
      price: '£60',
      features: ['One Hour Session', 'Studio Quality Photos', 'Different Outfits/Styles/Backgrounds', '25 Overall Photos', 'USB Stick with Images', 'Favourite Image Printed at 12x8"'], 
    },
    {
      title: 'Extra Large Print',
      price: '£80',
      features: ['One Hour Session', 'Studio Quality Photos', 'Different Outfits/Styles/Backgrounds', '35 Overall Photos', 'USB Stick with Images', 'Favourite Image Printed at 18x12"'],
    },
    {
      title: 'Extra Large Print +',
      price: '£125',
      features: ['One Hour Session', 'Studio Quality Photos', 'Different Outfits/Styles/Backgrounds', '50 Overall Photos', 'USB Stick with Images', 'Favourite Image Printed at 18x12" with 2 12x8"'],
    },
    {
        title: 'Digital 10',
        price: '£190',
        features: ['One Hour Session', 'Studio Quality Photos', 'Different Outfits/Styles/Backgrounds', '50 Overall Photos', 'Secure Online Image Hosting', 'Favourite 10 Images Digitally Enhanced'],
    },
    {
        title: 'Digital 25',
        price: '£250',
        features: ['One Hour Session', 'Studio Quality Photos', 'Different Outfits/Styles/Backgrounds', '60 Overall Photos', 'Secure Online Image Hosting', 'Favourite 25 Images Digitally Enhanced'],
    },
  ];

  return (
    <section className="pricing-section">
      <h1 className="pricing-header">Packages On <span className="highlight">Offer</span></h1>
      <p className="pricing-description">Choose the best plan for you</p>
      <div className="pricing-cards">
        {pricingLevels.map((level, index) => (
          <div key={index} className="pricing-card">
            <h2 className="card-title">{level.title}</h2>
            <h3 className="card-price">{level.price}</h3>
            <ul className="card-features">
            {level.features.map((feature, index) => (
                <li key={index} className="feature-item">
                <span className="tick-mark">✔</span> {feature}
                </li>
            ))}
            </ul>
            <button className="book-button">Book Now</button>
          </div>
        ))}
        <p className="pricing-description">If you’d like to buy a gift voucher, just contact me and I’ll arrange to post one directly to you.</p>
      </div>
    </section>
  );
};

export default PricingSec;