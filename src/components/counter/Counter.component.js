import React, { useState, useEffect } from "react";
import "./counter.styles.scss";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function Counter({ quantity, onAddQuantity, onRemoveQuantity }) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (typeof quantity !== "undefined") {
      setValue(quantity);
    }
  }, [quantity]);

  const onClickMinus = () => {
    if (value > 0) {
      // setValue(value - 1);
      onRemoveQuantity(value - 1);
    }
  };
  const onCLickPlus = () => {
    // setValue(value + 1);
    onAddQuantity(value + 1);
  };
  return (
    <div className="counter">
      <div className="dec common" onClick={onClickMinus}>
        <BiMinus />
      </div>
      <div className="value common">{value}</div>
      <div className="inc common" onClick={onCLickPlus}>
        <BiPlus />
      </div>
    </div>
  );
}
