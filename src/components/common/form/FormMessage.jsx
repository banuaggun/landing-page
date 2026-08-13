const FormMessage = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder = " ",
  error,
  required = false,
}) => {
  return (
    <div className={`input-field-container ${error ? "has-error" : ""}`}>
      <label
        htmlFor={id}
        className="minimal-label fonts-header"
      >
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="minimal-text-input fonts-body"
        rows="6"
      />

      {error && (
        <span
          className="input-error-message fonts-body"
          aria-live="assertive"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default FormMessage;
