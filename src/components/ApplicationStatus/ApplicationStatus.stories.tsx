import { Story } from '@ladle/react';
import { values } from 'lodash';
import { ApplicationStatus } from '~/@types/common';
import Component from '.';
import { Props } from './ApplicationStatus.view';

export const Default: Story<Props> = ({ status }) => <Component status={status} />;

Default.argTypes = {
  status: {
    options: values(ApplicationStatus),
    control: { type: 'radio' },
    defaultValue: ApplicationStatus.Accepted,
  },
};
