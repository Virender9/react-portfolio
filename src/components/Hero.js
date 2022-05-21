import './styles/hero.css';
import React from 'react';
import Intro from '../assests/intro.png';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={Intro} alt='intro'/>
            </div>
            <div className='content'>
                <p>Hello! Here Virender</p>
                <h1>Web Developer</h1>
                <div>
                    <NavLink to="/project" className="btn">Projects</NavLink>
                    <NavLink to="/contact" className='btn-light'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero