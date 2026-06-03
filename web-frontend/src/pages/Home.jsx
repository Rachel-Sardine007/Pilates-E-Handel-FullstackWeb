import "./Home.css";
import React, { useState, useEffect } from 'react';
import {getProducts} from "../api.js";
import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext.jsx';
import { FaStar } from "react-icons/fa";

function Home() {
    const {addToCart} = useCart();

    const [products, setProducts] = useState([]);
    // for add to cart 
    const [selectedColor, setSelectedColor] = useState({});

    // Get products
    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const data = await getProducts();

                console.log("Api response:", data);

                setProducts(data);
            }catch(error){
                console.log("Something wrong when getting products data", error.message);
            }
        }
        fetchProducts();
    }, []);

    // select color
        const handleColorSelect = (productId, color) => {
        setSelectedColor(prev => ({
            ...prev,
            [productId]: prev[productId] === color ? null : color // toggle off if same color selected
        }));
    };

    return ( 
        <div className='home'>
            {/* Hero section */}
            <section className='hero'>
                <div className='hero-content'>
                    <h1>
                        MOVE WITH 
                        <br />
                        INTENTION 
                        <br />
                        AND 
                        <br />
                        ELEGANCE
                    </h1>
                    <p className="hero-text">
                        Premium pilates essentials for every moment.
                    </p>
                    <button><Link className="links" to="/shop">Shop Collection</ Link></button>
                    <button><Link className="links" to="/about">Explore Studio</Link></button>
                </div>
            </section>

            {/* POPULAR PRODUCTS */}
            <section className="popular-products">
                <div className="section-header">
                    <p className="section-subtitle">Shop Essentials</p>
                    <h2>Popular Products</h2>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product._id}>
                            <div className="product-image">
                                <img
                                src={product.image}
                                alt={product.name}
                                />
                                <div className='color-options'>
                                {(product.colors || []).map(color => (
                                    <span 
                                        key={color}
                                        className={`color ${color}`}  
                                        onClick={()=> handleColorSelect(product._id, color)}
                                        style={{
                                            outline: selectedColor[product._id] === color ? '2px solid black' : 'none',
                                            outlineOffset: '2px',
                                            cursor:'pointer'
                                        }}  
                                    />
                                ))}
                            </div>
                                <p>{product.name}</p>
                                <p>{product.price} kr</p>
                            </div>

                            <button 
                                className="product-btn"
                                onClick={()=> {
                                if (!selectedColor[product._id] && product.colors.length > 0){
                                    alert('Please select a color');
                                    return;
                                }
                                addToCart({...product, selectedColor: selectedColor[product._id]})
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>


            {/* ABOUT STUDIO */}
            <section className="about-studio">
                <div className="about-image">
                    <img
                        src="/images/product.png"
                        alt="Pilates studio"
                    />
                </div>
                <div className="about-text">
                    <h2>About FORMA</h2>

                    <h3>A modern studio rooted in movement and balance.</h3>

                    <p>
                        FORMA combines mindful pilates with premium essentials
                        designed for everyday movement. Inspired by calm Nordic
                        interiors and intentional living.
                    </p>
                </div>
            </section>
            
            {/* Testimonials */}
            <section className="review">
                <div className="review-header">
                    <h2>TESTIMONIALS</h2>
                </div>
                <div className="review-grip">
                    <div className="review-card">
                        <p>Good review Good review Good review 
                            <br />
                            Good review Good review Good review 
                        </p>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <h3>Client A.</h3>
                    </div>
                                        <div className="review-card">
                        <p>Good review Good review Good review 
                            <br />
                            Good review Good review Good review 
                        </p>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <h3>Client B.</h3>
                    </div>
                                        <div className="review-card">
                        <p>Good review Good review Good review 
                            <br />
                            Good review Good review Good review 
                        </p>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <h3>Client C.</h3>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Home;