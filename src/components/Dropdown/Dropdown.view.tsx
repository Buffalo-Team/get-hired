import { ReactNode } from 'react';
import { styles } from './Dropdown.styles.css';
import { ReactComponent as DownArrow } from '~/assets/icons/downArrow.svg';
import { useToggle } from 'react-use';
import classNames from 'classnames';

export interface Props {
  value: number | string;
  options: {
    display: ReactNode;
    value: number | string;
  }[];
}

const Dropdown = ({ value, options }: Props) => {
  const [isListOpen, toggleListOpen] = useToggle(true);
  const chosenOption = options.find((option) => option.value === value);

  return (
    <div className={styles.root}>
      <div className={styles.mainDisplay} onClick={toggleListOpen}>
        {chosenOption && chosenOption.display}
        <DownArrow className={classNames(styles.arrow, { [styles.flipped]: isListOpen })} />
      </div>
      {isListOpen && (
        <div className={styles.list}>
          {options.map((option) => (
            <div
              key={option.value}
              className={classNames(styles.option, { [styles.selected]: option.value === value })}
            >
              {option.display}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
