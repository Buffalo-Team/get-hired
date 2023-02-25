import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12,
  }),
  list: style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
  }),
};
