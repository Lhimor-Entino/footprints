import React from "react";
import "../assests/css/ProductViewer.css";
import { useLocation } from "react-router-dom";
function ProductViewer() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const img_src = searchParams.get("img_url");
  const additionalDesc = searchParams.get("additionalDesc");
  const features = JSON.parse(searchParams.get("features"));

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
            <p>Ratings: *****</p>
          </div>
        </div>
        <div className="product__details__body">
          <h5>Size & Fit Guide (US Size)</h5>
          <div className="sizes__container">
            <div className="size">7/8.5</div>
            <div className="size">7/8.5</div>
            <div className="size">7/8.5</div>
            <div className="size">7/8.5</div>
            <div className="size">7/8.5</div>
          </div>
        </div>
        <div className="addCart__btn">
          <button>Add To Cart </button>
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
