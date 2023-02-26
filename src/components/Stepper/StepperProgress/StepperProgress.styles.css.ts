import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  root: style({
    display: 'flex',
    columnGap: 4,
  }),
  description: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 4,
  }),
  tip: style({
    color: theme.palette.neutral.main,
  }),
};
