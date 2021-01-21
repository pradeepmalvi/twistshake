import { PACKAGE_CUSTOMISATION_TOGGLE } from "../action.types";

export const packageCustomisationReducer = (state, action) => {
  switch (action.type) {
    case PACKAGE_CUSTOMISATION_TOGGLE:
      return {
        ...state,
        isPackageCutomisationToggled:
          state.isPackageCutomisationToggled === false ? action.payload : false,
      };

    default:
      return state;
  }
};
