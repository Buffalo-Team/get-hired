import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  fontFamily: 'Inter',
});

globalStyle('a', {
  textDecoration: 'none',
});

export const vars = createGlobalTheme(':root', {
  palette: {
    primary: {
      main: '#2C98FC',
    },
    secondary: {
      main: '#FF8024',
    },
    status: {
      sent: '#9FB900',
      inProgress: '#2C98FC',
      rejected: '#FF4D4D',
      accepted: '#00B955',
      hired: '#004AB9',
      archived: '#000000',
    },
    neutral: {
      dark: '#303030',
      main: '#959595',
    },
  },
});
