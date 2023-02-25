import { IconButton } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import { ReactComponent as CancelIcon } from '~/assets/icons/cancel.svg';
import { styles } from './TextInput.styles.css';
import { TextInputValue } from './TextInput.types';
import { transform } from './TextInput.utils';

export type Props = {
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: TextInputValue) => void;
};

const TextInput = ({
  defaultValue,
  label,
  required,
  placeholder = '',
  onChange,
}: Props): JSX.Element => {
  const [value, setValue] = useState<TextInputValue>(defaultValue ?? '');

  const handleClear = useCallback(() => {
    setValue(null);
    onChange(null);
  }, [onChange]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const transformedValue = transform.output(event);
      setValue(transformedValue);
      onChange(transformedValue);
    },
    [onChange],
  );

  const formattedLabel = `${label}${required ? '*' : ''}`;

  return (
    <div className={styles.textInputContainer}>
      <IconButton className={styles.cancelButton} onClick={handleClear}>
        <CancelIcon />
      </IconButton>
      <input
        id='input'
        value={transform.input(value)}
        className={styles.input}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      <label htmlFor='input' className={styles.label}>
        {formattedLabel}
      </label>
    </div>
  );
};

export default TextInput;
