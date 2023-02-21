import { style } from '@vanilla-extract/css';
import theme from '~/theme';
import { BOTTOM_PANEL_HEIGHT } from './BottomPanel/BottomPanel.styles.css';
import { TOPBAR_HEIGHT } from './Topbar/Topbar.styles.css';

export const styles = {
  root: style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: TOPBAR_HEIGHT,
    paddingBottom: BOTTOM_PANEL_HEIGHT,
  }),
  mainArea: style({
    backgroundColor: theme.palette.neutral.light,
    padding: '10px 20px',
    flex: 1,
  }),
};
