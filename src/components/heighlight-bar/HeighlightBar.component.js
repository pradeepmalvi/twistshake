import React, { useState, useEffect } from "react";
import "./heighlight-bar.styles.scss";
import TextLoop from "react-text-loop";

import { FiTruck, FiShield } from "react-icons/fi";

export default function HeighlightBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="heighlight-bar">
      {width < 700 ? (
        <TextLoop springConfig={{ stiffness: 340, damping: 30 }}>
          <div className="delivery">
            <span className="icon-container">
              <FiTruck className="icon" />
            </span>
            <span className="text">Fast deliveries around the world!</span>
          </div>
          <div className="payment">
            <span className="icon-container">
              <FiShield className="icon" />
            </span>
            <span className="text">Safe payment</span>
          </div>
        </TextLoop>
      ) : (
        <>
          <div className="delivery">
            <span className="icon-container">
              <FiTruck className="icon" />
            </span>
            <span className="text">Fast deliveries around the world!</span>
          </div>
          <div className="payment">
            <span className="icon-container">
              <FiShield className="icon" />
            </span>
            <span className="text">Safe payment</span>
          </div>
        </>
      )}
    </div>
  );
}
