import { Nav, Button, Dropdown } from 'react-bootstrap';
import { useGetChannelsQuery } from '../api/chatApi.js';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectActiveTab, activeChannelSelector } from '../slices/activeChannelSlice.js';
import ButtonPlus from './ChannelAddButtom.jsx.jsx';
import AddChannel from './AddModal.jsx';
import RemoveChannel from './RemoveModel.jsx';
import { closeModal, openModal } from '../slices/modalsSlice';

const Channels = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelsRef = useRef(null);
  
  const { data: channels = [] } = useGetChannelsQuery();
  const activeChannel = useSelector(activeChannelSelector);
  const modals = useSelector((state) => state.modals);

  const variant = (channel) => channel.id === activeChannel.id ? "secondary" : "";
  const hideModal = () =>  dispatch(closeModal());
  const showModal = (type, channel) => {
        dispatch(openModal({ type, channel }));
      };

return (
  <>
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>{t('channels.title')}</b>
      <ButtonPlus showModal={showModal} channel={activeChannel}/>
        {modals.type === 'adding' && (<AddChannel onHide={hideModal} />)}
    </div>
    <Nav 
      as="ul" 
      id="channels-box" 
      className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
      ref={channelsRef}
    >
      {channels.map((channel) => {
      return (
          <Nav.Item as="li" key={channel.id} className="w-100">
            {!channel.removable && (<Button
              type="button" 
              className="w-100 rounded-0 text-start"
              variant={variant(channel)}
              onClick={() => dispatch(selectActiveTab(channel))}
            >
              <span className="me-1"># </span>
              {channel.name}
            </Button>)}
            {channel.removable && (
              <Dropdown role="group" className='d-flex btn-group'>
                <Button className='w-100 rounded-0 text-start text-truncate' variant={variant(channel)} onClick={() => dispatch(selectActiveTab(channel))}>
                  <span className="me-1"># </span>
                  {channel.name}  
                </Button>
                <Dropdown.Toggle className="flex-grow-0 dropdown-toggle-split" variant={variant(channel)}>
                  <span className="visually-hidden">{t('channels.setupChannel')}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item role="button" onClick={() => showModal('removing', activeChannel)}>{t('channels.dropdownButtonRemove')}</Dropdown.Item>
                  <Dropdown.Item role="button">{t('channels.dropdownButtonRename')}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>)}
          </Nav.Item> 
          );
        }
        )}
        {modals.type === 'removing' && (<RemoveChannel onHide={hideModal} />)} 
    </Nav>
  </>
  );
};

export default Channels;