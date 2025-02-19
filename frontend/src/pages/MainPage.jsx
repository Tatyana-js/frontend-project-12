import {
  Container, Row, Col, Spinner,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useGetChannelsQuery } from '../api/apiChannels.js';
import Channels from '../components/Сhannels.jsx';
import MessageBox from '../components/MessageBox.jsx';

const MainPage = () => {
  const { t } = useTranslation();
  const { isLoading: isChannelsLoading, error: channelsError } = useGetChannelsQuery();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isChannelsLoading && <Spinner animation="border" role="status" />}
      {channelsError && console.error(channelsError)}
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <Row className="h-100 bg-white flex-md-row">
          <Col sx={4} className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
            <Channels />
          </Col>
          <Col className="p-0 h-100">
            <MessageBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
