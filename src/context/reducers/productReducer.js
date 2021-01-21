import {
  PACKAGE_SIDEBAR,
  SET_PRODUCT,
  PACKAGE_CUSTOMISATION_TOGGLE,
  SET_MAIN_PRODUCT_SLIDER,
  CUSTOMISATION_NESTED_SIDEBAR,
  SELCTED_CURRENT_PRODUCT_IN_CUSTOMISATION,
  SET_DISPLAY_PRODUCTS,
  CHANGE_DISPLAY_PRODUCT,
  SAVE_PRODUCT,
  SET_PRODUCT_SKU,
} from "../action.types";

export const productReducer = (state, action) => {
  switch (action.type) {
    case PACKAGE_SIDEBAR:
      return {
        ...state,
        packageSidebar: action.payload,
      };

    case PACKAGE_CUSTOMISATION_TOGGLE:
      return {
        ...state,
        isPackageCutomisationToggled:
          state.isPackageCustomisationToggled === false
            ? action.payload
            : false,
      };

    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        galleryitems:
          action.payload.type === "single"
            ? action.payload.product_color_image[0][0].product_gallary
            : action.payload.product_thumbnail,
      };

    case CUSTOMISATION_NESTED_SIDEBAR:
      return {
        ...state,
        CustomisationNestedSidebar: action.payload,
      };

    case SELCTED_CURRENT_PRODUCT_IN_CUSTOMISATION:
      return {
        ...state,
        currentlySelectedInCustomisation: action.payload,
      };

    case SET_MAIN_PRODUCT_SLIDER:
      return { ...state, galleryitems: action.payload };

    case SET_DISPLAY_PRODUCTS:
      return {
        ...state,
        displayProduct: action.payload,
      };

    case CHANGE_DISPLAY_PRODUCT:
      let tempProduct = state.displayProduct;
      tempProduct[action.payload.productIndex].product_thumbnail = [
        action.payload.productImage,
      ];
      tempProduct[action.payload.productIndex].product_attribute[
        action.payload.productAtrID
      ].attribute_Image = action.payload.productImage;
      return { ...state, displayProduct: tempProduct };

    case SAVE_PRODUCT:
      return { ...state, savedProduct: action.payload };

    case SET_PRODUCT_SKU:
      return { ...state, productSku: action.payload };

    default:
      return state;
  }
};
