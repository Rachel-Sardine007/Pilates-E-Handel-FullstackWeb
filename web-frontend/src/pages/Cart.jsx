import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Cart() {
    return ( 
        <div className="cart-page">

            <div className="cart-header">
                <h1>Your cart</h1>
                <p>3 ITEMS</p>
            </div>

            <div className="cart-container">

                {/* LEFT SIDE */}
                <div className="cart-items">

                <div className="cart-table-header">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                </div>

                <div className="cart-item">

                    <div className="product-info">
                    <img
                        src="/images/product.png"
                        alt="Training Set"
                    />

                    <div>
                        <h3>Training set</h3>
                        <p>Baby</p>
                        <p>Blue</p>
                    </div>
                    </div>

                    <p>390 kr</p>

                    <input
                    type="number"
                    value="1"
                    min="1"
                    readOnly
                    />

                    <p>390 kr</p>

                    <button className="remove-btn">
                        <FiXCircle />
                    </button>

                </div>

                <button className="continue-btn">
                    <Link to="/shop"><FiArrowLeft /> Continue shopping</Link>
                </button>

                </div>

                {/* RIGHT SIDE */}
                <div className="order-summary">

                <h2>ORDER SUMMARY</h2>

                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>390 kr</span>
                </div>

                <div className="summary-row">
                    <span>Shipping</span>
                    <span>39 kr</span>
                </div>

                <hr />

                <div className="summary-total">
                    <span>Total</span>
                    <span>429 kr</span>
                </div>

                <button className="checkout-btn">
                    Checkout
                </button>

                <small>
                    *Free shipping when shopping over 1000 kr.
                </small>

                </div>
            </div>
        </div>
  );
}

export default Cart;