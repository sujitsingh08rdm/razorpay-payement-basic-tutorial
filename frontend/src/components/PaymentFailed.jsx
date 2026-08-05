import React from "react";
import { Link } from "react-router-dom";
import "../styles/PaymentFailed.css";

function PaymentFailed() {
  return (
    <div className="payment-failed-container">
      <div className="payment-failed-card">
        <h1 className="payment-failed-title">Payment Failed.</h1>
        <p className="payment-failed-message">Failed, Please Try Again</p>
        <Link to="/" className="payment-failed-navigation">
          Click Here
        </Link>
      </div>
    </div>
  );
}

export default PaymentFailed;
