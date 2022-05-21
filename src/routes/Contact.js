import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from "../components/hero2";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Contact Us" text="Mail us for any help" />
      <Footer />
    </div>
  )
}

export default Contact;