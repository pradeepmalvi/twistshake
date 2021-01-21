import React from "react";
import "./userinfo.styles.scss";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="name common">
        <span className="key">Name : </span>
        <span className="value">John Miller</span>
      </div>

      <div className="email common">
        <span className="key">Email : </span>
        <span>miller120@gmail.com</span>{" "}
      </div>
      <div className="phone common">
        {" "}
        <span className="key">Phone : </span>{" "}
        <span className="value">+9383883883</span>{" "}
      </div>
      <div className="PO common">
        <span className="key">P.O Box : </span>{" "}
        <span className="value">94838</span>
      </div>
      <div className="locality common">
        <span className="key">Locality : </span>{" "}
        <span className="value">Al Quoz</span>
      </div>
      <div className="city common">
        {" "}
        <span className="key">city : </span>{" "}
        <span className="value">Dubai</span>
      </div>
      <div className="country common">
        <span className="key">Country : </span>
        <span className="value">United States Emirates</span>
      </div>
    </div>
  );
}
