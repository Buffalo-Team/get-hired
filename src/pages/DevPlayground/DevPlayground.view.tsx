import { Switch } from '@mui/material';
import useUserData from '~/hooks/useUserData';
import ApplicationTile from '../../components/ApplicationTile';
import useTheme from '~/hooks/useTheme';
import useI18n from '~/hooks/useI18n';
import { ApplicationStatus } from '~/@types/common';
import { values } from 'lodash';
import Stepper from '~/components/Stepper';

const DevPlaygroundView = (): JSX.Element => {
  const { toggleTheme, mode } = useTheme();
  const { t, i18n } = useI18n();
  const { setUserData, clearUserData, user } = useUserData();

  const handleChangeLanguage = () => {
    if (i18n.language === 'pl') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pl');
    }
  };

  return (
    <div style={{ background: 'white' }}>
      <h1>{t('devPlayground')}</h1>
      <div style={{ padding: 20, background: '#ededed' }}>
        <ApplicationTile
          companyName='Super Company'
          roleName='Frontend Developer'
          status={ApplicationStatus.Sent}
          salary={{
            from: 10,
            to: 20,
          }}
          linkToOffer=''
          availableStatuses={values(ApplicationStatus)}
          onStatusChange={() => null}
          createdAt={new Date('2023-02-05T20:02:28.228Z')}
        />
        <ApplicationTile
          companyName='Other Company'
          roleName='Backend Developer'
          status={ApplicationStatus.Hired}
          salary={{
            from: 5,
            to: 6,
          }}
          linkToOffer=''
          availableStatuses={values(ApplicationStatus)}
          onStatusChange={() => null}
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
      <div style={{ marginTop: 20, padding: 10, height: 400 }}>
        <Stepper
          steps={[
            {
              title: 'Details',
              tip: 'Next: Status',
              content: 'Details Step Content',
            },
            {
              title: 'Status',
              tip: 'Next: Summary',
              content: 'Status Step Content',
            },
            {
              title: 'Summary',
              content: 'Summary Step Content',
            },
          ]}
          onConfirm={() => {
            console.log('Confirm');
          }}
        />
      </div>
    </div>
  );
};

export default DevPlaygroundView;
