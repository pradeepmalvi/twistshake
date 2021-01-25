import React from "react";
import "./formInput.styles.scss";

export default function FormInput({
  type,
  placeholder,
  handleChange,
  min,
  ...otherInputProps
}) {
  return (
    <div className="form-input">
      <input
        type={type}
        min={min}
        placeholder={placeholder}
        onChange={handleChange}
        {...otherInputProps}
      />
    </div>
  );
}
