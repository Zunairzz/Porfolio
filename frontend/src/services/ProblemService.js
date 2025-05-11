import API_URLS from "../utils/UrlConstants";

const ProblemService = {
    /**
     * Fetches a problem by its ID.
     * @param {string} id - The ID of the problem to retrieve.
     * @returns {Promise<Object>} The problem data.
     * @throws {Error} If the request fails.
     */
    async getProblemById(id) {
        try {
            const response = await fetch(API_URLS.PROBLEM.GET_BY_ID(id), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('Could not retrieve the solution. Please try again.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error in getProblemById:', error);
            throw new Error('Failed to load the solution. Please check your connection or try again later.');
        }
    },

    /**
     * Fetches all problems.
     * @returns {Promise<Array>} List of all problems.
     * @throws {Error} If the request fails.
     */
    async getAllProblems() {
        try {
            const response = await fetch(API_URLS.PROBLEM.GET_ALL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('Could not retrieve solutions. Please try again.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error in getAllProblems:', error);
            throw new Error('Failed to load solutions. Please check your connection or try again later.');
        }
    },

    /**
     * Adds a new problem.
     * @param {Object} problemData - The problem data to add.
     * @returns {Promise<Object>} The created problem data.
     * @throws {Error} If the request fails.
     */
    async addProblem(problemData) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(API_URLS.PROBLEM.ADD, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token ? `Bearer ${token}` : '',
                },
                body: JSON.stringify(problemData),
            });
            if (!response.ok) {
                throw new Error('Could not add the solution. Please try again.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error in addProblem:', error);
            throw new Error('Failed to add the solution. Please ensure you are logged in and try again.');
        }
    },

    /**
     * Updates an existing problem.
     * @param {string} id - The ID of the problem to update.
     * @param {Object} problemData - The updated problem data.
     * @returns {Promise<Object>} The updated problem data.
     * @throws {Error} If the request fails.
     */
    async updateProblem(id, problemData) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(API_URLS.PROBLEM.UPDATE(id), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token ? `Bearer ${token}` : '',
                },
                body: JSON.stringify(problemData),
            });
            if (!response.ok) {
                throw new Error('Could not update the solution. Please try again.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error in updateProblem:', error);
            throw new Error('Failed to update the solution. Please ensure you are logged in and try again.');
        }
    },

    /**
     * Deletes a problem by its ID.
     * @param {string} id - The ID of the problem to delete.
     * @returns {Promise<Object>} Response indicating success or failure.
     * @throws {Error} If the request fails.
     */
    async deleteProblem(id) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(API_URLS.PROBLEM.DELETE(id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token ? `Bearer ${token}` : '',
                },
            });
            if (!response.ok) {
                return {
                    success: false,
                    data: null,
                    message: 'Could not delete the solution. Please try again.',
                };
            }
            return {
                success: true,
                data: await response.json(),
                message: 'Solution deleted successfully!',
            };
        } catch (error) {
            console.error('Error in deleteProblem:', error);
            throw new Error('Failed to delete the solution. Please ensure you are logged in and try again.');
        }
    },
};

export default ProblemService;