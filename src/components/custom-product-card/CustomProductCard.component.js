import React from "react";
import "./custom-product-card.scss";
import { FaPencilAlt, FaCheck } from "react-icons/fa";
export default function CustomProductCard({
  img,
  name,
  handleOnClick,
  children,
  id,
  edit,
  customizationDone,
  savedProduct,
  productIndex,
  active
}) {
  const checkCustomizationStatus = () => {
    let flag = false;
    if (savedProduct) {
      console.log('saved Product', savedProduct)
      savedProduct.map(eachItem => {
        if (eachItem.productID === id && eachItem.index === productIndex) {
          flag = true;
        }
      })
    }
    return flag
  }
  return (
    <div className="custom-product-card" id={id} onClick={handleOnClick}>
      {
        edit && checkCustomizationStatus() && 
          <div className="check_customization_icon">
            <FaCheck className="icon" />
          </div>
      }
      {edit && !checkCustomizationStatus() &&
        <div className="check_customization_icon">
          <FaPencilAlt className="icon" />
        </div>
      }
      <div className={active?"check-activation-status active":"check-activation-status"}>
        <div id={id} className={!edit?"product-img":checkCustomizationStatus()?"product-img":"product-img disabled-img"} style={{ backgroundImage: `url( ${img} )` }}>
          {children}
        </div>
      </div>
      <div className="product-name">{name}</div>
    </div>
  );
}
