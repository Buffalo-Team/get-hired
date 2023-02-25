import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './CircleProgress.view';

export const Default: Story<Props> = ({ radius, fraction, lineWidth, text }) => (
  <Component radius={radius} fraction={fraction} lineWidth={lineWidth} text={text} />
);

Default.args = {
  radius: 18,
  lineWidth: 2,
  text: '1/4',
};

Default.argTypes = {
  fraction: {
    defaultValue: 0.35,
    control: { type: 'range', min: 0, max: 1, step: 0.01 },
  },
};
