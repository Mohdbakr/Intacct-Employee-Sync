import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { LoginPage } from './pages/Login/LoginPage';
import { HomePage } from './pages/Home/HomePage';
import { LandingPage } from './pages/Landing/LandingPage';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    
      <ThemeProvider theme={theme}>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protect Home Page route (only authenticated users can access it) */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          </Routes>
          </AuthProvider>
      </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
