import React, { useContext, useState } from "react";
import "./mobile-menu-sidebar.styles.scss";

import { BiSearch } from "react-icons/bi";

import { NavContext } from "../../context/Context";
import { DISABLE_MOBILE_MENU } from "../../context/action.types";
import { Link, Route, useHistory } from "react-router-dom";

export default function MobileMenuSidebar() {
  const { navState, navStateDispatch } = useContext(NavContext);
  const [bestSellers, setBestSellers] = useState([1, 2, 3, 4]);

  const disableNav = () => {
    navStateDispatch({
      type: DISABLE_MOBILE_MENU,
      payload: "",
    });
  };
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return (
    <div
      className={`mobileMenuSidebar ${
        navState.menuSidebarMobile !== undefined
          ? navState.menuSidebarMobile
          : null
      }`}
    >
      <div className="inner-container">
        <div className="search-input">
          <span className="icon">
            <BiSearch />
          </span>
          <input type="search" placeholder="Search for your favourite" />
        </div>

        <div className="best-selling-products">
          <div className="area-title">Our Best seller</div>
          <div className="products-container">
            {bestSellers.map((product, index) => (
              <Link to="/" className="link" key={index}>
                <div className="each-best-selling">
                  <div className="img-container">
                    <div className="img"></div>
                  </div>
                  <div className="title-container">Baby Bottles</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mobile-nav-links">
          <div className="list">
            <li className="link">
              <Link
                to="/pages/baby-bottles"
                className="link"
                onClick={disableNav}
              >
                Baby Bottles
              </Link>
            </li>
            <li className="link">
              <Link
                to="/pages/teether-and-peciefiers"
                className="link"
                onClick={disableNav}
              >
                Teethers & Peciefiers
              </Link>
            </li>
            <li className="link">
              <Link
                to="/pages/sippy-cups"
                className="link"
                onClick={disableNav}
              >
                Sippy Cups
              </Link>
            </li>
            <li className="link">
              <Link
                to="/pages/squeeze-bag"
                className="link"
                onClick={disableNav}
              >
                Squeeze Bags
              </Link>
            </li>

            {localStorage.getItem("user") ? (
              ""
            ) : (
              <>
                <li className="link">
                  <Link
                    to="/login"
                    className="link login-link"
                    onClick={disableNav}
                  >
                    Login
                  </Link>
                </li>
                <li className="link">
                  <Link
                    to="/create-account"
                    className="link create-account-link"
                    onClick={disableNav}
                  >
                    Create Account
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
        <div className="topbar-menu">
          <div className="topbar-mobile-nav-links">
            <ul className="list">
              <li className="link">
                <Link
                  to="/customer-service/contact"
                  className="link"
                  onClick={disableNav}
                >
                  Contact
                </Link>
              </li>
              <li className="link">
                <Link
                  to="/customer-service/about-us"
                  className="link"
                  onClick={disableNav}
                >
                  About us
                </Link>
              </li>
              <li className="link">
                <Link
                  to="/customer-service/faq"
                  className="link"
                  onClick={disableNav}
                >
                  FAQ
                </Link>
              </li>
              {/* <li className="link">
                <Link to="/Contact" className="link">
                  Twistshake world
                </Link>
              </li> */}
              <li className="link">
                <Link to="/customer-service/ambassador" className="link">
                  Ambassador
                </Link>
              </li>
              {localStorage.getItem("user") ? (
                <li className="link">
                  <Link className="link" onClick={logout}>
                    Logout
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="close-icon" onClick={() => {}}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
