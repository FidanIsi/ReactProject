import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}
