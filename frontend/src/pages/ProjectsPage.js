import React, { useEffect, useRef, useState } from "react";
import "../css/Projects.css";
import project1 from "../image/project.png";
import project2 from "../image/project 2.png";
import Base from "../component/Base";

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "A web application built with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            githubUrl: "https://github.com/yourusername/project-one",
            image: project1,
        },
        {
            id: 2,
            title: "Project Two",
            description: "E-commerce platform with payment integration",
            technologies: ["React", "TypeScript", "Stripe"],
            githubUrl: "https://github.com/yourusername/project-two",
            image: project2,
        },
        {
            id: 3,
            title: "Project Three",
            description: "Mobile responsive portfolio website",
            technologies: ["React", "CSS Grid", "Firebase"],
            githubUrl: "https://github.com/yourusername/project-three",
            image: project1,
        },
    ];

    const cardRefs = useRef([]);
    const [showTopButton, setShowTopButton] = useState(false);

    // Intersection Observer for mobile scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    // Show/hide back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Base>
            <section className="projects-section">
                <div className="projects-container">
                    <h1 className="projects-title">My Projects</h1>
                    <p className="projects-subtitle">
                        A collection of my recent work and coding projects
                    </p>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="project-card"
                                style={{ "--order": index }}
                            >
                                {project.image && (
                                    <div className="image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            className="project-image"
                                        />
                                    </div>
                                )}
                                <div className="project-content">
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {showTopButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </Base>
    );
};

export default ProjectsPage;