import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12,
  }),
  // TODO remove temporary options styles
  options: style({
    width: '100%',
    height: 20,
    backgroundColor: 'pink',
  }),
  list: style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
  }),
};
