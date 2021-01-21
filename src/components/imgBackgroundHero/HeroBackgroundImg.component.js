import React from "react";
import "./hero-background-img.styles.scss";

export default function HeroBackgroundImg({ imgSrc }) {
  return (
    <div className="hero-img-bg">
      <div
        className="bg-container"
        style={{ backgroundImage: "url(" + imgSrc + ")" }}
      ></div>
    </div>
  );
}
