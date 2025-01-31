import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  MainNavbar from './components/Navbar.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Registration from './pages/RegistrationPage.jsx';
import router from './utils/routes.js';
import AuthProvider, { PrivateRoute } from './context/AuthProvider.jsx';

const App = () => {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <div className="d-flex h-100 flex-column">
        <AuthProvider>
          <MainNavbar />
          <Routes>
            <Route path={router.main()} element={(
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
              )} 
            />
            <Route path={router.login()} element={<LoginPage />} />
            <Route path={router.signUpPath()} element={<Registration />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
