import { Outlet } from 'react-router-dom';
import { useDynamicTopbar, useRouteTitle } from './Layout.hooks';
import { styles } from './Layout.styles.css';
import Topbar from './Topbar';

const LayoutView = (): JSX.Element => {
  const title = useRouteTitle();
  const isTopbarVisible = useDynamicTopbar();

  return (
    <div className={styles.root}>
      <Topbar title={title} isVisible={isTopbarVisible} />
      <main className={styles.mainArea}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutView;
