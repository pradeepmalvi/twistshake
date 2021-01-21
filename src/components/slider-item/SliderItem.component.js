import React from "react";
import "./sliderItem.styles.scss";

export default function SliderItem({ bgImage, children }) {
  return (
    <div className="slider-item">
      <div className="container">
        <div
          className="bg-container"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        ></div>

        <div className="content">
          <h3 className="title">{children[0]}</h3>
          <div className="description">{children[1]}</div>
        </div>
      </div>
    </div>
  );
}
