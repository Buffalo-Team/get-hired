import { Outlet } from 'react-router-dom';
import BottomPanel from './BottomPanel';
import { useDynamicTopbar, usePageIcons, useRouteTitle } from './Layout.hooks';
import { styles } from './Layout.styles.css';
import Topbar from './Topbar';

const LayoutView = (): JSX.Element => {
  const title = useRouteTitle();
  const isTopbarVisible = useDynamicTopbar();
  const pageIcons = usePageIcons();

  return (
    <div className={styles.root}>
      <Topbar title={title} isVisible={isTopbarVisible} />
      <main className={styles.mainArea}>
        <Outlet />
      </main>
      <BottomPanel pageIcons={pageIcons} />
    </div>
  );
};

export default LayoutView;
