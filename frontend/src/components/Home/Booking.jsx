// import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-header">Like What You See?</h2>
                <p className="cta-text">If you like what you see why not contact us to discuss what package would best fit you or go straight to the pricing section now!</p>
                <div className="cta-buttons">
                    <div className="cta-button-div">
                        <Link to="/services" className="cta-button">See Prices</Link>
                    </div>
                    <div className="cta-button-div">
                        <Link to="/contact" className="cta-button">Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;