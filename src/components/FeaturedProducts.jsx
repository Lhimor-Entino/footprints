import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../assests/css/FeaturedProduct.css";
function FeaturedProducts({
  api,
  wishlist,
  handleRemoveWishlist,
  handleAddWishlist,
}) {
  const [featuredProduct, setFeaturedProducts] = useState([]);
  useEffect(() => {
    api
      .get("?page=getFeaturedProducts")
      .then((response) => {
        console.log(response.data);
        setFeaturedProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="featured__product__container">
      {featuredProduct.map((product, index) => {
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
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      />
      <ProductCard
        img_src={[
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-100_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3025081-600_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ]}
        colors={["Black", "White", "Red"]}
        brand={"Under Armour"}
        description={"Adult UA Lockdown 5 Basketball Shoes"}
        price={"3,395.00"}
        additionalDesc={
          "These are light, comfortable, and tough enough to last all season—making them a go-to court shoe year after year."
        }
        features={[
          "Official Footwear of UFC",
          "Lightweight, breathable airmesh upper with stretch & structure where you need it",
          "Additional midfoot lockdown & support with webbing & eyelet structure",
          "Charged Cushioning® midsole absorbs impact & converts it into a responsive burst",
          "UA TriBase™ maximizes ground contact, promotes natural motion & provides flexibility to grip during lifts",
          "Full rubber outsole for elevated traction & durability",
        ]}
      /> */}
    </div>
  );
}

export default FeaturedProducts;
