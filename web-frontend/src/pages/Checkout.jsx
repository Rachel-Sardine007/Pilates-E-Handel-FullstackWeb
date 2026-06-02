import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { createOrder } from '../api.js';
import { FiArrowLeft } from 'react-icons/fi';

function Checkout() {
    const navigate = useNavigate();
    const {cartItems, totalPrice, clearCart, cartCount} = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postcode: '',
    });

    const shipping = totalPrice >= 1000 || totalPrice === 0 ? 0 : 39;

    const [error, setError] = useState('');
    const [loading, setLoading ] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const orderData = {
                items: cartItems.map(item => ({
                    product: item._id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    color: item.selectedColor
                })),
                totalPrice,
                paymentMethod
            };

            setLoading(true);
            await createOrder(orderData);

            clearCart();
            navigate('/confirmation');
            setLoading(false);
        }catch(error){
            setError('Something went wrong. Please try again!');
            console.log(error);
        }
    }

    return ( 
        <div className="checkout-page">

            <div className="checkout-header">
                <h1>Checkout</h1>
                <button>
                    <Link className="links" to="/cart"><FiArrowLeft className="icon-btn"/> Back to Cart</Link>
                </button>
            </div>

            <div className="checkout-container">

                {/* LEFT SIDE */}
                <div className="checkout-info">
                    <form onSubmit={handleSubmit} className='checkout-form'>
                        <div className='checkout-input'>
                            <h3>Shipping Information</h3>
                            <hr />

                            <p>Firstname</p>
                            <input 
                                required type="text" name='firstname'
                                value={formData.firstname}
                                onChange={handleChange}/>
                            <p>Lastname</p>
                            <input 
                                required type="text" name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}/>
                            <p>Address</p>
                            <input 
                                required type="text" name='address'
                                value={formData.address}
                                onChange={handleChange}/>
                            <p>City</p>
                            <input 
                                required type="text" name='city'
                                value={formData.city}
                                onChange={handleChange}/>
                            <p>Postcode</p>
                            <input 
                                required type="text" name='postcode'
                                value={formData.postcode}
                                onChange={handleChange}/>

                            <h3>Payment Method</h3>
                            <hr />

                            <div className="payment-options">
                                <span     
                                    onClick={()=> setPaymentMethod('card')}                                
                                    style={{
                                        outline: paymentMethod === 'card' ? '2px solid black' : 'none',
                                        cursor: 'pointer'
                                    }}>
                                        Card 
                                        <img src={'/images/payment-visa.png'} alt='Visa'/>
                                        <img src={'/images/payment-master.png'} alt='MasterCard'/>
                                </span>
                                <span         
                                    onClick={()=> setPaymentMethod('swish')}                            
                                    style={{
                                        outline: paymentMethod === 'swish' ? '2px solid black' : 'none',
                                        cursor: 'pointer'
                                    }}>
                                        Swish 
                                        <img src={'/images/payment-swish.png'} alt='Swish'/>
                                </span>
                                <span                                     
                                    onClick={()=> setPaymentMethod('klarna')} 
                                    style={{
                                        outline: paymentMethod === 'klarna' ? '2px solid black' : 'none',
                                        cursor: 'pointer'
                                    }}>
                                        Klarna
                                        <img src={'/images/payment-klarna.svg.png'} alt='Klarna'/>
                                </span>

                        </div>
                            {error && <p className='error'>{error}</p>}
                            <button disabled={loading} type='submit' className='checkout-btn'>
                                {loading ? "Processing..." : "Pay"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className="order-summary">

                    <h2>ORDER SUMMARY</h2>

                    <div className="summary-row">
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
                                {/* 商品总价 */}
                                <p>{item.price * item.quantity} kr</p>
                            </div>
                        ))}
                    </div>

                    <div className="summary-row">
                        {/* dynamic count */}
                        <p>{cartCount} Items</p> 
                    </div>
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
                </div>
            </div>
        </div>
  );
}

export default Checkout;