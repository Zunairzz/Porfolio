import React, { useState } from "react";
import {
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import CloudinaryUpload from "../CloudinaryUpload"; // Reuse CloudinaryUpload
import ProjectService from "../services/ProjectService";

const EditProjectForm = ({ project, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: project.title,
        description: project.description,
        technologies: project.technologies || [],
        githubUrl: project.githubUrl,
        image: project.image || "",
        publicId: project.publicId || "",
    });
    const [techInput, setTechInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "info",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle adding technologies
    const handleAddTech = (e) => {
        if (e) e.preventDefault();
        if (techInput.trim()) {
            setFormData({
                ...formData,
                technologies: [...formData.technologies, techInput.trim()],
            });
            setTechInput("");
        }
    };

    // Handle Enter key for technologies
    const handleTechKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTech();
        }
    };

    // Handle deleting a technology
    const handleDeleteTech = (techToDelete) => {
        setFormData({
            ...formData,
            technologies: formData.technologies.filter((tech) => tech !== techToDelete),
        });
    };

    // Handle image upload success
    const handleImageUpload = (url, publicId) => {
        setFormData({ ...formData, image: url, publicId: publicId });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSnackbar({ open: false, message: "", severity: "info" });

        // Basic validation
        if (!formData.title || !formData.description || !formData.githubUrl) {
            setSnackbar({
                open: true,
                message: "Please fill in all required fields.",
                severity: "error",
            });
            setLoading(false);
            return;
        }

        try {
            const response = await ProjectService.updateProject(project._id, formData);
            if (response.success) {
                onUpdate(response.data.data); // Update project in parent component
                setSnackbar({
                    open: true,
                    message: response.message,
                    severity: "success",
                });
                onClose(); // Close the form
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
                message: "An unexpected error occurred. Please try again.",
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
        <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Edit Project
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Project Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    margin="normal"
                    required
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                    required
                    disabled={loading}
                />
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", marginBottom: 2 }}>
                    <TextField
                        fullWidth
                        label="Technologies (type and press Enter or click Add)"
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        onKeyDown={handleTechKeyDown}
                        margin="normal"
                        disabled={loading}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddTech}
                        disabled={loading || !techInput.trim()}
                        sx={{ height: "56px", width: "80px", marginTop: "7px" }}
                    >
                        Add
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
                    {formData.technologies.map((tech, index) => (
                        <Chip
                            key={index}
                            label={tech}
                            onDelete={loading ? undefined : () => handleDeleteTech(tech)}
                            color="primary"
                        />
                    ))}
                </Box>
                <TextField
                    fullWidth
                    label="GitHub URL"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    margin="normal"
                    required
                    disabled={loading}
                />
                <CloudinaryUpload onUpload={handleImageUpload} disabled={loading} />
                {formData.image && (
                    <Box sx={{ my: 2 }}>
                        <Typography>Image Preview:</Typography>
                        <img
                            src={formData.image}
                            alt="Preview"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </Box>
                )}
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        fullWidth
                    >
                        {loading ? <CircularProgress size={24} /> : "Update Project"}
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClose}
                        disabled={loading}
                        fullWidth
                    >
                        Cancel
                    </Button>
                </Box>
            </form>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default EditProjectForm;