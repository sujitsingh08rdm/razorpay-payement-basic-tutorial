import React from "react";
import "../styles/Products.css";

function Products({ products }) {
  function checkoutHandler(amount) {
    console.log(amount);
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card" key={item.id}>
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
