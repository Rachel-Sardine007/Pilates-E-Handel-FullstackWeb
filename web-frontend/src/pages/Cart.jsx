import React, { useState } from 'react';
import { FiArrowLeft, FiXCircle, FiMinus, FiPlus} from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import './Cart.css';

function Cart() {
    const {cartItems, removeFromCart, updateQuantity, totalPrice, cartCount} = useCart();
    const shipping = totalPrice >= 1000 || totalPrice === 0 ? 0 : 39;

    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();
    const [error, setError] = useState('');

    const handleCheckout = () =>{
        if(!isLoggedIn){
            setError("Please log in to continue to checkout");
            navigate('/');
            return;
        }
        
        if (cartcount === 0){
            setError("Please add item first to continue to checkout");
        }

        navigate('/checkout');
    }

    return ( 
        <div className="cart-page">

            <div className="cart-header">
                <h2>YOUR CART</h2>
                {/* dynamic count */}
                <p>{cartCount} ITEMS</p> 
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

                    {/* dynamic items */}
                    {cartItems.map(item => (
                        <div className="cart-item" key={`${item._id}-${item.selectedColor}`}>

                            <div className="cart-product-info">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div>
                                    <h3>{item.name}</h3>
                                    {item.selectedColor && <p>{item.selectedColor}</p>}
                                </div>
                            </div>

                            {/* 单价 */}
                            <p>{item.price} kr</p>
                            
                            {/* update quantity */}
                            <div>
                                <FiMinus className="cart-icon-btn" onClick={()=> updateQuantity(item._id, -1)}/>
                                <span>{item.quantity}</span>
                                <FiPlus className="cart-icon-btn" onClick={()=> updateQuantity(item._id, 1)}/>
                            </div>

                            {/* 商品总价 */}
                            <p>{item.price * item.quantity}</p>

                            {/* remove item */}
                            <FiXCircle className="cart-icon-btn" onClick={()=> removeFromCart(item._id)}/>
                        </div>
                    ))}

                    {/* empty cart */}
                    {cartItems.length === 0 && <p>Your cart is empty.</p>}

                    <p>
                        <Link className="links" to="/shop"><FiArrowLeft className="icon-btn"/><u>Continue shopping</u></Link>
                        
                    </p>
                    <p>{error}</p>

                </div>

                {/* RIGHT SIDE */}
                <div className="order-summary">

                    <h2>ORDER SUMMARY</h2>

                    <div className="summary-row">
                        <span>Subtotal  </span>
                        <span>{totalPrice} kr</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping  </span>
                        <span>{totalPrice === 0 ? 'Free': `${shipping} kr`}</span>
                    </div>

                    <hr />

                    <div className="summary-total">
                        <span>Total  </span>
                        <span>{totalPrice + shipping} kr</span>
                    </div>

                    <button className="product-btn" onClick={handleCheckout}>Checkout</button>
                    <br />
                    <small>
                        *Free shipping when shopping over 1000 kr.
                    </small>

                </div>
            </div>
        </div>
  );
}

export default Cart;