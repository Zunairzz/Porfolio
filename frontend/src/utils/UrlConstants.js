const BASE_API_URL = 'https://simplenodeapp-production.up.railway.app/api';
// const BASE_API_URL = 'http://localhost:3022/api';

/**
 * API endpoint configurations for the application.
 * All endpoints are constructed relative to the BASE_API_URL.
 * @constant {Object} API_URLS
 */
const API_URLS = {
    // User-related endpoints
    USER: {
        LOGIN: `${BASE_API_URL}/users/login`,
        REGISTER: `${BASE_API_URL}/users/register`,
    },

    // Resume-related endpoints
    RESUME: {
        GET_ALL: `${BASE_API_URL}/resume/get-all-resumes`,
        GET_BY_ID: (id) => `${BASE_API_URL}/resume/${id}`,
        CREATE: `${BASE_API_URL}/resume/add-resume`,
        UPDATE: (id) => `${BASE_API_URL}/update-resume/${id}`,
        DELETE: (id) => `${BASE_API_URL}/delete-resume/${id}`,
    },

    // Project-related endpoints
    PROJECT: {
        GET_ALL: `${BASE_API_URL}/project/get-all-project`,
        ADD: `${BASE_API_URL}/project/add-project`,
        UPDATE: (id) => `${BASE_API_URL}/project/update-project/${id}`,
        DELETE: (id) => `${BASE_API_URL}/project/delete-project/${id}`,
    },
    PROBLEM: {
        GET_BY_ID: (id) => `${BASE_API_URL}/problem/get-by-id/${id}`,
        GET_ALL: `${BASE_API_URL}/problem/get-all-problems`,
        ADD: `${BASE_API_URL}/problem/add-problem`,
        UPDATE: (id) => `${BASE_API_URL}/problem/update-problem/${id}`,
        DELETE: (id) => `${BASE_API_URL}/problem/delete-problem/${id}`,
    }
};

// Export the API_URLS configuration for use in other modules
export default API_URLS;