import React, { useEffect, useState } from "react";
import "../assests/css/ProductViewer.css";
import { useLocation } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { IconButton } from "@material-ui/core";
function ProductViewer({
  wishlist,
  setWishlist,
  cartItems,
  setCartItems,
  handleAddWishlist,
  handleRemoveWishlist,
  handleAddCartItems,
  handleRemoveCartItem,
}) {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const img_src = searchParams.get("img_url");
  const additionalDesc = searchParams.get("additionalDesc");
  const features = JSON.parse(searchParams.get("features"));
  const sizes = JSON.parse(searchParams.get("sizes"));
  const ratings = searchParams.get("ratings");
  const productId = searchParams.get("productID");
  const is_sale = searchParams.get("is_sale");
  const options = {
    expires: 30,
    secure: false,
    sameSite: "lax",
    domain: window.location.hostname,
  };

  const wishlistData = {
    product_id: productId,
    product_name: name,
    price,
    product_img: img_src,
    // product_description: additionalDesc,
    // features,
    // sizes,
    // ratings,
  };
  const cartData = {
    product_id: productId,
    product_name: name,
    price,
    product_img: img_src,
    // product_description: additionalDesc,
    // features,
    // sizes,
    // ratings,
    quantity: 1,
  };

  const inCart = () => {
    const is_exist = cartItems.some(
      (item, index) => item.product_id == productId
    );

    return is_exist;
  };
  const inWishlist = () => {
    const is_exist = wishlist.some(
      (item, index) => item.product_id == productId
    );

    return is_exist;
  };
  const getQuantity = () => {
    const foundItem = cartItems.find((item) => item.product_id === productId);
    if (foundItem) {
      return foundItem.quantity;
    }
  };

  return (
    <div className="product__viewer_con">
      <div className="product__img">
        {is_sale == 1 ? (
          <img
            src={require("../assests/img/sale_icon.png")}
            className="sale_logo"
          />
        ) : (
          ""
        )}

        <img src={img_src} />
      </div>
      <div className="product__details">
        <div className="product__details__header">
          <h3>{name}</h3>
          <div className="product__price">
            <p>$ {price}</p>
            <p
              style={{
                display: "flex",
                width: "35%",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: ".5em" }}> Ratings:</span>

              <div style={{ position: "relative" }}>
                <div className="star__rating">
                  {/* COLORED STAR */}
                  <div className="stars" style={{ width: `${ratings}%` }}>
                    <StarIcon className="star__icon" />
                    <StarIcon className="star__icon" />
                    <StarIcon className="star__icon" />
                    <StarIcon className="star__icon" />
                    <StarIcon className="star__icon" />
                  </div>
                </div>
                <div className="star__rating__border">
                  <div className="stars_border">
                    <StarBorderIcon
                      style={{ fontSize: ".8rem", color: "rgb(255, 132, 0)" }}
                    />
                    <StarBorderIcon
                      style={{ fontSize: ".8rem", color: "rgb(255, 132, 0)" }}
                    />
                    <StarBorderIcon
                      style={{ fontSize: ".8rem", color: "rgb(255, 132, 0)" }}
                    />
                    <StarBorderIcon
                      style={{ fontSize: ".8rem", color: "rgb(255, 132, 0)" }}
                    />
                    <StarBorderIcon
                      style={{ fontSize: ".8rem", color: "rgb(255, 132, 0)" }}
                    />
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="product__details__body">
          <h5>Size & Fit Guide (US Size)</h5>
          <div className="sizes__container">
            {sizes?.map((size, index) => {
              return <div className="size">{size}</div>;
            })}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="addCart__btn">
            {inCart() ? (
              <div
                style={{
                  width: "100%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  aria-label="add"
                  style={{ padding: "2px 8px" }}
                  onClick={() => handleAddCartItems(productId, 1)}
                >
                  <AddCircleIcon />
                </IconButton>
                <div
                  style={{
                    backgroundColor: inCart() ? "rgb(253, 206, 223)" : "none",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    margin: "0 3px",
                  }}
                >
                  <p>{getQuantity()}</p>
                </div>
                <IconButton
                  aria-label="remove"
                  style={{ padding: "2px 8px" }}
                  onClick={() => handleRemoveCartItem(productId)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </div>
            ) : (
              <Button
                size="small"
                style={{ textTransform: "none" }}
                onClick={() => handleAddCartItems(cartData, 0)}
              >
                Add To Cart
              </Button>
            )}
          </div>
          <div
            className="addCart__btn"
            id="addWishlist__btn"
            style={{ marginLeft: "1.5em" }}
          >
            {inWishlist() ? (
              <Button
                size="small"
                style={{ textTransform: "none" }}
                onClick={() => handleRemoveWishlist(productId)}
              >
                Remove Wishlist
              </Button>
            ) : (
              <Button
                size="small"
                style={{ textTransform: "none" }}
                onClick={() => handleAddWishlist(wishlistData)}
              >
                Add Wishlist
              </Button>
            )}
          </div>
        </div>

        <div className="product__description">
          <h5>What's it do?</h5>
          <p>{additionalDesc}</p>
          <div className="product__features">
            <h5>Features</h5>
            <ul>
              {features?.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewer;
