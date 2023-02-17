import { ArgType, Story } from '@ladle/react';
import { add } from 'date-fns';
import { values } from 'lodash';
import { ApplicationStatus } from '~/@types/common';
import Component from '.';
import { Props } from './ApplicationTile.view';

type StoryProps = Pick<Props, 'companyName' | 'roleName' | 'status'> & {
  salaryFrom: number;
  salaryTo: number;
  minutesPassed: number;
};

export const Default: Story<StoryProps> = ({
  companyName,
  roleName,
  salaryFrom,
  salaryTo,
  status,
  minutesPassed,
}) => (
  <div style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
    <Component
      companyName={companyName}
      roleName={roleName}
      status={status}
      salary={{
        from: salaryFrom,
        to: salaryTo,
      }}
      linkToOffer='https://www.google.com'
      createdAt={add(new Date(), { minutes: minutesPassed * -1 })}
    />
  </div>
);

const salaryControl: ArgType = {
  control: { type: 'range', min: 1000, max: 30000, step: 200 },
  defaultValue: 12500,
};

Default.args = {
  companyName: 'Universal Pictures',
  roleName: 'React Frontend Developer',
};

Default.argTypes = {
  salaryFrom: salaryControl,
  salaryTo: salaryControl,
  status: {
    options: values(ApplicationStatus),
    control: { type: 'radio' },
    defaultValue: ApplicationStatus.Accepted,
  },
  minutesPassed: {
    control: { type: 'range', min: 0, max: 1000, step: 1 },
    defaultValue: 60,
  },
};
