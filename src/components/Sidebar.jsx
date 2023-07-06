import React, { useState } from "react";
import "../assests/css/Sidebar.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import MultiRangeSlider from "multi-range-slider-react";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useLocation } from "react-router-dom";
import axios from "axios";
function Sidebar({ page }) {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  const [typeExpand, settypeExpand] = useState(false);
  const [brandExpand, setbrandExpand] = useState(false);
  const [sizeExpand, setsizeExpand] = useState(false);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://myprojects-api.000webhostapp.com/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="content__container">
      <div className="header">
        <div className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/26/22/26/footprint-6659001_960_720.png"
            alt="logo"
          />
        </div>
        <div className="brand">
          <p>
            <span>FOOT</span>
            <span>PRINTS</span>
          </p>
          <p>Where every step counts: FootPrints.</p>
        </div>
      </div>

      <div className="body">
        <div className="page__indicator">
          <div className="content">
            <HomeRoundedIcon />
            <p>Main page</p>
            <ArrowForwardIosRoundedIcon id="arrow" />
            <p style={{ textTransform: "capitalize" }}>{currentPage}</p>
          </div>
        </div>

        <div className="price__range filters">
          <p>Price</p>
          <div className="price__details">
            <span>
              From <b>{minValue}</b> $
            </span>
            <span>
              To <b>{maxValue}</b> $
            </span>
          </div>
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <MultiRangeSlider
              style={{
                width: "100%",
                position: "absolute",
                backgroundColor: "none",
                boxShadow: "none",
                border: "none",
                padding: "5px 0",
                opacity: 0.4,
              }}
              tooltip={false}
              barInnerColor="rgb(255, 171, 171)"
              label={false}
              labels={false}
              min={0}
              max={10000}
              step={100}
              minValue={minValue}
              ruler={false}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
          </div>
        </div>
        <div
          className="type filters"
          onClick={() => settypeExpand(!typeExpand)}
        >
          <p>Type</p>
          {products.map((product, index) => {
            return <p>{product.name}</p>;
          })}
          {typeExpand ? (
            <ExpandLessRoundedIcon className="expand__icon" />
          ) : (
            <ExpandMoreRoundedIcon className="expand__icon" />
          )}
        </div>
        <div
          className="product__brand filters"
          onClick={() => setbrandExpand(!brandExpand)}
        >
          <p>Brand</p>
          {brandExpand ? (
            <ExpandLessRoundedIcon className="expand__icon" />
          ) : (
            <ExpandMoreRoundedIcon className="expand__icon" />
          )}
        </div>
        <div
          className="size filters"
          onClick={() => setsizeExpand(!sizeExpand)}
        >
          <p>Size</p>
          {sizeExpand ? (
            <ExpandLessRoundedIcon className="expand__icon" />
          ) : (
            <ExpandMoreRoundedIcon className="expand__icon" />
          )}
        </div>

        <div className="filters filter__btn">
          <button>APPLY FILTER</button>

          <DeleteOutlineRoundedIcon className="remove__icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
