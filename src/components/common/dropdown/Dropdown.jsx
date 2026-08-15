import React, { useEffect, useRef } from "react";
import { CaretDown } from "../../icons/Icons"; 
import './dropdown.css';

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="custom-dropdown-wrapper fonts-header-sub"
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`dropdown-trigger-box ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="selected-option-text fonts-header-sub">
          {value?.title || placeholder}
        </span>

        <span className="dropdown-arrow-icon">
          <CaretDown />
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown-options-list" role="listbox">
          {options.map((option) => (
            <li
              key={option.title}
              role="option"
              aria-selected={value?.title === option.title}
              className={`dropdown-option-item ${
                value?.title === option.title ? "active" : ""
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
