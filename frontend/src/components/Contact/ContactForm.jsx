// import React from 'react';

const ContactForm = () => {
return (
    <div className="contact-container">
        <div className="contact-info">
            <h2>Let Us <span className="highlight">Help</span></h2>
            <p>Feel free to reach out to me through any of the following methods:</p>
            <div className="icons">
                <i className="fa-regular fa-envelope" aria-hidden="true"><span className="smalltext">enquire@josmithphoto.com</span></i>
                <i className="fab fa-instagram"><span className="smalltext">@josmithphoto</span></i>
                <i className="fab fa-x-twitter"><span className="smalltext">@josmithphoto</span></i>
            </div>
        </div>
        <div className="contact-form">
            <form>
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message" required></textarea>
                <div className="terms">
                    <input type="checkbox" className="checkbox"required />
                    <p className="TermsandCond">I agree to the terms and conditions</p>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
);
};

export default ContactForm;