// import React from 'react';

const HeroSec = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Creating <span className="highlight">Lasting</span> Memories</h1>
                <p>Capturing beautiful moments that last a lifetime</p>
                <div className="navbar__button">
                    <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    Learn More
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img src="../images/heroBack.jpg" alt="Hero Background" />
            </div>
        </div>
    );
};

export default HeroSec;

