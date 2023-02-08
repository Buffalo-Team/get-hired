import { t } from 'i18next';
import { useEffectOnce } from 'react-use';
import Loader from '~/components/Loader';
import useGenerator from '~/hooks/useGenerator';

const Generator = (): JSX.Element => {
  const { generateDatabase, isGenerated } = useGenerator();

  useEffectOnce(() => {
    if (import.meta.env.VITE_GENERATE_ENABLED === 'true') {
      generateDatabase({
        quantities: {
          applications: 30,
        },
      });
    }
  });

  return <div>{isGenerated ? t('databaseGenerated') : <Loader />}</div>;
};

export default Generator;
