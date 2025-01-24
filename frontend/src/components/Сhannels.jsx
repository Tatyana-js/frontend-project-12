import { Nav, Button } from 'react-bootstrap';
import { useGetChannelsQuery } from '../api/chatApi.js';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveTab, activeChannelSelector } from '../slices/activeChannelSlice.js';
import { openModal, closeModal } from '../slices/modalsSlice';
import Component from './Modal';

const Channels = () => {
  const dispatch = useDispatch();
  const channelsRef = useRef(null);

  const { data: channels = [], refetch } = useGetChannelsQuery();
  const activeChannel = useSelector(activeChannelSelector);
    const modals = useSelector((state) => state.modals);

    const hideModal = () =>  dispatch(closeModal());
  
    // const showModal = () => {
    //   dispatch(openModal({ type: 'addChannel'}));
    // };

return (
  <Nav 
    as="ul" 
    id="channels-box" 
    className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    ref={channelsRef}
  >
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
           {modals.type === 'addChannel' && (<Component onHide={hideModal}/>)} 
        </Button>
      </Nav.Item>
      );
    }
    )}
  </Nav>
  );
};

export default Channels;