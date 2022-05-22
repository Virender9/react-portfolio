import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from "../components/hero2";
import AboutContent from '../components/AboutContent';

const About = () => {
  return <div>
    <Navbar />
    <Hero2 heading="About Us" text="We are developers. Developing the hearts"/>
    <AboutContent />
    <Footer />
  </div>
}

export default About;