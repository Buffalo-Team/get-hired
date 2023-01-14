import { PaletteMode, ThemeOptions } from '@mui/material';
import { getPalette } from './colorPalette';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

// TODO GH-20 Implement application theme
export const getTheme = (mode: PaletteMode): ThemeOptions => {
  const palette = getPalette(mode);
  return {
    palette: palette,
    spacing: 1,
    shape: {
      borderRadius: 1,
    },
    typography: {
      h1: {
        fontSize: 24,
      },
      h2: {
        fontSize: 20,
      },
      h3: {
        fontSize: 16,
      },
    },
  };
};
