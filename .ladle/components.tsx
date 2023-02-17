import React from 'react';
import { GlobalProvider, ThemeState } from '@ladle/react';
import { darkTheme, lightTheme } from '~/theme/theme.css';
import '~/i18n/config';
import '~/theme/global.css';

export const Provider: GlobalProvider = ({ children, globalState }) => (
    <div className={globalState.theme === ThemeState.Light ? lightTheme : darkTheme}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      {children}
    </div>
  );

