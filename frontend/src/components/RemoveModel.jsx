import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRemoveChannelMutation } from '../api/chatApi';
import { useSelector } from 'react-redux';

const RemoveChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const [ removeChannel ] = useRemoveChannelMutation();
  const channel = useSelector((state) => state.modals.channel);
  console.log(channel)
  
  const handleRemove = async (id) => {
    try {
      await removeChannel(id);
      onHide();
    } catch (err) {
      console.log(err);
    }
  };

return (
  <>
  <div className='fade modal-backdrop show'></div>
  <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1"style={{ display: 'block'}}>
    <Modal.Dialog  className="modal-dialog-centered">
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title className="h4">{t('modal.removeChannel')}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <p className='lead'>{t('modal.removeText')}</p>
              <div className='d-flex justify-content-end'>
                <Button type="button" className='me-2' variant="secondary" onClick={onHide}>{t('modal.cancel')}</Button> 
                <Button type="submit" variant="danger" onClick={() => handleRemove(channel.id)}>{t('modal.removeButton')}</Button> 
              </div>
        </Modal.Body>
    </Modal.Dialog>
  </div>
  </>

  );
};

export default RemoveChannel;