import React, { useContext, useState } from "react";
import "./searchinput.styles.scss";
import { CgClose } from "react-icons/cg";

import { NavContext } from "../../context/Context";
import { SEARCH_SHOW } from "../../context/action.types";

export default function SearchInput({ placeholder, onSearch, value }) {
  const { navState, navStateDispatch } = useContext(NavContext);

  const onSearchHandle = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="searchInput">
      <input
        type="text"
        className="input-bar"
        placeholder={placeholder}
        onChange={onSearchHandle}
        value={value}
      />
      <div
        className="close-icon"
        onClick={() => navStateDispatch({ type: SEARCH_SHOW, payload: "" })}
      >
        <CgClose />
      </div>
    </div>
  );
}
