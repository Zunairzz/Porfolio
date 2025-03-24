import React from 'react';
import '../css/ProjectsSection.css';

const ProjectCard = ({ title, description, image, tags = [], link }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
              {tag}
            </span>
                    ))}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project <span className="arrow">➜</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;