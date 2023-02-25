import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  button: style({
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.neutral.base,
    fontSize: 16,
    fontWeight: 500,
    height: 56,
    padding: '16px 56px',
    borderRadius: 10,
    transition: theme.transition.quick,
    cursor: 'pointer',

    ':hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  fullWidth: style({
    width: '100%',
  }),
};
