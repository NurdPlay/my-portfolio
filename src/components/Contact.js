import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Contact() {
  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here (e.g., send data to a server).
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;