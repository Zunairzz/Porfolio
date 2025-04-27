import axios from "axios";
import {API_URLS} from "../utils/UrlConstants";

const ProjectService = {
    addProject: async (projectData) => {
        try {
            const response = await axios.post(API_URLS.ADD_PROJECT, projectData);
            console.log("response: ", response);
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
            const response = await axios.get(API_URLS.GET_ALL_PROJECTS);
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

    deleteProject: async (projectId) => {
        try {
            const response = await axios.delete(API_URLS.DELETE_PROJECT(projectId));
            return {
                success: true,
                data: response.data,
                message: response.data.message,
                projectId: response.data.projectId,
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                message:
                    error.response?.data?.message ||
                    "Failed to delete project. Please try again.",
            };
        }
    },

    updateProject: async (projectId, projectData) => {
        try {
            const response = await axios.put(API_URLS.UPDATE_PROJECT(projectId), projectData);
            return {
                success: true,
                data: response.data,
                message: "Project updated successfully!",
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                message:
                    error.response?.data?.message ||
                    "Failed to update project. Please try again.",
            };
        }
    },
};

export default ProjectService;