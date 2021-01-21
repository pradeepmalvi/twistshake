import {
  SET_HOME_BEST_SELLER_DATA,
  SET_CAT_ONE_DATA,
  SET_CAT_TWO_DATA,
  SET_CAT_THREE_DATA,
  SET_CAT_FOUR_DATA,
} from "../action.types";

export const homeReducer = (state, action) => {
  switch (action.type) {
    case SET_HOME_BEST_SELLER_DATA:
      return { ...state, bestSellerProducts: action.payload };
    case SET_CAT_ONE_DATA:
      return { ...state, cat_one: action.payload };
    case SET_CAT_TWO_DATA:
      return { ...state, cat_two: action.payload };
    case SET_CAT_THREE_DATA:
      return { ...state, cat_three: action.payload };
    case SET_CAT_FOUR_DATA:
      return { ...state, cat_four: action.payload };
    default:
      return state;
  }
};
