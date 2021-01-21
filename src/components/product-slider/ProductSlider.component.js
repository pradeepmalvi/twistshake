import React from "react";
import "./product-slider.styles.scss";
import ReactHtmlParser from "react-html-parser";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderItem from "../slider-item/SliderItem.component";

export default function ProductSlider({ data }) {
  return (
    data.length !== 0 && (
      <div className="jumbo-slider">
        <h2 className="slider-title">Smart function and modern design</h2>
        <OwlCarousel
          className="owl-theme-1"
          loop
          margin={10}
          items={1}
          dots={false}
          nav={true}
        >
          {data.map((eachSet, index) => (
            <div className="item" key={index}>
              <SliderItem bgImage={eachSet.image}>
                <span>{eachSet.title}</span>
                <span>{ReactHtmlParser(eachSet.descript)}</span>
              </SliderItem>
            </div>
          ))}
        </OwlCarousel>
      </div>
    )
  );
}
