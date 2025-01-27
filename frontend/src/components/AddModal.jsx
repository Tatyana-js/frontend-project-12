import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { channelSchema } from '../utils/validate.js';
import { useAddChannelMutation } from '../api/chatApi';
import { selectActiveTab } from '../slices/activeChannelSlice.js';

const AddChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [ addChannel ] = useAddChannelMutation();
  const formControlEl = useRef(null);
  
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: channelSchema(t),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await addChannel({name: values.name});
        dispatch(selectActiveTab(response.data));
        onHide();
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    }
  });

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
                name="name"
                className='mb-2' 
                value={formik.values.name}
                onChange={formik.handleChange}
                ref={formControlEl}
                isInvalid={formik.errors.name}
                autoFocus
              />
              <Form.Label className='visually-hidden' htmlFor='channelName'>{t('modal.name')}</Form.Label>
              {formik.errors.name && 
               <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback> 
              }
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