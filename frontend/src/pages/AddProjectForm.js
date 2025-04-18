import React, {useState} from "react";
import {Alert, Box, Button, Chip, CircularProgress, Snackbar, TextField, Typography} from "@mui/material";
import CloudinaryUpload from "../CloudinaryUpload"; // For image upload
import ProjectService from "../services/ProjectService";
import Base from "../component/Base";

const AddProjectForm = ({onProjectAdded}) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: [],
        githubUrl: "",
        image: "",
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
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    // Handle adding technologies
    const handleAddTech = (e) => {
        if (e) e.preventDefault(); // Prevent default for both button and Enter key
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
    const handleImageUpload = (url) => {
        setFormData({...formData, image: url});
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Disable button and show loading
        setSnackbar({open: false, message: "", severity: "info"}); // Reset snackbar

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
            // Wait for API response
            const response = await ProjectService.addProject(formData);

            // Set response in snackbar
            setSnackbar({
                open: true,
                message: response.message,
                severity: response.success ? "success" : "error",
            });

            // If successful, reset form and refresh project list
            if (response.success) {
                setFormData({
                    title: "",
                    description: "",
                    technologies: [],
                    githubUrl: "",
                    image: "",
                });
                onProjectAdded(); // Call to refresh projects
            }
        } catch (err) {
            // Unexpected error (e.g., network issue)
            setSnackbar({
                open: true,
                message: "An unexpected error occurred. Please try again.",
                severity: "error",
            });
        } finally {
            setLoading(false); // Re-enable button
        }
    };

    // Close snackbar
    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Base>
            <Box style={{marginTop: '150px'}} sx={{maxWidth: 600, mx: "auto", p: 3}}>
                <Typography variant="h4" gutterBottom>
                    Add New Project
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
                    <Box sx={{display: "flex", gap: 1, alignItems: "center", marginBottom: 2}}>
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
                            sx={{height: "56px", width: "80px", marginTop: "7px"}}
                        >
                            Add
                        </Button>
                    </Box>
                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 1, my: 2}}>
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
                    <CloudinaryUpload onUpload={handleImageUpload} disabled={loading}/>
                    {formData.image && (
                        <Box sx={{my: 2}}>
                            <Typography>Image Preview:</Typography>
                            <img src={formData.image} alt="Preview" style={{maxWidth: "100%", height: "auto"}}/>
                        </Box>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{mt: 2}}
                    >
                        {loading ? <CircularProgress size={24}/> : "Add Project"}
                    </Button>
                </form>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity={snackbar.severity}
                        sx={{width: "100%"}}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </Base>
    );
};

export default AddProjectForm;