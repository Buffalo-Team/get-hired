import { IconButton } from '@mui/material';
import classNames from 'classnames';
import { ChangeEvent, useCallback } from 'react';
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import { ReactComponent as CancelIcon } from '~/assets/icons/cancel.svg';
import { styles } from './TextInput.styles.css';
import { TextInputValue } from './TextInput.types';
import { transform } from './TextInput.utils';

export type Props = {
  value: TextInputValue;
  label: string;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  onChange: (value: TextInputValue) => void;
};

const TextInput = ({
  label,
  required,
  error,
  placeholder = '',
  onChange,
  value,
}: Props): JSX.Element => {
  const handleClear = useCallback(() => {
    onChange(null);
  }, [onChange]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const transformedValue = transform.output(event);
      onChange(transformedValue);
    },
    [onChange],
  );

  const formattedLabel = `${label}${required ? '*' : ''}`;

  return (
    <div
      className={classNames(styles.textInputContainer.base, {
        [styles.textInputContainer.error]: error,
      })}
    >
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

export type ControlledTextInputProps<FORM_VALUES extends FieldValues> = {
  label: string;
  required?: boolean;
  control: Control<FORM_VALUES>;
  name: Path<FORM_VALUES>;
  error: FieldError | undefined;
};

export const ControlledTextInput = <FORM_VALUES extends FieldValues>({
  label,
  name,
  required,
  control,
  error,
}: ControlledTextInputProps<FORM_VALUES>) => {
  return (
    <Controller<FORM_VALUES>
      name={name}
      control={control}
      rules={{
        required: Boolean(required),
      }}
      render={({ field }) => (
        <TextInput label={label} error={error !== undefined} required={required} {...field} />
      )}
    />
  );
};

export default TextInput;
