import React, {useEffect, useRef, useState} from 'react';
import '../css/Resumes.css'; // Replace with your CSS file
import Base from '../components/Base';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import ResumeService from '../services/ResumeService'; // Replace with your service
import {Alert, CircularProgress, Snackbar} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import EditItemForm from '../pages/EditResumeForm'; // Replace with your edit form component
import EditIcon from '@mui/icons-material/Edit';

const ResumesPage = () => {
    const [items, setItems] = useState([]); // Replace 'items' with your data type
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'info',
    });
    const cardRefs = useRef([]);
    const [showTopButton, setShowTopButton] = useState(false);
    const [editItem, setEditItem] = useState(null);

    // Fetch items on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAdmin(!!token);

        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await ResumeService.getAllItems(); // Replace with your service method
                if (response.success) {
                    setItems(response.data);
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
                    message: 'An unexpected error occurred while fetching items.',
                    severity: 'error',
                });
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    // Intersection Observer for card animations (optional)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {threshold: 0.1}
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [items]);

    // Show/hide back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    // Handle item deletion
    const handleDeleteItem = async (itemId) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                const response = await ResumeService.deleteItem(itemId); // Replace with your service method
                if (response.success) {
                    setItems(items.filter((item) => item._id !== itemId));
                    setSnackbar({
                        open: true,
                        message: 'Item deleted successfully.',
                        severity: 'success',
                    });
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
                    message: 'An unexpected error occurred while deleting the item.',
                    severity: 'error',
                });
            }
        }
    };

    const handleOpenEdit = (item) => {
        setEditItem(item);
    };

    const handleCloseEdit = () => {
        setEditItem(null);
    };

    const handleUpdateItem = (updatedItem) => {
        setItems(
            items.map((item) =>
                item._id === updatedItem._id ? updatedItem : item
            )
        );
        setSnackbar({
            open: true,
            message: 'Item updated successfully.',
            severity: 'success',
        });
    };

    return (
        <Base>
            <section className="upper-section">
                <div className="upper-container">
                    <h1 className="upper-title">
                        My <span style={{color: '#ff6600'}}>Items</span>
                    </h1>
                    <p className="upper-subtitle">
                        A collection of my items
                    </p>
                    {loading ? (
                        <div style={{textAlign: 'center', padding: '20px'}}>
                            <CircularProgress/>
                        </div>
                    ) : items.length === 0 ? (
                        <p style={{textAlign: 'center'}}>No items available.</p>
                    ) : (
                        <div className="upper-grid">
                            {items.map((item, index) => (
                                <div
                                    key={item._id}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="item-card"
                                    style={{'--order': index}}
                                >
                                    <div className="item-content">
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <h2 className="item-title">{item.name}</h2>
                                            {isAdmin && (
                                                <div>
                                                    <IconButton
                                                        onClick={() => handleOpenEdit(item)}
                                                        sx={{color: '#1976d2'}}
                                                        aria-label="edit item"
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={() => handleDeleteItem(item._id)}
                                                        sx={{color: '#ff0000'}}
                                                        aria-label="delete item"
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </div>
                                            )}
                                        </div>
                                        <p className="item-detail"><strong>Title:</strong> {item.title}</p>
                                        {/* Add other fields as needed */}
                                        <p className="item-detail"><strong>Description:</strong> {item.description}</p>
                                        {/* Example link, adjust as needed */}
                                        {item.url && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="item-link"
                                            >
                                                View Item
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {showTopButton && (
                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        borderRadius: '50%',
                        minWidth: '50px',
                        height: '50px',
                        backgroundColor: '#ff6600',
                        '&:hover': {backgroundColor: '#e65c00'},
                    }}
                >
                    <ArrowUpwardIcon sx={{color: 'white'}}/>
                </Button>
            )}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{width: '100%'}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
            <Dialog open={!!editItem} onClose={handleCloseEdit} maxWidth="md" fullWidth>
                {editItem && (
                    <EditItemForm
                        item={editItem}
                        onClose={handleCloseEdit}
                        onUpdate={handleUpdateItem}
                    />
                )}
            </Dialog>
        </Base>
    );
};

export default ResumesPage;