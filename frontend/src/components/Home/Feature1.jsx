// import React from 'react';

const Feature1 = () => {
    return (
        <div className="feature1-container">
            <div className="feature1-left">
                <div className="feature1-title">Capturing Moments With A <span className="highlight">Unique</span> Style And <span className="highlight">Expertise</span></div>
                <div className="feature1-decorators">
                    <div className="feature1-decorator"></div>
                    <div className="feature1-decorated-text">Jo Smith</div>
                    <div className="feature1-decorator"></div>
                </div>
                <div className="feature1-description">
                    <p>Jo Smith Photography is a leading nature photographer with over eight years’ 
                    experience working within landscape and natural world photography, specialising in
                    the landscapes of Scotland.
                    Jo’s style has developed organically through photographing the wide variety of 
                    landscapes and seascapes found around Scotland. Her bold, colourful landscape 
                    photographs are always in-demand.</p> 
                </div>
            </div>
            <div className="feature1-right">
                <img src="../images/woman.png" alt="Feature 1" className="feature1-image" />
            </div>
        </div>
    );
};

export default Feature1;