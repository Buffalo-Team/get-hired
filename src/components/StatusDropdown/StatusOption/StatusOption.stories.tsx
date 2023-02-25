import { Story } from '@ladle/react';
import { values } from 'lodash';
import { ApplicationStatus } from '~/@types/common';
import Component from '.';
import { Props } from './StatusOption.view';

export default {
  title: 'Status Dropdown / Status Option',
};

export const Default: Story<Props> = ({ status, withAside }) => {
  return <Component status={status} withAside={withAside} />;
};

Default.argTypes = {
  withAside: {
    options: [true, false],
    control: { type: 'radio' },
    defaultValue: true,
  },
  status: {
    options: values(ApplicationStatus),
    control: { type: 'radio' },
    defaultValue: ApplicationStatus.Accepted,
  },
};
