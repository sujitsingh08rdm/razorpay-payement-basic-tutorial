import React from "react";
import Products from "./components/Products";
import productData from "./components/data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailed from "./components/PaymentFailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products products={productData} />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
