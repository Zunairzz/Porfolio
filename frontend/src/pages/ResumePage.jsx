import React, {useContext, useEffect, useState} from "react";
import Base from "../components/Base";
import "../css/resume.css";
import {Col, Container, Row} from "reactstrap";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EditResumeForm from "./EditResumeForm";
import resumeService from "../services/ResumeService";
import {AuthContext} from "../context/AuthContext";

// Default placeholder image for missing image.url
import defaultImage from "../assests/default_image.jpeg";
import {CircularProgress} from "@mui/material";

const ResumeCard = ({item, reverse, isAdmin, onDelete, onEdit}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, message: "", severity: "success"});
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        if (!item.document?.url) {
            console.log("No document URL provided:", item.document);
            setSnackbar({open: true, message: "No resume document available for download.", severity: "warning"});
            return;
        }
        console.log("Attempting to download document from URL:", item.document.url);
        const link = document.createElement("a");
        link.href = item.document.url;
        link.download = `${item.name}_resume.pdf`;
        link.target = "_blank"; // Open in a new tab to check if URL is accessible
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Download triggered for:", item.name);
    };

    const handleEdit = () => {
        onEdit(item);
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await resumeService.deleteResume(item._id);
            setSnackbar({open: true, message: "Resume deleted successfully!", severity: "success"});
            setLoading(false);
            onDelete(item._id);
        } catch (err) {
            setSnackbar({open: true, message: "Failed to delete resume.", severity: "error"});
        } finally {
            setOpenDialog(false);
        }
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    return (
        <div>
            <Row style={{height: "600px"}}>
                <Col
                    style={{backgroundColor: reverse ? "#f1f1f1" : "#ffb680"}}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div style={{textAlign: "left", padding: '0 15px 0 15px'}}>
                        <p className="resume-title">{item.name}</p>
                        <p className="resume-sub-title">{item.title}</p>
                        <div className="resume-details">
                            <p>
                                <b>Phone:</b> {item.phoneNo}
                            </p>
                            <p>
                                <b>Email:</b> {item.email}
                            </p>
                            <p>
                                <b>Experience:</b> {item.experience}
                            </p>
                            {item.document?.url ? (
                                <Tooltip title="Download Resume">
                                    <Button
                                        variant="outlined"
                                        endIcon={<FileDownloadIcon/>}
                                        onClick={handleDownload}
                                        sx={{
                                            marginTop: "60px",
                                            border: "2px solid black",
                                            color: "black",
                                            "&:hover": {
                                                border: "2px solid #AB4459",
                                                backgroundColor: "#AB4459",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        Download Resume
                                    </Button>
                                </Tooltip>
                            ) : (
                                <p
                                    style={{
                                        marginTop: "60px",
                                        color: "#d32f2f",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No document available
                                </p>
                            )}
                            {isAdmin && (
                                <div style={{marginTop: "20px"}}>
                                    <Tooltip title="Edit ResumePage">
                                        <Button
                                            variant="outlined"
                                            startIcon={<EditIcon/>}
                                            onClick={handleEdit}
                                            sx={{
                                                marginRight: "10px",
                                                border: "2px solid black",
                                                color: "black",
                                                "&:hover": {
                                                    border: "2px solid #1976d2",
                                                    backgroundColor: "#1976d2",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Delete ResumePage">
                                        <Button
                                            variant="outlined"
                                            startIcon={<DeleteIcon/>}
                                            onClick={handleOpenDialog}
                                            sx={{
                                                border: "2px solid black",
                                                color: "black",
                                                "&:hover": {
                                                    border: "2px solid #d32f2f",
                                                    backgroundColor: "#d32f2f",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Tooltip>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
                <Col
                    style={{backgroundColor: reverse ? "#ffb680" : "#f1f1f1"}}
                    className="imageCol"
                >
                    <div
                        style={{
                            width: "240px",
                            height: "300px",
                            overflow: "hidden",
                            backgroundColor: "#F8FAFC",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                            borderRadius: "20px",
                            border: "5px solid white",
                        }}
                    >
                        <img
                            src={item.image?.url || defaultImage} // The default image is already used here
                            alt={`${item.name}'s ResumePage`}
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                </Col>
            </Row>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="delete-dialog-title"
            >
                <DialogTitle id="delete-dialog-title">Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete {item.name}'s resume?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error" autoFocus>
                        {loading ? <CircularProgress size={24}/> : "Delete"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for feedback */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{width: "100%"}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export const ResumePage = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showScroll, setShowScroll] = useState(false);
    const {user} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedResume, setSelectedResume] = useState(null);

    // Fetch resumes from the API
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAdmin(!!token);

        const fetchResumes = async () => {
            setLoading(true);
            try {
                const response = await resumeService.getAllResumes();
                setResumes(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load resumes. Please try again later.");
                setLoading(false);
            }
        };

        fetchResumes();
    }, []);

    // Handle resume deletion
    const handleDeleteResume = (resumeId) => {
        setResumes(resumes.filter((resume) => resume._id !== resumeId));
    };

    // Handle edit dialog open
    const handleEditResume = (resume) => {
        setSelectedResume(resume);
        setEditDialogOpen(true);
    };

    // Handle edit dialog close
    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setSelectedResume(null);
    };

    // Handle resume update
    const handleUpdateResume = (updatedResume) => {
        setResumes(
            resumes.map((resume) =>
                resume._id === updatedResume._id ? updatedResume : resume
            )
        );
    };

    // Scroll-to-top functionality
    useEffect(() => {
        const checkScrollTop = () => {
            setShowScroll(window.scrollY > 200);
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <Base>
            <Container className="resume-parent">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black mb-12 bg-clip-text text-transparent">
                    My <span style={{color: "#ff6200"}}>Resumes</span>
                </h1>
                {loading &&
                    <div style={{textAlign: "center", padding: "20px"}}>
                        <CircularProgress/>
                    </div>}
                {error && <p style={{color: "red"}}>{error}</p>}
                {!loading && !error && resumes.length === 0 && (
                    <div
                        className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-sm">
                        <svg
                            className="w-20 h-20 mb-4 text-teal-500 dark:text-teal-400 animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        <p className="text-xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
                            No Resumes Here!
                        </p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xs text-center">
                            Let's spice things up—add a resume or tweak your search to find what you need!
                        </p>
                    </div>
                )}
                {/*{JSON.stringify(resumes)}*/}
                {!loading &&
                    !error &&
                    resumes.map((item, index) => (
                        <ResumeCard
                            key={item._id}
                            item={item}
                            reverse={index % 2 === 1}
                            isAdmin={isAdmin}
                            onDelete={handleDeleteResume}
                            onEdit={handleEditResume}
                        />
                    ))}
            </Container>

            {/* Edit ResumePage Dialog */}
            <Dialog
                open={editDialogOpen}
                onClose={handleCloseEditDialog}
                maxWidth="md"
                fullWidth
                aria-labelledby="edit-resume-dialog-title"
            >
                <DialogTitle id="edit-resume-dialog-title">Edit ResumePage</DialogTitle>
                <DialogContent>
                    {selectedResume && (
                        <EditResumeForm
                            resume={selectedResume}
                            onClose={handleCloseEditDialog}
                            onUpdate={handleUpdateResume}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {showScroll && (
                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        borderRadius: "50%",
                        minWidth: "50px",
                        height: "50px",
                        backgroundColor: "#ff6600",
                        "&:hover": {backgroundColor: "#e65c00"},
                    }}
                >
                    <ArrowUpwardIcon sx={{color: "white"}}/>
                </Button>
            )}
        </Base>
    );
};