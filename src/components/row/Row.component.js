import React from "react";
import "./row.styles.scss";

export default function Row({ title, children }) {
  return (
    <div className="row">
      {title ? (
        <div className="title">
          <h2>{title}</h2>
        </div>
      ) : null}

      <div className="items">{children}</div>
    </div>
  );
}
