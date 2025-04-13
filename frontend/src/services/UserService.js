import axios from "axios";

export const UserService = {
    async loginUser(email, password) {
        try {
            const res = await axios.post('http://localhost:3002/api/user/login', {
                email,
                password
            });
            localStorage.setItem('token', res.data.token);
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    async logoutUser() {
        try {
            // Remove token from localStorage
            localStorage.removeItem('token');

            return true;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
}

export default UserService;