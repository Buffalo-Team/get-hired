import { createContext } from 'react';

export type ThemeContextProps = {
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});
