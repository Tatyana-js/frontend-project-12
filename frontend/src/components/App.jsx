import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound.jsx';
import MainPage from './MainPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
