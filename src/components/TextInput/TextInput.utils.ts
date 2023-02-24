import { CustomValueTypeTransform } from './TextInput.types';

export const transform: CustomValueTypeTransform = {
  input: (value) => {
    return value ?? '';
  },
  output: (event) => {
    const { value } = event.target;
    return value || null;
  },
};
