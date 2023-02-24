import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const TOPBAR_HEIGHT = 56;

export const styles = {
  topbar: style({
    width: '100%',
    height: TOPBAR_HEIGHT,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    boxSizing: 'border-box',
    position: 'fixed',
    transition: theme.transition.quick,
    top: 0,
  }),
  topbarHidden: style({
    top: -TOPBAR_HEIGHT,
  }),
  title: style({
    color: theme.palette.neutral.base,
  }),
};
