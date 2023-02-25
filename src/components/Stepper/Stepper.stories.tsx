import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './Stepper.view';

export const Default: Story<Props> = (props) => (
  <div style={{ height: 500 }}>
    <Component {...props} />
  </div>
);

Default.args = {
  steps: [
    {
      title: 'Details',
      tip: 'Next: Status',
      content: 'Details Step Content',
    },
    {
      title: 'Status',
      tip: 'Next: Summary',
      content: 'Status Step Content',
    },
    {
      title: 'Summary',
      content: 'Summary Step Content',
    },
  ],
  continueLabel: '',
  backLabel: '',
  confirmLabel: '',
};

Default.argTypes = {
  onConfirm: {
    action: 'onConfirm',
  },
};
