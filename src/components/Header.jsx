import React from "react";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../assests/css/Cart.css";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { Link, useNavigate } from "react-router-dom";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 0px",
  },
}))(Badge);
function Header({ wishlist, cartItems, handleShowDrawer, saveToCart }) {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <div className="logo">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/26/22/26/footprint-6659001_960_720.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="brand">
          <p>
            <span>FOOT</span>
            <span>PRINTS</span>
          </p>
          <p>Where every step counts: FootPrints.</p>
        </div>
      </div>

      <div className="user__detail__con">
        <div className="user__wishList" onClick={() => handleShowDrawer(0)}>
          <StyledBadge badgeContent={wishlist.length} color="secondary">
            <FavoriteBorderIcon />
          </StyledBadge>
          <span>WishList</span>
        </div>

        <div className="user__cart">
          <StyledBadge
            badgeContent={cartItems.length}
            color="secondary"
            onClick={() => handleShowDrawer(1)}
          >
            <ShoppingBasketOutlinedIcon />
          </StyledBadge>
          <span>Cart</span>
        </div>
        <div className="user__detail">
          <PermIdentityRoundedIcon />
          <p>Alexander</p>
        </div>
      </div>
    </>
  );
}

export default Header;
