import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from "../components/hero2";
import Pricingcard from '../components/Pricingcard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of My Most recent and decent work"/>
      <Work />
      <Pricingcard />
      <Footer />
    </div>
  )
}

export default Project;