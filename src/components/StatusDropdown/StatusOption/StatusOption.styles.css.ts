import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    display: 'flex',
    alignItems: 'center',
    columnGap: 6,
    height: 24,
  }),
  rightSpacing: style({
    paddingRight: 10,
  }),
  leftSpacing: style({
    paddingLeft: 7,
  }),
  aside: style({
    width: 1,
    height: '100%',
  }),
};
