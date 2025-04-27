import React, {useRef, useState} from "react";
import {Box, Button, CircularProgress, Paper, Typography} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const CloudinaryUpload = ({onUpload, disabled, accept}) => {
    const [uploading, setUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const fileInputRef = useRef(null);

    // Simulated Cloudinary upload function
    const uploadToCloudinary = async (file) => {
        // Replace this with actual Cloudinary upload logic
        // For demonstration, we'll simulate an upload with a mock URL
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUrl = URL.createObjectURL(file); // Temporary URL for preview
                const mockPublicId = `resume_${Date.now()}`;
                resolve({url: mockUrl, publicId: mockPublicId});
            }, 1000);
        });
    };

    // Handle file selection
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file || file.type !== "application/pdf") {
            alert("Please upload a valid PDF file.");
            return;
        }

        setUploading(true);
        try {
            const {url, publicId} = await uploadToCloudinary(file);
            setPreviewUrl(url);
            onUpload(url, publicId);
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Failed to upload file. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    // Handle drag-and-drop
    const handleDrop = async (event) => {
        event.preventDefault();
        if (disabled || uploading) return;

        const file = event.dataTransfer.files[0];
        if (!file || file.type !== "application/pdf") {
            alert("Please drop a valid PDF file.");
            return;
        }

        setUploading(true);
        try {
            const {url, publicId} = await uploadToCloudinary(file);
            setPreviewUrl(url);
            onUpload(url, publicId);
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Failed to upload file. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    // Handle drag-over
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Trigger file input click
    const handleButtonClick = () => {
        if (!disabled && !uploading) {
            fileInputRef.current.click();
        }
    };

    return (
        <Box sx={{my: 2}}>
            <Paper
                elevation={2}
                sx={{
                    border: "2px dashed",
                    borderColor: uploading ? "grey.400" : "primary.main",
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    bgcolor: uploading ? "grey.100" : "background.paper",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        bgcolor: !disabled && !uploading ? "#e0f7fa" : "grey.100", // Custom hover background color
                        borderColor: !disabled && !uploading ? "#0288d1" : "grey.400", // Custom hover border color
                    },
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    accept={accept}
                    style={{display: "none"}}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    disabled={disabled || uploading}
                />
                <CloudUploadIcon
                    sx={{fontSize: 40, color: uploading ? "grey.500" : "primary.main"}}
                />
                <Typography variant="h6" sx={{mt: 1, mb: 2}}>
                    {uploading ? "Uploading..." : "Upload Resume (PDF)"}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                    Drag and drop your PDF here or click to browse
                </Typography>
                <Button
                    variant="contained"
                    startIcon={uploading ? <CircularProgress size={20}/> : <CloudUploadIcon/>}
                    onClick={handleButtonClick}
                    disabled={disabled || uploading}
                    sx={{
                        borderRadius: 20,
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    {uploading ? "Uploading..." : "Choose File"}
                </Button>
            </Paper>

            {/* Preview Section */}
            {previewUrl && (
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
                    {/* Optional: Embedded PDF Preview (requires additional setup) */}
                    {/* <Box sx={{ mt: 2, height: 400, border: "1px solid", borderColor: "grey.300" }}>
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              title="PDF Preview"
              style={{ border: "none" }}
            />
          </Box> */}
                </Box>
            )}
        </Box>
    );
};

export default CloudinaryUpload;