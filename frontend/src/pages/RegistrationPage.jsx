import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import avatarRegisration from '../assets/avatarRegistration.jpg';
import router from '../utils/routes.js';
import userSchema from '../utils/validate.js';
import useAuth from '../hooks/index.jsx';

const Registration = () => {
  const { t } = useTranslation();
  const inputEl = useRef(null);
  const [authFailed, setAuthFailed] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: userSchema(t),
    onSubmit: async ({ username, password }, { setSubmitting }) => {
      try {
        const { data } = await axios.post(router.signUpPath(), { username, password });
          auth.logIn(data.token, data.username);
          navigate(router.main());
      } catch (err) {
          setSubmitting(false);
          if (err.response.status === 409) {
            setAuthFailed(true);
            inputEl.current.select(); 
          }
          throw err;
        }
    }
  });

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img src={avatarRegisration} className="rounded-circle" alt={t('signUpForm.signUp')} />
              </div>
              <Form className='w-50' onSubmit={formik.handleSubmit}>
                <h1 className='text-center mb-4'>{t('signUpForm.signUp')}</h1>
                <fieldset >
                  <Form.Group className="form-floating mb-3" controlId="username">
                    <Form.Control
                      autoComplete="username"
                      name="username" 
                      required 
                      placeholder={t('signUpForm.username')} 
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      ref={inputEl}
                      autoFocus
                      isInvalid={(formik.touched.username && !!formik.errors.username) || authFailed}
                      onBlur={formik.handleBlur}
                    />
                    <Form.Label>{t('signUpForm.username')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.username}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="form-floating mb-3" controlId="password">
                    <Form.Control
                      type='password'
                      autoComplete="new-password"
                      aria-describedby='passwordHelpBlock'
                      name="password" 
                      required 
                      placeholder={t('loginForm.password')} 
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      ref={inputEl}
                      isInvalid={(formik.touched.password && !!formik.errors.password) || authFailed}
                      onBlur={formik.handleBlur}
                    />
                    <Form.Label>{t('loginForm.password')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4" controlId="confirmPassword">
                    <Form.Control
                        type='password'
                        autoComplete="new-password"
                        aria-describedby='passwordHelpBlock'
                        name="confirmPassword" 
                        required 
                        placeholder={t('signUpForm.confirmPassword')} 
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        ref={inputEl}
                        isInvalid={(formik.touched.confirmPassword && !!formik.errors.confirmPassword) || authFailed}
                        onBlur={formik.handleBlur}
                      />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {authFailed ? t('signUpForm.existsUser') : formik.errors.confirmPassword}
                    </Form.Control.Feedback>
                    <Form.Label>{t('signUpForm.confirmPassword')}</Form.Label>
                  </Form.Group>
                  <Button type="submit" variant="outline-primary" className="w-100">{t('signUpForm.signUpButton')}</Button>
                </fieldset>
              </Form>
            </Card.Body> 
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;