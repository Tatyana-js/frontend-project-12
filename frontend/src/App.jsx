import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Navbar } from 'react-bootstrap';
import PageNotFound from './pages/PageNotFound.jsx';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import router from './utils/routes.js';
import AuthProvider from './context/AuthProvider.jsx';

const App = () => {
  const { t } = useTranslation();
  
  return (
    <BrowserRouter>
      <div className="d-flex h-100 flex-column">
        <Navbar bg="white" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">{t('navBar.title')}</Navbar.Brand>
            <button type="button" className="btn btn-primary">{t('navBar.button')}</button>
          </Container>
        </Navbar>
        <AuthProvider>
          <Routes>
            <Route path={router.mainPath} element={<MainPage />} />
            <Route path={router.loginPath} element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>

      </div>
    </BrowserRouter>
  );
};

export default App;
