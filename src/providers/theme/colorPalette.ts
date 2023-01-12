import { PaletteMode } from '@mui/material';
import { amber, blueGrey, deepOrange, grey } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';
import { ThemeMode } from './theme';

// TODO GH-20 Implement application light palette
const lightPalette: PaletteOptions = {
  // palette values for light mode
  primary: amber,
  divider: amber[200],
  background: {
    default: blueGrey[200],
    paper: blueGrey[200],
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

// TODO GH-20 Implement application dark palette
const darkPalette: PaletteOptions = {
  // palette values for dark mode
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
};

export const getPalette = (mode: PaletteMode): PaletteOptions => {
  const palette = mode === ThemeMode.Light ? lightPalette : darkPalette;
  return {
    mode,
    ...palette,
  };
};
