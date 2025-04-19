import { toast } from 'react-toastify';

const apiClient = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        toast.error(error.message || 'Failed to fetch data. Please try again.');
        throw error;
    }
};

export default apiClient;