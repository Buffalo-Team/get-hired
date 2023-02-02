import { style } from '@vanilla-extract/css';
import { vars } from '~/theme.css';

export default {
  text: style({
    color: vars.palette.neutral.dark,
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
};
