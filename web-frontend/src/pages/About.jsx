import React from 'react';
import productImg from '../assets/product.png';

function About() {
    return ( 
        <div>
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
        </div>
     );
}

export default About;