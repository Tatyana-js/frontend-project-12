import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useRef } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import avatarRegisration from '../assets/avatarRegistration.jpg';
import router from '../utils/routes.js';
import { useCreateUserMutation } from '../api/chatApi.js'; 

const Registration = () => {
  const { t } = useTranslation();
  const inputEl = useRef();
  const [ createUser ] = useCreateUserMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
        try {
          const user = {
            username: values.username,
            password: values.password,
           };
          await createUser(user);
          navigate(router.main());
        } catch (error) {
          formik.setSubmitting(false);
            if (axios.isAxiosError(error) && err.response.status === 401) {
            inputEl.current.select();
            return error;
          }
        throw error;
        }
    },
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
                    />
                    <Form.Label>{t('signUpForm.username')}</Form.Label>
                    {/* {({ errors, touched }) => (
                      {errors.username && touched.username ?  (
                      <Form.Control.Feedback type="invalid" tooltip>{t('modal.schema.required')}</Form.Control.Feedback>) : null})} */}
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
                    />
                    <Form.Label>{t('loginForm.password')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>{t('modal.schema.required')}</Form.Control.Feedback>
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
                      />
                    <Form.Control.Feedback type="invalid" tooltip>{t('signUpForm.invalidConfirmPasswor')}</Form.Control.Feedback>
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