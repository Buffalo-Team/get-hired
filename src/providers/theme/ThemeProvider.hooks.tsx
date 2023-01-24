import { PaletteMode, Theme, createTheme, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import { ThemeContextProps } from './ThemeContext';
import { ThemeMode, getTheme } from './theme';

export const useThemeMode = (): {
  theme: Theme;
  themeContextValue: ThemeContextProps;
} => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light);

  const themeContextValue = useMemo<ThemeContextProps>(
    () => ({
      themeMode: mode,
      toggleTheme: () => {
        setMode(mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
      },
    }),
    [mode],
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return {
    theme,
    themeContextValue,
  };
};
