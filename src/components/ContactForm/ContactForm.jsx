import s from '../ContactForm/ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ handleSubmit, initialValues }) => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Number must contain only digits.')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label>
          <span>Name</span>
          <Field name="name" className={s.items} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label>
          <span>Number</span>
          <Field name="number" className={s.items} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit" className={s.btn}>Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;