import axios from "axios";

// const API_URL = "http://localhost:3002/api/users"; // Base URL for API

const API_URL = "https://porfolio-62t2judtq-zunairzzs-projects.vercel.app/api/users"; // Base URL for Prod API

// UserService handles login and logout functionality
export const UserService = {

    // Login function: sends email and password, stores token on success
    async loginUser(email, password) {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });

            const token = response.data.token;

            // Save token to localStorage
            localStorage.setItem('token', token);

            return token; // Returning token on successful login
        } catch (error) {
            // Return meaningful error if login fails
            throw error.response?.data || error.message;
        }
    },

    // Logout function: removes the token from localStorage
    async logoutUser() {
        try {
            localStorage.removeItem('token'); // Clear saved token
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};

export default UserService;