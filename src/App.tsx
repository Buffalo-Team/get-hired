import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Hello from '~/components/Hello';
import useGenerator from './hooks/useGenerator';
import { DevPlayground } from './pages/DevPlayground/DevPlayground';
import { Layout } from './templates/Layout';
import ThemeWrapper from './templates/ThemeWrapper';

const App = () => {
  const { generateDatabase } = useGenerator();

  useEffect(() => {
    if (import.meta.env.VITE_GENERATE_ON_START === 'true') {
      generateDatabase({
        quantities: {
          applications: 30,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
