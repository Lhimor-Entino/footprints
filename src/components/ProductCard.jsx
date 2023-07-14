import React, { useEffect, useState } from "react";
import "../assests/css/ProductCard.css";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
function ProductCard({
  img_src,
  brand,
  name,
  price,
  product_status,
  colors,
  additionalDesc,
  features,
  sizes,
  ratings,
  product_id,
  is_sale,
  original_price,
  wishlist,
  handleRemoveWishlist,
  handleAddWishlist,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [activeColor, setactiveColor] = useState(0);
  const [imgSource, setimgSource] = useState(
    img_src.length > 0 ? img_src[0] : img_src
  );

  const wishlistData = {
    product_id: product_id,
    product_name: name,
    price,
    product_img: img_src,
    product_description: additionalDesc,
    features,
    sizes,
    ratings,
  };

  const handleHover = (index) => {
    setIsHovering(true);
    console.log(img_src[index]);
    setimgSource(img_src[index]);
    setactiveColor(index);
  };

  const handleMouseLeave = (index) => {
    setIsHovering(false);
  };

  //ADD TO FAVORITES
  const [isFavorite, setisFavorite] = useState(false);
  const addToFavorite = () => {
    setisFavorite(!isFavorite);
  };
  // COLOR ANIMATIONS
  const [clicked, setClicked] = useState(false);
  const { width } = useSpring({
    width: clicked ? "100%" : "0%",
    config: { duration: 250 },
  });

  const inWishlist = () => {
    const is_exist = wishlist.some(
      (item, index) => product_id == item.product_id
    );
    return is_exist;
  };

  return (
    <div className="product__container">
      <div
        style={{
          position: "absolute",
          top: 3,
          right: 3,
          display: "flex",
          alignItems: "center",
          padding: "5px",
          justifyContent: "flex-end",
          width: "fit-content",
        }}
        className="product__top__btns"
      >
        {product_status === 1 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: ".5em",
            }}
          >
            <img
              style={{ height: "12px", width: "12px" }}
              src="https://cdn-icons-png.flaticon.com/512/740/740842.png"
              alt={"img"}
            />
            <span
              style={{
                fontSize: ".5rem",
                paddingLeft: "2px",
                color: "gray",
              }}
            >
              New
            </span>
          </div>
        ) : (
          ""
        )}

        {inWishlist() ? (
          <Tooltip title="Remove From Wishlist" arrow>
            <IconButton
              style={{ padding: "5px 5px" }}
              onClick={() => handleRemoveWishlist(product_id)}
            >
              <FavoriteIcon style={{ color: "rgb(243, 8, 74)" }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add To Wishlist" arrow>
            <IconButton
              style={{ padding: 0 }}
              onClick={() => handleAddWishlist(wishlistData)}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <div className="product__img">
        <Link
          to={{
            pathname: "/view",
            search: `?name=${name}&price=${price}&img_url=${imgSource}&additionalDesc=${additionalDesc}&features=${encodeURIComponent(
              JSON.stringify(features)
            )}&sizes=${encodeURIComponent(
              JSON.stringify(sizes)
            )}&ratings=${ratings}&productID=${product_id}&is_sale=${is_sale}`,
          }}
        >
          <img src={imgSource} alt="product_img" />
        </Link>
      </div>

      <div className="product__details">
        <p>{brand}</p>
        <p>{name}</p>
      </div>
      <div className="product__footer">
        <p>Price</p>
        <div className="cart__btn__con">
          <span
            style={{
              textDecoration: is_sale == 1 ? "line-through" : "",
              color: is_sale == 1 ? "rgb(170, 170, 170)" : "#000",
            }}
          >
            {original_price} $
          </span>

          <ShoppingBasketOutlinedIcon />
        </div>
        {is_sale == 1 ? (
          <span style={{ fontSize: "0.7rem", fontWeight: "600" }}>
            {price} $
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="color__picker_con">
        <animated.div
          style={{
            width,
            height: "100%",
            backgroundColor: "rgb(232, 213, 196)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "3px",
          }}
        >
          {colors?.map((color, index) => {
            return (
              <Link
                to={{
                  pathname: "/view",
                  search: `?name=${name}&price=${price}&img_url=${imgSource}&additionalDesc=${additionalDesc}&features=${encodeURIComponent(
                    JSON.stringify(features)
                  )}`,
                }}
              >
                <div
                  key={index}
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: color === "White" ? "#ffffff" : color,
                    borderRadius: "50%",
                    border:
                      index == activeColor
                        ? "3px solid rgb(243, 8, 74)"
                        : "none",
                  }}
                  onMouseOver={() => handleHover(index)}
                  onMouseLeave={() => handleMouseLeave()}
                ></div>
              </Link>
            );
          })}
        </animated.div>

        {!clicked ? (
          <ChevronRightIcon onClick={() => setClicked(!clicked)} />
        ) : (
          <ChevronLeftIcon onClick={() => setClicked(!clicked)} />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
