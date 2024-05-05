// import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact/ContactForm';
import FAQs from '../components/Contact/FAQs';
import MapsInt from '../components/Contact/MapsInt';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <ContactForm />
            <FAQs />
            <MapsInt />
            <Footer />
        </div>
    );
};

export default ContactPage;