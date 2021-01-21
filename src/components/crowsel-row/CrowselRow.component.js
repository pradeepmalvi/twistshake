import React from "react";

// import OwlCarousel from "react-owl-carousel";
import Row from "../row/Row.component";
import Card from "../card/Card.component";
import { Link } from "react-router-dom";

export default function CrowselRow() {
  return (
    <Row title="">
      <Link to="/product" className="product-link">
        {" "}
        <Card
          img={
            "https://products.twistshake.com/images/610_21cc4669dd-73500-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format"
          }
        />
      </Link>
      <Link to="/product" className="product-link">
        {" "}
        <Card
          img={
            "https://products.twistshake.com/images/605_b6c19bd61d-78834-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format"
          }
        />
      </Link>
      <Link to="/product" className="product-link">
        {" "}
        <Card
          img={
            "https://products.twistshake.com/images/606_4535056eb5-78835-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format"
          }
        />
      </Link>
      <Link to="/product" className="product-link">
        {" "}
        <Card
          img={
            "https://products.twistshake.com/images/607_4a7c06b1c5-78836-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format"
          }
        />
      </Link>
    </Row>
  );
}

// <OwlCarousel className="owl-theme" loop nav={true} dots={false} items={4}>
//   <div className="item">
//     <Link to="/product" className="product-link">
//       <Card img="https://products.twistshake.com/images/610_21cc4669dd-73500-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
//     </Link>
//   </div>
//   <div className="item">
//     <Link to="/product" className="product-link">
//       <Card img="https://products.twistshake.com/images/605_b6c19bd61d-78834-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
//     </Link>
//   </div>
//   <div className="item">
//     <Link to="/product" className="product-link">
//       <Card img="https://products.twistshake.com/images/606_4535056eb5-78835-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
//     </Link>
//   </div>
//   <div className="item">
//     <Link to="/product" className="product-link">
//       <Card img="https://products.twistshake.com/images/607_4a7c06b1c5-78836-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
//     </Link>
//   </div>
//   <div className="item">
//     <Link to="/product" className="product-link">
//       <Card img="https://products.twistshake.com/images/609_6305ff272f-78838-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
//     </Link>
//   </div>
// </OwlCarousel>;
