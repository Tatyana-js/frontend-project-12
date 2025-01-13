import { Nav, Button, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useGetChannelsQuery } from '../api/chatApi.js';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveTab, activeChannelSelector } from '../store/activeChannelSlice.js';

const Channels = () => {
  const { data: channels = [], error, isLoading, refetch } = useGetChannelsQuery();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelsRef = useRef(null);
  const activeChannel = useSelector(activeChannelSelector);
  // useEffect(() => {
  //   try {
  //     if (isLoading) {
  //       return (
  //         <Spinner animation="border" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </Spinner>
  //         );
  //       }
  //   } catch (error) {
  //     console.log(error.messege);
  //   }
  // }, []);

return (
  <Nav 
    as="ul" 
    id="channels-box" 
    className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    ref={channelsRef}
  >
    {isLoading && (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{t('loading')}</span>
      </Spinner>
          )}
    {channels.map((channel) => {
     return (
      <Nav.Item as="li" key={channel.id} className="w-100">
        <Button
          type="button" 
          className="w-100 rounded-0 text-start"
          variant={channel.id === activeChannel.id ? "secondary" : ""}
          onClick={() => dispatch(selectActiveTab(channel))}
        >
          <span className="me-1"># </span>
           {channel.name}
        </Button>
      </Nav.Item>
      );
    }
    )}
  </Nav>
  );
};

export default Channels;