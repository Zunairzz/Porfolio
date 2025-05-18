import React, {useEffect, useRef, useState} from "react";
import "../css/Projects.css";
import Base from "../components/Base";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";
import ProjectService from "../services/ProjectService";
import {Alert, Box, CircularProgress, Dialog, DialogContent, Snackbar} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditProjectForm from "./EditProjectForm";
import EditIcon from "@mui/icons-material/Edit";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "info",
    });
    const cardRefs = useRef([]);
    const [showTopButton, setShowTopButton] = useState(false);
    const [editProject, setEditProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State for full-size image

    // Fetch projects on mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAdmin(!!token);

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
            {threshold: 0.1}
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
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    // Close snackbar
    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    // Handle project deletion
    const handleDeleteProject = async (projectId) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                const response = await ProjectService.deleteProject(projectId);
                if (response.success) {
                    setProjects(projects.filter((project) => project._id !== projectId));
                    setSnackbar({
                        open: true,
                        message: "Project deleted successfully.",
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
                    message: "An unexpected error occurred while deleting the project.",
                    severity: "error",
                });
            }
        }
    };

    const handleOpenEdit = (project) => {
        setEditProject(project);
    };

    const handleCloseEdit = () => {
        setEditProject(null);
    };

    // Handle project update
    const handleUpdateProject = (updatedProject) => {
        setProjects(
            projects.map((project) =>
                project._id === updatedProject._id ? updatedProject : project
            )
        );
        setSnackbar({
            open: true,
            message: "Project updated successfully.",
            severity: "success",
        });
    };

    // Handle image click to show full-size
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    // Close full-size image dialog
    const handleCloseImageDialog = () => {
        setSelectedImage(null);
    };

    return (
        <Base>
            <section className="projects-section">
                <div className="projects-container">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black mb-12 bg-clip-text text-transparent">
                        My <span style={{color: "#ff6200"}}>Projects</span>
                    </h1>
                    <p className="projects-subtitle">
                        A collection of my recent work and coding projects
                    </p>
                    {loading ? (
                        <div style={{textAlign: "center", padding: "20px"}}>
                            <CircularProgress/>
                        </div>
                    ) : projects.length === 0 ? (
                        <p style={{textAlign: "center"}}>No projects available.</p>
                    ) : (
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div
                                    key={project._id}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="project-card"
                                    style={{"--order": index}}
                                >
                                    {project.image && (
                                        <div className="image-wrapper">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} screenshot`}
                                                className="project-image"
                                                onClick={() => handleImageClick(project.image)} // Add click handler
                                                style={{cursor: "pointer"}} // Make image clickable
                                            />
                                        </div>
                                    )}
                                    <div className="project-content">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <h2 className="project-title">{project.title}</h2>
                                            {isAdmin && (
                                                <div>
                                                    <IconButton
                                                        onClick={() => handleOpenEdit(project)}
                                                        sx={{color: "#1976d2"}}
                                                        aria-label="edit project"
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: 40, // Adjust size as needed
                                                                height: 40,
                                                                borderRadius: '50%', // Makes it rounded
                                                                backgroundColor: '#1976d2', // Fill color (e.g., blue)
                                                                color: '#fff', // Icon color (e.g., white)
                                                                '&:hover': {
                                                                    backgroundColor: '#1565c0', // Optional hover effect
                                                                },
                                                            }}
                                                        >
                                                            <EditIcon/>
                                                        </Box>
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={() => handleDeleteProject(project._id)}
                                                        aria-label="delete project"
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: '50%',
                                                            backgroundColor: '#d32f2f', // Red background
                                                            color: '#fff', // White icon
                                                            '&:hover': {
                                                                backgroundColor: '#b71c1c', // Darker red on hover
                                                            },
                                                        }}
                                                    >
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </div>
                                            )}
                                        </div>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">{tech}</span>
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
                        "&:hover": {backgroundColor: "#e65c00"},
                    }}
                >
                    <ArrowUpwardIcon sx={{color: "white"}}/>
                </Button>
            )}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{width: "100%"}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
            <Dialog open={!!editProject} onClose={handleCloseEdit} maxWidth="md" fullWidth>
                {editProject && (
                    <EditProjectForm
                        project={editProject}
                        onClose={handleCloseEdit}
                        onUpdate={handleUpdateProject}
                    />
                )}
            </Dialog>
            {/* Full-size image dialog */}
            <Dialog
                open={!!selectedImage}
                onClose={handleCloseImageDialog}
                maxWidth="lg"
                fullWidth
            >
                <DialogContent sx={{padding: 0, display: "flex", justifyContent: "center"}}>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Full-size project screenshot"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "90vh",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Base>
    );
};

export default ProjectsPage;