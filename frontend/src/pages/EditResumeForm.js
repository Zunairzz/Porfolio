import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Snackbar, TextField, Typography } from '@mui/material';
import ResumeService from '../services/ResumeService';
import CloudinaryUpload from '../components/CloudinaryUpload';

const EditResumeForm = ({ resume, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: resume.name,
        title: resume.title,
        phoneNo: resume.phoneNo,
        email: resume.email,
        experience: resume.experience,
        resume: {
            url: resume.resume.url,
            publicId: resume.resume.publicId,
        },
    });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'info',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (url, publicId) => {
        setFormData({
            ...formData,
            resume: { url, publicId },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSnackbar({ open: false, message: '', severity: 'info' });

        if (!formData.name || !formData.title || !formData.phoneNo || !formData.email || !formData.experience || !formData.resume.url) {
            setSnackbar({
                open: true,
                message: 'Please fill in all required fields.',
                severity: 'error',
            });
            setLoading(false);
            return;
        }

        try {
            const response = await ResumeService.updateResume(resume._id, formData);
            if (response.success) {
                onUpdate(response.data);
                setSnackbar({
                    open: true,
                    message: response.message,
                    severity: 'success',
                });
                onClose();
            } else {
                setSnackbar({
                    open: true,
                    message: response.message,
                    severity: 'error',
                });
            }
        } catch (err) {
            setSnackbar({
                open: true,
                message: 'An unexpected error occurred. Please try again.',
                severity: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Edit Resume
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
                    multiline
                    rows={4}
                    required
                    disabled={loading}
                />
                <CloudinaryUpload
                    onUpload={handleFileUpload}
                    disabled={loading}
                    accept="application/pdf"
                />
                {formData.resume.url && (
                    <Box sx={{ my: 2 }}>
                        <Box sx={{ mt: 2, border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
                            <Typography variant="subtitle1" sx={{ p: 1, bgcolor: '#f5f5f5' }}>
                                Resume Preview
                            </Typography>
                            <iframe
                                src={`${formData.resume.url}#toolbar=0&navpanes=0&scrollbar=0`}
                                style={{ width: '100%', height: '500px', border: 'none' }}
                                title="Resume Preview"
                            />
                        </Box>
                    </Box>
                )}
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        fullWidth
                    >
                        {loading ? <CircularProgress size={24} /> : 'Update Resume'}
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
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default EditResumeForm;