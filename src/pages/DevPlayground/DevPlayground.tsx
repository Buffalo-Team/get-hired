import { Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUserData from '~/hooks/useUserData';
import ApplicationTile from '../../components/ApplicationTile';
import useTheme from '~/hooks/useTheme';
import useDatabase from '~/hooks/useDatabase';

export const DevPlayground = (): JSX.Element => {
  const { toggleTheme, mode } = useTheme();
  const { t, i18n } = useTranslation();
  const { setUserData, clearUserData, user } = useUserData();
  const { applications } = useDatabase();

  const handleChangeLanguage = () => {
    if (i18n.language === 'pl') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pl');
    }
  };
  console.log(applications.get());
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
          linkToOffer=''
          createdAt={new Date('2023-02-05T20:02:28.228Z')}
        />
        <ApplicationTile
          companyName='Other Company'
          roleName='Backend Developer'
          status='accepted'
          salary={{
            from: 5,
            to: 6,
          }}
          linkToOffer=''
          createdAt={new Date('2023-01-05T20:02:28.228Z')}
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
