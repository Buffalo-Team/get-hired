import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './Button.view';

export const Default: Story<Props> = (props) => <Component {...props} />;

Default.args = {
  children: 'Click me',
};

Default.argTypes = {
  fullWidth: {
    control: { type: 'radio' },
    defaultValue: false,
    options: [true, false],
  },
  variant: {
    control: { type: 'radio' },
    defaultValue: 'default',
    options: ['default', 'neutral'],
  },
  onClick: {
    action: 'Clicked',
  },
};
