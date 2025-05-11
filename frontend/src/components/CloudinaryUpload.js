import React, {useRef, useState} from "react";
import {Box, Button, Fade, Paper, Typography} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {styled} from "@mui/material/styles";
import {keyframes} from "@emotion/react";
import axios from "axios";

// Define keyframes for a spinning loading animation
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Styled component for a loading spinner
const LoadingSpinner = styled("div")({
    border: "3px solid #f3f3f3",
    borderTop: "3px solid #0288d1",
    borderRadius: "50%",
    width: 16,
    height: 16,
    animation: `${spin} 1s linear infinite`,
});

// CloudinaryUpload component for handling file uploads to Cloudinary
const CloudinaryUpload = ({onUpload, disabled, accept, label}) => {
    // State to track uploading status
    const [uploading, setUploading] = useState(false);
    // State to store preview URL for the selected file
    const [previewUrl, setPreviewUrl] = useState("");
    // State to store the file type of the selected file
    const [fileType, setFileType] = useState("");
    // State to store the selected file
    const [selectedFile, setSelectedFile] = useState(null);
    // State to store error messages
    const [error, setError] = useState("");
    // State to store the public ID of the previously uploaded file
    const [previousPublicId, setPreviousPublicId] = useState("");
    // Reference to the hidden file input element
    const fileInputRef = useRef(null);

    // Function to upload a file to Cloudinary
    const uploadToCloudinary = async (file) => {
        // Retrieve Cloudinary configuration
        const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dyo1h8cbk";
        const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "resume_uploads";

        // Prepare form data for the upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);
        formData.append("folder", "resume");

        try {
            // Send POST request to Cloudinary API
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                formData
            );

            // Check if the response is successful
            if (response.status !== 200) {
                throw new Error("Upload failed");
            }

            const data = response.data;
            // Validate response data
            if (!data.secure_url || !data.public_id) {
                throw new Error("Invalid response from Cloudinary");
            }

            // Return the secure URL and public ID
            return {url: data.secure_url, publicId: data.public_id};
        } catch (error) {
            throw new Error("Failed to upload to Cloudinary: " + error.message);
        }
    };

    // Function to validate image dimensions
    const validateImageDimensions = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const {width, height} = img;
                URL.revokeObjectURL(img.src);
                // Check if image dimensions are within limits
                if (width <= 1200 && height <= 1800) {
                    resolve(true);
                } else {
                    reject("Image must be 1200 × 1800 pixels or smaller.");
                }
            };
            img.onerror = () => {
                URL.revokeObjectURL(img.src);
                reject("Failed to load image.");
            };
        });
    };

    // Handle file selection from input
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        // Validate file type
        if (!file || !accept.split(",").includes(file.type)) {
            setError(`Please upload a valid ${label.includes("PDF") ? "PDF" : "image (JPEG/PNG)"} file.`);
            return;
        }

        // Validate image dimensions if the file is an image
        if (file.type.includes("image")) {
            try {
                await validateImageDimensions(file);
            } catch (err) {
                setError(err);
                return;
            }
        }

        setError("");
        setSelectedFile(file);
        setFileType(file.type);

        // Generate local preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

    // Handle file drop event
    const handleDrop = async (event) => {
        event.preventDefault();
        if (disabled || uploading) return;

        const file = event.dataTransfer.files[0];
        // Validate dropped file type
        if (!file || !accept.split(",").includes(file.type)) {
            setError(`Please drop a valid ${label.includes("PDF") ? "PDF" : "image (JPEG/PNG)"} file.`);
            return;
        }

        // Validate image dimensions if the file is an image
        if (file.type.includes("image")) {
            try {
                await validateImageDimensions(file);
            } catch (err) {
                setError(err);
                return;
            }
        }

        setError("");
        setSelectedFile(file);
        setFileType(file.type);

        // Generate local preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

    // Prevent default drag-over behavior
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Trigger file input click
    const handleButtonClick = () => {
        if (!disabled && !uploading) {
            fileInputRef.current.click();
        }
    };

    // Handle file upload to Cloudinary
    const handleUploadClick = async () => {
        if (!selectedFile) {
            setError("Please select a file to upload.");
            return;
        }

        // Validate image dimensions if the file is an image
        if (selectedFile.type.includes("image")) {
            try {
                await validateImageDimensions(selectedFile);
            } catch (err) {
                setError(err);
                return;
            }
        }

        setError("");
        setUploading(true);
    };

    // Render the component
    return (
        <Box sx={{my: 2, maxWidth: 500, mx: "auto"}}>
            {/* File upload area */}
            <Paper
                elevation={2}
                sx={{
                    border: "2px dashed",
                    borderColor: error ? "error.main" : uploading ? "grey.400" : "primary.light",
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    bgcolor: "background.default",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        bgcolor: !disabled && !uploading ? "grey.200" : "grey.100",
                        borderColor: error ? "red.500" : !disabled && !uploading ? "primary.main" : "grey.400",
                        transform: !disabled && !uploading ? "scale(1.02)" : "none",
                    },
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                role="region"
                aria-label="File upload area"
            >
                {/* Hidden file input */}
                <input
                    type="file"
                    accept={accept}
                    style={{display: "none"}}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    disabled={disabled || uploading}
                    aria-hidden="true"
                />
                {/* Upload icon */}
                <CloudUploadIcon
                    sx={{
                        fontSize: 40,
                        color: uploading ? "grey.500" : "primary.main",
                        transition: "color 0.3s ease",
                    }}
                />
                {/* Upload label */}
                <Typography
                    variant="h6"
                    sx={{mt: 1, mb: 0.5, fontWeight: 500, color: "text.primary"}}
                >
                    {uploading ? "Uploading..." : label}
                </Typography>
                {/* Image size hint */}
                {label.includes("Image") && (
                    <Typography variant="caption" color="text.secondary" sx={{mb: 2, display: "block"}}>
                        Max size: 1200 × 1800 pixels
                    </Typography>
                )}
                {/* Your component code */}
                <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center'}}>
                    {/* Select file button */}
                    <Button
                        variant="contained"
                        size="medium"
                        startIcon={<FileUploadIcon/>}
                        onClick={handleButtonClick}
                        disabled={disabled || uploading}
                        sx={{
                            borderRadius: 10,
                            textTransform: 'none',
                            px: 3,
                            py: 1,
                            bgcolor: 'primary.main',
                            '&:hover': {bgcolor: 'primary.dark', transform: 'translateY(-2px)'},
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        }}
                        aria-label="Choose file to upload"
                    >
                        Select File
                    </Button>

                    {/* Upload file button */}
                    {selectedFile && (
                        <Button
                            variant="contained"
                            size="medium"
                            startIcon={uploading ? <LoadingSpinner/> : <CloudUploadIcon/>}
                            onClick={handleUploadClick}
                            disabled={disabled || uploading}
                            sx={{
                                borderRadius: 10,
                                textTransform: 'none',
                                px: 3,
                                py: 1,
                                bgcolor: 'secondary.main',
                                '&:hover': {bgcolor: 'secondary.dark', transform: 'translateY(-2px)'},
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                            aria-label="Upload file to Cloudinary"
                        >
                            {uploading ? 'Uploading...' : 'Upload File'}
                        </Button>
                    )}
                </Box>
                {/* Error message */}
                {error && (
                    <Fade in={!!error}>
                        <Typography variant="caption" color="error.main" sx={{mt: 2, display: "block"}}>
                            {error}
                        </Typography>
                    </Fade>
                )}
            </Paper>

            {/* Preview section */}
            {previewUrl && !error && (
                <Fade in={!!previewUrl}>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            borderRadius: 2,
                            bgcolor: "background.paper",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                            border: "1px solid",
                            borderColor: "grey.200",
                        }}
                    >
                        <Typography variant="caption" color="text.secondary" gutterBottom>
                            Preview
                        </Typography>
                        {/* PDF preview */}
                        {fileType === "application/pdf" ? (
                            <Box sx={{mt: 2, p: 2, border: "1px solid", borderColor: "grey.300", borderRadius: 2}}>
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
                                {/* Embedded PDF preview */}
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
                            /* Image preview */
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
                                    {selectedFile.name}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Fade>
            )}
        </Box>
    );
};

// Export the component
export default CloudinaryUpload;