import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import ApplicationsList from './pages/Applications/List';
import DevPlayground from './pages/DevPlayground';
import Generator from './pages/Generator';
import Layout from './templates/Layout';
import ThemeWrapper from './templates/ThemeWrapper';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeWrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ApplicationsList />} />
            <Route path='dev' element={<DevPlayground />} />
          </Route>

          {/* Generate page for DEV environment only */}
          {import.meta.env.DEV && <Route path='/generate' element={<Generator />} />}
        </Routes>
      </ThemeWrapper>
    </QueryClientProvider>
  );
};

export default App;
