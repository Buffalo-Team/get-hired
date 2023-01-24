import { Switch } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '~/providers/theme/ThemeContext';

export const DevPlayground = (): JSX.Element => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = () => {
    if (i18n.language === 'pl') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pl');
    }
  };

  return (
    <div>
      <h1>{t('devPlayground')}</h1>
      <div>
        <Switch onChange={toggleTheme} />
        <span>{themeMode}</span>
      </div>
      <div>
        <Switch onChange={handleChangeLanguage} />
        <span>{t('changeLanguage')}</span>
      </div>
      <div>{t('helloWorld')}</div>
    </div>
  );
};
