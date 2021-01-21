import React, { useState, useEffect } from "react";

import "./termsAndConditions.scss";

import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import HtmlParser from "react-html-parser";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function TermsAndConditons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(requests.pages).then((res) => {
      setData(res.data.pages["terms-and-conditions"]);
      // console.log(res.data.pages);
    });
  }, []);

  return (
    <div className="termsAndConditions">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Terms and Conditions</h2>
          </div>
          <ul className="list">
            <li>Terms and Conditons</li>
            <li>Confirmations</li>
            <li>Payment </li>
            <li>Payment By Card</li>
            <li>Payment By Invoice</li>
            <li>Rates</li>
            <li>Delivery</li>
            <li>Uncollected Packages</li>
            <li>Returns</li>
            <li>Claims</li>
            <li>Cookies</li>
            <li>Force majeure</li>
            <li>Amendments</li>
          </ul>
        </div>
        <div className="right">
          {data.length > 0
            ? data.map((eachSet, index) => (
                <div key={index}>
                  <h1 className="para-title">{eachSet.page_sub_title}</h1>
                  <div className="para">
                    {HtmlParser(eachSet.page_subtitle_content)}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
