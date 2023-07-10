import React, { useEffect, useState, useRef } from "react";
import "../assests/css/Drawer.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function Drawer({ whatToShow, setShowDrawer, cartItems }) {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

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
        console.log(parsedData);
        setData(parsedData);
      }
    } else if (whatToShow === 1) {
      setData(cartItems);
    }
  }, [whatToShow]);
  return (
    <div className="drawer__container" ref={componentRef}>
      <h1> {whatToShow === 0 ? "My WishList" : "My Cart"} </h1>
      <div id="content__container">
        <ul>
          {data?.map((wl, index) => {
            return (
              <Link
                className="link"
                onClick={() => setShowDrawer(false)}
                to={{
                  pathname: "/view",
                  search: `?name=${wl.product_name}&price=${wl.price}&img_url=${
                    wl.product_img
                  }&additionalDesc=${
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
            );
          })}
        </ul>
      </div>

      <div style={{ marginBottom: "1em" }}></div>
    </div>
  );
}

export default Drawer;
