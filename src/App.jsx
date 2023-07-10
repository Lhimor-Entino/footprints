import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Catalog from "./components/Catalog";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import TrendingProducts from "./components/TrendingProducts";
import ProductViewer from "./components/ProductViewer";
import Payment from "./components/Payment";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "./config";

// CREATE AXIOS BASE URL
const api = axios.create({
  baseURL: API_BASE_URL,
});
function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const getWishlist = () => {
    if (Cookies.get("wl")) {
      const cookieValue = Cookies.get("wl");
      const parsedObject = JSON.parse(cookieValue);
      // console.log(parsedObject);
      return parsedObject;
    }
  };
  const getCartItems = () => {
    if (!isloggedIn) {
      if (Cookies.get("ci")) {
        const cookieValue = Cookies.get("ci");
        const parsedObject = JSON.parse(cookieValue);
        // console.log(parsedObject);
        return parsedObject;
      }
    }
  };

  const [page, setPage] = useState("Catalog");
  const [wishlist, setWishlist] = useState(getWishlist() || []);
  const [cartItems, setCartItems] = useState(getCartItems() || []);

  useEffect(() => {
    if (isloggedIn) {
      api
        .get("?page=getCartItems")
        .then((response) => {
          console.log(response.data);
          setCartItems(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const saveToCart = () => {
    const formData = new FormData();
    if (cartItems.length > 0) {
      const product_ids = cartItems.map((item, index) => item.product_id);

      product_ids.forEach((productId) => {
        formData.append("product_id[]", productId);
      });
      formData.append("user_id", 1);
      api
        .post("?page=saveCartItems", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(cartItems);
      console.log(product_ids);
    }
  };

  return (
    <div className="App">
      {/* <Router> */}
      <div className="sidebar">
        <Sidebar page={page} setPage={setPage} />
      </div>

      {/* <body/> */}
      <div className="body">
        <Routes>
          <Route
            path="/"
            element={
              <Body
                wishlist={wishlist}
                cartItems={cartItems}
                saveToCart={saveToCart}
              />
            }
          >
            <Route path="/" element={<Catalog api={api} />} />
            <Route path="catalog" element={<Catalog api={api} />} />
            <Route path="new" element={<NewProducts api={api} />} />
            <Route path="trending" element={<TrendingProducts api={api} />} />
            <Route path="featured" element={<FeaturedProducts api={api} />} />
            <Route
              path="view"
              element={
                <ProductViewer
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
