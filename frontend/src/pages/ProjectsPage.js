import React, { useEffect, useRef, useState } from "react";
import "../css/Projects.css";
import Base from "../component/Base";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";
import ProjectService from "../services/ProjectService";
import AddProjectForm from "./AddProjectForm"; // Assuming you have this component
import { Snackbar, Alert, CircularProgress } from "@mui/material";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "info",
    });
    const cardRefs = useRef([]);
    const [showTopButton, setShowTopButton] = useState(false);

    // Fetch projects on mount
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await ProjectService.getProjects();
                if (response.success) {
                    setProjects(response.data);
                } else {
                    setSnackbar({
                        open: true,
                        message: response.message,
                        severity: "error",
                    });
                }
            } catch (err) {
                setSnackbar({
                    open: true,
                    message: "An unexpected error occurred while fetching projects.",
                    severity: "error",
                });
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

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
    }, [projects]);

    // Show/hide back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Handle project added
    const handleProjectAdded = async () => {
        setLoading(true);
        try {
            const response = await ProjectService.getProjects();
            if (response.success) {
                setProjects(response.data);
                setSnackbar({
                    open: true,
                    message: "Project added successfully!",
                    severity: "success",
                });
            } else {
                setSnackbar({
                    open: true,
                    message: response.message,
                    severity: "error",
                });
            }
        } catch (err) {
            setSnackbar({
                open: true,
                message: "Failed to refresh project list.",
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    // Close snackbar
    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Base>
            <section className="projects-section">
                <div className="projects-container">
                    <h1 className="projects-title">
                        My <span style={{ color: "#ff6600" }}>Projects</span>
                    </h1>
                    <p className="projects-subtitle">
                        A collection of my recent work and coding projects
                    </p>
                    {loading ? (
                        <div style={{ textAlign: "center", padding: "20px" }}>
                            <CircularProgress />
                        </div>
                    ) : projects.length === 0 ? (
                        <p style={{ textAlign: "center" }}>No projects available.</p>
                    ) : (
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div
                                    key={project._id}
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
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">
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
                    )}
                </div>
            </section>
            {showTopButton && (
                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        borderRadius: "50%",
                        minWidth: "50px",
                        height: "50px",
                        backgroundColor: "#ff6600",
                        "&:hover": { backgroundColor: "#e65c00" },
                    }}
                >
                    <ArrowUpwardIcon sx={{ color: "white" }} />
                </Button>
            )}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Base>
    );
};

export default ProjectsPage;