import { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Modal, FormGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { channelSchema } from '../utils/validate.js';
import { useAddChannelMutation, useGetChannelsQuery } from '../api/apiChannels.js';
import { selectActiveTab } from '../slices/activeChannelSlice.js';

const AddChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [addChannel] = useAddChannelMutation();
  const { data: channels = [] } = useGetChannelsQuery();
  const formControlEl = useRef(null);

  const channelsName = channels.map((channel) => channel.name);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: channelSchema(t, channelsName),

    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await addChannel({ name: values.name });
        dispatch(selectActiveTab(response.data));
        toast.success(t('channels.create'));
        onHide();
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    formControlEl.current.focus();
  }, []);

  return (
    <Modal show="true" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h4">{t('modal.addButton')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              name="name"
              className="mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              ref={formControlEl}
              isInvalid={formik.errors.name}
            />
            <Form.Label className="visually-hidden" htmlFor="channelName">{t('modal.name')}</Form.Label>
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

export default AddChannel;
