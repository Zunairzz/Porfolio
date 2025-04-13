import axios from "axios";

const API_URL = "http://localhost:3002/api/project"; // Base URL for API

const ProjectService = {
    addProject: async (projectData) => {
        try {
            const response = await axios.post(`${API_URL}/add-project`, projectData);
            return {
                success: true,
                data: response.data,
                message: "Project added successfully!",
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                message:
                    error.response?.data?.message ||
                    "Failed to add project. Please try again.",
            };
        }
    },

    getProjects: async () => {
        try {
            const response = await axios.get(`${API_URL}/get-all-project`);
            return {
                success: true,
                data: response.data,
                message: "Projects fetched successfully!",
            };
        } catch (error) {
            return {
                success: false,
                data: [],
                message:
                    error.response?.data?.message ||
                    "Failed to fetch projects. Please try again.",
            };
        }
    },
};

export default ProjectService;