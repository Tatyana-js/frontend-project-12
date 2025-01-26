import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useFormik } from 'formik';

const MessageForm = ({ activeChannelId, username, addMessage }) => {
  const { t } = useTranslation();
  const formControlEl = useRef(null);
  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: async (values, { setFieldValue }) => {
      try {
        const newMessege = { body: values.body, channelId: activeChannelId, username };
        await addMessage(newMessege);
        setFieldValue('body', newMessege.body);
        formik.resetForm();
      } catch (error) {
          console.log(error);
      }
    },
  });
  return (
    <div className="mt-auto px-5 py-3">
      <Form  className="py-1 border rounded-2" onSubmit={formik.handleSubmit} noValidate>
        <Form.Group className="input-group has-validation" >
          <Form.Control 
            type="text"
            name="body"
            required
            aria-label={t('formMesseges.input')}
            placeholder={t('formMesseges.placeholder')} 
            className="border-0 p-0 ps-2" 
            value={formik.values.body}
            ref={formControlEl}
            onChange={formik.handleChange}
          />
            <Button 
              type="submit" 
              disabled={!formik.values.body} 
              className="btn-group-vertical"
              variant="light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
              <span className="visually-hidden">{t('formMesseges.button')}</span>  
            </Button>
              
        </Form.Group>
      </Form>
    </div>
  );
};
export default MessageForm;
  