import { Theme } from './types';

export const theme: Theme = {
  colors: {
    gradientStart: '#6e12ff',
    gradientEnd: '#00ceff',
    white: '#FFFFFF',
    error: '#FF3B30',
    background: '#0A0F1E',
    inputBorder: 'rgba(255, 255, 255, 0.1)',
    inputFocus: '#00ceff',
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  transitions: {
    default: '0.3s ease',
    smooth: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadows: {
    glow: '0 0 20px rgba(110, 18, 255, 0.3)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  }
};