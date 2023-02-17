import { Story } from '@ladle/react';
import { keys } from 'lodash';
import Component from '.';
import { styles } from './Text.styles.css';
import { Props } from './Text.view';

export const Default: Story<Props> = ({ variant, children }) => (
  <Component variant={variant}>{children}</Component>
);

Default.args = {
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

Default.argTypes = {
  variant: {
    control: { type: 'radio' },
    options: keys(styles.variant),
    defaultValue: 'normal',
  },
};
