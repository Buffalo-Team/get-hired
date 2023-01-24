import { PaletteMode } from '@mui/material';
import { createContext } from 'react';
import { ThemeMode } from './theme';

export type ThemeContextProps = {
  themeMode: PaletteMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
  themeMode: ThemeMode.Light,
});
