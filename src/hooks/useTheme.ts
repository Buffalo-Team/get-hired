import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeMode, themeSelector } from '~/providers/redux/themeSlice';

const useTheme = () => {
  const { mode } = useSelector(themeSelector);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light));
  };

  return {
    mode,
    toggleTheme,
  };
};

export default useTheme;
