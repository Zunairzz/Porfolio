import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Alert } from '@mui/material';
import ProblemService from '../services/ProblemService';

const EditProblemForm = ({ open, onClose, problem, onSuccess }) => {
    const [formData, setFormData] = useState({
        question: problem.question || '',
        answer: problem.answer || '',
        githubUrl: problem.githubUrl || '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');


        try {
            await ProblemService.updateProblem(problem._id, formData);
            onSuccess();
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to update problem.');
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Problem</DialogTitle>
            <DialogContent>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <TextField
                    fullWidth
                    label="Question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Answer"
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                />
                <TextField
                    fullWidth
                    label="GitHub URL"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    margin="normal"
                    required
                    type="url"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditProblemForm;