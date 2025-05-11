import React, {useState} from 'react';
import {Container, TextField, Button, Typography, Alert, Box} from '@mui/material';
import ProblemService from '../services/ProblemService';
import Base from "../components/Base"; // Adjust path as needed

const AddProblemForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        githubUrl: '',
    });

    // State for error and success messages
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        // Clear error/success when user starts typing
        setError('');
        setSuccess('');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!formData.question || !formData.answer || !formData.githubUrl) {
            setError('All fields are required.');
            return;
        }

        try {
            // Call the problem service to add the problem
            await ProblemService.addProblem(formData);
            setSuccess('Problem added successfully!');
            // Reset form
            setFormData({question: '', answer: '', githubUrl: ''});
        } catch (err) {
            // Handle error from service
            setError(err.message || 'Failed to add problem. Please try again.');
        }
    };

    return (
        <Base>
            <Container maxWidth="sm" style={{marginTop: '150px'}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add New Problem
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 2}}>
                    {/* Question Field */}
                    <TextField
                        fullWidth
                        label="Question"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        margin="normal"
                        required
                        variant="outlined"
                    />

                    {/* Answer Field */}
                    <TextField
                        fullWidth
                        label="Answer"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        margin="normal"
                        required
                        variant="outlined"
                        multiline
                        rows={4}
                    />

                    {/* GitHub URL Field */}
                    <TextField
                        fullWidth
                        label="GitHub URL"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        margin="normal"
                        required
                        variant="outlined"
                        type="url"
                    />

                    {/* Error Message */}
                    {error && (
                        <Alert severity="error" sx={{mt: 2}}>
                            {error}
                        </Alert>
                    )}

                    {/* Success Message */}
                    {success && (
                        <Alert severity="success" sx={{mt: 2}}>
                            {success}
                        </Alert>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{mt: 3, mb: 2}}
                        fullWidth
                    >
                        Add Problem
                    </Button>
                </Box>
            </Container>
        </Base>
    );
};

export default AddProblemForm;