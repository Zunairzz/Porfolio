import axios from "axios";

// UserService handles login and logout functionality
export const UserService = {

    // Login function: sends email and password, stores token on success
    async loginUser(email, password) {
        try {
            const response = await axios.post('http://localhost:3002/api/users/login', {
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