import { Container, Row, Col, Nav } from 'react-bootstrap';
import MessageForm from './MessageForm.jsx';

const MessageField = () => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b># general</b>
        </p>
        <span className="text-muted">1 сообщение</span>
      </div>
      <div id="messages-box" className="chat-messages overflow-auto px-5 ">{}</div>
      <MessageForm />
    </div>
  );
};

export default MessageField;