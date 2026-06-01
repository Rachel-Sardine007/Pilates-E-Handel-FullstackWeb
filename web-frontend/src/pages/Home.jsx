import "./Home.css";
import React, { useState, useEffect } from 'react';
import {getProducts} from "../api.js";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

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
                        Premium pilates essentials 
                        <br />
                        for every moment.
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
                            <img className = "product-img"
                            src={product.image}
                            alt={product.name}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>

                            <button>Add to Cart</button>
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
                    <h3 className="section-subtitle">About FORMA</h3>

                    <h2>A modern studio rooted in movement and balance.</h2>

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
                        <h3>Client A.</h3>
                    </div>
                                        <div className="review-card">
                        <p>Good review Good review Good review 
                            <br />
                            Good review Good review Good review 
                        </p>
                        <h3>Client B.</h3>
                    </div>
                                        <div className="review-card">
                        <p>Good review Good review Good review 
                            <br />
                            Good review Good review Good review 
                        </p>
                        <h3>Client C.</h3>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Home;