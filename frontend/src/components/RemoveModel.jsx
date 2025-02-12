import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useRemoveChannelMutation } from '../api/chatApi';

const RemoveChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const [removeChannel] = useRemoveChannelMutation();
  const channel = useSelector((state) => state.modals.channel);

  const handleRemove = async (id) => {
    try {
      await removeChannel(id);
      toast.success(t('channels.delete'));
      onHide();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal Modal show="true" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h4">{t('modal.removeChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('modal.removeText')}</p>
        <div className="d-flex justify-content-end">
          <Button type="button" className="me-2" variant="secondary" onClick={onHide}>{t('modal.cancel')}</Button>
          <Button type="submit" variant="danger" onClick={() => handleRemove(channel.id)}>{t('modal.removeButton')}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
