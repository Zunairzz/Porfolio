
import React, { useState } from 'react';
import '../CSS/Navbar.css'

const Header = ()=>{
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/path-to-logo" alt="Logo" />
                <a href="mailto:mail@gerolddesign.com" className="navbar-email">mail@gerolddesign.com</a>
            </div>
            <ul className="navbar-menu">
                <li>
                    <a
                        href="#home"
                        className={activeLink === 'home' ? 'active' : ''}
                        onClick={() => handleClick('home')}
                    >
                        Home +
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className={activeLink === 'about' ? 'active' : ''}
                        onClick={() => handleClick('about')}
                    >
                        About +
                    </a>
                </li>
                <li>
                    <a
                        href="#services"
                        className={activeLink === 'services' ? 'active' : ''}
                        onClick={() => handleClick('services')}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        className={activeLink === 'portfolio' ? 'active' : ''}
                        onClick={() => handleClick('portfolio')}
                    >
                        Portfolios
                    </a>
                </li>
                <li>
                    <a
                        href="#blog"
                        className={activeLink === 'blog' ? 'active' : ''}
                        onClick={() => handleClick('blog')}
                    >
                        Blog +
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeLink === 'contact' ? 'active' : ''}
                        onClick={() => handleClick('contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <button className="hire-me-button">Hire Me!</button>
        </nav>
    );
}
export default Header;