import { ReactNode } from 'react';
import useTheme from '~/hooks/useTheme';
import { ThemeMode } from '~/providers/redux/themeSlice';
import { darkTheme, lightTheme } from '~/theme/theme.css';

interface Props {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: Props) => {
  const { mode } = useTheme();
  return <div className={mode === ThemeMode.Light ? lightTheme : darkTheme}>{children}</div>;
};

export default ThemeWrapper;
