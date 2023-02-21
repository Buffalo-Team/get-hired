import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import Text from '~/components/Text';
import { useDynamicTopbar, useRouteTitle } from './Layout.hooks';
import { styles } from './Layout.styles.css';

const LayoutView = (): JSX.Element => {
  const title = useRouteTitle();
  const isTopbarDisplayed = useDynamicTopbar();

  return (
    <div className={styles.root}>
      <nav className={classNames(styles.topbar, { [styles.topbarHidden]: !isTopbarDisplayed })}>
        {title && <Text className={styles.title}>{title}</Text>}
      </nav>
      <main className={styles.mainArea}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutView;
