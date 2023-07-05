import React from "react";
import TopNavbar from "./TopNavbar";
import SearchBar from "./SearchBar";

import "../assests/css/Body.css";
import { Outlet } from "react-router-dom";

function Body({ page }) {
  return (
    <div className="body__container">
      <div className="content">
        <div>
          <TopNavbar />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Body;
