import { style } from '@vanilla-extract/css';
import theme from '~/theme';

export const styles = {
  root: style({
    position: 'relative',
  }),
  circle: style({
    transformOrigin: '50% 50%',
    fill: 'transparent',
  }),
  trail: style({
    stroke: theme.palette.neutral.main,
  }),
  fill: style({
    transform: 'rotate(-90deg)',
    stroke: theme.palette.primary.main,
    strokeLinecap: 'round',
  }),
  text: style({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  }),
};
