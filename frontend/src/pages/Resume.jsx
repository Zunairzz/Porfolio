import React, { useEffect, useState, useContext } from "react";
import Base from "../components/Base";
import "../css/resume.css";
import { Col, Container, Row } from "reactstrap";
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
import EditResumeForm from "./EditResumeForm"; // Import the EditResumeForm
import resumeService from "../services/ResumeService";
import { AuthContext } from "../context/AuthContext";

// Placeholder images (replace with dynamic images if available)
import zunair from "../image/ZunairResumeImage.jpg";
import zaman from "../image/ZamanResumeImage.jpg";
import umair from "../image/UmairResumeImage.jpg";

// Map images to resume IDs (temporary solution until images are stored in the backend)
const imageMap = {
    1: zunair,
    2: zaman,
    3: umair,
};

const ResumeCard = ({ item, reverse, isAdmin, onDelete, onEdit }) => {
    const [openDialog, setOpenDialog] = useState(false); // For delete confirmation dialog
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = item.resume.url;
        link.download = `${item.name}_resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEdit = () => {
        onEdit(item); // Trigger edit dialog with the resume item
    };

    const handleDelete = async () => {
        try {
            await resumeService.deleteResume(item._id);
            setSnackbar({ open: true, message: "Resume deleted successfully!", severity: "success" });
            onDelete(item._id);
        } catch (err) {
            setSnackbar({ open: true, message: "Failed to delete resume.", severity: "error" });
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
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <>
            <Row style={{ height: "600px" }}>
                <Col
                    style={{ backgroundColor: reverse ? "#f1f1f1" : "#ffb680" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div style={{ textAlign: "left" }}>
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
                            <Tooltip title="Download Resume">
                                <Button
                                    variant="outlined"
                                    endIcon={<FileDownloadIcon />}
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
                            {isAdmin && (
                                <div style={{ marginTop: "20px" }}>
                                    <Tooltip title="Edit Resume">
                                        <Button
                                            variant="outlined"
                                            startIcon={<EditIcon />}
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
                                    <Tooltip title="Delete Resume">
                                        <Button
                                            variant="outlined"
                                            startIcon={<DeleteIcon />}
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
                    style={{ backgroundColor: reverse ? "#ffb680" : "#f1f1f1" }}
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
                            src={item.imageSrc}
                            alt="Resume"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                        Delete
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
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export const Resume = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showScroll, setShowScroll] = useState(false);
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false); // State for edit dialog
    const [selectedResume, setSelectedResume] = useState(null); // State for selected resume

    // Fetch resumes from the API
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAdmin(!!token);

        const fetchResumes = async () => {
            setLoading(true);
            try {
                const response = await resumeService.getAllResumes();
                const mappedResumes = response.data.map((resume, index) => ({
                    ...resume,
                    imageSrc: imageMap[resume._id] || imageMap[(index % 3) + 1],
                }));
                setResumes(mappedResumes);
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
                resume._id === updatedResume._id
                    ? { ...updatedResume, imageSrc: resume.imageSrc } // Preserve imageSrc
                    : resume
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Base>
            <Container className="resume-parent">
                <h1 className="resume-heading">
                    My <span style={{ color: "#ff6600" }}>Resume</span>
                </h1>
                {loading && <p>Loading resumes...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!loading && !error && resumes.length === 0 && <p>No resumes found.</p>}
                {!loading &&
                    !error &&
                    resumes.map((item, index) => (
                        <ResumeCard
                            key={item._id}
                            item={item}
                            reverse={index % 2 === 1}
                            isAdmin={isAdmin}
                            onDelete={handleDeleteResume}
                            onEdit={handleEditResume} // Pass edit handler
                        />
                    ))}
            </Container>

            {/* Edit Resume Dialog */}
            <Dialog
                open={editDialogOpen}
                onClose={handleCloseEditDialog}
                maxWidth="md"
                fullWidth
                aria-labelledby="edit-resume-dialog-title"
            >
                <DialogTitle id="edit-resume-dialog-title">Edit Resume</DialogTitle>
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
                        "&:hover": { backgroundColor: "#e65c00" },
                    }}
                >
                    <ArrowUpwardIcon sx={{ color: "white" }} />
                </Button>
            )}
        </Base>
    );
};