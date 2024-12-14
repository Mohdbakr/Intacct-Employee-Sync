import { useTheme as useEmotionTheme } from '@emotion/react';
import { Theme } from './types';

export const useTheme = () => useEmotionTheme() as Theme;