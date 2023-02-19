import { Story } from '@ladle/react';
import { useState } from 'react';
import Component from '.';
import { Props } from './Dropdown.view';

export const Default: Story<Props> = ({ value, options }) => {
  const [dynamicValue, setDynamicValue] = useState(value);

  return <Component value={dynamicValue} options={options} onChange={setDynamicValue} />;
};

Default.args = {
  value: 'label1',
  options: [
    {
      display: 'Some label 1',
      value: 'label1',
    },
    {
      display: 'Some label 2',
      value: 'label2',
    },
  ],
};
