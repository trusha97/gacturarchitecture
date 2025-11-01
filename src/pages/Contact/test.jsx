import React from 'react'
import "./ContactForm.css"
import { favgold } from '../../utils/images'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be digits only")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
    return (
        <div className='contact-form-main-div'>
            <div className='contact-form-div'>
                <div className='contact-form-heading'>
                    <div className="faq-section-text-main-div1">
                        <h6 className="subtitle1">
                            <img src={favgold} alt="faqgolden" /> Contact With Us
                        </h6>
                        <h2 className="title-faq-genral1">Join the Community to Know Us</h2>
                    </div>
                </div>
                <div className="contact-form-container">
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            message: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form Submitted", values);
                            alert("Form submitted successfully!");
                            resetForm();
                        }}
                    >
                        {() => (
                            <Form className="contact-form" noValidate>
                                <div className="form-row">
                                    <div className="form-field">
                                        <Field type="text" name="firstName" placeholder="First Name*" />
                                        <ErrorMessage name="firstName" component="div" className="error" />
                                    </div>

                                    <div className="form-field">
                                        <Field type="text" name="lastName" placeholder="Last Name*" />
                                        <ErrorMessage name="lastName" component="div" className="error" />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <Field type="email" name="email" placeholder="Email" />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </div>

                                <div className="form-field">
                                    <Field type="tel" name="phone" placeholder="Phone No*" />
                                    <ErrorMessage name="phone" component="div" className="error" />
                                </div>

                                <div className="form-field">
                                    <Field as="textarea" name="message" placeholder="Your Message" />
                                    <ErrorMessage name="message" component="div" className="error" />
                                </div>

                                <div className='contact-submit-btn-div'>
                                    <button type="submit" className="submit-btn">
                                        Submit Now <span>→</span>
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactForm



.contact-form-main-div {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
}




.faq-section-text-main-div1 .subtitle1,
.faq-section-text-main-div1 .title-faq-genral1 {
  display: block;
  position: relative;
  opacity: 0;
  transform-origin: 50% 0%;
  transform: translate3d(0px, 49.2404px, -41.3176px) rotateX(-80deg);
  animation: faq3DEnter 1.2s ease-out forwards; 
}

.faq-section-text-main-div1 .title-faq-genral1 {
  animation-delay: 0s;
}
.subtitle1 {
  font-family: "Jost", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3em;
  color: #bc9b73;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding-bottom: 10px;
}
.title-faq-genral1 {
  font-family: "Jost", Sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 1.3em;
  color: #ffffff;
  padding-bottom: 30px;
  margin: 0;
  max-width: 470px;
}


.contact-form-container {
  background-color: #0e0e0e;
  /* padding: 40px; */
  /* display: flex; */
  /* justify-content: center; */
}

.contact-form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-row {
  display: flex;
  gap: 45px;
}

.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
}

input,
textarea {
  background-color: #111;
  border: 1px solid #222;
  color: #fff;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
  width: 100%;
  border-radius: 4px;
}

input::placeholder,
textarea::placeholder {
  color: #ccc;
}

textarea {
  min-height: 150px;
  resize: none;
}

.error {
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 3px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #c9a574;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.submit-btn span {
  transition: transform 0.3s ease;
}

.submit-btn:hover span {
  transform: translateX(5px);
}

.submit-btn:hover {
  background-color: #b28d5f;
}





