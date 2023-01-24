import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcomeText')}</h1>
      <Outlet />
    </div>
  );
};
