import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
  }),
  content: style({
    flex: 1,
  }),
};
