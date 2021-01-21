import React from "react";
import "./text-group.styles.scss";

export default function TextGroup({ children }) {
  return (
    <div className="text-group">
      <div className="content">
        <h3 className="text-group-title">{children[0]}</h3>
        <div className="text-group-description">{children[1]}</div>
      </div>
    </div>
  );
}
