import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assests/css/NewProduct.css";

function NewProducts({ api }) {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    api
      .get("?page=getNewProducts")
      .then((response) => {
        setNewProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="new__product__container">
      {newProducts.map((product, index) => {
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
            product_status={1}
            is_sale={product.is_sale}
            original_price={product.original_price}
          />
        );
      })}
      {/* <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3026273-602_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        brand={"Under Armour"}
        description={
          "Unisex Curry Flow 10 'Unicorn & Butterfly' Basketball Shoes"
        }
        price={"9,195.00"}
        colors={["Pink"]}
        product_status={1}
        additionalDesc={
          " Change directions—fast. UA Flow cushioning is totally rubberless, making these shoes light and ridiculously grippy. The UA Warp upper works like mini seat belts locking you in. Together, you get stop and go speed + control."
        }
        features={[
          "UA WARP upper technology provides enhanced comfort & control throughout dynamic basketball movements",
          "Half-bootie upper lining for superior fit, comfort & lockdown",
          "TPE-blend sockliner with low compression set for energy return & longevity",
          "UA Flow cushioning technology is super-light, bouncy & provides insane grip",
          "Internal midfoot shank adds support & stability to every move",
          "Durable UA Flow outsole provides better court feel so you can cut & stop/start faster than ever before",
        ]}
      /> */}
    </div>
  );
}

export default NewProducts;
