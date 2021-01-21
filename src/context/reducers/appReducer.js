import { ADD_TO_CART, SET_LINKS, SET_USER } from "../action.types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProductsToSendInDB: [
          ...state.cartProductsToSendInDB,
          { ...action.payload.productForDB },
        ],

        produtToShowInCart: [
          ...state.produtToShowInCart,
          { ...action.payload.productsToShow },
        ],
      };

    case SET_LINKS:
      return { ...state, navLinks: action.payload };

    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
