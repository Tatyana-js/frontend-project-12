import { Container, Row, Col, Nav } from 'react-bootstrap';
import AddChannelsButton from '../components/AddCannelsButton.jsx';
import Channel from '../components/Сhannels.jsx';
import MessageField from '../components/MessageField.jsx';

 const MainPage = () => {

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
     <Row className="h-100 bg-white flex-md-row">
      <Col sx={4} className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
        <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
          <b>Каналы</b>
          <AddChannelsButton />
        </div>
        <Nav as="ul" id="channels-box" className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
          <Channel />
        </Nav>
      </Col>
      <Col className="p-0 h-100">
        <MessageField />
      </Col>
     </Row>
    </Container>
  );
 };
  export default MainPage;