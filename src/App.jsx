import { useState } from "react";
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
function App() {
  const [page, setPage] = useState("Catalog");
  return (
    <div className="App">
      <Router basename="/footprints">
        <div className="sidebar">
          <Sidebar page={page} setPage={setPage} />
        </div>

        {/* <body/> */}
        <div className="body">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="new" element={<NewProducts />} />
              <Route path="trending" element={<TrendingProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="view" element={<ProductViewer />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
