import React from "react";
import "./product-slider.styles.scss";
import ReactHtmlParser from "react-html-parser";

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderItem from "../slider-item/SliderItem.component";

var settings = {
  arrows: true,
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ProductSlider({ data }) {
  return (
    data.length !== 0 && (
      <div className="jumbo-slider">
        <h2 className="slider-title">Smart function and modern design</h2>
        <Slider {...settings}>
          {data.map((eachSet, index) => (
            <div className="item" key={index}>
              <SliderItem bgImage={eachSet.image}>
                <span>{eachSet.title}</span>
                <span>{ReactHtmlParser(eachSet.descript)}</span>
              </SliderItem>
            </div>
          ))}
        </Slider>
      </div>
    )
  );
}
