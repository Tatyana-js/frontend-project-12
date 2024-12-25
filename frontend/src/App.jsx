import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import PageNotFound from './pages/PageNotFound.jsx';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import router from './utils/routes.js';
import AuthProvider from './context/AuthProvider.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex h-100 flex-column">
        <Navbar bg="white" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
            <button type="button" className="btn btn-primary">Выйти</button>
          </Container>
        </Navbar>
        <AuthProvider>
          <Routes>
            <Route path={router.main} element={<MainPage />} />
            <Route path={router.login} element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>

      </div>
    </BrowserRouter>
  );
};

export default App;