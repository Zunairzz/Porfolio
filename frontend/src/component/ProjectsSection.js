import React from 'react';
import {Link} from 'react-router-dom';
import ProjectCard from './ProjectCard';
import '../css/ProjectsSection.css';
import project1 from "../image/project.png";
import project2 from "../image/project 2.png";

const ProjectsSection = () => {
    // Sample project data (replace with your actual projects)
    const projects = [
        {
            id: 1,
            title: "Lirante - Food Delivery Solution",
            description: "A food delivery app with a sleek UI, featuring real-time tracking and seamless payment integration.",
            image: project1,
            tags: ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"],
            link: "project-link-1",
        },
        {
            id: 2,
            title: "Smart Home Dashboard",
            description: "A dashboard to control smart home devices with a modern, user-friendly interface.",
            image: project2,
            tags: ["UI/UX", "Product Design", "Glassmorphism"],
            link: "project-link-2",
        },
        {
            id: 3,
            title: "E-Commerce Platform",
            description: "A responsive e-commerce platform with advanced filtering and payment options.",
            image: project1,
            tags: ["Web Design", "Animation", "Cards"],
            link: "project-link-3",
        },
    ];

    return (
        <section className="projects-section">
            <div className="section-header">
                <h2 className="section-title">
                    Let’s have a look at my <span>Portfolio</span>
                </h2>
                <Link to="/projects" className="see-all-btn">
                    See All
                </Link>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tags={project.tags}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;