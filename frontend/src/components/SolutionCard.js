// components/SolutionCard.js
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Box, IconButton} from '@mui/material';
import {Delete, Edit, GitHub as GitHubIcon} from '@mui/icons-material';
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const SolutionCard = ({problem, solution, githubUrl, onEdit, onDelete, isAdmin}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-3xl mx-auto relative"
            style={{borderColor: '#ff6600', borderWidth: '2px'}}
        >
            <h2 className="text-2xl font-bold text-black mb-3">Problem</h2>
            <p className="text-black mb-4 leading-relaxed">{problem}</p>
            <h2 className="text-2xl font-bold text-black mb-3">Solution</h2>
            <p className="text-black mb-6 leading-relaxed">{solution}</p>
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 shadow-md"
                >
                    <GitHubIcon className="mr-2"/>
                    View on GitHub
                </a>
            )}
            {isAdmin && (
                <Box sx={{position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1}}>
                    <IconButton
                        onClick={onEdit} aria-label="Edit problem" size="small"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40, // Adjust size as needed
                            height: 40,
                            borderRadius: '50%', // Makes it rounded
                            backgroundColor: '#1976d2', // Fill color (e.g., blue)
                            color: '#fff', // Icon color (e.g., white)
                            '&:hover': {
                                backgroundColor: '#1565c0', // Optional hover effect
                            },
                        }}>
                        <EditIcon fontSize="small"/>
                    </IconButton>
                    <IconButton
                        onClick={onDelete} aria-label="Delete problem"
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: '#d32f2f', // Red background
                            color: '#fff', // White icon
                            '&:hover': {
                                backgroundColor: '#b71c1c', // Darker red on hover
                            },
                        }}
                    >
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </Box>
            )}
        </motion.div>
    );
};

export default SolutionCard;