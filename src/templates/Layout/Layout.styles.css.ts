import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  root: style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  mainArea: style({
    backgroundColor: theme.palette.neutral.light,
    padding: '10px 20px',
    flex: 1,
  }),
};
