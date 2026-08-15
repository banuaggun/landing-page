import React, { useState } from "react";
import FormInput from "../form/FormInput";
import FormMessage from "../form/FormMessage";
import "./contact-form.css"; 

const ContactForm = ({ setView, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setEmailError("");
    }

    if (name === "message") {
      setMessageError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setEmailError("Please enter your email address.");

      document.getElementById("contact-email")?.focus();
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError(
        "Please enter a valid corporate or personal email address.",
      );

      document.getElementById("contact-email")?.focus();
      return;
    }

    if (!formData.message.trim()) {
      setMessageError("Please enter a message.");

      document.getElementById("contact-message")?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  const handleBackHome = () => {
    setIsSubmitted(false);

    if (onBackHome) {
      onBackHome();
    }
  };

  return (
    <>
      <form className="contact-form inputs-group" onSubmit={handleSubmit} noValidate>
        <FormInput
          id="contact-name"
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <FormInput
          id="contact-email"
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={emailError}
          required
        />

        <FormMessage
          id="contact-message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us how we can help..."
          error={messageError}
          required
        /> 

        <div className="contact-btn">
          <button
                type="submit"
                className="contact-btn-submit fonts-body"
                aria-label="Confirm planting and deploy roots">
                <span>Send Message</span>
              </button>
        </div>
      </form>

      {isSubmitted && (
        <div
          className="contact-success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"> 

          <div className="contact-success-modal">

            <div className="contact-success-content">
              <span className="contact-success-label fonts-header">
                MESSAGE RECEIVED
              </span>

              <h2
                id="contact-success-title"
                className="contact-success-title fonts-header-sub">
                Your request has been completed.
              </h2>

              <p className="contact-success-text fonts-body">
                Thank you for reaching out. Your message has been successfully received. We will get back to you as soon as possible.
              </p>

              <button
                aria-label="Return to main page"
                className="contact-success-home contact-close-link fonts-body"
                onClick={onClose}>
                Return to Surface ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
