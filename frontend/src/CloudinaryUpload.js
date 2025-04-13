import React, {useState} from "react";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import axios from "axios";

const CloudinaryUpload = ({onUpload}) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        const validTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!validTypes.includes(file.type)) {
            setError("Please upload a valid image (JPEG, PNG, or WebP).");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "project_uploads"); // Your Cloudinary upload preset
        formData.append("folder", "projects"); // Optional: organize images in a folder

        setUploading(true);
        setError("");
        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dyo1h8cbk/image/upload", // Replace with your Cloudinary cloud name
                formData
            );
            onUpload(response.data.secure_url); // Pass the URL to the parent
        } catch (err) {
            setError("Image upload failed. Please try again.");
            console.error("Cloudinary error:", err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <Box sx={{my: 2}}>
            <Button variant="outlined" component="label" disabled={uploading}>
                {uploading ? <CircularProgress size={24}/> : "Upload Image"}
                <input type="file" accept="image/*" hidden onChange={uploadImage}/>
            </Button>
            {error && <Typography color="error" sx={{mt: 1}}>{error}</Typography>}
        </Box>
    );
};

export default CloudinaryUpload;