import { ChangeEvent } from 'react';

export type TextInputValue = string | null;

export type CustomValueTypeTransform = {
  input: (value: TextInputValue) => string;
  output: (event: ChangeEvent<HTMLInputElement>) => TextInputValue;
};
