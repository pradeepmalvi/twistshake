import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button.component";
import "./hero-background.styles.scss";

export default function HeroBackground({
  src,
  type = "",
  videoBtnLink,
  homeBgContent,
  heroBgTitle,
  heroBgContentColor,
  heroBgTitleColor,
  btnColor,
  btnTextColor,
}) {
  console.log(heroBgTitleColor);
  return (
    <div className="hero-img-bg">
      {type.toLowerCase() === "image" ? (
        <div
          className="bg-container"
          style={{ backgroundImage: "url(" + src + ")" }}
        >
          <div className="text-content">
            <h2 className={"title"} style={{ color: heroBgTitleColor }}>
              {heroBgTitle}
            </h2>
            <p style={{ color: heroBgContentColor }}>{homeBgContent}</p>
          </div>
        </div>
      ) : (
        <div className="videobg-container">
          <video autoPlay="autoplay" loop="loop" muted className="bgVideo">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h3 className="mini-heading" style={{ color: heroBgTitleColor }}>
              {heroBgTitle}
            </h3>
            <h1 className="heading" style={{ color: heroBgContentColor }}>
              {homeBgContent}
            </h1>
            <Link to={videoBtnLink}>
              <button
                className="btn"
                style={{ backgroundColor: btnColor, color: btnTextColor }}
              >
                <span>Buy Now</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
