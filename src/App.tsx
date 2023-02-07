import { Route, Routes } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import Hello from '~/components/Hello';
import useGenerator from './hooks/useGenerator';
import { DevPlayground } from './pages/DevPlayground/DevPlayground';
import { Layout } from './templates/Layout';
import ThemeWrapper from './templates/ThemeWrapper';

const App = (): JSX.Element => {
  const { generateDatabase } = useGenerator();

  useEffectOnce(() => {
    if (import.meta.env.VITE_GENERATE_ON_START === 'true') {
      generateDatabase({
        quantities: {
          applications: 30,
        },
      });
    }
  });

  return (
    <ThemeWrapper>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Hello />} />
          <Route path='dev' element={<DevPlayground />} />
        </Route>
      </Routes>
    </ThemeWrapper>
  );
};

export default App;
