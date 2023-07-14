import React, { useEffect, useState, useRef } from "react";
import "../assests/css/Drawer.css";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@material-ui/core";

function Drawer({
  whatToShow,
  setShowDrawer,
  cartItems,
  clearCart,
  clearWishlist,
}) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [cartData, setCartData] = useState(cartItems);
  const [loggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   setCartData(cartItems);
  // }, [cartItems]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setShowDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (whatToShow === 0) {
      if (Cookies.get("wl")) {
        const parsedData = JSON.parse(Cookies.get("wl"));
        setData(parsedData);
      }
    } else if (whatToShow === 1) {
      setData(cartItems);
    }
  }, [whatToShow]);

  const clear = () => {
    if (whatToShow == 0) {
      clearWishlist();
    } else if (whatToShow == 1) {
      clearCart();
    }
    setData([]);
  };
  return (
    <div className="drawer__container" ref={componentRef}>
      <h1> {whatToShow === 0 ? "My WishList" : "My Cart"} </h1>
      <div id="content__container">
        {data.length > 0 ? (
          <ul>
            {data?.map((wl, index) => {
              return loggedIn ? (
                <Link
                  className="link"
                  onClick={() => setShowDrawer(false)}
                  to={{
                    pathname: "/view",
                    search: `?name=${wl.product_name}&price=${
                      wl.price
                    }&img_url=${wl.product_img}&additionalDesc=${
                      wl.product_description
                    }&features=${encodeURIComponent(
                      JSON.stringify(wl.features)
                    )}&sizes=${encodeURIComponent(
                      JSON.stringify(wl.sizes)
                    )}&ratings=${wl.ratings}&productID=${wl.product_id}`,
                  }}
                >
                  <li className="product__list">
                    <div
                      className="product__list__container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 2px 5px 5px",
                      }}
                    >
                      <div>
                        <img id="img" src={wl.product_img} alt="s" />
                      </div>
                      <div style={{ marginLeft: "1em" }} id="product__info">
                        <p>{wl.product_name}</p>
                        <p>{wl.price}</p>
                      </div>
                    </div>
                  </li>
                </Link>
              ) : (
                <Tooltip title="Please Login To View">
                  <li className="product__list">
                    <div
                      className="product__list__container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 2px 5px 5px",
                      }}
                    >
                      <div>
                        <img id="img" src={wl.product_img} alt="s" />
                      </div>
                      <div style={{ marginLeft: "1em" }} id="product__info">
                        <p>{wl.product_name}</p>
                        <p>{wl.price}</p>
                      </div>
                    </div>
                  </li>
                </Tooltip>
              );
            })}
          </ul>
        ) : (
          <p style={{ textAlign: "center", padding: "50px" }}>
            NO {whatToShow == 0 ? "WISHLIST" : "CART"} ITEMS
          </p>
        )}
      </div>

      <div
        style={{
          marginTop: "1em",
          marginBottom: ".5em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            padding: "0",
            fontSize: ".7rem",
            fontWeight: "bold",
          }}
          onClick={() => clear()}
          disabled={data.length > 0 ? false : true}
        >
          Clear All
        </Button>
        {whatToShow === 1 ? (
          <Button
            style={{
              textTransform: "none",
              padding: "0",
              fontSize: ".7rem",
              color:
                data.length > 0 ? "rgb(243, 8, 74)" : "rgba(243, 8, 74,0.5)",
              fontWeight: "bold",
            }}
            disabled={data.length > 0 ? false : true}
            onClick={() => {
              setShowDrawer(false);
              navigate("/cart");
            }}
          >
            View All
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Drawer;
