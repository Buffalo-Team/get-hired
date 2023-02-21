import { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useToggle, useWindowScroll } from 'react-use';
import useI18n from '~/hooks/useI18n';

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
        title: t('navbarTitle.applicationsList'),
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
  const [isTopbarDisplayed, toggleTopbarDisplayed] = useToggle(true);

  useEffect(() => {
    if (y > lastScrollY.current) {
      if (isTopbarDisplayed) {
        toggleTopbarDisplayed();
      }
    } else {
      if (!isTopbarDisplayed) {
        toggleTopbarDisplayed();
      }
    }

    lastScrollY.current = y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  return isTopbarDisplayed;
};
