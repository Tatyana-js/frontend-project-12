import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import avatarLogin from '../assets/avatarLogin.jpg';
import useAuth from '../hooks/index.jsx';
import router from '../utils/routes.js';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const auth = useAuth();
  const { t } = useTranslation(); 
  const [authFailed, setAuthFailed] = useState(false);
  const inputEl = useRef(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      setAuthFailed(false);
        try {
          const res = await axios.post(router.loginPath(), values);
          auth.logIn(res.data.token, res.data.username);
          navigate(router.main());
        } catch (err) {
          formik.setSubmitting(false);
            if (axios.isAxiosError(err) && err.response.status === 401) {
            setAuthFailed(true);
            inputEl.current.select();
            toast.error(t('errors.axiosError'));
            return;
          }
        throw err;
        }
    },
  });
  
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={avatarLogin} className="rounded-circle" alt="Войти" />
              </div>
              <Form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">{t('loginForm.title')}</h1>
                <fieldset >
                  <Form.Group className="form-floating mb-3" controlId="username">
                    <Form.Control 
                      type="text"
                      autoComplete="username" 
                      required 
                      placeholder={t('loginForm.username')} 
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      isInvalid={authFailed}
                      ref={inputEl}
                      autoFocus
                    />
                    <Form.Label>{t('loginForm.username')}</Form.Label>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4" controlId="password">
                    <Form.Control
                      type="password"
                      autoComplete="current-password" 
                      required 
                      placeholder={t('loginForm.password')} 
                      onChange={formik.handleChange} 
                      value={formik.values.password}
                      isInvalid={authFailed}
                      ref={inputEl}
                    />
                    <Form.Label>{t('loginForm.password')}</Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {t('loginForm.error')}
                    </Form.Control.Feedback>
                  </Form.Group>  
                    <Button type="submit" variant="outline-primary" className="w-100 mb-3">{t('loginForm.title')}</Button>
                  </fieldset>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('loginForm.span')} </span> 
                <a href="/signup">{t('signUpForm.signUp')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;