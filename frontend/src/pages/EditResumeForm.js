import React, {useState} from "react";
import {Box, Button, Fade, Paper, TextField, Typography} from "@mui/material";
import CloudinaryUpload from "../components/CloudinaryUpload";
import resumeService from "../services/ResumeService";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// EditResumeForm component to update an existing resume
const EditResumeForm = ({resume, onClose, onUpdate}) => {
    // State for managing preview URL and file type
    const [previewUrl, setPreviewUrl] = useState("");
    const [fileType, setFileType] = useState("");

    // State for managing a selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // State for form input fields, initialized with resume data
    const [formData, setFormData] = useState({
        name: resume.name || "",
        title: resume.title || "",
        phoneNo: resume.phoneNo || "",
        email: resume.email || "",
        experience: resume.experience || "",
    });

    // State for image data (URL and public ID)
    const [imageData, setImageData] = useState({
        url: resume.image?.url || "",
        publicId: resume.image?.publicId || "",
    });

    // State for document data (URL and public ID)
    const [documentData, setDocumentData] = useState({
        url: resume.document?.url || "",
        publicId: resume.document?.publicId || "",
    });

    // State for error handling
    const [error, setError] = useState(null);

    // Handle changes to form input fields
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Handle image upload and update image data
    const handleImageUpload = (url, publicId) => {
        setImageData({url, publicId});
    };

    // Handle document upload and update document data
    const handleDocumentUpload = (url, publicId) => {
        setDocumentData({url, publicId});
    };

    // Handle form submission to update resume
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Prepare updated resume data
            const updatedResumeData = {
                ...formData,
                image: imageData.url ? {url: imageData.url, publicId: imageData.publicId} : resume.image,
                document: documentData.url ? {url: documentData.url, publicId: documentData.publicId} : resume.document,
            };

            // Call resume service to update resume
            const response = await resumeService.updateResume(resume._id, updatedResumeData);
            onUpdate(response.data);
            onClose();
        } catch (err) {
            setError("Failed to update resume. Please try again.");
            console.error("Update error:", err);
        }
    };

    return (
        // Main container for the form
        <Paper
            elevation={2}
            sx={{
                p: 5,
                maxWidth: 800,
                mx: "auto",
                borderRadius: 4,
                bgcolor: "#ffffff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
        >
            {/* Form title */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: 500,
                    color: "#1e88e5",
                    lineHeight: 1.4,
                }}
            >
                Edit Resume
            </Typography>

            {/* Display error message if present */}
            {error && (
                <Typography color="error" sx={{mb: 3, fontSize: "1rem", fontWeight: 400}}>
                    {error}
                </Typography>
            )}

            {/* Form element */}
            <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column", gap: 3}}>
                {/* Name input field */}
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                    sx={{
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        "& .MuiInputLabel-root": {fontSize: "1.1rem", color: "#546e7a"},
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {borderColor: "#e0e0e0"},
                            "&:hover fieldset": {borderColor: "#90caf9"},
                        },
                    }}
                />

                {/* Title input field */}
                <TextField
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                    sx={{
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        "& .MuiInputLabel-root": {fontSize: "1.1rem", color: "#546e7a"},
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {borderColor: "#e0e0e0"},
                            "&:hover fieldset": {borderColor: "#90caf9"},
                        },
                    }}
                />

                {/* Phone input field */}
                <TextField
                    label="Phone"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    sx={{
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        "& .MuiInputLabel-root": {fontSize: "1.1rem", color: "#546e7a"},
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {borderColor: "#e0e0e0"},
                            "&:hover fieldset": {borderColor: "#90caf9"},
                        },
                    }}
                />

                {/* Email input field */}
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    sx={{
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        "& .MuiInputLabel-root": {fontSize: "1.1rem", color: "#546e7a"},
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {borderColor: "#e0e0e0"},
                            "&:hover fieldset": {borderColor: "#90caf9"},
                        },
                    }}
                />

                {/* Experience input field (multiline) */}
                <TextField
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        "& .MuiInputLabel-root": {fontSize: "1.1rem", color: "#546e7a"},
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {borderColor: "#e0e0e0"},
                            "&:hover fieldset": {borderColor: "#90caf9"},
                        },
                    }}
                />

                {/* Resume Image Upload Section */}
                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "#ffffff",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <Typography variant="h6" sx={{fontWeight: 500, mb: 2, color: "#37474f"}}>
                        Resume Image
                    </Typography>

                    {/* Display uploaded image */}
                    {imageData.url && (
                        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                            <img
                                src={imageData.url}
                                alt="Profile Preview"
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                }}
                            />
                        </Box>
                    )}

                    <CloudinaryUpload
                        onUpload={handleImageUpload}
                        accept="image/jpeg,image/png"
                        label="Upload Resume Image"
                    />

                    {/* Image preview section */}
                    {imageData.url && (
                        <Fade in={!!previewUrl}>
                            <Box
                                sx={{
                                    mt: 2,
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: "#ffffff",
                                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                                    border: "1px solid",
                                    borderColor: "grey.200",
                                }}
                            >
                                <Typography variant="caption" color="text.secondary" gutterBottom>
                                    Preview
                                </Typography>
                                {fileType === "application/pdf" ? (
                                    <Box
                                        sx={{
                                            mt: 2,
                                            p: 2,
                                            border: "1px solid",
                                            borderColor: "grey.300",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography variant="subtitle1" gutterBottom>
                                            Uploaded Resume Preview:
                                        </Typography>
                                        <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                            <PictureAsPdfIcon color="error"/>
                                            <a
                                                href={previewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{textDecoration: "none", color: "primary.main"}}
                                            >
                                                View PDF
                                            </a>
                                        </Box>
                                        <Box sx={{mt: 2, height: 400, border: "1px solid", borderColor: "grey.300"}}>
                                            <iframe
                                                src={previewUrl}
                                                width="100%"
                                                height="100%"
                                                title="PDF Preview"
                                                style={{border: "none"}}
                                            />
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 1}}>
                                        <img
                                            src={previewUrl}
                                            alt="Uploaded preview"
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: 150,
                                                borderRadius: 4,
                                                objectFit: "cover",
                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                            }}
                                        />
                                        <Typography sx={{fontSize: "0.875rem", color: "primary.main"}}>
                                            {selectedFile?.name}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Fade>
                    )}
                </Box>

                {/* Resume Document Upload Section */}
                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "#ffffff",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <Typography variant="h6" sx={{fontWeight: 500, mb: 2, color: "#37474f"}}>
                        Resume Document (PDF)
                    </Typography>
                    {resume.document?.url && !documentData.url && (
                        <Typography sx={{mb: 2, fontSize: "1rem", color: "#546e7a"}}>
                            Current: <a href={resume.document.url} target="_blank" rel="noopener noreferrer"
                                        style={{color: "#1e88e5"}}>View Document</a>
                        </Typography>
                    )}
                    <CloudinaryUpload
                        onUpload={handleDocumentUpload}
                        accept="application/pdf"
                        label="Upload Resume PDF"
                    />
                </Box>

                {/* Form action buttons */}
                <Box sx={{mt: 5, display: "flex", gap: 3, justifyContent: "flex-end"}}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClose}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            borderColor: "#b0bec5",
                            color: "#546e7a",
                            borderRadius: 3,
                            "&:hover": {
                                borderColor: "#90a4ae",
                                bgcolor: "#f5f5f5",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            bgcolor: "#1e88e5",
                            borderRadius: 3,
                            "&:hover": {
                                bgcolor: "#1565c0",
                                transform: "translateY(-1px)",
                            },
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                    >
                        Update
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default EditResumeForm;