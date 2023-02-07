import { Route, Routes } from 'react-router-dom';
import Hello from '~/components/Hello';
import { DevPlayground } from './pages/DevPlayground/DevPlayground';
import { Layout } from './templates/Layout';
import ThemeWrapper from './templates/ThemeWrapper';

const App = (): JSX.Element => {
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
