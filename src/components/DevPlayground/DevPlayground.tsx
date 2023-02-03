import { Switch } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '~/providers/theme/ThemeContext';
import useUserData from '~/hooks/useUserData';

export const DevPlayground = (): JSX.Element => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const { setUserData, clearUserData, user } = useUserData();

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
      <div>
        <button
          onClick={() =>
            setUserData({ id: 1, name: 'Test', surname: 'Test', email: 'test@test.com' })
          }
        >
          {t('setMockUser')}
        </button>
        <button onClick={clearUserData}>{t('clearUserData')}</button>
        {JSON.stringify(user)}
      </div>
      <div>{t('helloWorld')}</div>
    </div>
  );
};
