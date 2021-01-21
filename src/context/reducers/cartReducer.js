export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODDECT":
      return { ...state, cartProduct: action.payload };

    case "REMOVE_PRODUCT":
      const tempCartData = [];
      state.cartProduct.map((product, index) => {
        if (index !== action.payload) {
          tempCartData.push(product);
        }
      });
      return { ...state, cartProduct: tempCartData };
    case "UPDATE QUANTITY":
      let tempCartQuantityData = state.cartProduct;
      state.cartProduct.map((product, index) => {
        if (index === action.payload.cartIndex) {
          tempCartQuantityData[index].quantity = action.payload.quantity;
        }
      });
      return { ...state, cartProduct: tempCartQuantityData };
    default:
      return state;
  }
};
