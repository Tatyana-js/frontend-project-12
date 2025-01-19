import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useGetChannelsQuery } from '../api/chatApi.js';
import Channels from '../components/Сhannels.jsx';
import MessageField from '../components/MessageField.jsx';

const ButtonPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z">
    </path>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4">
    </path>
  </svg>
);

  const MainPage = () => {
    const { t } = useTranslation();
    const { isLoading: isChannelsLoading, error: channelsError } = useGetChannelsQuery();

    return (
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
       <Row className="h-100 bg-white flex-md-row">
        <Col sx={4} className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>{t('channels.title')}</b>
            <button type="button" className="p-0 text-primary btn btn-group-vertical">
              <ButtonPlus />
              <span className="visually-hidden">+</span>
            </button>
          </div>
          {isChannelsLoading && (      
            <Spinner animation="border" role="status">
              <span className="visually-hidden">{t('isChannelsLoading')}</span>
            </Spinner>)}
            {channelsError && (
              console.log(error.message)
            )}
          <Channels />
        </Col>
        <Col className="p-0 h-100">
          <MessageField />
        </Col>
       </Row>
      </Container>
    ); 
  };

  export default MainPage;