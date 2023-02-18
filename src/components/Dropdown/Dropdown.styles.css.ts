import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  root: style({
    position: 'relative',
    width: 'fit-content',
  }),
  mainDisplay: style({
    display: 'flex',
    alignItems: 'center',
    columnGap: 6,
    cursor: 'pointer',
    userSelect: 'none',
  }),
  arrow: style({
    width: 14,
    height: 14,
  }),
  flipped: style({
    rotate: '180deg',
  }),
  list: style({
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    transform: 'translateY(calc(100% + 4px))',
    backgroundColor: theme.palette.neutral.base,
    width: '100%',
  }),
  option: style({
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.palette.primary.ultraLight,
    },
  }),
  selected: style({
    backgroundColor: theme.palette.primary.light,
    ':hover': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
};
