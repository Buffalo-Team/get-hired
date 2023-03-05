import { Story } from '@ladle/react';
import { useState } from 'react';
import Component from '.';
import { TextInputValue } from './TextInput.types';
import { Props } from './TextInput.view';

export const Default: Story<Props> = ({ label, required, error, placeholder }) => {
  const [value, setValue] = useState<TextInputValue>('');
  const handleOnChange = (value: TextInputValue) => {
    setValue(value);
    console.log(value);
  };
  return (
    <Component
      value={value}
      label={label}
      required={required}
      error={error}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

Default.args = {
  label: 'Label',
  required: true,
  placeholder: 'Start typing text...',
  error: false,
};
