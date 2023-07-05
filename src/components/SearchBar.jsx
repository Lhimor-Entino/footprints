import React, { useState } from "react";
import "../assests/css/Searchbar.css";
import { useLocation } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import SearchFilterItems from "./SearchFilterItems";
function SearchBar(props) {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  const [searchFilterItems, setsearchFilterItems] = useState([
    "Nike",
    "Under Armour",
    "New Balance",
    "Converse",
  ]);

  const removeSearchfilter = (index) => {
    const newItems = searchFilterItems.filter((item, i) => i !== index);
    setsearchFilterItems(newItems);
  };
  return (
    <div>
      <div className="searchBar__container">
        <div className="searchBar__header">
          <h4 style={{ textTransform: "capitalize" }}>{currentPage}</h4>
        </div>
        <div className="searchBar__body">
          <div className="search__input">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search among 100+ products" />
          </div>
          <div className="search__filter">
            <div className="search__select">
              <SortRoundedIcon />
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </div>
        <div className="searchBar__footer">
          {searchFilterItems.map((item, index) => {
            return (
              <SearchFilterItems
                item={item}
                key={index}
                index={index}
                removeSearchfilter={removeSearchfilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
