import React from "react";
import "./full-width-img.styles.scss";

import { GoPlusSmall } from "react-icons/go";
import RoundBadge from "../round-badge/RoundBadge.component";

export default function FullWidthCard(props) {
  return (
    <div className="full-width-card">
      <div className="top">
        <div className="info-left">
          <div className="discount">
            <RoundBadge> 50% </RoundBadge>
          </div>
          <div className="color-types">
            <img
              src="https://products.twistshake.com/attributes/black_8434.jpg?w=12&h=12&auto=format"
              alt="img"
            />
            <img
              src="https://products.twistshake.com/attributes/blacknwhite_7161.jpg?w=12&h=12&auto=format"
              alt="img"
            />
            <img
              src="https://products.twistshake.com/attributes/pink_3861.jpg?w=12&h=12&auto=format"
              alt="img"
            />
            <span className="plus-icon">
              <GoPlusSmall />
            </span>
          </div>
        </div>
        <div className="img">
          <img src={props.img} alt="product-img" />
        </div>
      </div>
      <div className="description">
        <div className="name">Complete Meal Set</div>
        <div className="customization">
          8 fl oz / 0 mth+ / Nutrition Education
        </div>
        <div className="price">
          <span className="previous">1310 SEK</span>
          <span className="latest">655 SEK</span>
        </div>
        <p></p>
      </div>
    </div>
  );
}
