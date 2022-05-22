import React from 'react';
import { Navbar } from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Work from '../components/Work'


// eslint-disable-next-line
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;