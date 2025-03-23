import React from 'react';
import '../css/Footer.css'; // Assuming you'll create a separate CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-section">
                    <h3>About Me</h3>
                    <p>
                        Passionate Java developer dedicated to creating innovative solutions.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: zunairprof@gmail.com</li>
                        <li>Phone: +92 324 4165 642</li>
                        <li>Location: Lahore, Pakistan</li>
                    </ul>
                </div>

                {/* Social Links Section */}
                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/zunair-sarwar-401323221/" target="_blank"
                           rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Zunairzz" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.instagram.com/zun_i333/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My Resume. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;