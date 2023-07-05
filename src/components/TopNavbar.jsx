import React from "react";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../assests/css/Topbar.css";
import { Link } from "react-router-dom";
function TopNavbar(props) {
  return (
    <div className="container">
      <div className="nav__list">
        <ul>
          <li>
            <Link to="catalog">Catalog</Link>
          </li>
          <li>
            <Link to="new">New</Link>
          </li>
          <li>
            <Link to="trending">Trending</Link>
          </li>
          <li>
            <Link to="featured">Featured</Link>
          </li>
        </ul>
        <div className="user__detail__con">
          <div className="user__wishList">
            <FavoriteBorderIcon />
            <span>WishList</span>
          </div>
          <div className="user__cart">
            <ShoppingBasketOutlinedIcon />
            <span>Cart</span>
          </div>
          <div className="user__detail">
            <PermIdentityRoundedIcon />
            <p>Alexander</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
