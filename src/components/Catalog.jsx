import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assests/css/Catalog.css";

function Catalog({ api, wishlist, handleRemoveWishlist, handleAddWishlist }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("?page=getAllProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="catalog__container">
      {products.map((product, index) => {
        return (
          <ProductCard
            wishlist={wishlist}
            product_id={product.product_id}
            img_src={[product.product_img]}
            brand={product.brand_name}
            name={product.product_name}
            price={product.price}
            additionalDesc={product.product_description}
            colors={["White"]}
            features={product.features}
            sizes={product.sizes}
            ratings={product.ratings}
            product_status={product.is_new == 1 ? 1 : 0}
            is_sale={product.is_sale}
            original_price={product.original_price}
            handleRemoveWishlist={handleRemoveWishlist}
            handleAddWishlist={handleAddWishlist}
          />
        );
      })}
      {/* <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
        colors={["White"]}
        additionalDesc={
          "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper."
        }
        features={[
          "Lightweight, breathable upper provides a precision fit & quick feel",
          "External heel counter for added lockdown",
          "Responsive Charged Cushioning midsole uses compression molded foam for ultimate explosiveness",
          "Heel & midfoot shanks provide locked-in stability",
          "Durable outsole with organic herringbone traction pattern for floor control & grip",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
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
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
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
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
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
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
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
          "https://underarmour.scene7.com/is/image/Underarmour/3024263-102_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={"Pre-School UA Zone BB Basketball Shoes"}
        price={"12,000.00"}
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

export default Catalog;
