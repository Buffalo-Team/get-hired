import { t } from 'i18next';
import { useEffectOnce } from 'react-use';
import Loader from '~/components/Loader';
import useGenerator from '~/hooks/useGenerator';

const GeneratorView = (): JSX.Element => {
  const { generateDatabase, isGenerated } = useGenerator();

  useEffectOnce(() => {
    generateDatabase({
      quantities: {
        applications: 30,
      },
    });
  });

  return <>{isGenerated ? t('databaseGenerated') : <Loader />}</>;
};

export default GeneratorView;
