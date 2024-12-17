import axios from 'axios';

const API_URL = 'http://localhost:8000/auth'; // Replace with your API URL

export const login = async (email: string, password: string) => {
    
    const formDetails = new URLSearchParams();
    formDetails.append('username', email);
    formDetails.append('password', password);


    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
        body: formDetails,
    });
    return response; // Assuming the token is in response.data.token
};

export const logout = () => {
  localStorage.removeItem('access_token');
};
