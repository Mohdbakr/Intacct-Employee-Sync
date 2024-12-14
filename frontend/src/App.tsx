import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { LoginPage } from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;