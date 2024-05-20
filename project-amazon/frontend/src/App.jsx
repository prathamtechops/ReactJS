// import { useState } from 'react'
// import Nav from './components/Nav'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
// import ProductCard from './components/ProductCard';
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductDetails from "./pages/productDetail";
import { SignIn } from "./pages/signIn";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="productDetail/:id" element={<ProductDetails />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
