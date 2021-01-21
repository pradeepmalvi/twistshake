import React from "react";
import "./formInput.styles.scss";

export default function FormInput({
  type,
  placeholder,
  handleChange,
  ...otherInputProps
}) {
  return (
    <div className="form-input">
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...otherInputProps}
      />
    </div>
  );
}
