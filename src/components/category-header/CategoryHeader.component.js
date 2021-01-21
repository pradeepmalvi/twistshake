import React from "react";
import "./category-header.styles.scss";

export default function CategoryHeader({
  backgroundImage,
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="category-header"
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
    >
      <div className="content">
        <div className="heading">{title}</div>
        <div className="subheading">{subtitle}</div>
        {/* category link button */}
        {children}
      </div>
    </div>
  );
}
