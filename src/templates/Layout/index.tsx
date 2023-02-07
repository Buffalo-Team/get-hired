import { Outlet } from 'react-router-dom';
import useI18n from '~/hooks/useI18n';

export const Layout = (): JSX.Element => {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('welcomeText')}</h1>
      <Outlet />
    </div>
  );
};
