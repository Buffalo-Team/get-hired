import { Switch } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Translate } from '~/i18n/Translate';
import { createInterpolatedTranslationKey } from '~/i18n/translationHelper';
import { commonTranslationKeys } from '~/i18n/translations/translationKeys';
import { ThemeContext } from '~/providers/theme/ThemeContext';

export const DevPlayground = (): JSX.Element => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const handleChangeLanguage = () => {
    if (i18n.language === 'pl') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pl');
    }
  };

  return (
    <div>
      <h1>
        <Translate>{commonTranslationKeys.devPlayground}</Translate>
      </h1>
      <div>
        <Switch onChange={toggleTheme} />
        <span>{themeMode}</span>
      </div>
      <div>
        <Switch onChange={handleChangeLanguage} />
        <span>
          {/* Standardowy przykład użycia translacji */}
          <Translate>{commonTranslationKeys.changeLanguage}</Translate>
        </span>
      </div>
      <div>
        {/* Standardowy przykład użycia translacji */}
        <Translate>{commonTranslationKeys.helloWorld}</Translate>
      </div>
      <div>
        {/* Przykład użycia interpolacji */}
        <Translate>
          {createInterpolatedTranslationKey(commonTranslationKeys.helloUser, {
            user: 'Kuba',
          })}
        </Translate>
      </div>
    </div>
  );
};
