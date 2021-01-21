import React, { useState, useEffect } from "react";
import "./privacyPolicy.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import HtmlParser from "react-html-parser";

export default function PrivacyAndPolicy() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(requests.pages).then((res) => {
      setData(res.data.pages["privacy-policy"]);
    });
  }, []);

  return (
    <div className="privacy-policy">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Ambassador</h2>
          </div>
          <ul className="list">
            <li>Personal information</li>
            <li>What are cookies?</li>
            <li>Why do we use cookies? </li>
            <li>What information do we collect?</li>
            <li>Disclosures of your information</li>
            <li>Updates</li>
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
