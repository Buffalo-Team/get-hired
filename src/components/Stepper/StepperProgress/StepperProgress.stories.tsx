import { Story } from '@ladle/react';
import Component from '.';
import { Props } from './StepperProgress.view';

export default {
  title: 'Stepper / Stepper Progress',
};

export const Default: Story<Props> = (props) => <Component {...props} />;

Default.args = {
  step: 1,
  totalSteps: 4,
  tip: 'Next: Status',
  title: 'Details',
};
