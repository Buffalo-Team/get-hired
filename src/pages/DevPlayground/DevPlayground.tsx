import { Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUserData from '~/hooks/useUserData';
import ApplicationTile from '../../components/ApplicationTile';
import useTheme from '~/hooks/useTheme';

export const DevPlayground = (): JSX.Element => {
  const { toggleTheme, mode } = useTheme();
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
    <div style={{ background: '#ededed' }}>
      <h1>{t('devPlayground')}</h1>
      <div style={{ padding: 20 }}>
        <ApplicationTile
          companyName='Super Company'
          roleName='Frontend Developer'
          status='sent'
          salary={{
            from: 10,
            to: 20,
          }}
          linkToOffer={'www.google.com'}
          createdAt={new Date()}
        />
      </div>
      <div>
        <Switch onChange={toggleTheme} />
        <span>{mode}</span>
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
