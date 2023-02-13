import { style } from '@vanilla-extract/css';

export const styles = {
  dot: style({
    width: 6,
    height: 6,
    borderRadius: '50%',
  }),
  root: style({
    display: 'flex',
    columnGap: 4,
    alignItems: 'center',
  }),
};
