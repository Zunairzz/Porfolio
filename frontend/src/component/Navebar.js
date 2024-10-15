
import React, { useState } from 'react';
import '../css/Navbar.css'

const Navebar = ()=>{
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item active">
                    <a href="#home">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about">About</a>
                </li>
                <li className="navbar-item">
                    <a href="#service">Service</a>
                </li>
                <li className="navbar-item">
                    <a href="#resume">Resume</a>
                </li>
                <li className="navbar-item">
                    <a href="#project">Project</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navebar;