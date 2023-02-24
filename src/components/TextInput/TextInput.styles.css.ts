import { style } from '@vanilla-extract/css';

const COLOR_ACTIVE = '#2C98FC';

const textInputContainer = style({
  position: 'relative',
  border: '1px solid grey',
  borderRadius: 6,
  width: '100%',
  padding: 10,
  selectors: {
    [`&:has(input:focus)`]: {
      borderColor: COLOR_ACTIVE,
    },
  },
});

const cancelButton = style({
  /* @ts-ignore-line */
  position: 'absolute !important',
  right: 0,
  top: '2px',
});

const input = style({
  background: 'none',
  backgroundColor: 'white',
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
  backgroundColor: 'white',
  paddingLeft: 5,
  paddingRight: 5,
  color: 'gray',
  fontWeight: 'normal',
  position: 'absolute',
  selectors: {
    [`${input}:focus ~ &`]: {
      color: COLOR_ACTIVE,
    },
  },
});

export const styles = {
  textInputContainer,
  label,
  input,
  cancelButton,
};
