import React from 'react';
import './styles/footer.css';
import { FaFacebookSquare, FaHome, FaInstagramSquare, FaMailBulk, FaPhone, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left-footer'>
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>1290 Corporate Society,</p>
                            <p>Hyderbad,</p>
                            <p>India.</p>
                        </div>
                        <div className='phone'>
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />91-9898989898</h4>
                        </div>
                        <div className='email'>
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />virender@gmail.com</h4>
                        </div>
                    </div>
                </div>

                <div className='right-footer'>
                    <h4>About Me</h4>
                    <p>This is Virender, CEO of Technical virus. We design Here the Future</p>
                    <div className='social'>
                        <h4><FaFacebookSquare size={20} style={{ color: "#fff", marginRight: "1rem" }} /> </h4>
                        <h4><FaTwitterSquare size={20} style={{ color: "#fff", marginRight: "1rem" }} /> </h4>
                        <h4><FaInstagramSquare size={20} style={{ color: "#fff", marginRight: "1rem" }} /> </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer