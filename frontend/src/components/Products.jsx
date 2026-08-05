import React from "react";
import axios from "axios";

import "../styles/Products.css";

function Products({ products }) {
  async function checkoutHandler(amount) {
    const { data: keyData } = await axios.get("/api/v1/getKey");
    const { data: orderData } = await axios.post("/api/v1/payment/process", {
      amount,
    });

    const { key } = keyData;
    const { order } = orderData;

    console.log(key);
    console.log(order);
    const options = {
      key, // Replace with your Razorpay key_id
      amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Sujit Corp",
      description: "razor pay test transaction",
      order_id: order.id, // This is the order_id created in the backend
      callback_url: "/api/v1/paymentVerification", // Your success URL
      prefill: {
        name: "Sujit Ji",
        email: "sujit@email.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">
            Price <strong>{product.price}</strong> /-
          </p>
          <button
            className="pay-button"
            onClick={() => checkoutHandler(product.price)}
          >
            Pay({product.price})/-
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
