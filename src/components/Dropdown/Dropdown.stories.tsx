import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './Dropdown.view';

export const Default: Story<Props> = ({ value, options }) => (
  <Component value={value} options={options} />
);

Default.args = {
  value: 2,
  options: [
    {
      display: 'Some label 1',
      value: 1,
    },
    {
      display: 'Some label 2',
      value: 2,
    },
  ],
};
