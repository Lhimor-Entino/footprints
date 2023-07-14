import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import SearchBar from "./SearchBar";

import "../assests/css/Body.css";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";

function Body({
  page,
  wishlist,
  cartItems,
  saveToCart,
  clearCart,
  clearWishlist,
  whatToShow,
  showDrawer,
  handleShowDrawer,
  setShowDrawer,
}) {
  // const [whatToShow, setWharToShow] = useState(null); // 0 is wishlist 1 is cart
  // const [showDrawer, setShowDrawer] = useState(false);
  // const handleShowDrawer = (what) => {
  //   setWharToShow(what);
  //   setShowDrawer(true);
  //   console.log(cartItems);
  // };
  return (
    <div className="body__container">
      <div className="content">
        <div style={{ position: "relative" }}>
          <TopNavbar
            wishlist={wishlist}
            cartItems={cartItems}
            handleShowDrawer={handleShowDrawer}
            saveToCart={saveToCart}
          />
          {showDrawer ? (
            <Drawer
              whatToShow={whatToShow}
              setShowDrawer={setShowDrawer}
              cartItems={cartItems}
              clearCart={clearCart}
              clearWishlist={clearWishlist}
            />
          ) : (
            ""
          )}
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
