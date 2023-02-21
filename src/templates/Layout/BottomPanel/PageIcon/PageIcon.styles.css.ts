import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  pageIcon: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 1,
    cursor: 'pointer',
  }),
  label: style({
    color: theme.palette.neutral.main,
  }),
};
