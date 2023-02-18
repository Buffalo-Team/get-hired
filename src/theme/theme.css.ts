import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  palette: {
    primary: {
      main: null,
      light: null,
      ultraLight: null,
    },
    secondary: {
      main: null,
    },
    neutral: {
      dark: null,
      main: null,
      light: null,
      base: null,
    },
    status: {
      sent: null,
      inProgress: null,
      rejected: null,
      accepted: null,
      hired: null,
      archived: null,
    },
  },
});

export const lightTheme = createTheme(themeContract, {
  palette: {
    primary: {
      main: '#2C98FC',
      light: '#E7EDFF',
      ultraLight: '#F1F6FF',
    },
    secondary: {
      main: '#FF8024',
    },
    neutral: {
      dark: '#303030',
      main: '#959595',
      light: '#EBEBEB',
      base: '#FFFFFF',
    },
    status: {
      sent: '#9FB900',
      inProgress: '#2C98FC',
      rejected: '#FF4D4D',
      accepted: '#00B955',
      hired: '#004AB9',
      archived: '#000000',
    },
  },
});

// this MOCK_COLOR is temporary - until the colors for dark theme are provided
const MOCK_COLOR = '#FF00FF';

export const darkTheme = createTheme(themeContract, {
  palette: {
    primary: {
      main: MOCK_COLOR,
      light: MOCK_COLOR,
      ultraLight: MOCK_COLOR,
    },
    secondary: {
      main: MOCK_COLOR,
    },
    neutral: {
      dark: MOCK_COLOR,
      main: MOCK_COLOR,
      light: MOCK_COLOR,
      base: '#000000',
    },
    status: {
      sent: '#9FB900',
      inProgress: '#2C98FC',
      rejected: '#FF4D4D',
      accepted: '#00B955',
      hired: '#004AB9',
      archived: '#000000',
    },
  },
});

export default themeContract;
