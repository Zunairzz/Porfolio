import React, {useState} from 'react';
import '../css/Navbar.css'

const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#333',
        padding: '1rem',
    };

    const navbarListStyle = {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    };

    const navbarItemStyle = (link) => ({
        margin: '0 1rem',
        cursor: 'pointer',
        color: activeLink === link ? '#fff' : '#aaa',

        textDecoration: 'none',
        transition: 'color 0.3s',
    });

    return (
        <nav className='navbar' style={navbarStyle}>
            <ul className='navbar-list' style={navbarListStyle}>
                <li className="navbar-item active">
                    <a
                        href="/"
                        style={navbarItemStyle('home')}
                        onClick={() => handleClick('home')}
                    >
                        Home
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="/about"
                        style={navbarItemStyle('about')}
                        onClick={() => handleClick('about')}
                    >
                        About
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="#service"
                        style={navbarItemStyle('service')}
                        onClick={() => handleClick('service')}
                    >
                        Service
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="#resume"
                        style={navbarItemStyle('resume')}
                        onClick={() => handleClick('resume')}
                    >
                        Resume
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="#project"
                        style={navbarItemStyle('project')}
                        onClick={() => handleClick('project')}
                    >
                        Project
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="#contact"
                        style={navbarItemStyle('contact')}
                        onClick={() => handleClick('contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default CustomNavbar;
