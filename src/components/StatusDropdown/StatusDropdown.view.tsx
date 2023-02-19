import { useMemo } from 'react';
import Dropdown, { Props as DropdownProps } from '~/components/Dropdown';
import { ApplicationStatus, DropdownOption } from '~/@types/common';
import StatusOption from './StatusOption';

export type Props = Omit<DropdownProps<ApplicationStatus>, 'options'> & {
  statuses: ApplicationStatus[];
};

const StatusDropdown = ({ value, statuses, onChange }: Props) => {
  const styledOptions = useMemo(
    () =>
      statuses.map(
        (status): DropdownOption<ApplicationStatus> => ({
          value: status,
          display: <StatusOption status={status} withAside />,
          displaySelected: <StatusOption status={status} />,
        }),
      ),
    [statuses],
  );

  return <Dropdown onChange={onChange} value={value} options={styledOptions} />;
};

export default StatusDropdown;
