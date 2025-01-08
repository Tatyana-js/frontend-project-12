import { Nav, Button } from 'react-bootstrap';
import { useGetChannelsQuery } from '../api/chatApi.js';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveTab, activeChannelSelector } from '../store/activeChannelSlice.js';

const Channels = () => {
  const { data, error, isLoading, refetch } = useGetChannelsQuery();
  const dispatch = useDispatch();
  const channels = data;
  const channelsRef = useRef(null);
  const activeChannel = useSelector(activeChannelSelector);
  useEffect(() => {
    try {
      if (isLoading) {

      }
    } catch (err) {
      console.log(err);
    }
  }, []);

return (
  <Nav 
    as="ul" 
    id="channels-box" 
    className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    ref={channelsRef}
  >
    {channels?.map((channel) => {
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