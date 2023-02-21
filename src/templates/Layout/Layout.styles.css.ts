import { style } from '@vanilla-extract/css';
import theme from '~/theme';

const TOPBAR_HEIGHT = 56;

export const styles = {
  root: style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: TOPBAR_HEIGHT,
  }),
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
  mainArea: style({
    backgroundColor: theme.palette.neutral.light,
    padding: '10px 20px',
    flex: 1,
  }),
};
