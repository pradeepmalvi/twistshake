import React, { useContext, useEffect, useRef, useState } from "react";
import "./cart-sidebar.styles.scss";
import Axios from "../../axios/axios";
import requests from "../../axios/requests";
// imports for context realted things
import { CART_SIDEBAR } from "../../context/action.types";
import { AppContext, NavContext } from "../../context/Context";
import { IoMdCloseCircle } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import CartProduct from "../cart-product/CartProduct.component";
import Card from "../card/Card.component";
import Button from "../button/Button.component";
import { Link } from "react-router-dom";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ts-token")}`,
  },
};

export default function ShopingCart() {
  const overlay_active = "body_overlay_active";
  const { navState, navStateDispatch } = useContext(NavContext);
  const { appState, appStateDispatch } = useContext(AppContext);
  const { cartState, cartStateDispatch } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const isCartActive =
    navState.isCartSideBarActive !== undefined
      ? navState.isCartSideBarActive
      : "";

  let sidebarRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    getCart();

    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        navStateDispatch({ type: CART_SIDEBAR, payload: "" });
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const getCart = () => {
    Axios.get(
      `${requests.getCart}/${localStorage.getItem("ts-userid")}`,
      config
    ).then((response) => {
      // setCart(response.data.products);
      cartStateDispatch({
        type: "SET_PRODDECT",
        payload: response.data.products,
      });
    });
  };

  const removeProduct = (cartIndex) => {
    cartStateDispatch({
      type: "REMOVE_PRODUCT",
      payload: cartIndex,
    });
  };

  const updateQuantity = (cartIndex, updateQuantity) => {
    console.log(cartIndex, updateQuantity);
    const data = {
      quantity: updateQuantity,
    };
    Axios.put(`${requests.getCart}/${cartIndex}`, data, config).then(
      (response) => {
        getCart();
      }
    );
  };
  const removeCart = (id) => {
    Axios.delete(`${requests.getCart}/${id}`, config).then((response) => {
      getCart();
    });
  };

  const calculateTotal = () => {
    let subTotal = 0;
    if (
      cartState &&
      cartState.cartProduct &&
      cartState.cartProduct.length > 0
    ) {
      var cart = cartState.cartProduct;
      for (let i = 0; i < cart.length; i++) {
        var subAmount = cart[i].total_price.replace("AED", "");
        const total = parseInt(subAmount);
        subTotal = subTotal + total;
      }
    }

    return subTotal + calculateDiscount();
  };
  const calculateDiscount = () => {
    let discount = 0;
    if (
      cartState &&
      cartState.cartProduct &&
      cartState.cartProduct.length > 0
    ) {
      var cart = cartState.cartProduct;
      for (let i = 0; i < cart.length; i++) {
        var saving = cart[i].total_saving.replace("AED", "");
        const total = parseInt(saving);
        discount = discount + total;
      }
    }

    return discount;
  };

  const calculateGrandTotal = () => {
    let grandTotal = 0;
    if (
      cartState &&
      cartState.cartProduct &&
      cartState.cartProduct.length > 0
    ) {
      var cart = cartState.cartProduct;
      for (let i = 0; i < cart.length; i++) {
        var subAmount = cart[i].total_price.replace("AED", "");
        const total = parseInt(subAmount);
        grandTotal = grandTotal + total;
      }
    }
    grandTotal = grandTotal;
    return grandTotal;
  };

  // const removeProduct = (cartIndex) => {
  //   cartStateDispatch({
  //     type: "REMOVE_PRODUCT",
  //     payload: cartIndex,
  //   });
  // };
  const goToCheckout = (e) => {
    // navStateDispatch({ type: CART_SIDEBAR, payload: "active" });
    window.location.href = "/checkout";
  };
  return (
    appState && (
      <div ref={sidebarRef} className={`cart-sidebar ${isCartActive}`}>
        <div className="inner-wrapper">
          <div className="header-top">
            <div className="title">
              <h3>
                Shoping Basket{" "}
                <span className="product-number">
                  {" "}
                  {cartState.cartProduct !== null
                    ? cartState.cartProduct.length
                    : 0}
                </span>{" "}
              </h3>
            </div>
            <div
              className="close-btn"
              onClick={() => {
                navStateDispatch({ type: CART_SIDEBAR, payload: "" });
              }}
            >
              <VscClose />
            </div>
          </div>
          <div className="mid-area">
            <div className="grouped">
              <div>
                <div className="cart-products">
                  {cartState.cartProduct && cartState.cartProduct.length > 0 ? (
                    cartState.cartProduct.map((product, index) => {
                      return (
                        <div className="cart-product">
                          <div className="inner-container">
                            <div className="top">
                              <span
                                className="icon-close"
                                onClick={removeCart.bind(this, product.cart_id)}
                              >
                                <IoMdCloseCircle />
                              </span>
                            </div>
                            <CartProduct
                              removeProduct={removeProduct}
                              removeCart={removeCart}
                              cartIndex={product.cart_id}
                              key={index}
                              data={product}
                              pakageContent={product.productDetails}
                              quantity={product.quantity}
                              updateQuantity={updateQuantity}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="empty-message">Your cart is empty!</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {cartState &&
          cartState.cartProduct &&
          cartState.cartProduct.length > 0 ? (
            <div className="bottom-area">
              <div className="seprator"></div>
              <div className="inner-container">
                <div className="product-price common">
                  <div className="title">Products</div>
                  <div className="price">{calculateTotal()} AED</div>
                </div>
                {/* <div className="delivery-charge common">
                <div className="title">Delivery</div>
                <div className="price">-</div>
              </div> */}
                <div className="total-discount common">
                  <div className="title">Total discount</div>
                  <div className="price">- {calculateDiscount()} AED</div>
                </div>
                <div className="total">
                  <div className="title">Total</div>
                  <div className="total-amount">
                    {calculateGrandTotal()} AED
                  </div>
                </div>

                <Button onClick={goToCheckout}>
                  <span>Go to checkout</span>
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  );
}
