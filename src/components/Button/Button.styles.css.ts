import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  button: style({
    border: 'none',
    display: 'block',
    fontSize: 16,
    fontWeight: 500,
    height: 56,
    padding: '16px 56px',
    borderRadius: 10,
    transition: theme.transition.quick,
    cursor: 'pointer',
  }),
  fullWidth: style({
    width: '100%',
  }),
  variant: {
    default: style({
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.neutral.base,

      ':hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    neutral: style({
      backgroundColor: theme.palette.neutral.light,
      color: theme.palette.neutral.dark,

      ':hover': {
        backgroundColor: theme.palette.neutral.main,
      },
    }),
  },
};
