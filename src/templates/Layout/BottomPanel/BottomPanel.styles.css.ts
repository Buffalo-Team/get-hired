import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const BOTTOM_PANEL_HEIGHT = 56;

export const styles = {
  bottomPanel: style({
    width: '100%',
    height: BOTTOM_PANEL_HEIGHT,
    padding: '0 40px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.neutral.base,
  }),
};
