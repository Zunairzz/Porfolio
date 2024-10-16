import React from 'react';
import '../css/MyService.css'; // Importing the CSS file

import service_img_1 from '../assests/s1.png';
import service_img_2 from '../assests/s2.png';
import service_img_3 from '../assests/s3.png';

const services = [
    {
        title: 'UI/UX Design',
        image: service_img_1, // Replace with the path to the image
    },
    {
        title: 'Web Design',
        image: service_img_2, // Replace with the path to the image
    },
    {
        title: 'Landing Page',
        image: service_img_3, // Replace with the path to the image
    },
];

const MyServices = () => {
    return (
        <div className="my-services">
            <h2>
                My <span className="highlight">Services</span>
            </h2>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
                bibendum sodales.
            </p>
            <div className="services-slider">
                <p>ZUni</p>
                {JSON.stringify(services[0].image)}
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} image={service.image}/>
                ))}
                <div className="slider-dots">
                    {services.map((_, index) => (
                        <span key={index} className={`dot ${index === 0 ? 'active' : ''}`}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({title, image}) => (
    <div className="service-card">
        <img src={image} alt={title} className="service-image"/>
        <div className="service-title">{title}</div>
    </div>
);

export default MyServices;
