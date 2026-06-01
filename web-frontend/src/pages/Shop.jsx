import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import "./Shop.css";
import { getProducts } from '../api';

function Shop() {
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
            </div>


        </section> );
}

export default Shop;