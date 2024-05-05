// import React from 'react';

const MapsInt = () => {
  return (
    <div className="maps-container">
      <div className="info-section">
        <h2>Find <span className="highlight">Us</span> In Person</h2>
        <h3>Address</h3>
        <p>987 Brook St, Broughty Ferry, Dundee DD5 2EA</p>
        <h3>Phone Number</h3>
        <p>0131 628 493</p>
      </div>
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.1584931634543!2d-2.867122587262316!3d56.46503053679786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865e96e548488d%3A0x652981c5a1436741!2s987%20Brook%20St%2C%20Broughty%20Ferry%2C%20Dundee%20DD5%202EA!5e0!3m2!1sen!2suk!4v1714866522061!5m2!1sen!2suk" 
          width="800" 
          height="1000" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location">
        </iframe>
      </div>
    </div>
  );
};

export default MapsInt;