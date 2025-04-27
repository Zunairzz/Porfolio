// Base API URL (use environment variables for flexibility)

const BASE_API_URL_PROD = "https://simplenodeapp-production.up.railway.app/api"; // Base URL for Prod API

const BASE_API_URL = "http://localhost:3022/api";

// Specific API endpoints
const API_URLS = {
    GET_ALL_RESUMES: `${BASE_API_URL}/resumes`,
    GET_RESUME_BY_ID: (id) => `${BASE_API_URL}/resumes/${id}`,
    CREATE_RESUME: `${BASE_API_URL}/resume`,
    UPDATE_RESUME: (id) => `${BASE_API_URL}/update-resume/${id}`,
    DELETE_RESUME: (id) => `${BASE_API_URL}/delete-resume/${id}`,
    LOGIN: `${BASE_API_URL}/users/login`,
    REGISTER_USER: `${BASE_API_URL}/register`,
    ADD_PROJECT: `${BASE_API_URL}/project/add-project`,
    GET_ALL_PROJECTS: `${BASE_API_URL}/project/get-all-project`,
    DELETE_PROJECT: (id) => `${BASE_API_URL}/project/${id}`,
    UPDATE_PROJECT: (id) => `${BASE_API_URL}/update-project/${id}`,
};

// Named exports for individual access
export {API_URLS};