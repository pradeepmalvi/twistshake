import React, { useState } from "react";
import "./cart-product.styles.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";
import { IoMdCloseCircle } from "react-icons/io";
import Counter from "../counter/Counter.component";
import { Link } from "react-router-dom";
import Axios from "../../axios/axios";
import requests from "../../axios/requests";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ts-token")}`,
  },
};

export default function CartProduct({
  data,
  pakageContent,
  quantity,
  removeProduct,
  cartIndex,
  updateQuantity,
  removeCart,
}) {
  const [packageBox, setPackageBox] = useState("");
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [showPakageContent, setShowPakageContent] = useState(false);
  const onAddQuantity = (quantity) => {
    // setProductQuantity(quantity);
    updateQuantity(cartIndex, quantity);
  };
  const onRemoveQuantity = (quantity) => {
    // setProductQuantity(quantity);
    console.log(quantity);
    if (quantity === 0) {
      removeCart(cartIndex);
    }

    updateQuantity(cartIndex, quantity);
  };

  return (
    <div className="bottom">
      <div className="product-img">
        <div className="img-wrapper">
          <Link to="/product" className="product-link">
            <img
              src={
                data.type === "single"
                  ? data.product_image
                  : data.product_thumbnail
              }
              alt="product"
            />
          </Link>
        </div>
      </div>

      <div className="about-product">
        <div className="product-details">
          <div className="title">
            <Link to="/product" className="product-link">
              {data.product_name ? data.product_name : null}
            </Link>
          </div>
          <div className="extra-details">
            {data.package_content ? data.package_content : null}
          </div>
          <div className="product-counter">
            <Counter
              updateQuantity={updateQuantity}
              quantity={quantity}
              onAddQuantity={onAddQuantity}
              onRemoveQuantity={onRemoveQuantity}
            />
          </div>
          {data.type === "package" && (
            <div className="package-content">
              <div
                onClick={() => {
                  setShowPakageContent(!showPakageContent);
                }}
              >
                <h5>
                  <b>
                    Package Content &nbsp;
                    {showPakageContent ? (
                      <FaChevronUp className="direction-icon" />
                    ) : (
                      <FaChevronDown className="direction-icon" />
                    )}
                  </b>
                </h5>
              </div>
              <br />
              {showPakageContent
                ? data.type === "package" &&
                  data.cart_product !== undefined &&
                  data.cart_product.length > 0
                  ? data.cart_product.map((packageContent, index) => (
                      <h5>{packageContent.package_content}</h5>
                    ))
                  : ""
                : ""}
            </div>
          )}
        </div>
        <div className="price">
          <span className="previous">
            {parseInt(data.price) * productQuantity}
            {/* {data.price} */}
          </span>
          <span className="latest">
            {/* {parseInt(data.total_price) * productQuantity} */}
            {data.total_price}
          </span>
        </div>
      </div>
    </div>
  );
}
