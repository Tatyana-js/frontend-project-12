import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import avatarLogin from '../assets/avatarLogin.jpg';

const LoginPage = () => {
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={avatarLogin} className="rounded-circle" alt="Войти" />
              </div>
              <Form className="col-12 col-md-6 mt-3 mt-md-0">
                <h1 className="text-center mb-4">Войти</h1>
                <fieldset >
                  <Form.Group className="form-floating mb-3" controlId="username">
                    <Form.Control 
                      type="text"
                      autoComplete="username" 
                      required 
                      placeholder="Ваш ник" 
                      id="username" 
                      value=""
                      isInvalid={false}
                      // ref={inpit}
                    />
                    <Form.Label>Ваш ник</Form.Label>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4" controlId="password">
                    <Form.Control
                      type="password"
                      autoComplete="current-password" 
                      required 
                      placeholder="Пароль" 
                      id="password" 
                      value=""
                      isInvalid={false}
                      // ref={inpit}
                    />
                    <Form.Label>Пароль</Form.Label>
                  </Form.Group>  
                    <Button type="submit" variant="outline-primary" className="w-100 mb-3">Войти</Button>
                  </fieldset>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>Нет аккаунта? </span> 
                <a href="/signup">Регистрация</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;