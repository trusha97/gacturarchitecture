import React, { useState } from "react";
import "./ContactForm.css";
import { facebook, favgold, instagram, linkdin, twitter } from "../../utils/images";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccessMsg(
                `Hi, ${formData.firstName}. We got your e-mail. We'll reply you very soon. Thanks for being with us...`
            );
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            });
        }, 2000);
    };

    return (
        <div className="contact-form-main-div">
            <div className="contact-main-div-map">
                <div className="contact-map-inner-div">
                    <div className="contact-map-div">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.5147028501065!2d-122.06642772357529!3d37.40130756392534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb73f75fcb155%3A0x70d95300adf3bce!2sTyrella%20Ave%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sin!4v1755062404644!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0, filter: 'grayscale(100%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="contact-form-div">
                <div className="contact-main-div">
                    <div className="faq-section-text-main-div1">
                        <h6 className="subtitle1">
                            <img src={favgold} alt="faqgolden" /> Contact With Us
                        </h6>
                        <h2 className="title-faq-genral1">Join the Community to Know Us</h2>

                        {/* Form Section */}
                        <div className="contact-form-container">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name*"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name*"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address with '@'")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone No*"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>

                                <div>
                                    <button type="submit" className="submit-btn">
                                        Submit Now{" "}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="4" viewBox="0 0 31 4" fill="none">
                                                <path
                                                    d="M0.370117 1.75C0.232046 1.75 0.120117 1.86193 0.120117 2C0.120117 2.13807 0.232046 2.25 0.370117 2.25V1.75ZM30.5469 2.17678C30.6445 2.07915 30.6445 1.92085 30.5469 1.82322L28.9559 0.232233C28.8583 0.134602 28.7 0.134602 28.6024 0.232233C28.5047 0.329864 28.5047 0.488155 28.6024 0.585787L30.0166 2L28.6024 3.41421C28.5047 3.51184 28.5047 3.67014 28.6024 3.76777C28.7 3.8654 28.8583 3.8654 28.9559 3.76777L30.5469 2.17678ZM0.370117 2.25H30.3701V1.75H0.370117V2.25Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>

                            {/* Status Messages */}
                            {loading && <p style={{ color: "#C8C8C8", marginTop: "15px" }}>Sending message please wait...</p>}
                            {successMsg && <p style={{ color: "#C8C8C8", marginTop: "15px" }}>{successMsg}</p>}
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-header">CONTACT INFORMATION</div>

                        {/* Email */}
                        <div className="contact-section">
                            <h2 className="label">Email</h2>
                            <h2 className="value">gactur@arc.com</h2>
                        </div>

                        <hr />

                        {/* Phone */}
                        <div className="contact-section">
                            <h2 className="label">Call Us</h2>
                            <h2 className="value phone">+88(177)444-90-17</h2>
                        </div>

                        <hr />

                        {/* Address */}
                        <div className="contact-section">
                            <h2 className="label">Our Address</h2>
                            <h2 className="value">Brooklyn, New York</h2>
                        </div>

                        <hr />

                        {/* Social Icons */}
                        <div className="social-icon-inner1">
                            <div className="social-icon1">
                                <a className="icon-wrapper1" href="#">
                                    <img className="icon-img1" src={facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div className="social-icon1">
                                <a className="icon-wrapper1" href="#">
                                    <img className="icon-img1" src={instagram} alt="Instagram" />
                                </a>
                            </div>
                            <div className="social-icon1">
                                <a className="icon-wrapper1" href="#">
                                    <img className="icon-img1" src={twitter} alt="Twitter" />
                                </a>
                            </div>
                            <div className="social-icon1">
                                <a className="icon-wrapper1" href="#">
                                    <img className="icon-img1" src={linkdin} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
