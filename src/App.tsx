import { Route, Routes } from 'react-router-dom';
import Hello from '~/components/Hello';
import { DevPlayground } from './components/DevPlayground/DevPlayground';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Hello />} />
        <Route path='dev' element={<DevPlayground />} />
      </Route>
    </Routes>
  );
}

export default App;
