import React from 'react';
import productImg from '../assets/product.png';
import { FiPlusCircle } from "react-icons/fi";
import "./Shop.css";

function Shop() {
    return ( 
        <section className='shop-page'>
             {/* PAGE TITLE */}
            <div className="shop-header">
                <h1>Shop</h1>
                <p>PREMIUM PILATES ESSENTIALS</p>
            </div>

            <div className="shop-container">
                {/* FILTER SIDEBAR */}
                <aside className="filter-sidebar">
                    <h3>CATEGORIES</h3>

                    <p>All</p>

                    <div className="filter-section">
                        <p>Price</p>

                        <input
                        type="range"
                        min="50"
                        max="3000"
                        />
                        <div className="price-range">
                        <span>50</span>
                        <span>3000</span>
                        </div>
                    </div>

                    <div className="filter-section">
                        <p>Color</p>

                        <div className="color-options">
                        <span className="color black"></span>
                        <span className="color brown"></span>
                        <span className="color purple"></span>
                        <span className="color blue"></span>
                        </div>
                    </div>
                </aside>

                {/* PRODUCT SECTION */}
                <section className="product-section">

                    {/* PRODUCT CARD */}
                    <div className="product-card">
                        <div className="product-image">
                            <img
                                src={productImg}
                                alt="Training set"
                            />
                            <FiPlusCircle id='add-icon'/>
                        </div>

                        <h2>Training set</h2>
                        <p>390 kr</p>

                        <div className="color-options">
                        <span className="color black"></span>
                        <span className="color brown"></span>
                        <span className="color purple"></span>
                        <span className="color blue"></span>
                        </div>
                    </div>

                    {/* PRODUCT CARD */}
                    <div className="product-card">
                        <div className="product-image">
                            <img
                                src={productImg}
                                alt="Training set"
                            />
                            <FiPlusCircle id='add-icon'/>
                        </div>

                        <h2>Training set</h2>
                        <p>390 kr</p>
                        <div className="color-options">
                            <span className="color black"></span>
                            <span className="color brown"></span>
                            <span className="color purple"></span>
                            <span className="color blue"></span>
                        </div>
                    </div>

                </section>
            </div>


        </section> );
}

export default Shop;