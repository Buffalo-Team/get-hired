import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export default {
  link: style({
    color: theme.palette.neutral.main,
  }),
};
