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
import Cart from "./components/Cart";
import { useLocation } from "react-router-dom";

// CREATE AXIOS BASE URL
const api = axios.create({
  baseURL: API_BASE_URL,
});
function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
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

  const [whatToShow, setWharToShow] = useState(null); // 0 is wishlist 1 is cart
  const [showDrawer, setShowDrawer] = useState(false);

  const options = {
    expires: 30,
    secure: false,
    sameSite: "lax",
    domain: window.location.hostname,
  };

  const handleShowDrawer = (what) => {
    setWharToShow(what);
    setShowDrawer(true);
    console.log(cartItems);
  };

  const getQuantity = (product_id) => {
    const foundItem = cartItems.find((item) => item.product_id === product_id);
    if (foundItem) {
      return foundItem.quantity;
    }
  };
  const handleRemoveWishlist = (p_id) => {
    const updatedWishlist = wishlist.filter(
      (item, index) => item.product_id != p_id
    );
    setWishlist(updatedWishlist);

    Cookies.set("wl", JSON.stringify(updatedWishlist), options); // UPDATE THE COOKIE
    console.log(updatedWishlist);
  };

  const handleAddWishlist = (prod_details) => {
    console.log(prod_details);
    const updatedWishlist = [...wishlist, prod_details];
    setWishlist(updatedWishlist);
    Cookies.set("wl", JSON.stringify(updatedWishlist), options); // UPDATE THE COOKIE
  };

  const handleAddCartItems = (prod_details, add_type) => {
    // ADD TYPE 0 -> ADD PRODUCT TYPE 1 -> ADD QUANTITY OF THE PRODUCT

    if (add_type === 0) {
      const updatedCart = [...cartItems, prod_details]; // if ADD TYPE IS 0 THIS prod_details VALUE WILL BE THE product details
      console.log(updatedCart);
      setCartItems(updatedCart);
      try {
        Cookies.set("ci", JSON.stringify(updatedCart), options); // UPDATE THE COOKIE
      } catch (error) {
        console.log(error);
      }
    } else if (add_type === 1) {
      const quantity = getQuantity(prod_details) + 1;

      const updatedCart = cartItems.map((items, index) =>
        items.product_id == prod_details
          ? { ...items, quantity: quantity }
          : items
      );

      setCartItems(updatedCart);
      Cookies.set("ci", JSON.stringify(updatedCart), options); // UPDATE THE COOKIE
    }
  };

  const handleRemoveCartItem = (product_id) => {
    const quantity = getQuantity(product_id) - 1;

    if (quantity > 0) {
      const updatedCart = cartItems.map((item, index) =>
        item.product_id == product_id ? { ...item, quantity: quantity } : item
      );
      setCartItems(updatedCart);
      Cookies.set("ci", JSON.stringify(updatedCart), options); // UPDATE THE COOKIE
    } else {
      const updatedCart = cartItems.filter(
        (item, index) => item.product_id != product_id
      );

      setCartItems(updatedCart);
      Cookies.set("ci", JSON.stringify(updatedCart), options); // UPDATE THE COOKIE
    }
  };

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

  const clearCart = () => {
    if (Cookies.get("ci")) {
      Cookies.remove("ci", { domain: window.location.hostname });
    }
    setCartItems([]);
  };
  const clearWishlist = () => {
    if (Cookies.get("wl")) {
      Cookies.remove("wl", { domain: window.location.hostname });
    }
    setWishlist([]);
  };
  return (
    <div className="App">
      {/* <Router> */}
      {currentPage == "cart" ? (
        ""
      ) : (
        <div className="sidebar">
          <Sidebar page={page} setPage={setPage} />
        </div>
      )}

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
                clearCart={clearCart}
                clearWishlist={clearWishlist}
                whatToShow={whatToShow}
                showDrawer={showDrawer}
                handleShowDrawer={handleShowDrawer}
                setShowDrawer={setShowDrawer}
              />
            }
          >
            <Route
              path="/"
              name="catalog"
              element={
                <Catalog
                  api={api}
                  wishlist={wishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddWishlist={handleAddWishlist}
                />
              }
            />
            <Route
              path="catalog"
              name="catalog"
              element={
                <Catalog
                  api={api}
                  wishlist={wishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddWishlist={handleAddWishlist}
                />
              }
            />
            <Route
              path="new"
              name="new"
              element={
                <NewProducts
                  api={api}
                  wishlist={wishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddWishlist={handleAddWishlist}
                />
              }
            />
            <Route
              path="trending"
              name="trending"
              element={
                <TrendingProducts
                  api={api}
                  wishlist={wishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddWishlist={handleAddWishlist}
                />
              }
            />
            <Route
              path="featured"
              name="featured"
              element={
                <FeaturedProducts
                  api={api}
                  wishlist={wishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddWishlist={handleAddWishlist}
                />
              }
            />
            <Route
              path="view"
              name="view"
              element={
                <ProductViewer
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleAddWishlist={handleAddWishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  handleAddCartItems={handleAddCartItems}
                  handleRemoveCartItem={handleRemoveCartItem}
                />
              }
            />

            <Route path="payment" element={<Payment />} />
          </Route>

          <Route
            path="cart"
            name="cart"
            element={
              <Cart
                wishlist={wishlist}
                cartItems={cartItems}
                handleShowDrawer={handleShowDrawer}
                handleRemoveCartItem={handleRemoveCartItem}
                handleAddCartItems={handleAddCartItems}
              />
            }
          ></Route>
        </Routes>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
