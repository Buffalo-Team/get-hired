import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    display: 'flex',
    alignItems: 'center',
    columnGap: 6,
    height: 24,
    paddingRight: 10,
  }),
  aside: style({
    width: 1,
    height: '100%',
  }),
};
