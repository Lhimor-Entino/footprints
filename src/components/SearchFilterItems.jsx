import React from "react";
import "../assests/css/SearchFilterItems.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
function SearchFilterItems({ item, index, removeSearchfilter }) {
  return (
    <div className="search__filter__items">
      <span>{item}</span>
      <CloseOutlinedIcon onClick={() => removeSearchfilter(index)} />
    </div>
  );
}

export default SearchFilterItems;
