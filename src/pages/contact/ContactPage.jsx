import React, { useState } from "react";
import "./contact.css";

import ContactForm from "../../components/common/contact-form/ContactForm";
import Dropdown from "../../components/common/dropdown/Dropdown";
import { contactReasons } from "../../components/common/data/DropdownData";
import { Map } from "../../components/impact/Map";
import Reinforce from "../../components/reinforce/Reinforce";

const ContactPage = ({ setView }) => {
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-text-block">
          <h1 className="hero-title fonts-header">
            Let's Grow Something That Lasts
          </h1>

          <p className="hero-subtitle fonts-body">
            Have a question, want to collaborate, or simply want to learn more
            about our restoration work? We're here to listen.
          </p>
        </div>

        <div className="contact-why">
          <div className="contact-why-question">What brings you here?</div>

          <Dropdown
            options={contactReasons}
            value={selectedReason}
            onChange={setSelectedReason}
            placeholder="Reason for Contact"
          />

          <p className="contact-reason-description fonts-body">
            {selectedReason?.description ||
              "Choose a reason that best describes what you’d like to talk to us about, and we’ll make sure your message reaches the right place."}
          </p>
        </div>
      </div>

      <ContactForm
        onClose={() => {
          setView("home");
        }}
      />

      <Map />

      <Reinforce />
    </div>
  );
};

export default ContactPage;
