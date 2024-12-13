import { Container, Navbar } from 'react-bootstrap';
import ChatContainer from './сhatComponents/ChatContainer.jsx';

 const MainPage = () => {

  return (
    <div className="d-flex h-100 flex-column">
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
          <button type="button" className="btn btn-primary">Выйти</button>
        </Container>
      </Navbar>
      <ChatContainer />
        {/* <Message /> */}
        {/* <div className="col p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b># general</b>
              </p>
              <span className="text-muted">0 сообщений</span>
            </div>
            <div id="messages-box" className="chat-messages overflow-auto px-5 ">
            </div>
            <div className="mt-auto px-5 py-3">
              <form noValidate="" className="py-1 border rounded-2">
                <div className="input-group has-validation">
                  <input name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2 form-control" value="" />
                  <button type="submit" disabled="" className="btn btn-group-vertical">
                    <span className="visually-hidden">Отправить</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
    </div>
  );
 };
  export default MainPage;