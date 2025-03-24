// ParallaxSection.jsx (No changes needed here, kept for reference)
import React, { useEffect } from 'react';
import '../css/ParallaxSection.css';

const ParallaxSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.portfolio-card');
            cards.forEach(card => {
                const speed = card.getAttribute('data-speed');
                const yPos = window.scrollY * speed;
                card.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax-bg"></div>
            <div className="parallax-content">
                <h1 className="parallax-title">My Portfolio</h1>
                <p className="parallax-subtitle">
                    A showcase of my skills, creativity, and passion for development
                </p>
                <div className="portfolio-grid">
                    <div className="portfolio-card" data-speed="0.2">
                        <h3>E-commerce Platform</h3>
                        <p>
                            Built a fully responsive online store with React, Redux, and Stripe
                            payment integration. Features include product filtering, cart
                            management, and user authentication.
                        </p>
                    </div>
                    <div className="portfolio-card" data-speed="0.3">
                        <h3>Weather Dashboard</h3>
                        <p>
                            Created a real-time weather application using Next.js and OpenWeather API.
                            Includes location-based forecasts, interactive charts, and a sleek UI design.
                        </p>
                    </div>
                    <div className="portfolio-card" data-speed="0.4">
                        <h3>Task Management App</h3>
                        <p>
                            Developed a mobile-first task manager with React Native and Firebase.
                            Supports real-time sync, push notifications, and team collaboration features.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxSection;