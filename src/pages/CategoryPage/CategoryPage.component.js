import React, { useEffect, useState, useContext, useReducer } from "react";
import "./categoryPage.styles.scss";

import { AppContext } from "../../context/Context";
import { productReducer } from "../../context/reducers/productReducer";
// imports for axios
// import Axios from "../../axios/axios";
import requests from "../../axios/requests";
import axios from "axios";
import Axios from "../../axios/axios";

import VideoBackground from "../../components/videoBackground/VideoBackground.component";
import Row from "../../components/row/Row.component";
import Card from "../../components/card/Card.component";
import HeighlightBar from "../../components/heighlight-bar/HeighlightBar.component";

import { Link, useParams, useHistory } from "react-router-dom";
import ImageBackground from "../../components/imgBackground/ImageBackground.component";

import { CgShoppingBag } from "react-icons/cg";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ts-token")}`,
  },
};

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState({
    products: [],
    categoryBG: "",
    categoryContent: {},
  });

  const { cartState, cartStateDispatch } = useContext(AppContext);
  const [productState, productStateDispatch] = useReducer(productReducer, {
    packageSidebar: "",
    isPackageCutomisationToggled: false,
    product: {},
    CustomisationNestedSidebar: "",
    galleryitems: [],
    currentlySelectedInCustomisation: {},
    customisedProduct: [],
    displayProduct: [],
    savedProduct: null,
  });
  const [Cart, setCart] = useState([]);

  const { appState } = useContext(AppContext);
  let navLinks = "";
  let navLinkObjWithCatID = {};
  let categoryBG = "";
  let categoryID = "";

  const history = useHistory();

  const getCart = () => {
    Axios.get(
      `${requests.getCart}/${localStorage.getItem("ts-userid")}`,
      config
    ).then((response) => {
      setCart(response.data.products);

      cartStateDispatch({
        type: "SET_PRODDECT",
        payload: response.data.products,
      });
    });
  };

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
      categoryContent: categoryData.data.category_content,
    });
  }

  console.log(categoryProducts);

  useEffect(() => {
    var title = `${category} • For babies and toddlers • Twistshake`;
    title = title.replace("-", " ");
    title = title.replace(/\b\w/g, (l) => l.toUpperCase());
    document.title = title;
    window.scrollTo(0, 0);
    fetchCategoryData();
  }, [category]);

  const addToCart = (productDetails) => {
    const { product } = productState;
    const { productSku } = productState;
    console.log(productDetails);

    if (isProductAlreadyAddToCart(product.id)) {
      return false;
    }

    if (!localStorage.getItem("ts-token")) {
      history.push(`/login/${product.id}`);

      return false;
    }

    let data = {
      cart_item: {
        user_id: localStorage.getItem("ts-userid"),
        sku_id: productDetails.sku_id,
        quantity: 1,
        product_type: "single",
        product_id: productDetails.id,
        cart_package_item: [],
      },
    };

    Axios.post(`${requests.addToCart}`, data, config).then((response) => {
      getCart();
    });
  };

  const isProductAlreadyAddToCart = (productId) => {
    for (let i = 0; i < Cart.length; i++) {
      if (productId === Cart[i].product_id) {
        updateQuantity(Cart[i].cart_id, Cart[i].quantity + 1);
        return true;
      }
    }
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
                  <div key={index} className="product-wrapper">
                    <Link
                      className="product-link"
                      to={`/product/${product.type}/${product.id}`}
                    >
                      <Card eachProduct={product} />
                    </Link>
                    <div
                      className="cart-icon"
                      onClick={addToCart.bind(this, product)}
                    >
                      <CgShoppingBag className="icon-svg" />
                    </div>
                  </div>
                ))
              : null}
          </Row>
        </div>
        <div className="text-content">
          <h2 className="title">{categoryProducts.categoryContent.title}</h2>
          <p className="description-text">
            {categoryProducts.categoryContent.content}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading"></div>
  );
}
