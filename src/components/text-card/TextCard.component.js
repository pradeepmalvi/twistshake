import React from "react";
import "./text-card.styles.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button.component";

export default function TextCard({ children }) {
  return (
    <div className="text-card">
      <div className="content">
        <div className="sub-heading">{children[0]}</div>
        <div className="heading">{children[1]}</div>
        <div className="date">{children[2]}</div>
        <div className="description">{children[3]}</div>
        <div className="buttons">
          <Link to="/watch" className="product-link first-btn">
            <Button>
              <span>{children[4]}</span>
            </Button>
          </Link>
          <Link to="/products" className="product-link second-btn">
            <Button>
              <span>{children[5]}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
