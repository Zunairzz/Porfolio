import React, {useState} from "react";
import {Alert, Box, Button, CircularProgress, Snackbar, TextField, Typography} from "@mui/material";
import CloudinaryUpload from "../components/CloudinaryUpload"; // For resume file upload
import ResumeService from "../services/ResumeService"; // Hypothetical service for API calls
import Base from "../components/Base";

const AddResumeForm = ({onResumeAdded}) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        phoneNo: "",
        email: "",
        experience: "",
        resume: {
            url: "",
            publicId: "",
        },
    });
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

    // Handle resume file upload success
    const handleResumeUpload = (url, publicId) => {
        setFormData({
            ...formData,
            resume: {url, publicId},
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSnackbar({open: false, message: "", severity: "info"});

        // Basic validation
        if (
            !formData.name ||
            !formData.title ||
            !formData.phoneNo ||
            !formData.email ||
            !formData.experience ||
            !formData.resume.url ||
            !formData.resume.publicId
        ) {
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
            const response = await ResumeService.createResume(formData);
            console.log("response", response);

            // Set response in snackbar
            setSnackbar({
                open: true,
                message: response.message,
                severity: response.success ? "success" : "error",
            });

            // If successful, reset form and refresh resume list
            if (response.success) {
                setFormData({
                    name: "",
                    title: "",
                    phoneNo: "",
                    email: "",
                    experience: "",
                    resume: {url: "", publicId: ""},
                });
                if (onResumeAdded) onResumeAdded(); // Call to refresh resumes
            }
        } catch (err) {
            // Unexpected error (e.g., network issue)
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
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Base>
            <Box style={{marginTop: "150px"}} sx={{maxWidth: 600, mx: "auto", p: 3}}>
                <Typography variant="h4" gutterBottom>
                    Add New Resume
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={loading}
                    />
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={loading}
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={loading}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        type="email"
                        required
                        disabled={loading}
                    />
                    <TextField
                        fullWidth
                        label="Experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        margin="normal"
                        rows={4}
                        required
                        disabled={loading}
                    />
                    <CloudinaryUpload
                        onUpload={handleResumeUpload}
                        disabled={loading}
                        accept="application/pdf"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{mt: 2}}
                    >
                        {loading ? <CircularProgress size={24}/> : "Add Resume"}
                    </Button>
                </form>
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
            </Box>
        </Base>
    );
};

export default AddResumeForm;