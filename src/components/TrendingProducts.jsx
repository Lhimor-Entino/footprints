import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assests/css/TrendingProduct.css";
function TrendingProducts({ api }) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    api
      .get("?page=getTrendingProducts")
      .then((response) => {
        setTrendingProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="trending__product__container">
      {trendingProducts.map((product, index) => {
        return (
          <ProductCard
            product_id={product.product_id}
            img_src={[product.product_img]}
            brand={product.brand_name}
            description={product.product_name}
            price={product.price}
            additionalDesc={product.product_description}
            colors={["White"]}
            features={product.features}
            sizes={product.sizes}
            ratings={product.ratings}
            is_sale={product.is_sale}
            original_price={product.original_price}
          />
        );
      })}
      {/* <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      /> 
       <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026282-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Unisex Curry 2 Splash Party Basketball Shoes"}
        price={"9,195.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning® midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      /> */}
    </div>
  );
}

export default TrendingProducts;
