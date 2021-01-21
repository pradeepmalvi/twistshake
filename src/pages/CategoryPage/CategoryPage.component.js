import React, { useEffect, useState, useContext } from "react";
import "./categoryPage.styles.scss";

import { AppContext } from "../../context/Context";

// imports for axios
// import Axios from "../../axios/axios";
import requests from "../../axios/requests";
import axios from "axios";

import VideoBackground from "../../components/videoBackground/VideoBackground.component";
import Row from "../../components/row/Row.component";
import Card from "../../components/card/Card.component";
import HeighlightBar from "../../components/heighlight-bar/HeighlightBar.component";

import { Link, useParams } from "react-router-dom";
import ImageBackground from "../../components/imgBackground/ImageBackground.component";

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState({
    products: [],
    categoryBG: "",
  });
  const { appState } = useContext(AppContext);
  let navLinks = "";
  let navLinkObjWithCatID = {};
  let categoryBG = "";
  let categoryID = "";

  async function fetchCategoryData(id) {
    const categoriesResponse = await axios.get(
      `http://twistshake.ewtlive.in/admin/api/product-category`
    );

    categoriesResponse.data.menu.forEach((eachObj) => {
      if (eachObj.menu_type === "Top Menu") {
        navLinks = eachObj.product_categories;
      }
    });

    console.log(navLinks);
    // categories ids extraction
    navLinks.forEach((eachLinkObj) => {
      navLinkObjWithCatID[eachLinkObj.urlString] = eachLinkObj.id;
    });

    // geting category id
    categoryID = navLinkObjWithCatID[category];
    // getting category bg
    categoryBG = navLinks.filter((eachObj) => eachObj.urlString === category);
    categoryBG = categoryBG[0].categoryBG;

    const categoryData = await axios.get(
      `http://twistshake.ewtlive.in/admin/api/show-product-by-category/${categoryID}/8`
    );

    setCategoryProducts({
      ...categoryProducts,
      products: categoryData.data.product,
      categoryBG: categoryBG,
    });
  }

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  console.log(categoryProducts);

  return categoryProducts.products.length > 0 ? (
    <div className="category-page">
      {/* <VideoBackground>
        <h2 className="heading">Black Week</h2>
        <p className="heading-description">
          Black Week at Twistshake has started. Enjoy 50% off sitewide and get
          free shipping on all packages!
        </p>
      </VideoBackground> */}
      {categoryProducts.products.length > 0 ? (
        <ImageBackground
          imgSrc={`${categoryProducts.categoryBG}`}
          title={category}
        />
      ) : null}

      <HeighlightBar />
      <div className="content">
        <div className="category-products">
          <Row title="">
            {categoryProducts.products.length > 0
              ? categoryProducts.products.map((product, index) => (
                  <Link
                    to={`/product/${product.type}/${product.id}`}
                    key={index}
                    className="product-link"
                  >
                    <Card eachProduct={product} />
                  </Link>
                ))
              : null}
          </Row>
        </div>
        {/* <div className="text-content">
          <h2 className="title">Twistshake Campaigns</h2>
          <p className="description-text">
            Here you will find lots of great offers and perfect packages
            arranged according to age and needs.
          </p>
        </div> */}
      </div>
    </div>
  ) : (
    <div className="loading"></div>
  );
}
