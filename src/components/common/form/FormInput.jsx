import React, { useState } from "react"; 
import './form.css';

const FormInput = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder = " ",
  error,
  required = false,
  autoComplete,
}) => {
  return (
    <div className={`input-field-container ${error ? "has-error" : ""}`}>
      <label htmlFor={id} className="minimal-label fonts-header">
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="minimal-text-input fonts-body"
        autoComplete={autoComplete}
      />

      {error && (
        <span className="input-error-message fonts-body" aria-live="assertive">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
