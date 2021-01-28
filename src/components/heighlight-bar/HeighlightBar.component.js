import React, { useState, useEffect } from "react";
import "./heighlight-bar.styles.scss";

// react spring
import { useTransition, animated } from "react-spring";

import { FiTruck, FiShield } from "react-icons/fi";

export default function HeighlightBar() {
  // item that are being used in react-spring
  const [items] = useState([
    {
      title: "Fast deliveries around the world!",
      id: 0,
      icon: (
        <span className="icon-container">
          <FiTruck className="icon" />
        </span>
      ),
    },
    {
      title: "Safe payment",
      id: 1,
      icon: (
        <span className="icon-container">
          <FiShield className="icon" />
        </span>
      ),
    },
  ]);

  // index for items that are used in react-spring
  const [index, setIndex] = useState(0);

  const fadingTextPropsTransition = useTransition(
    items[index],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { tension: 220, friction: 100 },
    }
  );

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % items.length);
    }, 4000);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="heighlight-bar">
      {width < 700 ? (
        fadingTextPropsTransition.map(({ item, props, key }) => (
          <animated.div key={key} style={{ ...props, position: "absolute" }}>
            <div className="mobilebar">
              {" "}
              {item.icon} <p>{item.title}</p>{" "}
            </div>
          </animated.div>
        ))
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
