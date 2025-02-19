import { useRef, useEffect } from 'react';
import {
  Modal, FormGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRenameChannelMutation, useGetChannelsQuery } from '../api/apiChannels.js';
import { channelSchema } from '../utils/validate.js';

const RenameChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const formEl = useRef();
  const channelName = useSelector((state) => state.modals.channel.name);
  const channelId = useSelector((state) => state.modals.channel.id);
  const { data: channels = [] } = useGetChannelsQuery();
  const [renameChannel] = useRenameChannelMutation();

  const channelsName = channels.map((channel) => channel.name);

  const formik = useFormik({
    initialValues: {
      name: channelName,
    },
    validationSchema: channelSchema(t, channelsName),

    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await renameChannel({ name: values.name, id: channelId });
        toast.success(t('channels.rename'));
        onHide();
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    formEl.current.focus();
    formEl.current.select();
  }, []);

  return (
    <Modal show="true" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h4">{t('modal.renameChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup controlId="name">
            <FormControl
              name="name"
              className="mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              ref={formEl}
              isInvalid={formik.errors.name}
            />
            <Form.Label className="visually-hidden" htmlFor="name">{t('modal.name')}</Form.Label>
            {formik.errors.name
              && <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>}
            <div className="d-flex justify-content-end">
              <Button type="button" className="me-2" variant="secondary" onClick={onHide}>{t('modal.cancel')}</Button>
              <Button type="submit" variant="primary">{t('modal.send')}</Button>
            </div>
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannel;
