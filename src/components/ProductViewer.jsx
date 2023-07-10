import React, { useEffect, useState } from "react";
import "../assests/css/ProductViewer.css";
import { useLocation } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
function ProductViewer({ wishlist, setWishlist, cartItems, setCartItems }) {
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
  const options = {
    expires: 30,
    secure: false,
    sameSite: "lax",
    domain: window.location.hostname,
  };

  const handleAddWishlist = () => {
    const data = {
      product_id: productId,
      product_name: name,
      price,
      product_img: img_src,
      product_description: additionalDesc,
      features,
      sizes,
      ratings,
    };
    const newWishList = [...wishlist, data];
    setWishlist(newWishList);
    console.log(newWishList);
    Cookies.set("wl", JSON.stringify(newWishList), options);
  };

  const handleAddToCart = () => {
    const data = {
      product_id: productId,
      product_name: name,
      price,
      product_img: img_src,
      product_description: additionalDesc,
      features,
      sizes,
      ratings,
    };

    const newCartItems = [...cartItems, data];

    setCartItems(newCartItems);
    Cookies.set("ci", JSON.stringify(newCartItems), options);
  };
  return (
    <div className="product__viewer_con">
      {/* <button
        onClick={() => console.log(searchParams.get("features").trimEnd())}
      >
        sdas
      </button> */}
      <div className="product__img">
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
        <div style={{ display: "flex" }}>
          <div className="addCart__btn">
            <Button
              size="small"
              style={{ textTransform: "none" }}
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </Button>
          </div>
          <div className="addCart__btn" style={{ marginLeft: "1.5em" }}>
            <Button
              size="small"
              style={{ textTransform: "none" }}
              onClick={() => handleAddWishlist()}
            >
              Add Wishlist
            </Button>
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
