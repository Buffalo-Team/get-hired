import { Outlet } from 'react-router-dom';
import useI18n from '~/hooks/useI18n';
import { styles } from './styles.css';

export const Layout = (): JSX.Element => {
  const { t } = useI18n();

  return (
    <div className={styles.root}>
      <h1>{t('welcomeText')}</h1>
      <main className={styles.mainArea}>
        <Outlet />
      </main>
    </div>
  );
};
