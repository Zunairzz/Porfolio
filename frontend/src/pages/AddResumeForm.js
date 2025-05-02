import React, {useState} from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import CloudinaryUpload from "../components/CloudinaryUpload"; // Updated component
import ResumeService from "../services/ResumeService"; // Hypothetical service
import Base from "../components/Base";

const AddResumeForm = ({onResumeAdded}) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        phoneNo: "",
        email: "",
        experience: "",
        resume: {url: "", publicId: ""}, // For PDF
        image: {url: "", publicId: ""}, // For image
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

    // Handle resume (PDF) upload success
    const handleResumeUpload = (url, publicId) => {
        setFormData({...formData, resume: {url, publicId}});
    };

    // Handle image upload success
    const handleImageUpload = (url, publicId) => {
        setFormData({...formData, image: {url, publicId}});
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSnackbar({open: false, message: "", severity: "info"});

        // Basic validation
        // if (
        //     !formData.name ||
        //     !formData.title ||
        //     !formData.phoneNo ||
        //     !formData.email ||
        //     !formData.experience ||
        //     !formData.resume.url ||
        //     !formData.resume.publicId
        // ) {
        //     setSnackbar({
        //         open: true,
        //         message: "Please complete all required fields and upload a resume (PDF).",
        //         severity: "error",
        //     });
        //     setLoading(false);
        //     return;
        // }

        // Image is optional, but if provided, ensure it has a publicId
        // if (formData.image.url && !formData.image.publicId) {
        //     setSnackbar({
        //         open: true,
        //         message: "Invalid image upload. Please try again.",
        //         severity: "error",
        //     });
        //     setLoading(false);
        //     return;
        // }

        try {
            console.log("Hi Zuni");
            console.log(formData);
            // const response = await ResumeService.createResume(formData);
            // setSnackbar({
            //     open: true,
            //     message: response.message,
            //     severity: response.success ? "success" : "error",
            // });
            //
            // if (response.success) {
            //     setFormData({
            //         name: "",
            //         title: "",
            //         phoneNo: "",
            //         email: "",
            //         experience: "",
            //         resume: { url: "", publicId: "" },
            //         image: { url: "", publicId: "" },
            //     });
            //     if (onResumeAdded) onResumeAdded();
            // }
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
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Base>
            <Box
                sx={{
                    maxWidth: 800,
                    mx: "auto",
                    p: 2,
                    mt: 20,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{mb: 2, fontWeight: 600, color: "primary.main"}}
                >
                    Add New Resume
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
                            gap: 1.5,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            size="small"
                            required
                            disabled={loading}
                            variant="outlined"
                            sx={{"& .MuiOutlinedInput-root": {borderRadius: 1}}}
                        />
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            size="small"
                            required
                            disabled={loading}
                            variant="outlined"
                            sx={{"& .MuiOutlinedInput-root": {borderRadius: 1}}}
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            size="small"
                            required
                            disabled={loading}
                            variant="outlined"
                            sx={{"& .MuiOutlinedInput-root": {borderRadius: 1}}}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            size="small"
                            type="email"
                            required
                            disabled={loading}
                            variant="outlined"
                            sx={{"& .MuiOutlinedInput-root": {borderRadius: 1}}}
                        />
                        <TextField
                            fullWidth
                            label="Experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            size="small"
                            multiline
                            rows={2}
                            required
                            disabled={loading}
                            variant="outlined"
                            sx={{
                                gridColumn: {xs: "1", md: "1 / -1"},
                                "& .MuiOutlinedInput-root": {borderRadius: 1},
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            mt: 1.5,
                            display: "grid",
                            gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
                            gap: 1.5,
                        }}
                    >
                        <Box>
                            <Typography variant="subtitle2" sx={{mb: 0.5, fontWeight: 500}}>
                                Resume (PDF, Required)
                            </Typography>
                            <CloudinaryUpload
                                onUpload={handleResumeUpload}
                                disabled={loading}
                                accept="application/pdf"
                                label="Upload Resume (PDF)"
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{mb: 0.5, fontWeight: 500}}>
                                Image (Optional)
                            </Typography>
                            <CloudinaryUpload
                                onUpload={handleImageUpload}
                                disabled={loading}
                                accept="image/jpeg,image/png"
                                label="Upload Image (JPEG/PNG)"
                            />
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{
                            mt: 2,
                            width: "100%",
                            py: 1,
                            borderRadius: 1,
                            textTransform: "none",
                            fontWeight: 500,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            "&:hover": {boxShadow: "0 4px 12px rgba(0,0,0,0.2)"},
                        }}
                    >
                        {loading ? <CircularProgress size={24}/> : "Add Resume"}
                    </Button>
                </form>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{vertical: "top", horizontal: "center"}}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity={snackbar.severity}
                        sx={{
                            borderRadius: 1,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            fontWeight: 500,
                        }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </Base>
    );
};

export default AddResumeForm;