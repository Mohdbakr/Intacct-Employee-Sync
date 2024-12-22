import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/axiosConfig';


interface AuthContextProps {
    isAuthenticated: boolean;
    loading: boolean;
    login: (token: string) => void;
    logout: () => void;
    error?: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('access_token');
            console.log('token from verify token function:', token)
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await api.get(`http://localhost:8000/auth/verify-token/${token}`);
                console.log("Token Verification response:", response)
                if (response.status == 200) {
                    setIsAuthenticated(true);
                } else {
                    throw new Error('Invalid token');
                }
            } catch (error) {
                localStorage.removeItem('access_token');
                console.log('Error from Vrify Token function and token has been removed:', error)
                setIsAuthenticated(false);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, [navigate]);

    const login = (token: string) => {
        try {
            console.log("Access Token from Login Context: ", token)
            localStorage.setItem('access_token', token);
            setIsAuthenticated(true);
            setError(null);
            navigate('/home'); // Direct navigation after successful login
        } catch (err) {
            setError('Failed to authenticate');
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        console.log('Logout function is called!!!')
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            login, 
            logout, 
            loading,
            error 
        }}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};