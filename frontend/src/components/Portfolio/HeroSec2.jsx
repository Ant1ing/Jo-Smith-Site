// import React from 'react';

const HeroSec2 = () => {
    return (
        <div className="heroSec2">
            <div className="heroSec2__image">
                <img src="../images/portfolioBack.jpg" alt="Hero Background" />
            </div>
            <div className="heroSec2__banner">
                <div className="heroSec2__banner--left">
                    <h1 className="heroSec2__banner--left--header">Long Walks On The Beach</h1>
                    <div className="heroSec2__banner--left--tags">
                        <span className="heroSec2__banner--left--tags--tag">Photography</span>
                        <span className="heroSec2__banner--left--tags--tag">Landscape</span>
                        <span className="heroSec2__banner--left--tags--tag">Nature</span>
                    </div>
                    <p className="heroSec2__banner--left--text">This shot was taken after a breath taking wedding reception for my good friend <b>John Doe</b> who wanted me to wrap up his shoot having me take amazing photos of the surrounding location.</p>
                </div>
                <div className="heroSec2__banner--right">
                    <div className="heroSec2__banner--right--name">
                        <h3>Client</h3>
                        <p>John Doe</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Date</h3>
                        <p>March 2023</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Role</h3>
                        <p>Photographer</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Type</h3>
                        <p>Landscape</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSec2;
