import React from "react";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../assests/css/Topbar.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 0px",
  },
}))(Badge);
function TopNavbar({ wishlist, cartItems, handleShowDrawer, saveToCart }) {
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
          <div className="user__wishList" onClick={() => handleShowDrawer(0)}>
            <StyledBadge badgeContent={wishlist.length} color="secondary">
              <FavoriteBorderIcon />
            </StyledBadge>
            <span>WishList</span>
          </div>
          <div className="user__cart" onClick={() => handleShowDrawer(1)}>
            <StyledBadge badgeContent={cartItems.length} color="secondary">
              <ShoppingBasketOutlinedIcon />
            </StyledBadge>
            <span>Cart</span>
          </div>
          <div className="user__detail" onClick={() => saveToCart()}>
            <PermIdentityRoundedIcon />
            <p>Alexander</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
