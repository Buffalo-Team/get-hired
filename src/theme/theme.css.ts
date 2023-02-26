import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  palette: {
    primary: {
      dark: null,
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
    error: null,
    status: {
      sent: null,
      inProgress: null,
      rejected: null,
      accepted: null,
      hired: null,
      archived: null,
    },
  },
  transition: {
    quick: null,
  },
});

export const lightTheme = createTheme(themeContract, {
  palette: {
    primary: {
      dark: '#006CCF',
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
    error: '#ff1f1f',
    status: {
      sent: '#9FB900',
      inProgress: '#2C98FC',
      rejected: '#FF4D4D',
      accepted: '#00B955',
      hired: '#004AB9',
      archived: '#000000',
    },
  },
  transition: {
    quick: '0.2s',
  },
});

// this MOCK_COLOR is temporary - until the colors for dark theme are provided
const MOCK_COLOR = '#FF00FF';

export const darkTheme = createTheme(themeContract, {
  palette: {
    primary: {
      dark: MOCK_COLOR,
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
      base: MOCK_COLOR,
    },
    error: MOCK_COLOR,
    status: {
      sent: '#9FB900',
      inProgress: '#2C98FC',
      rejected: '#FF4D4D',
      accepted: '#00B955',
      hired: '#004AB9',
      archived: '#000000',
    },
  },
  transition: {
    quick: '0.2s',
  },
});

export default themeContract;
