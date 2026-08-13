import React, { useState } from "react";
import "./action-form.css";
import "./action-form-fonts.css";

import { projectsData } from "../data/ProjectsData";
import Certificate from "./Certificate";
import Dropdown from "../dropdown/Dropdown";
import FormInput from "./FormInput";

const ActionForm = ({ setView, defaultRegion = "amazon" }) => {
  const [region, setRegion] = useState(defaultRegion);
  const [treeCount, setTreeCount] = useState(0);
  const [treeError, setTreeError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    certificate: true,
  });

  const [emailError, setEmailError] = useState("");

  const co2Savings = treeCount * 22;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") {
      setEmailError("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (treeCount === 0 || !treeCount) {
      setTreeError(true);
      document.getElementById("tree-quantity-input")?.focus();
      return;
    }

    if (!formData.email.includes("@") || !validateEmail(formData.email)) {
      setEmailError(
        "Please enter a valid corporate or personal email address.",
      );

      document.getElementById("guardian-email-input")?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  const dropdownOptions = Object.entries(projectsData).map(
    ([key, project]) => ({
      key,
      title: project.title,
    }),
  );

  const selectedRegion = {
    key: region,
    title: projectsData[region].title,
  };

  return (
    <div className="action-form-section">
      <div className="action-form-layout">
        <header className="action-form-header">
          <span className="action-tag fonts-header">
            EARTH RE-GREEN PROJECT
          </span>

          <button
            className="action-close-link fonts-body"
            onClick={() => setView("home")}
            aria-label="Return to main page">
            Return to Surface ↗
          </button>
        </header>

        <div className="action-form-area">
          <form onSubmit={handleSubmit} className="action-form" noValidate>

            <div className="action-field-block">
              <div className="action-label fonts-header">
                01 / CHOOSE YOUR ECOSYSTEM
              </div>

              <Dropdown
                options={dropdownOptions}
                value={selectedRegion}
                onChange={(option) => setRegion(option.key)}
                placeholder="Choose ecosystem"
              />
            </div>

            <div className="action-gallery">
              <div className="action-header-area">
                <span className="action-subtitle fonts-header">
                  {projectsData[region].subtitle}
                </span>

                <p className="action-fact fonts-body">
                  {projectsData[region].fact}
                </p>
              </div>

              <div className="action-card">
                <div className="action-img-wrapper">
                  <img
                    src={projectsData[region].imgUrl}
                    alt={`${projectsData[region].title} panoramic landscape view`}
                    className="action-main-img"
                  />
                </div>
              </div>
            </div>

            <div className="action-right-content">

              <div className="action-scale-area">
                <div className="action-field-block">
                  <label
                    htmlFor="tree-quantity-input"
                    className="action-label fonts-header">
                    02 / Scale your Impact
                  </label>

                  <p className="action-fact fonts-body">
                    Enter the exact volume of future you wish to secure today.
                  </p>
                </div>

                <div className="action-scale">
                  <div className="action-scale-numeric-container">
                    <input
                      id="tree-quantity-input"
                      type="number"
                      min="1"
                      max="100000"
                      value={treeCount === 0 ? "" : treeCount}
                      onChange={(e) => {
                        const val = Number(e.target.value);

                        if (val > 100000) return;

                        setTreeError(false);
                        setTreeCount(val < 0 ? 1 : val);
                      }}
                      className="action-scale-numeric-input fonts-header"
                      placeholder="0"
                      aria-live="polite"
                    />

                    <span className="action-scale-numeric-input-unit fonts-body">
                      Quota
                    </span>
                  </div>

                  <div className="action-scale-max-hint fonts-body">
                    <p>You can allocate up to 100,000 units today</p>
                  </div>

                  <div
                    className="action-scale-live-manifesto fonts-body"
                    aria-live="polite">
                    {treeCount > 0 ? (
                      <p>
                        This commitment will deploy{" "}
                        <strong className="manifesto-highlight">
                          {treeCount}
                        </strong>{" "}
                        native lives to the soil, commanding an annual reduction
                        of{" "}
                        <strong className="manifesto-highlight">
                          -{co2Savings}kg
                        </strong>{" "}
                        in carbon dioxide emissions and securing an estimated
                        investment value of{" "}
                        <strong className="manifesto-highlight">
                          ${treeCount * 10} USD
                        </strong>{" "}
                        directly into local ecosystem guardiance.
                      </p>
                    ) : (
                      <p
                        className={`manifesto-placeholder fonts-body ${
                          treeError ? "has-tree-error" : ""
                        }`}>
                        {treeError
                          ? "Action required: Allocation quantity cannot be zero. Please specify a value."
                          : "Please specify a quantity to measure your ecological signature."}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-step-wrapper">
                <div className="action-field-block">
                  <label
                    htmlFor="guardian-name-input"
                    className="action-label fonts-header">
                    03 / Personel Details
                  </label>

                  <p className="action-fact fonts-body">
                    Complete your dedication to receive your digital
                    certificate.
                  </p>
                </div>

                <div className="inputs-group">
                  <FormInput
                    id="guardian-name-input"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                  />

                  <FormInput
                    id="guardian-email-input"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={emailError}
                    required
                    autoComplete="email"
                  />

                  <label
                    htmlFor="certificate-checkbox"
                    className="checkbox-container">
                    <input
                      id="certificate-checkbox"
                      type="checkbox"
                      name="certificate"
                      checked={formData.certificate}
                      onChange={handleInputChange}
                    />

                    <span className="custom-checkmark"></span>

                    <p className="action-fact fonts-body">
                      I want to receive my official planting certificate via
                      email
                    </p>
                  </label>
                </div>
              </div>
            </div>

            <div className="action-btn">
              <button
                type="submit"
                className="action-btn-submit fonts-body"
                aria-label="Confirm planting and deploy roots">
                <span>Authorize Planting Order</span>
              </button>
            </div>
          </form>
        </div>

        {isSubmitted && (
          <Certificate
            formData={formData}
            treeCount={treeCount}
            region={region}
            co2Savings={co2Savings}
            projectsData={projectsData}
            onClose={() => {
              setIsSubmitted(false);
              setView("home");
            }}
            certificateId={`GRN-${Math.floor(100000 + Math.random() * 900000)}`}
          />
        )}
      </div>
    </div>
  );
};

export default ActionForm;
