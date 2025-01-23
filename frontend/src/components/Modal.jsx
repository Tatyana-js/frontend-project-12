import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Component = ({ onHide, show }) => {
  const modals = useSelector((state) => state.modals);
  const formControlEl = useRef(null);
  const formik = useFormik({
    initialValues: {
      taskName: '',
    },
    onSubmit: (values) => {
      modals.type = 'addChannel';
      modals.channel = values.taskName;
      console.log(modals);
      formik.resetForm();
    }
  });

  useEffect(() => {
    if (formControlEl.current) {
      formControlEl.current.focus();
    }
  }, []);

return (
    <Modal.Dialog  show dialogClassName="modal-dialog-centered">
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title className="h4">Add</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
            <FormControl
              data-testid="input-body" 
              name="taskName" 
              required 
              value={formik.values.taskName}
              onChange={formik.handleChange}
              ref={formControlEl}
            />
            </FormGroup>
            <Button
              as="input"
              variant="primary" 
              type="submit" 
              value="submit" 
            />
          </Form>
        </Modal.Body>
    </Modal.Dialog>
  );
};

export default Component;