import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import './Contact.css'

export default function Contact() {
  // Your EmailJS service, template, and user IDs
  const SERVICE_ID = 'service_w1k9dbv';
  const TEMPLATE_ID = 'template_8919lfp';
  const USER_ID = 'pIudS756R9EQNHk3d'; // Or public key depending on your EmailJS setup

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm, setSubmitting, setStatus }) => {
      setStatus(null);
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
        .then(() => {
          setStatus({ success: 'Message sent successfully!' });
          resetForm();
          setSubmitting(false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          setStatus({ error: 'Failed to send message. Please try again later.' });
          setSubmitting(false);
        });
    },
  });

  return (
    <AnimatedPage>
        <section className="container py-5">
          <h2 className="mb-4 border-start border-warning border-4 ps-3" >Contact Me</h2>
          <form  className=' m-auto' onSubmit={formik.handleSubmit} noValidate>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={`form-control ${
                  formik.touched.subject && formik.errors.subject ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('subject')}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="invalid-feedback">{formik.errors.subject}</div>
              ) : null}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`form-control ${
                  formik.touched.message && formik.errors.message ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('message')}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="invalid-feedback">{formik.errors.message}</div>
              ) : null}
            </div>

            {/* Status Message */}
            {formik.status && formik.status.success && (
              <div className="alert alert-success">{formik.status.success}</div>
            )}
            {formik.status && formik.status.error && (
              <div className="alert alert-danger">{formik.status.error}</div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-warning" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
    </AnimatedPage>
  );
}

