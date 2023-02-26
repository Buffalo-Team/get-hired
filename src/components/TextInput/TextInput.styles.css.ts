import { style } from '@vanilla-extract/css';
import theme from '~/theme';

const textInputContainer = style({
  position: 'relative',
  border: `1px solid ${theme.palette.neutral.dark}`,
  borderRadius: 6,
  width: '100%',
  padding: 10,
  selectors: {
    [`&:has(input:focus)`]: {
      borderColor: theme.palette.primary.main,
    },
  },
});

const textInputContainerError = style({
  borderColor: theme.palette.error,
});

const cancelButton = style({
  /* @ts-ignore-line */
  position: 'absolute !important',
  right: 0,
  top: '2px',
});

const input = style({
  background: 'none',
  backgroundColor: theme.palette.neutral.base,
  color: 'black',
  fontSize: '18px',
  display: 'block',
  width: '100%',
  border: 'none',
  borderRadius: '0',
  ':focus-visible': {
    outline: 'none',
  },
});

const label = style({
  top: -8,
  left: 10,
  fontSize: 12,
  backgroundColor: theme.palette.neutral.base,
  paddingLeft: 5,
  paddingRight: 5,
  color: theme.palette.neutral.dark,
  fontWeight: 'normal',
  position: 'absolute',
  selectors: {
    [`${input}:focus ~ &`]: {
      color: theme.palette.primary.main,
    },
  },
});

export const styles = {
  textInputContainer: {
    base: textInputContainer,
    error: textInputContainerError,
  },
  label,
  input,
  cancelButton,
};
