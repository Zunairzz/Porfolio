import React, {useEffect, useState} from 'react';
import SolutionCard from '../components/SolutionCard';
import EditProblemForm from '../components/EditProblemForm';
import Base from '../components/Base';
import ProblemService from '../services/ProblemService';
import {
    Alert,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Snackbar,
    Typography,
} from '@mui/material';
import {ArrowUpward} from '@mui/icons-material';

const SolutionsPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editProblem, setEditProblem] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [problemToDelete, setProblemToDelete] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Fetch problems
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAdmin(!!token);

        const fetchProblems = async () => {
            try {
                setLoading(true);
                const data = await ProblemService.getAllProblems();
                setProblems(data?.data || data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load solutions. Please try again later.');
                setLoading(false);
                console.error('Error fetching problems:', err);
            }
        };
        fetchProblems();
    }, []);

    // Handle scroll for "Back to Top" button
    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    // Handle edit
    const handleEdit = (problem) => {
        setEditProblem(problem);
    };

    const handleEditSuccess = (updatedData) => {
        setProblems((prev) =>
            prev.map((p) =>
                p.id === editProblem.id ? {...p, ...updatedData} : p
            )
        );
        setSuccessMessage('Solution updated successfullyFacets successfully saved to localStorage.');
        setEditProblem(null);
    };

    // Handle delete
    const handleDeleteClick = (problem) => {
        setProblemToDelete(problem);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await ProblemService.deleteProblem(problemToDelete._id);
            // Fetch the latest problems after deletion
            try {
                setLoading(true);
                const data = await ProblemService.getAllProblems();
                setProblems(data?.data || data);
                setSuccessMessage('Solution deleted successfully!');
                setDeleteDialogOpen(false);
                setProblemToDelete(null);
                setLoading(false);
            } catch (err) {
                setError('Failed to refresh solutions. Please try again.');
                setLoading(false);
                console.error('Error fetching problems after deletion:', err);
            }
        } catch (err) {
            setError('Failed to delete solution. Please try again.');
            console.error('Error deleting problem:', err);
            setDeleteDialogOpen(false);
            setProblemToDelete(null);
        }
    };

    // Close snackbar
    const handleSnackbarClose = () => {
        setSuccessMessage(null);
        setError(null);
    };

    return (
        <Base>
            <div className="min-h-screen bg-white py-12 px-4 relative" style={{marginTop: '120px'}}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black mb-12 bg-clip-text text-transparent">
                    Awesome <span style={{color: "#ff6200"}}>Developer</span> Solutions
                </h1>
                {loading && (
                    <div className="flex justify-center items-center py-8 mx-5">
                        <CircularProgress color="primary"/>
                    </div>
                )}
                {error && (
                    <Alert severity="error" sx={{mb: 2}}>{error}</Alert>
                )}
                {!loading && !error && problems.length === 0 && (
                    <Typography className="text-center text-gray-600">
                        No solutions found. Check back later!
                    </Typography>
                )}
                {!loading && !error && problems.length > 0 && (
                    <div className="space-y-8">
                        {problems.map((item) => (
                            <SolutionCard
                                key={item.id}
                                problem={item.question}
                                solution={item.answer}
                                githubUrl={item.githubUrl}
                                onEdit={() => handleEdit(item)}
                                onDelete={() => handleDeleteClick(item)}
                                isAdmin={isAdmin}
                            />
                        ))}
                    </div>
                )}
                {showTopButton && (
                    <IconButton
                        onClick={scrollToTop}
                        sx={{
                            position: 'fixed',
                            bottom: 32,
                            right: 32,
                            bgcolor: 'orange',
                            color: 'white',
                            '&:hover': {bgcolor: 'darkorange'},
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        }}
                        aria-label="Back to Top"
                    >
                        <ArrowUpward/>
                    </IconButton>
                )}
            </div>
            {/* Edit Problem Dialog */}
            {editProblem && (
                <EditProblemForm
                    open={!!editProblem}
                    onClose={() => setEditProblem(null)}
                    problem={editProblem}
                    onSuccess={handleEditSuccess}
                />
            )}
            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete the solution: "{problemToDelete?.question}"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
                    <Button
                        onClick={handleDeleteConfirm}
                        color="error"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Success/Error Snackbar */}
            <Snackbar
                open={!!successMessage || !!error}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={successMessage ? 'success' : 'error'}
                    sx={{width: '100%'}}
                >
                    {successMessage || error}
                </Alert>
            </Snackbar>
        </Base>
    );
};

export default SolutionsPage;