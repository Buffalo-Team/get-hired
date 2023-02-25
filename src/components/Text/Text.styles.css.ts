import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  text: style({
    color: theme.palette.neutral.dark,
  }),
  variant: {
    extraSmall: style({
      fontSize: 10,
      fontWeight: 400,
    }),
    small: style({
      fontSize: 12,
      fontWeight: 400,
    }),
    normal: style({
      fontSize: 15,
      fontWeight: 400,
    }),
    medium: style({
      fontSize: 15,
      fontWeight: 600,
    }),
    large: style({
      fontSize: 20,
      fontWeight: 400,
    }),
    menu: style({
      fontSize: 12,
      fontWeight: 600,
    }),
  },
};
