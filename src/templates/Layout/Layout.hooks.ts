import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToggle, useWindowScroll } from 'react-use';
import useI18n from '~/hooks/useI18n';
import { ReactComponent as HomeIcon } from '~/assets/icons/home.svg';
import { PageIconConfig } from './BottomPanel/PageIcon/PageIcon.types';

interface RouteTitle {
  pathname: string;
  exact: boolean;
  title: string;
}

export const useRouteTitle = (): string | undefined => {
  const { t } = useI18n();
  const { pathname } = useLocation();

  const routes: RouteTitle[] = useMemo(
    () => [
      {
        pathname: '/',
        exact: true,
        title: t('layout.title.applicationsList'),
      },
    ],
    [t],
  );

  const matchedRoute = routes.find((entry) =>
    entry.exact ? entry.pathname === pathname : pathname.startsWith(entry.pathname),
  );

  return matchedRoute?.title;
};

export const useDynamicTopbar = (): boolean => {
  const { y } = useWindowScroll();
  const lastScrollY = useRef(y);
  const [isTopbarVisible, toggleTopbarVisible] = useToggle(true);

  useEffect(() => {
    if (y > lastScrollY.current) {
      if (isTopbarVisible) {
        toggleTopbarVisible();
      }
    } else {
      if (!isTopbarVisible) {
        toggleTopbarVisible();
      }
    }

    lastScrollY.current = y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  return isTopbarVisible;
};

export const usePageIcons = (): PageIconConfig[] => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const pageIcons = useMemo(
    () => [
      {
        id: 'home',
        label: t('layout.menuLabel.home'),
        Icon: HomeIcon,
        onClick: () => navigate('/'),
      },
      {
        id: 'calendar',
        label: t('layout.menuLabel.calendar'),
        Icon: HomeIcon,
        onClick: () => navigate('/calendar'),
      },
      {
        id: 'settings',
        label: t('layout.menuLabel.settings'),
        Icon: HomeIcon,
        onClick: () => navigate('/settings'),
      },
    ],
    [t, navigate],
  );

  return pageIcons;
};
