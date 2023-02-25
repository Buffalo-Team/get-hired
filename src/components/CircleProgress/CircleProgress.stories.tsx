import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './CircleProgress.view';

export const Default: Story<Props> = ({ radius, percentage, lineWidth, text }) => (
  <Component radius={radius} percentage={percentage} lineWidth={lineWidth} text={text} />
);

Default.args = {
  radius: 18,
  percentage: 35,
  lineWidth: 2,
  text: '1/4',
};
