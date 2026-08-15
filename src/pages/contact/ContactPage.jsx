import React, { useState } from "react";
import "./contact.css";
import "./contact-fonts.css";

import ContactForm from "../../components/common/contact-form/ContactForm";
import Dropdown from "../../components/common/dropdown/Dropdown";
import { contactReasons } from "../../components/common/data/DropdownData";
import Reinforce from "../../components/reinforce/Reinforce";

const ContactPage = ({ setView }) => {
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <div className="contact-page-section">
      <div className="contact-page-layout">
        <div className="contact-page-content">
          <header className="contact-text-block action-form header">
            <span className="contact-header fonts-header">
              Let’s Build a Greener Future
            </span>

            <p className="contact-subtitle fonts-body">
              Have a question, want to collaborate, or simply want to learn more
              about our restoration work? We're here to listen.
            </p>
          </header>
        </div>

        <div className="contact-container">
          <div className="contact-field-block">
            <div className="contact-question fonts-header">
              What can we help you with?
            </div>

            <Dropdown
              options={contactReasons}
              value={selectedReason}
              onChange={setSelectedReason}
              placeholder="Select a Reason"
            />

            <p className="contact-text fonts-body">
              {selectedReason?.description ||
                "Choose a reason that best describes what you'd like to talk to us about."}
            </p>
          </div>

          <div className="contact-page-form">
            <ContactForm
              onClose={() => {
                setView("home");
              }}
            />
          </div>
        </div>
      </div>

      <Reinforce setView={setView} />
    </div>
  );
};

export default ContactPage;
