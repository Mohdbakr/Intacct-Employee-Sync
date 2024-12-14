import '@emotion/react';

export interface ThemeColors {
  gradientStart: string;
  gradientEnd: string;
  white: string;
  error: string;
  background: string;
  inputBorder: string;
  inputFocus: string;
  text: {
    primary: string;
    secondary: string;
  };
}

export interface ThemeTransitions {
  default: string;
  smooth: string;
}

export interface ThemeShadows {
  glow: string;
}

export interface ThemeBreakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Theme {
  colors: ThemeColors;
  transitions: ThemeTransitions;
  shadows: ThemeShadows;
  breakpoints: ThemeBreakpoints;
}

// Extend the default theme type for Emotion
declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    transitions: ThemeTransitions;
    shadows: ThemeShadows;
    breakpoints: ThemeBreakpoints;
  }
}