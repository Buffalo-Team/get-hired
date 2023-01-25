import { Outlet } from 'react-router-dom';
import { Translate } from '~/i18n/Translate';
import { commonTranslationKeys } from '~/i18n/translations/translationKeys';

export const Layout = (): JSX.Element => {
  return (
    <div>
      <h1>
        <Translate>{commonTranslationKeys.welcomeText}</Translate>
      </h1>
      <Outlet />
    </div>
  );
};
