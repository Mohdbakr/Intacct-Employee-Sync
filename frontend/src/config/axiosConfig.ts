import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('access_token');
            console.log("Axios error handling is called:", error.response)
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;