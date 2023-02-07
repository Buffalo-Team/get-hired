import { useTranslation } from 'react-i18next';
import { Namespaces } from '~/i18n/config';

const useI18n = useTranslation<Namespaces>;

export default useI18n;
