import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src="../assets/avatarLogin.jpg" className="rounded-circle" alt="Войти" />
              </div>
              <Form className="col-12 col-md-6 mt-3 mt-md-0">
                <h1 className="text-center mb-4">Войти</h1>
                <Form.Group className="form-floating mb-3">
                  <Form.Control 
                    name="username"
                    type="text"
                    autoComplete="username" 
                    required 
                    placeholder="Ваш ник" 
                    id="username" 
                    className="form-control" 
                    value=""
                    isInvalid={true} 
                  />
                  <Form.Label htmlFor="username">Ваш ник</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-4">
                  <Form.Control 
                    name="password" 
                    autoComplete="current-password" 
                    required 
                    placeholder="Пароль" 
                    type="password" 
                    id="password" 
                    className="form-control" 
                    value="" 
                  />
                  <Form.Label className="form-label" htmlFor="password">Пароль</Form.Label>
                </Form.Group>
                <Button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта?</span> 
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