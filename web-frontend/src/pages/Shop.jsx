import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import "./Shop.css";
import { getProducts } from '../api';
import { useCart } from '../contexts/CartContext';

function Shop() {
    const {addToCart} = useCart();
    const [products, setProducts] = useState([]);

    // filter state
    const [filterCategory, setFilterCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState('');
    const [filterColor, setFilterColor] = useState(null);

    // for add to cart 
    const [selectedColor, setSelectedColor] = useState({});

    // Get products
    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const data = await getProducts();
                console.log("Api response:", data); // debug
                setProducts(data);
            }catch(error){
                console.log("Something wrong when getting products data", error.message);
            }
        }
        fetchProducts();
    }, []);

    // load price
    useEffect(() => {
        if(products.length > 0 ){
            const highest = Math.max( ...products.map(p => p.price));
            setMaxPrice(highest);
        }
    }, [products]);

    const highestPrice = Math.max(...products.map(p => p.price));

    // get unique categories, colors from products
    const categories = ['All', ... new Set(products.map(p => p.category))];
    const allColors = [... new Set(products.flatMap(p => p.colors || []))];

    // filter logic
    const filteredProducts = products.filter(product => {
        const matchCategory = filterCategory === 'All' || product.category === filterCategory;
        const matchPrice = product.price <= maxPrice;
        const matchColor = !filterColor || (product.colors || []).includes(filterColor);
        return matchCategory && matchPrice && matchColor;
    })

    // select color to cart
    const handleColorSelect = (productId, color) => {
        setSelectedColor(prev => ({
            ...prev,
            [productId]: prev[productId] === color ? null : color // toggle off if same color selected
        }));
    };

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
                    <div className="filter-section">
                        <h3>CATEGORIES</h3>
                        {/* dynamic categories */}
                        {categories.map(cat => (
                            <p
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: filterCategory === cat ? 'bold': 'normal'
                                }}
                            >
                                {cat}
                            </p>
                        ))}
                    </div>

                    <div className="filter-section">
                        <p>Price</p>

                        <input
                            type="range"
                            min="50"
                            max={highestPrice}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                        <div className="price-range">
                            <span>0</span>
                            <span>{maxPrice} kr</span>
                        </div>
                    </div>

                    <div className="filter-section">
                        <p>Color</p>

                        <div className="color-options">
                            {allColors.map(color => (
                                <span 
                                    key={color}
                                    className={`color ${color}`}
                                    onClick={() => setFilterColor(filterColor === color ? null : color)}
                                    style={{
                                        outline: filterColor === color ? '2px solid black' : 'none',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </aside>

                {/* PRODUCT SECTION */}
                <section className="product-section">

                    {/* PRODUCT CARD */}
                    {filteredProducts.map((product) => (
                    <div className="product-card" key={product._id}>
                        <img className = "product-img"
                        src={product.image}
                        alt={product.name}
                        />
                        <h3>{product.name}</h3>
                        <p>{product.price} kr</p>
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

                    {filteredProducts.length === 0 && (
                        <p>No products match your filter.</p>
                    )}
                </section>
            </div>
        </section> );
}

export default Shop;