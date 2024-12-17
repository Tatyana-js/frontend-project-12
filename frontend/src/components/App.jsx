import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import PageNotFound from './PageNotFound.jsx';
import MainPage from './MainPage.jsx';
import LoginPage from './LoginPage.jsx';

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
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
