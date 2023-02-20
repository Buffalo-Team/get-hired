import { styles } from './Dropdown.styles.css';
import { ReactComponent as DownArrow } from '~/assets/icons/downArrow.svg';
import { useToggle } from 'react-use';
import classNames from 'classnames';
import { DropdownOption } from '~/@types/common';

type Value = string | number;

export interface Props<T> {
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
}

const Dropdown = <T extends Value = string>({ value, options, onChange }: Props<T>) => {
  const [isListOpen, toggleListOpen] = useToggle(false);
  const chosenOption = options.find((option) => option.value === value);

  return (
    <div className={styles.root}>
      <div className={styles.mainDisplay} onClick={() => toggleListOpen()}>
        {chosenOption && (chosenOption.displaySelected || chosenOption.display)}
        <DownArrow className={classNames(styles.arrow, { [styles.flipped]: isListOpen })} />
      </div>
      {isListOpen && (
        <div className={styles.list}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                toggleListOpen();
              }}
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
