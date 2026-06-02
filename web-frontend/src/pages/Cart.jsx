import React from 'react';
import { FiArrowLeft, FiXCircle, FiMinus, FiPlus} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Cart() {
    const {cartItems, removeFromCart, updateQuantity, totalPrice, cartCount} = useCart();

    const shipping = totalPrice >= 1000 || totalPrice === 0 ? 0 : 39;

    return ( 
        <div className="cart-page">

            <div className="cart-header">
                <h1>Your cart</h1>
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

                            <div className="product-info">
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
                                <button onClick={()=> updateQuantity(item._id, -1)}><FiMinus className="icon-btn"/></button>
                                <span>{item.quantity}</span>
                                <button onClick={()=> updateQuantity(item._id, 1)}><FiPlus className="icon-btn" /></button>
                            </div>

                            {/* 商品总价 */}
                            <p>{item.price * item.quantity}</p>

                            {/* remove item */}
                            <button  onClick={()=> removeFromCart(item._id)}>
                                <FiXCircle className="icon-btn"/>
                            </button>
                        </div>
                    ))}

                    {/* empty cart */}
                    {cartItems.length === 0 && <p>Your cart is empty.</p>}

                    <button>
                        <Link className="links" to="/shop"><FiArrowLeft className="icon-btn"/> Continue shopping</Link>
                    </button>

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

                    <button className="product-btn">
                        <Link className="links" to={'/checkout'}>Checkout</Link>
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