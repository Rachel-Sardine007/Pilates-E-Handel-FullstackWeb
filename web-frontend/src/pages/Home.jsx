import "./Home.css";
import productImg from "../assets/product.png";

function Home() {
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
                    <button>Shop Collection</button>
                    <button>Explore Studio</button>
                </div>
            </section>

            {/* POPULAR PRODUCTS */}
            <section className="popular-products">
                <div className="section-header">
                    <p className="section-subtitle">Shop Essentials</p>
                    <h2>Popular Products</h2>
                </div>

                <div className="product-grid">

                    <div className="product-card">
                        <img
                        src={productImg}
                        alt="Training set"
                        />

                        <h3>Training set</h3>
                        <p>390 kr</p>

                        <button>Add to Cart</button>
                    </div>
                    
                    <div className="product-card">
                        <img
                        src={productImg}
                        alt="Pilates socks"
                        />

                        <h3>Pilates socks</h3>
                        <p>198 kr</p>

                        <button>Add to Cart</button>
                    </div>

                    <div className="product-card">
                        <img
                        src={productImg}
                        alt="Pilates gloves"
                        />

                        <h3>Pilates gloves</h3>
                        <p>198 kr</p>

                        <button>Add to Cart</button>
                    
                    </div>

                    <div className="product-card">
                        <img
                        src={productImg}
                        alt="Gift card"
                        />

                        <h3>Gift card</h3>
                        <p>280 - 1000 kr</p>

                        <button>Add to Cart</button>
                    </div>

                </div>
            </section>


            {/* ABOUT STUDIO */}
            <section className="about-studio">
                <div className="about-image">
                    <img
                        src={productImg}
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