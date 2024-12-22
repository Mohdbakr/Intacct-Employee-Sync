import api from '../config/axiosConfig';
import axios from 'axios';

const API_URL = 'http://localhost:8000/auth';

interface LoginResponse {
    access_token: string;
}

export const login = async (email: string, password: string) => {
    try {
        const formDetails = new URLSearchParams();
        formDetails.append('username', email);
        formDetails.append('password', password);

        const response = await api.post<LoginResponse>(`${API_URL}/login`, formDetails, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.log("Access token log from authService: ", response.data.access_token)
        return response.data.access_token;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.detail || 'Authentication failed');
        }
        throw error;
    }
};