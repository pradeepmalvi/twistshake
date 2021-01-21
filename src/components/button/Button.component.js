import React from "react";
import "./Button.styles.scss";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        typeof props.addBasketStatus === "undefined"
          ? "btn"
          : props.addBasketStatus
          ? "btn"
          : "disabled_btn"
      }
    >
      {props.children}
    </button>
  );
}
