import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import useGenerator from './hooks/useGenerator';
import ApplicationsList from './pages/Applications/List';
import { DevPlayground } from './pages/DevPlayground/DevPlayground';
import { Layout } from './templates/Layout';
import ThemeWrapper from './templates/ThemeWrapper';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeWrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ApplicationsList />} />
            <Route path='dev' element={<DevPlayground />} />
          </Route>
        </Routes>
      </ThemeWrapper>
    </QueryClientProvider>
  );
};

export default App;
