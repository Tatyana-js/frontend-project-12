import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useGetChannelsQuery } from '../api/chatApi.js';
import Channels from '../components/Сhannels.jsx';
import ButtonPlus from '../components/ChannelAddButtom.jsx.jsx';
import MessageField from '../components/MessageField.jsx';
import { openModal } from '../slices/modalsSlice';


  const MainPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isLoading: isChannelsLoading, error: channelsError } = useGetChannelsQuery();
    const showModal = () => {
      dispatch(openModal({ type: 'addChannel'}));
    };

    return (
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
       <Row className="h-100 bg-white flex-md-row">
        <Col sx={4} className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>{t('channels.title')}</b>
            <ButtonPlus showModal={showModal} />
          </div>
          {isChannelsLoading && (      
            <Spinner animation="border" role="status">
              <span className="visually-hidden">{t('isChannelsLoading')}</span>
            </Spinner>
          )}
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