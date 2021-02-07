import React from "react";
import "./imageBackground.styles.scss";

export default function ImageBackground({ imgSrc, title = "", content }) {
  return (
    <div className="image-background">
      <div
        className="bg-img"
        style={{ backgroundImage: "url(" + imgSrc + ")" }}
      >
        <div className="text-content">
          <h2 className={"title"}>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
