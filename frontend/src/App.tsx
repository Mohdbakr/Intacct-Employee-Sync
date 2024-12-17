import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { LoginPage } from './pages/Login/LoginPage';
import { HomePage } from './pages/Home/HomePage';
import { LandingPage } from './pages/Landing/LandingPage';
import { PrivateRoute } from './components/PrivateRoute.tsx';
import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protect Home Page route (only authenticated users can access it) */}
          <Route 
            path="/Home" 
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
    </AuthProvider>
    
  );
}

export default App;
