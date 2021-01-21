import React from "react";
import "./selectOption.styles.scss";

export default function SelectOption({ name, options = [], ...otherProps }) {
  return (
    <div className="select-option">
      <select name={`${name}`} {...otherProps}>
        {options.map((option, index) => {
          var optionValue = option.split(" ").join("-");
          return (
            <option key={index} value={optionValue}>
              {" "}
              {option}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}
