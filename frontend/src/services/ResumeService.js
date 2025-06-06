// src/services/resumeService.js
import axios from "axios";
import API_URLS from "../utils/UrlConstants";

const resumeService = {
    // Fetch all resumes
    getAllResumes: async () => {
        try {
            const response = await axios.get(API_URLS.RESUME.GET_ALL);
            return response.data; // Returns { success, count, data }
        } catch (error) {
            throw new Error("Failed to fetch resumes: " + error.message);
        }
    },

    // Fetch a single resume by ID (optional, for future use)
    getResumeById: async (id) => {
        try {
            const response = await axios.get(API_URLS.RESUME.GET_BY_ID(id));
            return response.data; // Returns { success, data }
        } catch (error) {
            throw new Error("Failed to fetch resume: " + error.message);
        }
    },

    createResume: async (resumeData) => {
        try {
            const response = await axios.post(API_URLS.RESUME.CREATE, resumeData);
            return {success: true, data: response.data, message: 'ResumePage created successfully'};
        } catch (error) {
            return {success: false, message: error.response?.data?.message || 'Failed to create resume'};
        }
    },

    updateResume: async (id, resumeData) => {
        try {
            const response = await axios.put(API_URLS.RESUME.UPDATE(id), resumeData);
            return {success: true, data: response.data, message: 'ResumePage updated successfully'};
        } catch (error) {
            return {success: false, message: error.response?.data?.message || 'Failed to update resume'};
        }
    },

    deleteResume: async (id) => {
        try {
            const response = await axios.delete(API_URLS.RESUME.DELETE(id));
            return {success: true, message: response.data.message};
        } catch (error) {
            return {success: false, message: error.response?.data?.message || 'Failed to delete resume'};
        }
    },
};

export default resumeService;