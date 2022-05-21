import { React, useState } from 'react';
import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor ] = useState(false);

    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "navbar navbar-bg" : "navbar"}>
            <NavLink to="/">
                <h1 className='logo'>Technical Virus.</h1>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/project">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} />) : (<FaBars size={20} />)}
            </div>
        </div >
    )
}
