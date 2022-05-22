import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from "../components/hero2";
import ContactPage from '../components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Contact Us" text="Try us. Leave a Message" />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default Contact;