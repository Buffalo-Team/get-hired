import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  required: boolean;
};
