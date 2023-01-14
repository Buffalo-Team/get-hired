import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import { useThemeMode } from './ThemeProvider.hooks';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const { theme, themeContextValue } = useThemeMode();

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
