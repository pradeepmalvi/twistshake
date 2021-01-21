import React from "react";
import "./rectangleBadge.styles.scss";

export default function RectangleBadge(props) {
  return <div className="rectangle-badge">{props.children}</div>;
}
