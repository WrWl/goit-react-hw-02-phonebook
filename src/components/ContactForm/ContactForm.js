import { Component } from 'react';
import { Form } from './ContactForm.styled';

import AddContact from './AddContact';
import { Formik } from 'formik';
import { schema } from 'validationSchema';
import FormField from './FormField';

const initialValues = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <FormField label="Name" type="text" name="name" />
          <FormField label="Number" type="tel" name="number" />
          <AddContact children="Add contact" />
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
