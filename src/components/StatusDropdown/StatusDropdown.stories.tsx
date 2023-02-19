import { Story } from '@ladle/react';
import { useState } from 'react';
import { ApplicationStatus } from '~/@types/common';
import Component from '.';
import { Props } from './StatusDropdown.view';

export const Default: Story<Props> = ({ value, statuses }) => {
  const [dynamicValue, setDynamicValue] = useState(value);

  return <Component value={dynamicValue} statuses={statuses} onChange={setDynamicValue} />;
};

Default.args = {
  value: ApplicationStatus.Accepted,
  statuses: [
    ApplicationStatus.Accepted,
    ApplicationStatus.Hired,
    ApplicationStatus.Rejected,
    ApplicationStatus.InProgress,
  ],
};
