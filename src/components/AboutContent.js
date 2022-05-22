import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/aboutcontent.css";
import Html1 from "../assests/aboutimg1.jpg";
import JsCss from "../assests/aboutimg2.jpg";

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I <span className='spanp'>?</span></h1>
                <p>I am react web developer. We create responsive and futuristic designs for my clients.</p>
                <Link to="/contact" className='btn'>Contact</Link>
            </div>
            <div className='right'>
                <div className='img_container'>
                    <div className='img_stack top'>
                        <img src={JsCss} alt="top" className='img' />
                    </div>
                    <div className='img_stack bottom'>
                        <img src={Html1} alt="bottom" className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;