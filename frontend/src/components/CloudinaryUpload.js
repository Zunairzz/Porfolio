import React, {useRef, useState} from "react";
import {Box, Button, Fade, Paper, Typography} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {styled} from "@mui/material/styles";
import {keyframes} from "@emotion/react";
import axios from "axios";

// Custom loading animation
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled("div")({
    border: "3px solid #f3f3f3",
    borderTop: "3px solid #0288d1",
    borderRadius: "50%",
    width: 16,
    height: 16,
    animation: `${spin} 1s linear infinite`,
});

const CloudinaryUpload = ({onUpload, disabled, accept, label}) => {
    const [uploading, setUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const [fileType, setFileType] = useState("");
    const [error, setError] = useState("");
    const [previousPublicId, setPreviousPublicId] = useState("");
    const fileInputRef = useRef(null);

    const uploadToCloudinary = async (file) => {
        const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dyo1h8cbk";
        const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "resume_uploads";

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);
        formData.append("folder", "resume");

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                formData
            );

            if (response.status !== 200) {
                throw new Error("Upload failed");
            }

            const data = response.data;
            if (!data.secure_url || !data.public_id) {
                throw new Error("Invalid response from Cloudinary");
            }

            return {url: data.secure_url, publicId: data.public_id};
        } catch (error) {
            throw new Error("Failed to upload to Cloudinary: " + error.message);
        }
    };

    const deleteFromCloudinary = async (publicId) => {
        try {
            const cloudName = "dyo1h8cbk";
            const apiKey = "396215775646691";
            const apiSecret = "ANB5Pm57jjsbvF8MA2b_rBtVBjs";

            const timestamp = Math.round(new Date().getTime() / 1000);
            const signature = require("crypto")
                .createHash("sha1")
                .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
                .digest("hex");

            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
                {
                    public_id: publicId,
                    api_key: apiKey,
                    timestamp: timestamp,
                    signature: signature,
                }
            );

            console.log("After delete", response);

            if (response.data.result === "ok") {
                console.log(`Successfully deleted file with publicId: ${publicId}`);
                return {result: "ok"};
            } else {
                throw new Error("Failed to delete file from Cloudinary");
            }
        } catch (error) {
            throw new Error(`Failed to delete file: ${error.message}`);
        }
    };

    const validateImageDimensions = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const {width, height} = img;
                URL.revokeObjectURL(img.src);
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

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file || !accept.split(",").includes(file.type)) {
            setError(`Please upload a valid ${label.includes("PDF") ? "PDF" : "image (JPEG/PNG)"} file.`);
            return;
        }

        if (file.type.includes("image")) {
            try {
                await validateImageDimensions(file);
            } catch (err) {
                setError(err);
                return;
            }
        }

        setError("");
        setUploading(true);

        try {
            if (previousPublicId) {
                let deleteSuccess = false;
                for (let attempt = 1; attempt <= 3; attempt++) {
                    try {
                        await deleteFromCloudinary(previousPublicId);
                        deleteSuccess = true;
                        break;
                    } catch (deleteError) {
                        console.warn(`Deletion attempt ${attempt} failed:`, deleteError);
                        if (attempt === 3) {
                            setError("Failed to delete previous file. Proceeding with upload.");
                        }
                    }
                }
                if (!deleteSuccess) {
                    console.warn("Proceeding with upload despite deletion failure.");
                }
            }

            const {url, publicId} = await uploadToCloudinary(file);
            setPreviewUrl(url);
            setFileType(file.type);
            setPreviousPublicId(publicId);
            onUpload(url, publicId);
        } catch (error) {
            setError("Failed to upload file. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleDrop = async (event) => {
        event.preventDefault();
        if (disabled || uploading) return;

        const file = event.dataTransfer.files[0];
        if (!file || !accept.split(",").includes(file.type)) {
            setError(`Please drop a valid ${label.includes("PDF") ? "PDF" : "image (JPEG/PNG)"} file.`);
            return;
        }

        if (file.type.includes("image")) {
            try {
                await validateImageDimensions(file);
            } catch (err) {
                setError(err);
                return;
            }
        }

        setError("");
        setUploading(true);

        try {
            if (previousPublicId) {
                let deleteSuccess = false;
                for (let attempt = 1; attempt <= 3; attempt++) {
                    try {
                        await deleteFromCloudinary(previousPublicId);
                        deleteSuccess = true;
                        break;
                    } catch (deleteError) {
                        console.warn(`Deletion attempt ${attempt} failed:`, deleteError);
                        if (attempt === 3) {
                            setError("Failed to delete previous file. Proceeding with upload.");
                        }
                    }
                }
                if (!deleteSuccess) {
                    console.warn("Proceeding with upload despite deletion failure.");
                }
            }

            const {url, publicId} = await uploadToCloudinary(file);
            setPreviewUrl(url);
            setFileType(file.type);
            setPreviousPublicId(publicId);
            onUpload(url, publicId);
        } catch (error) {
            setError("Failed to upload file. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = () => {
        if (!disabled && !uploading) {
            fileInputRef.current.click();
        }
    };

    return (
        <Box sx={{my: 2, maxWidth: 500, mx: "auto"}}>
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
                        bgcolor: !disabled && !uploading ? "primary.light" : "grey.100",
                        borderColor: !disabled && !uploading ? "primary.main" : "grey.400",
                        transform: !disabled && !uploading ? "scale(1.02)" : "none",
                    },
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                role="region"
                aria-label="File upload area"
            >
                <input
                    type="file"
                    accept={accept}
                    style={{display: "none"}}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    disabled={disabled || uploading}
                    aria-hidden="true"
                />
                <CloudUploadIcon
                    sx={{
                        fontSize: 40,
                        color: uploading ? "grey.500" : "primary.main",
                        transition: "color 0.3s ease",
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{mt: 1, mb: 0.5, fontWeight: 500, color: "text.primary"}}
                >
                    {uploading ? "Uploading..." : label}
                </Typography>
                {label.includes("Image") && (
                    <Typography variant="caption" color="text.secondary" sx={{mb: 2, display: "block"}}>
                        Max size: 1200 × 1800 pixels
                    </Typography>
                )}
                <Button
                    variant="contained"
                    size="medium"
                    startIcon={uploading ? <LoadingSpinner/> : <CloudUploadIcon/>}
                    onClick={handleButtonClick}
                    disabled={disabled || uploading}
                    sx={{
                        borderRadius: 10,
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        bgcolor: "primary.main",
                        "&:hover": {bgcolor: "primary.dark", transform: "translateY(-2px)"},
                        transition: "all 0.2s ease",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    aria-label="Choose file to upload"
                >
                    {uploading ? "Uploading..." : "Select File"}
                </Button>
                {error && (
                    <Fade in={!!error}>
                        <Typography variant="caption" color="error.main" sx={{mt: 2, display: "block"}}>
                            {error}
                        </Typography>
                    </Fade>
                )}
            </Paper>

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
                        {fileType === "application/pdf" ? (
                            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                <PictureAsPdfIcon fontSize="small" color="error"/>
                                <a
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration: "none", color: "primary.main", fontSize: "0.875rem"}}
                                >
                                    View PDF
                                </a>
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
                                <a
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration: "none", color: "primary.main", fontSize: "0.875rem"}}
                                >
                                    View Full Image
                                </a>
                            </Box>
                        )}
                    </Box>
                </Fade>
            )}
        </Box>
    );
};

export default CloudinaryUpload;