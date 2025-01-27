import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAddChannelMutation } from '../api/chatApi';
import { selectActiveTab } from '../slices/activeChannelSlice.js';

const AddChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [ addChannel ] = useAddChannelMutation();
  const modals = useSelector((state) => state.modals);
  const formControlEl = useRef(null);
  
  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await addChannel({name: values.channelName});
        dispatch(selectActiveTab(response.data));
        onHide();
        console.log(modals);
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    }
  });

  useEffect(() => {
    formControlEl.current.focus();
  }, []);

return (
  <>
  <div className='fade modal-backdrop show'></div>
  <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1"style={{ display: 'block'}}>
    <Modal.Dialog  className="modal-dialog-centered">
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title className="h4">{t('modal.addButton')}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl
                name="channelName"
                className='mb-2' 
                value={formik.values.channelName}
                onChange={formik.handleChange}
                ref={formControlEl}
              />
              <Form.Label className='visually-hidden' htmlFor='channelName'>{t('modal.name')}</Form.Label>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              <div className='d-flex justify-content-end'>
                <Button type="button" className='me-2' variant="secondary" onClick={onHide}>{t('modal.cancel')}</Button> 
                <Button type="submit" variant="primary">{t('modal.send')}</Button> 
              </div>
            </FormGroup>
          </Form>
        </Modal.Body>
    </Modal.Dialog>
  </div>
  </>

  );
};

export default AddChannel;